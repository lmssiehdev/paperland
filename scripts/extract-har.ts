// Extracts every paperio.site response body from the HAR into ./original
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const har = await Bun.file("paperio.site.har").json();
let n = 0;
for (const e of har.log.entries) {
  const url = new URL(e.request.url);
  if (url.hostname !== "paperio.site") continue;
  const c = e.response.content;
  if (!c.text) continue;
  const path = url.pathname === "/" ? "/index.html" : url.pathname;
  const out = join("original", path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, c.encoding === "base64" ? Buffer.from(c.text, "base64") : c.text);
  n++;
}
console.log(`extracted ${n} files`);
