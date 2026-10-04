import type { ModeId } from "@paperio/core/modes/index";

// JSON shapes of the HTTP API (/api/*). The server's Elysia `t` schemas are checked against these at
// compile time (server/src/api.ts), so the client can type its fetch() calls without importing the server.

export interface FindRequest {
  mode?: ModeId;
}

export interface FindResponse {
  roomId: string;
  /** WebSocket path to connect to, e.g. "/play?room=<id>". Binary frames, see messages.ts. */
  wsPath: string;
}
