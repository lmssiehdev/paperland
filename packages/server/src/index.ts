// Entry: serves /api/* and the /play WebSocket on HOST:PORT (default 0.0.0.0:3000; production: 127.0.0.1, only
// Caddy talks to it). SITE_DIR (dev: packages/client/dist/site) also serves the client build at /; production
// leaves it unset and lets Caddy serve the site.
import { createApp } from "./app";
import { GAME_DATA } from "./game-data";
import { RoomManager } from "./rooms";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";
const siteDir = process.env.SITE_DIR;
const rooms = new RoomManager(GAME_DATA);
const app = createApp(rooms, { siteDir }).listen({ port, hostname });
console.log(
  `serving http://${hostname}:${port}/  (POST /api/find, ws /play${siteDir ? `, site from ${siteDir}` : ""})`
);

const shutdown = () => {
  rooms.stopAll();
  void app.stop().then(() => process.exit(0));
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
