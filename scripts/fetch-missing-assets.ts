// One-time: download skin files referenced by skins.json that the HAR didn't capture.
import { mkdirSync } from "node:fs";

const json = await Bun.file("original/assets/skins/skins.json").text();
const files = [...new Set([...json.matchAll(/"([^"]+\.(?:svg|png))"/g)].map((m) => m[1]))];
mkdirSync("original/assets/skins", { recursive: true });

let fetched = 0;
for (const name of files) {
  const out = Bun.file(`original/assets/skins/${name}`);
  if (await out.exists()) continue;
  const res = await fetch(`https://paperio.site/assets/skins/${name}`);
  if (!res.ok) { console.log(`skip ${name}: ${res.status}`); continue; }
  await Bun.write(out, res);
  fetched++;
}
console.log(`${files.length} referenced, ${fetched} downloaded`);
