import { Elysia } from "elysia";
import { api } from "./api";
import { play } from "./play";
import type { RoomManager } from "./rooms";
import { site } from "./static";

/** The whole server. Order matters: /api and /play before the site's catch-all. */
export const createApp = (rooms: RoomManager) => new Elysia().use(api(rooms)).use(play(rooms)).use(site);

/** For Eden Treaty clients (tests, tools); a browser client would take it as a type-only import. */
export type App = ReturnType<typeof createApp>;
