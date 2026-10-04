// Behavioural equivalence check between two builds of the teams app.js (e.g. the webcrack output and the
// readable rewrite). Each build runs in a fresh page with Math.random seeded, performance.now frozen and
// requestAnimationFrame stubbed, so the simulation is a pure function of the seed. We step game.update by
// hand and compare a per-second digest of the whole game state.
//
//   PORT=3007 bun server.ts &   # any port; pass it as BASE below
//   bun modes/teams/probes/compare-builds.ts [seconds=60] [seed=1] [a.js] [b.js]
import { chromium } from "playwright";

const [secondsArg = "60", seedArg = "1", fileA = "modes/teams/deob/deobfuscated.js", fileB = "modes/teams/readable/teams.js"] = process.argv.slice(2);
const BASE = process.env.BASE ?? "http://localhost:3007";
const browser = await chromium.launch();

async function run(file: string): Promise<{ digests: string[]; stats: Record<string, number>; errors: string[] }> {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.route("**/*", async (r) => {
    const url = new URL(r.request().url());
    if (url.hostname !== "localhost") return r.abort();
    if (url.pathname === "/teams/app.js") return r.fulfill({ body: await Bun.file(file).text(), contentType: "text/javascript" });
    return r.continue();
  });
  await page.addInitScript((seed: number) => {
    let s = seed >>> 0;
    Math.random = () => (s = (s * 69069 + 1) >>> 0) / 4294967296;
    performance.now = () => 1000;
    window.requestAnimationFrame = () => 0;
  }, Number(seedArg));
  await page.goto(`${BASE}/teams/`);
  await page.waitForFunction(() => (window as any).paperio2api?.game && !(window as any).paperio2api.preparing, null, { polling: 100, timeout: 60000 });
  await page.evaluate(() => (window as any).StartGame());
  await page.waitForFunction(() => (window as any).paperio2api.game.player, null, { polling: 100, timeout: 15000 });
  const out = await page.evaluate((seconds: number) => {
    const g = (window as any).paperio2api.game;
    g.stopped = true;
    const stats: Record<string, number> = {};
    const inc = (k: string) => (stats[k] = (stats[k] || 0) + 1);
    const T = g.player.track.constructor.prototype, G = g.constructor.prototype;
    const th = T.handleIntersect;
    T.handleIntersect = function (i: any, u: any, m: any, gm: any) { inc(u === this.unit ? "self" : this.unit.team === u.team ? "inject" : "enemyCut"); return th.call(this, i, u, m, gm); };
    const k = G.kill;
    G.kill = function (u: any, killer: any, r: number) { if (!u.death) inc(`kill${r}`); return k.call(this, u, killer, r); };
    const hc = G.handleCross;
    G.handleCross = function (m: any, by: any) { inc("handleCross"); return hc.call(this, m, by); };
    const r = (x: number) => Math.round(x * 1000) / 1000;
    const digest = () => JSON.stringify({
      units: g.units.map((u: any) => [u.name, r(u.position.x), r(u.position.y), r(u.direction), u.track.polyline.segments.length, g.teams.indexOf(u.team), g.bases.indexOf(u.base), u.in ? g.bases.indexOf(u.in) : -1, r(u.scheme.personalPercent)]),
      bases: g.bases.map((b: any) => [r(b.square), b.hosts.length, b.polygon.segments.length]),
      teams: g.teams.map((t: any) => [t.units.length, t.bases.length, r(t.percent || 0), t.top]),
    });
    const digests: string[] = [digest()];
    for (let i = 1; i <= seconds * 60; i++) {
      g.update(1000 / 60);
      if (i % 60 === 0) digests.push(digest());
      if (!g.player) break;
    }
    return { digests, stats };
  }, Number(secondsArg));
  await page.close();
  return { ...out, errors };
}

const a = await run(fileA);
const b = await run(fileB);
const firstDiff = a.digests.findIndex((d, i) => d !== b.digests[i]);
console.log(JSON.stringify({ seconds: +secondsArg, seed: +seedArg, a: { file: fileA, frames: a.digests.length, stats: a.stats, errors: a.errors.slice(0, 3) }, b: { file: fileB, frames: b.digests.length, stats: b.stats, errors: b.errors.slice(0, 3) } }, null, 1));
if (firstDiff === -1 && a.digests.length === b.digests.length) console.log(`IDENTICAL: ${a.digests.length} per-second state digests match`);
else console.log(`DIFFERENT at second ${firstDiff}\n a: ${a.digests[firstDiff]?.slice(0, 400)}\n b: ${b.digests[firstDiff]?.slice(0, 400)}`);
await browser.close();
