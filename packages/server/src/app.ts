import { Elysia } from "elysia";
import { api } from "./api";
import { play } from "./play";
import type { RoomManager } from "./rooms";

export interface AppOptions {
  /**
   * Serve this directory (the client build, packages/client/dist/site) at /. Dev and tests only: in
   * production Caddy serves the site and proxies /api and /play here (deploy/Caddyfile).
   */
  siteDir?: string;
}

/**
 * The whole server. The site is a Bun directory route (ETag/Last-Modified, 304s, ranges, path
 * canonicalization), which Bun matches after the more specific /api and /play routes.
 */
export const createApp = (rooms: RoomManager, options: AppOptions = {}) =>
  new Elysia({ serve: options.siteDir ? { routes: { "/*": { dir: options.siteDir } } } : undefined })
    .use(api(rooms))
    .use(play(rooms));

/** For Eden Treaty clients (tests, tools). The browser client uses @paperio/protocol types instead. */
export type App = ReturnType<typeof createApp>;
