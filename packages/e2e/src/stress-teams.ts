// Stress gate for Teams (shared territory). Headless, deterministic per seed: seeded Math.random, simulated
// setTimeout, manual game.update() stepping. A scripted player spawns at tick 1000 (and again after each death)
// and steers in laps (like scripts/parity.ts), so player paths are covered too.
// Checks the invariants of modes/teams/SHARED_TERRITORY.md every CHECK ticks (overlap every OVERLAP ticks),
// then switches modes classic -> teams -> classic in the real app to cover Game.stop() with shared skins.
//
// Browser version (drives the real page). The same checks run headless in core: packages/core/test/teams-stress.ts.
//   PORT=3117 bun run serve &
//   bun packages/e2e/src/stress-teams.ts [seeds=15] [ticks=6000] [url=$BASE_URL or http://localhost:3000/]
import { chromium } from "playwright";

const seeds = Number(process.argv[2] ?? 15);
const ticks = Number(process.argv[3] ?? 6000);
const url = process.argv[4] ?? process.env.BASE_URL ?? "http://localhost:3000/";
const CHECK = 10;
const OVERLAP = 60;

const browser = await chromium.launch();

async function openPage() {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.route("**/*", r => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
  const pageErrors: string[] = [];
  page.on("pageerror", e => pageErrors.push(e.message));
  await page.goto(url);
  await page.waitForFunction(() => !!(window as any).paperio2api?.game, null, { polling: 100 });
  return { page, pageErrors };
}

type SeedResult = {
  seed: number;
  ticks: number;
  violations: Record<string, number>;
  first: Record<string, string>;
  events: Record<string, number>;
  kills: Record<string, number>;
  maxUnits: number;
  maxBases: number;
  teams: number;
  playerSpawns: number;
  playerDeaths: number;
  checks: number;
};

const runSeed = (page: import("playwright").Page, seed: number) =>
  page.evaluate(
    ({ seed, ticks, CHECK, OVERLAP }) => {
      let s = seed;
      Math.random = () => {
        s |= 0;
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
      // Simulated timers: gameOver schedules the player's removal with setTimeout.
      let simTime = 0;
      const timers: { at: number; fn: () => void }[] = [];
      (window as any).setTimeout = (fn: () => void, ms = 0) => {
        timers.push({ at: simTime + ms, fn });
        return 0;
      };
      const api = (window as any).paperio2api;
      api.game.stop();
      api.create(document.createElement("canvas"), "teams");
      const game = api.game;
      game.debugView = true;
      game.readInput = () => {};

      const violations: Record<string, number> = {};
      const first: Record<string, string> = {};
      let tick = 0;
      const bad = (key: string, info = "") => {
        violations[key] = (violations[key] || 0) + 1;
        if (!first[key]) first[key] = `tick ${tick} ${info}`;
      };
      const kills: Record<string, number> = {};
      const kill = game.kill.bind(game);
      game.kill = (unit: any, killer: any, reason: number) => {
        if (!unit.death) {
          kills[reason] = (kills[reason] || 0) + 1;
          if (killer && unit.team && killer !== unit && killer.team === unit.team)
            bad("ally killed an ally", `${killer.name} -> ${unit.name} reason ${reason}`);
        }
        return kill(unit, killer, reason);
      };
      const assert = console.assert;
      console.assert = (cond?: boolean, ...args: unknown[]) => {
        if (!cond) bad("console.assert failed", String(args[0] ?? ""));
        return assert(cond, ...args);
      };

      const distToSeg = (p: any, sg: any) => {
        const ax = sg.start.x,
          ay = sg.start.y,
          dx = sg.end.x - ax,
          dy = sg.end.y - ay,
          l2 = dx * dx + dy * dy;
        let t = l2 ? ((p.x - ax) * dx + (p.y - ay) * dy) / l2 : 0;
        t = Math.max(0, Math.min(1, t));
        return Math.hypot(p.x - ax - t * dx, p.y - ay - t * dy);
      };
      const inBounds = (b: any, p: any) => p.x >= b.left && p.x <= b.right && p.y >= b.top && p.y <= b.bottom;
      const strictlyInside = (poly: any, p: any, eps: number) =>
        inBounds(poly.bounds, p) && poly.inside(p) && poly.segments.every((sg: any) => distToSeg(p, sg) > eps);
      const committed = (sg: any) => sg.shape && sg.start.segments.includes(sg) && sg.end.segments.includes(sg);
      let maxBases = 0;
      let checks = 0;

      const check = (overlap: boolean) => {
        checks++;
        const units: any[] = game.units;
        const bases: any[] = [...new Set(units.map(u => u.base))];
        maxBases = Math.max(maxBases, bases.length);
        const live = new Set(bases);
        for (const b of bases) {
          if (!b.hosts.length) bad("base without hosts");
          if (!(b.area > 0)) bad("base area <= 0", String(b.area));
          const team = b.hosts[0]?.team;
          for (const h of b.hosts) {
            if (h.base !== b) bad("host.base !== base", h.name);
            if (h.death || !units.includes(h)) bad("dead or removed unit is a host", h.name);
            if (h.team !== team) bad("hosts of one base on different teams");
            if (h.percent !== b.hosts[0].percent) bad("hosts of one base report different percent");
          }
          if (!b.polygon.segments.every(committed)) bad("base outline segment not committed");
          if (Math.abs(b.polygon.area() - b.area) > 1)
            bad("base.area out of sync with polygon", `${b.area.toFixed(1)} vs ${b.polygon.area().toFixed(1)}`);
        }
        for (const u of units) {
          if (!u.base.hosts.includes(u)) bad("unit not in its base.hosts", u.name);
          if (!u.team) bad("unit without a team", u.name);
          else if (!u.team.units.includes(u)) bad("unit not in its team.units", u.name);
          const start = u.track.polyline.start;
          if (!start) {
            if (u.insideBase !== u.base) bad("no trail but not in own base", u.name);
            if (!u.base.polygon.inside(u.position)) bad("no trail but position outside own base", u.name);
          } else {
            if (u.insideBase === u.base) bad("has trail while in own base", u.name);
            if (!u.base.polygon.hasPoint(start)) bad("trail start is not a vertex of own base", u.name);
            if (!u.track.polyline.segments.every(committed)) bad("trail segment not committed", u.name);
          }
          if (u.insideBase && (!live.has(u.insideBase) || !u.insideBase.hosts.length))
            bad("insideBase is a removed base", u.name);
        }
        const teams: any[] = game.mode.teams;
        const teamSum = teams.reduce((a, t) => a + t.area, 0);
        if (teamSum > game.arenaArea * 1.0001)
          bad("team areas sum past the arena", (teamSum / game.arenaArea).toFixed(4));
        for (const t of teams)
          if (t.units.length > game.mode.options.teamSize) bad("team over teamSize", String(t.units.length));
        if (overlap) {
          for (const A of bases)
            for (const B of bases) {
              if (A === B) continue;
              const kind = A.hosts[0]?.team === B.hosts[0]?.team ? "same team" : "different teams";
              const hit = A.polygon.segments.find((sg: any) => strictlyInside(B.polygon, sg.start, 1));
              if (hit)
                bad(
                  `base vertex strictly inside another base (${kind})`,
                  `${hit.start.x.toFixed(1)},${hit.start.y.toFixed(1)}`
                );
            }
          const p = new game.grid.center.constructor(0, 0);
          let cells = 0;
          for (let x = 5; x < game.grid.width; x += 10)
            for (let y = 5; y < game.grid.height; y += 10) {
              p.x = x;
              p.y = y;
              let n = 0;
              for (const b of bases) if (inBounds(b.polygon.bounds, p) && b.polygon.inside(p) && ++n > 1) break;
              if (n > 1) cells++;
            }
          if (cells) bad("overlap: 10px grid cells inside 2+ bases", `${cells} cells`);
        }
      };

      const V = game.grid.center.constructor;
      let maxUnits = 0,
        playerSpawns = 0,
        playerDeaths = 0,
        respawnAt = 1000,
        lapStart = 0,
        wasAlive = false;
      const lap = 200 + (seed % 7) * 20;
      for (tick = 0; tick < ticks; tick++) {
        if (!game.player && tick >= respawnAt) {
          try {
            game.spawnPlayer("stress", "", 0);
          } catch (e: any) {
            bad("exception in spawnPlayer", e.message);
          }
          if (game.player) {
            playerSpawns++;
            lapStart = tick;
            game.visible = true;
            game.direction = new V(1, 0).rotate(Math.random() * Math.PI * 2);
          }
        }
        const pl = game.player;
        if (pl && !pl.death) {
          wasAlive = true;
          const k = (tick - lapStart) % lap;
          // straight out, U-turn, straight back, U-turn (with a per-seed lap length)
          if ((k >= lap / 4 && k < lap / 4 + 60) || k >= lap - 60) game.direction.rotate(Math.PI / 60);
        } else if (wasAlive) {
          wasAlive = false;
          playerDeaths++;
          respawnAt = tick + 300;
        }
        try {
          game.update(1000 / 60);
        } catch (e: any) {
          bad("exception in update", `${e.message} @ ${(e.stack || "").split("\n").slice(1, 4).join(" | ")}`);
          break;
        }
        simTime += 1000 / 60;
        for (let i = 0; i < timers.length; i++)
          if (timers[i].at <= simTime) {
            const [t] = timers.splice(i--, 1);
            t.fn();
          }
        maxUnits = Math.max(maxUnits, game.units.length);
        if (tick % CHECK === 0 || tick === ticks - 1) {
          try {
            check(tick % OVERLAP === 0);
          } catch (e: any) {
            bad("exception in check", e.message);
          }
        }
      }
      return {
        seed,
        ticks: tick,
        violations,
        first,
        events: { ...game.teamEvents },
        kills,
        maxUnits,
        maxBases,
        teams: game.mode.teams.length,
        playerSpawns,
        playerDeaths,
        checks
      };
    },
    { seed, ticks, CHECK, OVERLAP }
  );

const results: SeedResult[] = [];
for (let i = 1; i <= seeds; i++) {
  const { page, pageErrors } = await openPage();
  const r = (await runSeed(page, i * 7919)) as SeedResult;
  for (const e of pageErrors) {
    r.violations["page error"] = (r.violations["page error"] || 0) + 1;
    r.first["page error"] ??= e;
  }
  results.push(r);
  const v = Object.values(r.violations).reduce((a, b) => a + b, 0);
  const e = r.events;
  console.log(
    `seed ${i} (${i * 7919}): ticks ${r.ticks} checks ${r.checks} violations ${v} | splits ${e.splits} merges ${e.merges} mergesSkipped ${e.mergesSkipped} injects ${e.injects} crosses ${e.crosses} crossLoops ${e.crossLoops} crossHome ${e.crossHome} retruncate ${e.crossRetruncate} repaired ${e.repairedStarts} unified ${e.unifiedPoints} dropped ${e.droppedReturns} | kills ${JSON.stringify(r.kills)} | units<=${r.maxUnits} bases<=${r.maxBases} teams ${r.teams} player ${r.playerSpawns}/${r.playerDeaths}`
  );
  if (v) console.log("   ", JSON.stringify(r.first));
  await page.close();
}

// Mode switches in the real app (Game.stop() releases a skin shared by teammates).
const { page, pageErrors } = await openPage();
const switchLog = await page.evaluate(async () => {
  const api = (window as any).paperio2api;
  const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
  const log: string[] = [];
  for (const mode of ["classic", "teams", "classic", "teams", "classic"]) {
    api.start("switch", "", 0, () => {}, 0, mode);
    await wait(1500);
    const g = api.game;
    log.push(
      `${g.mode.id}: units ${g.units.length}, bases ${new Set(g.units.map((u: any) => u.base)).size}, player ${!!g.player}`
    );
  }
  return log;
});
await page.waitForTimeout(500);
console.log("mode switches:", switchLog.join(" -> "), "| page errors:", pageErrors.length ? pageErrors : "none");

const total =
  results.reduce((a, r) => a + Object.values(r.violations).reduce((x, y) => x + y, 0), 0) + pageErrors.length;
console.log(`TOTAL: ${results.length} seeds x ${ticks} ticks, violations ${total}`);
await browser.close();
process.exit(total ? 1 : 0);
