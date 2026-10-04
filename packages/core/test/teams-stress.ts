// Teams (shared territory) stress gate, headless: a port of scripts/stress-teams.ts from main that runs core
// directly in Bun instead of driving the page. Deterministic per seed: seeded Math.random, simulated setTimeout,
// manual game.update() stepping. A scripted player spawns at tick 1000 (and again after each death) and steers
// in laps, so player paths are covered too. Checks the invariants of modes/teams/SHARED_TERRITORY.md every CHECK
// ticks (overlap every OVERLAP ticks), then switches modes classic -> teams -> classic to cover Game.stop() with
// shared skins.
//
//   bun packages/core/test/teams-stress.ts [seeds=5] [ticks=6000]      (also: bun run stress:teams)
import type { Base } from "../src/game/base";
import { Polygon } from "../src/engine/polygon";
import type { Bounds } from "../src/engine/polyline";
import type { Segment } from "../src/engine/segment";
import { Vec2 } from "../src/engine/vec2";
import type { Game } from "../src/game/game";
import type { Unit } from "../src/game/units";
import { createHeadlessGame } from "../src/headless";
import type { HeadlessGameOptions } from "../src/headless";
import type { LanguageStrings } from "../src/language";
import type { ModeId } from "../src/modes/index";
import type { TeamsMode } from "../src/modes/teams";
import { mulberry32 } from "./golden-scenario";

const CHECK = 10;
const OVERLAP = 60;

export interface StressResult {
  seed: number;
  ticks: number;
  checks: number;
  violations: Record<string, number>;
  first: Record<string, string>;
  events: Record<string, number>;
  kills: Record<string, number>;
  maxUnits: number;
  maxBases: number;
  teams: number;
  playerSpawns: number;
  playerDeaths: number;
}

type Setup = Pick<HeadlessGameOptions, "skinNames" | "language">;

/** Patches the globals the original script patched on window, and restores them afterwards. */
function withSimulatedGlobals<T>(seed: number, onAssertFail: (message: string) => void, run: (advance: (ms: number) => void) => T): T {
  const realRandom = Math.random;
  const realSetTimeout = globalThis.setTimeout;
  const realAssert = console.assert;
  let simTime = 0;
  const timers: { at: number; fn: () => void }[] = [];
  Math.random = mulberry32(seed);
  // gameOver schedules the player's removal with setTimeout: run it on simulated time.
  globalThis.setTimeout = ((fn: () => void, ms = 0) => {
    timers.push({ at: simTime + ms, fn });
    return 0;
  }) as unknown as typeof setTimeout;
  console.assert = (condition?: boolean, ...data: unknown[]) => {
    if (!condition) {
      onAssertFail(String(data[0] ?? ""));
    }
  };
  const advance = (ms: number) => {
    simTime += ms;
    for (let i = 0; i < timers.length; i++) {
      if (timers[i]!.at <= simTime) {
        const [timer] = timers.splice(i--, 1);
        timer!.fn();
      }
    }
  };
  try {
    return run(advance);
  } finally {
    Math.random = realRandom;
    globalThis.setTimeout = realSetTimeout;
    console.assert = realAssert;
  }
}

const distToSeg = (p: Vec2, sg: Segment) => {
  const ax = sg.start.x, ay = sg.start.y, dx = sg.end.x - ax, dy = sg.end.y - ay, l2 = dx * dx + dy * dy;
  let t = l2 ? ((p.x - ax) * dx + (p.y - ay) * dy) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p.x - ax - t * dx, p.y - ay - t * dy);
};
const inBounds = (b: Bounds, p: Vec2) => p.x >= b.left && p.x <= b.right && p.y >= b.top && p.y <= b.bottom;
const strictlyInside = (poly: Polygon, p: Vec2, eps: number) => inBounds(poly.bounds, p) && poly.inside(p) && poly.segments.every(sg => distToSeg(p, sg) > eps);
const committed = (sg: Segment) => !!sg.shape && sg.start.segments.includes(sg) && sg.end.segments.includes(sg);

export function runTeamsStressSeed(setup: Setup, seed: number, ticks: number): StressResult {
  const violations: Record<string, number> = {};
  const first: Record<string, string> = {};
  let tick = 0;
  const bad = (key: string, info = "") => {
    violations[key] = (violations[key] || 0) + 1;
    if (!first[key]) first[key] = `tick ${tick} ${info}`;
  };
  return withSimulatedGlobals(seed, message => bad("console.assert failed", message), advance => {
    const game = createHeadlessGame({ ...setup, mode: "teams" });
    const mode = game.mode as TeamsMode;
    game.debugView = true;

    const kills: Record<string, number> = {};
    const kill = game.kill.bind(game);
    game.kill = (unit, killer, reason) => {
      if (!unit.death) {
        kills[reason] = (kills[reason] || 0) + 1;
        if (killer && unit.team && killer !== unit && killer.team === unit.team) bad("ally killed an ally", `${killer.name} -> ${unit.name} reason ${reason}`);
      }
      return kill(unit, killer, reason);
    };

    let maxBases = 0;
    let checks = 0;
    const check = (overlap: boolean) => {
      checks++;
      const units: Unit[] = game.units;
      const bases: Base[] = [...new Set(units.map(u => u.base))];
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
          if (h.percent !== b.hosts[0]!.percent) bad("hosts of one base report different percent");
        }
        if (!b.polygon.segments.every(committed)) bad("base outline segment not committed");
        if (Math.abs(b.polygon.area() - b.area) > 1) bad("base.area out of sync with polygon", `${b.area.toFixed(1)} vs ${b.polygon.area().toFixed(1)}`);
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
        if (u.insideBase && (!live.has(u.insideBase) || !u.insideBase.hosts.length)) bad("insideBase is a removed base", u.name);
      }
      const teamSum = mode.teams.reduce((a, t) => a + t.area, 0);
      if (teamSum > game.arenaArea * 1.0001) bad("team areas sum past the arena", (teamSum / game.arenaArea).toFixed(4));
      for (const t of mode.teams) if (t.units.length > mode.options.teamSize) bad("team over teamSize", String(t.units.length));
      if (overlap) {
        for (const A of bases) for (const B of bases) {
          if (A === B) continue;
          const kind = A.hosts[0]?.team === B.hosts[0]?.team ? "same team" : "different teams";
          const hit = A.polygon.segments.find(sg => strictlyInside(B.polygon, sg.start, 1));
          if (hit) bad(`base vertex strictly inside another base (${kind})`, `${hit.start.x.toFixed(1)},${hit.start.y.toFixed(1)}`);
        }
        const p = new Vec2(0, 0);
        let cells = 0;
        for (let x = 5; x < game.grid.width; x += 10) for (let y = 5; y < game.grid.height; y += 10) {
          p.x = x;
          p.y = y;
          let n = 0;
          for (const b of bases) if (inBounds(b.polygon.bounds, p) && b.polygon.inside(p) && ++n > 1) break;
          if (n > 1) cells++;
        }
        if (cells) bad("overlap: 10px grid cells inside 2+ bases", `${cells} cells`);
      }
    };

    let maxUnits = 0, playerSpawns = 0, playerDeaths = 0, respawnAt = 1000, lapStart = 0, wasAlive = false;
    const lap = 200 + (seed % 7) * 20;
    for (tick = 0; tick < ticks; tick++) {
      if (!game.player && tick >= respawnAt) {
        try {
          game.spawnPlayer("stress", "", 0);
        } catch (e) {
          bad("exception in spawnPlayer", (e as Error).message);
        }
        if (game.player) {
          playerSpawns++;
          lapStart = tick;
          game.visible = true;
          game.direction = new Vec2(1, 0).rotate(Math.random() * Math.PI * 2);
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
      } catch (e) {
        const error = e as Error;
        bad("exception in update", `${error.message} @ ${(error.stack || "").split("\n").slice(1, 4).join(" | ")}`);
        break;
      }
      advance(1000 / 60);
      maxUnits = Math.max(maxUnits, game.units.length);
      if (tick % CHECK === 0 || tick === ticks - 1) {
        try {
          check(tick % OVERLAP === 0);
        } catch (e) {
          bad("exception in check", (e as Error).message);
        }
      }
    }
    game.stop();
    return {
      seed, ticks: tick, checks, violations, first, events: { ...game.teamEvents }, kills, maxUnits, maxBases,
      teams: mode.teams.length, playerSpawns, playerDeaths,
    };
  });
}

/**
 * Headless counterpart of the original script's in-app mode switches: each game warms up, spawns the player,
 * runs a bit and is stopped (Game.stop() releases skins teammates share). Returns errors (empty = fine).
 */
export function runModeSwitches(setup: Setup, seed = 1): { log: string[]; errors: string[] } {
  const log: string[] = [];
  const errors: string[] = [];
  withSimulatedGlobals(seed, message => errors.push(`console.assert: ${message}`), advance => {
    for (const id of ["classic", "teams", "classic", "teams", "classic"] as ModeId[]) {
      try {
        const game: Game = createHeadlessGame({ ...setup, mode: id });
        for (let i = 0; i < 600; i++) {
          if (i === 300) game.spawnPlayer("switch", "", 0);
          game.update(1000 / 60);
          advance(1000 / 60);
        }
        log.push(`${game.mode.id}: units ${game.units.length}, bases ${new Set(game.units.map(u => u.base)).size}, player ${!!game.player}`);
        game.stop();
      } catch (e) {
        errors.push(`${id}: ${(e as Error).message}`);
      }
    }
  });
  return { log, errors };
}

export const loadSetup = async (): Promise<Setup> => {
  const assets = new URL("../../../original/assets/", import.meta.url).pathname;
  const skinNames = ((await Bun.file(assets + "skins/skins.json").json()) as { name: string }[]).map(skin => skin.name);
  const language = ((await Bun.file(assets + "languages.json").json()) as { en: LanguageStrings }).en;
  return { skinNames, language };
};

export const countViolations = (result: StressResult) => Object.values(result.violations).reduce((a, b) => a + b, 0);

if (import.meta.main) {
  const seeds = Number(process.argv[2] ?? 5);
  const ticks = Number(process.argv[3] ?? 6000);
  const setup = await loadSetup();
  let total = 0;
  const started = performance.now();
  for (let i = 1; i <= seeds; i++) {
    const r = runTeamsStressSeed(setup, i * 7919, ticks);
    const v = countViolations(r);
    total += v;
    const e = r.events;
    console.log(`seed ${i} (${r.seed}): ticks ${r.ticks} checks ${r.checks} violations ${v} | splits ${e.splits} merges ${e.merges} mergesSkipped ${e.mergesSkipped} injects ${e.injects} crosses ${e.crosses} crossLoops ${e.crossLoops} crossHome ${e.crossHome} retruncate ${e.crossRetruncate} repaired ${e.repairedStarts} unified ${e.unifiedPoints} dropped ${e.droppedReturns} | kills ${JSON.stringify(r.kills)} | units<=${r.maxUnits} bases<=${r.maxBases} teams ${r.teams} player ${r.playerSpawns}/${r.playerDeaths}`);
    if (v) console.log("   ", JSON.stringify(r.first));
  }
  const switches = runModeSwitches(setup);
  total += switches.errors.length;
  console.log("mode switches:", switches.log.join(" -> "), "| errors:", switches.errors.length ? switches.errors : "none");
  console.log(`TOTAL: ${seeds} seeds x ${ticks} ticks, violations ${total} (${((performance.now() - started) / 1000).toFixed(1)} s)`);
  process.exit(total ? 1 : 0);
}
