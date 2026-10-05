import { expect, test } from "bun:test";
import { decodeServerMessages, encodeMessages, UpdateMsg } from "@paperio/protocol/messages/index";
import { loadGameData } from "../src/game-data";
import { Room } from "../src/room";

const data = await loadGameData();

test("room ticks a headless core game at 20 Hz under Bun, with no clients", async () => {
  const room = new Room({ id: "t", data, tickRate: 20, warmUp: false });
  room.start();
  await Bun.sleep(500);
  const before = new Map(room.game.units.map(unit => [unit, unit.position.clone()] as const));
  await Bun.sleep(500);
  room.stop();
  // 20 Hz for ~1 s; generous bounds for a loaded machine.
  expect(room.ticks).toBeGreaterThanOrEqual(15);
  expect(room.ticks).toBeLessThanOrEqual(22);
  expect(room.game.cycle).toBe(room.ticks * 3); // 50 ms per room tick = 3 core steps of 1/60 s
  expect(before.size).toBeGreaterThan(0); // bots spawned
  const moved = [...before].filter(([unit, position]) => !unit.death && unit.position.distance(position) > 1);
  expect(moved.length).toBeGreaterThan(0);
  expect(room.running).toBe(false);
});

test("warm-up runs core's bot-only prepare phase", () => {
  const room = new Room({ id: "w", data });
  expect(room.game.cycle).toBe(room.game.config.prepareCounter);
  expect(room.game.units.length).toBe(room.game.config.botsCount);
  room.stop();
});

test("snapshot round-trips through the protocol", () => {
  const room = new Room({ id: "s", data, warmUp: false });
  for (let i = 0; i < 20; i++) room.tick();
  const [decoded] = decodeServerMessages(encodeMessages(room.snapshot()));
  expect(decoded).toBeInstanceOf(UpdateMsg);
  // SAFETY: checked by toBeInstanceOf just above.
  const update = decoded as UpdateMsg;
  expect(update.tick).toBe(room.game.cycle);
  expect(update.units.map(unit => unit.id)).toEqual(room.game.units.map(unit => room.unitId(unit)));
  update.units.forEach((unit, i) => expect(Math.abs(unit.x - room.game.units[i]!.position.x)).toBeLessThan(0.05));
  room.stop();
});
