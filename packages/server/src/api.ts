import { Elysia, t } from "elysia";
import type { RoomManager } from "./rooms";

// JSON over HTTP. These `t` schemas are the single source of truth: Elysia validates with them and Eden
// Treaty infers its types from them (`treaty<App>`). A client that needs the shapes imports them type-only
// (`import type { App }` from app.ts), which pulls nothing into a bundle.
const FindRequestSchema = t.Object({
  mode: t.Optional(t.Union([t.Literal("classic"), t.Literal("teams")]))
});
const FindResponseSchema = t.Object({
  roomId: t.String(),
  /** WebSocket path to connect to, e.g. "/play?room=<id>". Binary frames, see @paperio/protocol/messages/. */
  wsPath: t.String()
});

export const api = (rooms: RoomManager) =>
  new Elysia({ name: "api", prefix: "/api" }).post(
    "/find",
    ({ body }) => {
      const room = rooms.find(body.mode);
      return { roomId: room.id, wsPath: `/play?room=${room.id}` };
    },
    { body: FindRequestSchema, response: FindResponseSchema }
  );
