// Extracts paperio.site responses from a HAR into modes/<name>/original, keeping the URL path
// below the mode prefix. WebSocket frames (Chrome `_webSocketMessages`) go to ws-frames.json.
// usage: bun scripts/extract-mode.ts <har> <mode-name> <url-prefix e.g. /battleroyale/>
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const [harPath, mode, prefix = "/"] = process.argv.slice(2);
const har = await Bun.file(harPath!).json();
const root = join("modes", mode!, "original");
let files = 0;
for (const e of har.log.entries) {
  const url = new URL(e.request.url);
  if (e.request.url.startsWith("wss://") || e._webSocketMessages) {
    const out = join("modes", mode!, "ws-frames.json");
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, JSON.stringify({ url: e.request.url, messages: e._webSocketMessages }, null, 1));
    console.log(`ws: ${e._webSocketMessages?.length ?? 0} frames from ${url.host}${url.pathname}`);
    continue;
  }
  if (!url.hostname.endsWith("paperio.site")) continue;
  const c = e.response.content;
  if (url.hostname !== "paperio.site") {
    // API calls to game servers: keep request+response for protocol analysis
    const out = join("modes", mode!, "api-calls.jsonl");
    mkdirSync(dirname(out), { recursive: true });
    Bun.write(out, ""); // ensure exists
    const line = JSON.stringify({ method: e.request.method, url: e.request.url, req: e.request.postData?.text, status: e.response.status, res: c.text }) + "\n";
    require("node:fs").appendFileSync(out, line);
    continue;
  }
  if (!c.text) continue;
  let path = url.pathname.startsWith(prefix!) ? url.pathname.slice(prefix!.length - 1) : "/_root" + url.pathname;
  if (path.endsWith("/")) path += "index.html";
  const out = join(root, path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, c.encoding === "base64" ? Buffer.from(c.text, "base64") : c.text);
  files++;
}
console.log(`${mode}: extracted ${files} files to ${root}`);
