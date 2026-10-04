import { Elysia, t } from "elysia";
import { ProtocolError } from "@paperio/protocol/bit-stream";
import { JoinedMsg, MsgType, PROTOCOL_VERSION, decodeClientMessages, encodeMessages } from "@paperio/protocol/messages";
import type { ClientMessage, ServerMessage } from "@paperio/protocol/messages";
import type { RoomManager } from "./rooms";

/** Close codes (4000-4999 are free for applications). */
export const CloseCode = {
  Protocol: 4000,
  Version: 4001,
  UnknownRoom: 4004
} as const;

/** The only way to send on /play: binary frames of server messages (so a client message cannot be sent by mistake). */
const send = (ws: { sendBinary(data: Uint8Array): number }, ...messages: ServerMessage[]) => {
  // sendBinary, not ws.send(): Elysia's send() JSON-stringifies anything that is not a Node Buffer.
  ws.sendBinary(encodeMessages(...messages));
};

/**
 * WebSocket /play?room=<id>. Typing: the `query` schema types and validates ws.data.query; the `body`
 * schema (t.Uint8Array) admits binary frames only and types `message` as Uint8Array; the
 * protocol decoder turns that into the ClientMessage union, narrowed by `msg.type`.
 *
 * Phase 1 skeleton: Join -> Joined (spectator, playerId 0) + one full snapshot. Inputs are decoded and
 * ignored. No players, culling or prediction yet.
 */
export const play = (rooms: RoomManager) =>
  new Elysia({ name: "play" }).ws("/play", {
    query: t.Object({ room: t.String() }),
    body: t.Uint8Array({}),
    open(ws) {
      if (!rooms.get(ws.data.query.room)) {
        ws.close(CloseCode.UnknownRoom, "unknown room");
      }
    },
    message(ws, bytes) {
      const room = rooms.get(ws.data.query.room);
      if (!room) {
        ws.close(CloseCode.UnknownRoom, "unknown room");
        return;
      }
      let messages: ClientMessage[];
      try {
        messages = decodeClientMessages(bytes);
      } catch (error) {
        ws.close(CloseCode.Protocol, error instanceof ProtocolError ? error.message : "bad frame");
        return;
      }
      for (const msg of messages) {
        switch (msg.type) {
          case MsgType.Join: {
            if (msg.protocolVersion !== PROTOCOL_VERSION) {
              ws.close(CloseCode.Version, `protocol ${msg.protocolVersion}, server speaks ${PROTOCOL_VERSION}`);
              return;
            }
            const joined = new JoinedMsg();
            joined.tickRate = room.tickRate;
            joined.arenaSize = room.game.config.arenaSize;
            send(ws, joined, room.snapshot());
            break;
          }
          case MsgType.Input:
            // Not wired to a player yet (Phase 2).
            break;
        }
      }
    }
  });
