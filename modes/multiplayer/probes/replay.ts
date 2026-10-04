// Offline lockstep verification: drive the real client bundle with the recorded server frames.
// Usage: bun modes/multiplayer/probes/replay.ts [speed]
// Blocks every non-127.0.0.1 request. Compares the client's own death report and the
// area-leaderboard records it produces with what the real session produced (HAR).
import { chromium } from "playwright";
const speed = Number(process.argv[2] || 1);
const perturb = process.argv[3]; // optional tic to perturb by one direction unit
const port = 3999 + Math.floor(Math.random() * 500);
const server = Bun.spawn(["bun", new URL("./replay-server.ts", import.meta.url).pathname], { env: { ...process.env, PORT: String(port) }, stdout: "inherit" });
await Bun.sleep(400);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const blocked: string[] = [];
await page.route("**/*", (route) => {
  const u = new URL(route.request().url());
  if (u.hostname === "127.0.0.1") return route.continue();
  blocked.push(u.href); return route.abort();
});
const logs: string[] = [];
const T0 = Date.now();
page.on("console", (m) => { const t = m.text(); if (/GAME|bots spawned|DIRECTION|death|WARMUP|Recorder|rec:|Can't/i.test(t)) logs.push(`[+${Date.now() - T0} ms] ` + t); });
page.on("pageerror", (e) => logs.push("PAGEERROR " + e.message));
await page.goto(`http://127.0.0.1:${port}/?p-ca1iomqk2f#speed=${speed}${perturb ? "&perturb=" + perturb : ""}`);
await page.waitForSelector("div.play button.yellow", { timeout: 15000 });
await page.waitForTimeout(1800); // room/server pick (1.5 s interval in pickHttpServer)
await page.click("div.play button.yellow");
await page.waitForFunction(() => (window as any).__replayDone, null, { timeout: 120000 });
await page.waitForTimeout(500);
const out = await page.evaluate(() => ({ sent: (window as any).__sent.filter((s: any) => s.obj.cmd !== "move" && s.obj.cmd !== "ping").map((s: any) => s.obj),
  moves: (window as any).__sent.filter((s: any) => s.obj.cmd === "move").length, records: (window as any).__records, save: (window as any).__save, log: (window as any).__log }));
const har = await Bun.file(new URL("../../../paperio.site.multiplayer.har", import.meta.url)).json();
const harRecords = har.log.entries.filter((e: any) => e.request.url.endsWith("/leaderboards") && e.request.postData?.text?.includes("addrecord")).map((e: any) => JSON.parse(e.request.postData.text)[0]);
console.log("console:", logs.slice(0, 40).join("\n  "));
console.log("non-move sends:", JSON.stringify(out.sent));
console.log("move sends (ignored by fake server):", out.moves);
console.log("save:", JSON.stringify(out.save));
const n = Math.max(out.records.length, harRecords.length);
let same = 0;
for (let i = 0; i < n; i++) {
  const a = out.records[i]?.score, b = harRecords[i]?.score;
  if (a === b) same++;
  console.log(String(i).padStart(2), "replay", a, " real", b, a === b ? "EXACT" : "DIFF");
}
console.log(`area records identical: ${same}/${n}; secrets match: ${out.records.every((r: any, i: number) => r.secret === harRecords[i]?.secret)}`);
console.log("blocked external requests:", blocked.length, [...new Set(blocked.map((u) => new URL(u).hostname))].join(","));
await browser.close(); server.kill();
