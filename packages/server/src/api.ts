import { Elysia, t } from "elysia";
import type { FindRequest, FindResponse } from "@paperio/protocol/api";
import type { RoomManager } from "./rooms";

// JSON over HTTP: Elysia validates with these `t` schemas and Eden infers types from them. The shapes
// are also declared as plain interfaces in @paperio/protocol/api for the browser client (which must not
// import the server); the assertions below fail to compile if the two drift apart.
const FindRequestSchema = t.Object({
  mode: t.Optional(t.Union([t.Literal("classic"), t.Literal("teams")]))
});
const FindResponseSchema = t.Object({
  roomId: t.String(),
  wsPath: t.String()
});

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
const schemasMatchProtocol: [
  Equal<typeof FindRequestSchema.static, FindRequest>,
  Equal<typeof FindResponseSchema.static, FindResponse>
] = [true, true];
void schemasMatchProtocol;

export const api = (rooms: RoomManager) =>
  new Elysia({ name: "api", prefix: "/api" }).post(
    "/find",
    ({ body }): FindResponse => {
      const room = rooms.find(body.mode);
      return { roomId: room.id, wsPath: `/play?room=${room.id}` };
    },
    { body: FindRequestSchema, response: FindResponseSchema }
  );
