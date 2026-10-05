import { afterAll, expect, test } from "bun:test";
import { treaty } from "@elysiajs/eden";
import {
  JoinedMsg,
  JoinMsg,
  MsgType,
  UpdateMsg,
  decodeServerMessages,
  encodeMessages
} from "@paperio/protocol/messages/index";
import type { ServerMessage } from "@paperio/protocol/messages/index";
import { createApp } from "../src/app";
import type { App } from "../src/app";
import { loadGameData } from "../src/game-data";
import { CloseCode } from "../src/play";
import { RoomManager } from "../src/rooms";

const rooms = new RoomManager(await loadGameData(), { warmUp: false });
const app = createApp(rooms).listen(0);
const base = `http://localhost:${app.server!.port}`;
const client = treaty<App>(base);

afterAll(async () => {
  rooms.stopAll();
  await app.stop();
});

/** Opens /play and collects frames until `count` messages or a close. */
const connect = (path: string) => {
  const ws = new WebSocket(base.replace("http", "ws") + path);
  ws.binaryType = "arraybuffer";
  const messages: ServerMessage[] = [];
  const texts: string[] = [];
  const closed = new Promise<CloseEvent>(resolve => ws.addEventListener("close", resolve));
  const opened = new Promise<void>(resolve => ws.addEventListener("open", () => resolve()));
  ws.addEventListener("message", event => {
    // binaryType "arraybuffer": binary frames arrive as ArrayBuffer, text frames as string.
    if (event.data instanceof ArrayBuffer) messages.push(...decodeServerMessages(new Uint8Array(event.data)));
    else texts.push(String(event.data));
  });
  return { ws, messages, texts, closed, opened };
};
const until = async (check: () => boolean, ms = 3000) => {
  for (const end = Date.now() + ms; !check() && Date.now() < end;) await Bun.sleep(10);
};

test("POST /api/find (typed via Eden Treaty) creates a ticking room", async () => {
  const { data, error } = await client.api.find.post({ mode: "classic" });
  expect(error).toBeNull();
  expect(data!.wsPath).toBe(`/play?room=${data!.roomId}`);
  const room = rooms.get(data!.roomId)!;
  expect(room.running).toBe(true);
  await until(() => room.ticks >= 3);
  expect(room.ticks).toBeGreaterThanOrEqual(3);
  const again = await client.api.find.post({});
  expect(again.data!.roomId).toBe(data!.roomId);
});

test("POST /api/find rejects a bad body (422)", async () => {
  // @ts-expect-error: not a ModeId, rejected by the schema at compile time and at runtime
  const { error } = await client.api.find.post({ mode: "battleroyale" });
  expect(error?.status).toBe(422);
});

test("ws /play: binary Join -> Joined + Update", async () => {
  const { data } = await client.api.find.post({});
  const c = connect(data!.wsPath);
  await c.opened;
  c.ws.send(encodeMessages(Object.assign(new JoinMsg(), { name: "tester" })));
  await until(() => c.messages.length >= 2);
  expect(c.messages.map(m => m.type)).toEqual([MsgType.Joined, MsgType.Update]);
  expect(c.messages[0]).toBeInstanceOf(JoinedMsg);
  // SAFETY: both types are asserted by the toEqual on the type list and the toBeInstanceOf above.
  expect((c.messages[0] as JoinedMsg).tickRate).toBe(20);
  // SAFETY: checked by the type list above.
  expect((c.messages[1] as UpdateMsg).units.length).toBeGreaterThan(0);
  c.ws.close();
});

test("ws /play: garbage binary closes with 4000, wrong version with 4001, unknown room with 4004", async () => {
  const { data } = await client.api.find.post({});
  const bad = connect(data!.wsPath);
  await bad.opened;
  bad.ws.send(new Uint8Array([MsgType.Update, 0, 0]));
  expect((await bad.closed).code).toBe(CloseCode.Protocol);

  const old = connect(data!.wsPath);
  await old.opened;
  old.ws.send(encodeMessages(Object.assign(new JoinMsg(), { protocolVersion: 0 })));
  expect((await old.closed).code).toBe(CloseCode.Version);

  expect((await connect("/play?room=nope").closed).code).toBe(CloseCode.UnknownRoom);
});

test("ws /play: text/JSON frames are rejected by the body schema", async () => {
  const { data } = await client.api.find.post({});
  const c = connect(data!.wsPath);
  await c.opened;
  c.ws.send(JSON.stringify({ type: 1 }));
  await until(() => c.texts.length > 0);
  expect(c.texts[0]).toContain("Expected");
  expect(c.messages).toEqual([]);
  c.ws.close();
});

test("static site: page and captured assets", async () => {
  const page = await fetch(base + "/");
  expect(page.headers.get("content-type")).toContain("text/html");
  expect(await page.text()).toContain("app2.js");
  expect((await fetch(base + "/assets/skins/skins.json")).status).toBe(200);
  expect((await fetch(base + "/nope.txt")).status).toBe(404);
});
