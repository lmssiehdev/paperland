// Checks shared-territory invariants on the ORIGINAL teams engine (readable build by default), so we know
// which ones the port can assert strictly and which ones the original itself breaks.
// Same deterministic harness as compare-builds.ts (seeded Math.random, frozen clock, manual stepping).
//
//   PORT=3007 bun server.ts &
//   bun modes/teams/probes/invariants.ts [seconds=120] [seed=1] [app.js]
import { chromium } from "playwright";

const [secondsArg = "120", seedArg = "1", file = "modes/teams/readable/teams.js"] = process.argv.slice(2);
const BASE = process.env.BASE ?? "http://localhost:3007";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
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

const result = await page.evaluate((seconds: number) => {
  const g = (window as any).paperio2api.game;
  g.stopped = true;
  const V = g.player.position.constructor;
  const viol: Record<string, number> = {};
  const first: Record<string, string> = {};
  const bad = (k: string, t: number, info = "") => { viol[k] = (viol[k] || 0) + 1; if (!first[k]) first[k] = `t=${t}s ${info}`; };
  const events: Record<string, number> = {};
  const G = g.constructor.prototype;
  const k = G.kill;
  G.kill = function (u: any, killer: any, r: number) {
    if (!u.death && killer && killer.team === u.team) bad("teammate killed a teammate", -1, `reason ${r}`);
    return k.call(this, u, killer, r);
  };

  // strict interior test: inside the polygon and farther than eps from its outline
  const distToSeg = (p: any, s: any) => {
    const ax = s.start.x, ay = s.start.y, bx = s.end.x, by = s.end.y;
    const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
    let t = l2 ? ((p.x - ax) * dx + (p.y - ay) * dy) / l2 : 0;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x - ax - t * dx, p.y - ay - t * dy);
  };
  const strictlyInside = (poly: any, p: any, eps = 0.5) => poly.inside(p) && poly.segments.every((s: any) => distToSeg(p, s) > eps);

  const check = (t: number) => {
    const bases: any[] = g.bases;
    // bookkeeping
    bases.forEach((b) => {
      if (!b.hosts.length) bad("base in game.bases without hosts", t);
      if (!b.team || !b.team.bases.includes(b)) bad("base not listed in its team.bases", t);
      b.hosts.forEach((h: any) => { if (h.base !== b) bad("host.base !== base", t); if (h.team !== b.team) bad("host.team !== base.team", t); });
    });
    g.teams.forEach((tm: any) => tm.bases.forEach((b: any) => { if (!bases.includes(b)) bad("team.bases has a base missing from game.bases", t); }));
    g.units.forEach((u: any) => {
      if (!u.base.hosts.includes(u)) bad("unit not in its base.hosts", t);
      if (!u.team.units.includes(u)) bad("unit not in its team.units", t);
      const noTrail = !u.track.polyline.start;
      if (noTrail && u.in !== u.base) bad("no trail but unit.in !== unit.base", t, u.name);
      if (noTrail && !u.base.polygon.inside(u.position)) bad("no trail but position outside own base", t, u.name);
      if (!noTrail && u.in === u.base) bad("has trail while in own base", t, u.name);
      if (u.in && !bases.includes(u.in)) bad("unit.in points at a removed base", t);
      if (u.track.polyline.start && !u.base.polygon.hasPoint(u.track.polyline.start) && !(u.in && u.in !== u.base)) {
        bad("trail start is not a vertex of own base (outside)", t, u.name);
      }
    });
    const teamSum = g.teams.reduce((a: number, tm: any) => a + (tm.percent || 0), 0);
    if (teamSum > 1.0001) bad("sum of team percents > 1", t, teamSum.toFixed(4));
    // overlap: every vertex of A strictly inside B, plus a 10px grid sample of the arena
    for (let i = 0; i < bases.length; i++) for (let j = 0; j < bases.length; j++) {
      if (i === j) continue;
      const A = bases[i], B = bases[j];
      const kind = A.team === B.team ? "same team" : "different teams";
      const hit = A.polygon.segments.find((s: any) => strictlyInside(B.polygon, s.start, 1));
      if (hit) bad(`vertex of a base strictly inside another base (${kind})`, t, `${hit.start.x.toFixed(1)},${hit.start.y.toFixed(1)}`);
    }
    let overlapCells = 0;
    const p = new V(0, 0);
    for (let x = 5; x < g.space.width; x += 10) for (let y = 5; y < g.space.height; y += 10) {
      p.x = x; p.y = y;
      let n = 0;
      for (const b of bases) if (b.polygon.inside(p) && ++n > 1) break;
      if (n > 1) overlapCells++;
    }
    if (overlapCells) bad("overlap area (10px grid cells inside 2+ bases)", t, `${overlapCells} cells`);
    return overlapCells;
  };

  let maxOverlap = 0;
  const G2 = g.constructor.prototype;
  const hr = G2.handleReturn;
  G2.handleReturn = function (u: any, pts: any, segs: any) {
    const before = g.bases.length;
    const r = hr.call(this, u, pts, segs);
    if (g.bases.length > before) events.split = (events.split || 0) + 1;
    if (g.bases.length < before && !u.death) events.mergeOrWipe = (events.mergeOrWipe || 0) + 1;
    return r;
  };
  for (let i = 1; i <= seconds * 60; i++) {
    g.update(1000 / 60);
    if (i % 60 === 0) maxOverlap = Math.max(maxOverlap, check(i / 60));
    if (g.player && g.player.death && !events.playerDiedAt) events.playerDiedAt = i / 60; // keep simulating the bots
  }
  return { viol, first, maxOverlap, events, units: g.units.length, bases: g.bases.length };
}, Number(secondsArg));

console.log(JSON.stringify({ seed: +seedArg, seconds: +secondsArg, ...result }, null, 1));
await browser.close();
