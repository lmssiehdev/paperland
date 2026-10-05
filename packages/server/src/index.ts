// Dev/prod entry: PORT (default 3000). Serves the client page + assets, /api/*, and the /play WebSocket.
import { createApp } from "./app";
import { loadGameData } from "./game-data";
import { RoomManager } from "./rooms";

const port = Number(process.env.PORT ?? 3000);
const rooms = new RoomManager(await loadGameData());
const app = createApp(rooms).listen(port);
console.log(`serving http://localhost:${port}/  (POST /api/find, ws /play)`);

const shutdown = () => {
  rooms.stopAll();
  void app.stop().then(() => process.exit(0));
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
