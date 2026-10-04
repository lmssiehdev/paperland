// Headless probe of the Teams build: team assignment, shared bases, friendly-fire rules.
// usage: bun modes/teams/probes/probe-teams.ts [seconds=240] [seed=1]
import { chromium } from "playwright";

const [secondsArg = "240", seedArg = "1"] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.route("**/*", (r) => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
const errors: string[] = [];
page.on("pageerror", (e) => errors.push(e.message));
// Seed Math.random so runs are repeatable.
await page.addInitScript((seed: number) => {
  let s = seed >>> 0;
  Math.random = () => ((s = (s * 69069 + 1) >>> 0) / 4294967296);
}, Number(seedArg));
await page.goto("http://localhost:3000/teams/");
await page.waitForFunction(() => (window as any).paperio2api?.game && !(window as any).paperio2api.preparing, null, { timeout: 30000 });
await page.evaluate(() => (window as any).StartGame());
await page.waitForFunction(() => (window as any).paperio2api.game.player, null, { timeout: 15000 });

const result = await page.evaluate((seconds: number) => {
  const g = (window as any).paperio2api.game;
  g.stopped = true; // stop rAF loop; we step manually
  const P = g.player;
  const Track = P.track.constructor.prototype;
  const Game = g.constructor.prototype;
  const tid = (t: any) => (t ? g.teams.indexOf(t) : -1);
  const snapshot = (label: string) => ({
    label,
    units: g.units.length,
    teams: g.teams.map((t: any) => ({
      color: t.skin.colors.main,
      units: t.units.length,
      bases: t.bases.length,
      percent: +(t.percent * 100).toFixed(2),
      top: t.top,
      hasPlayer: t.units.includes(P),
      // every unit of the team points at one of the team's bases; how many distinct base objects?
      distinctUnitBases: new Set(t.units.map((u: any) => u.base)).size,
      hostsTotal: t.bases.reduce((a: number, b: any) => a + b.hosts.length, 0),
    })),
    playerTeamUnitsSharePlayerBase: P.team ? P.team.units.filter((u: any) => u.base === P.base).length : null,
    playerPercent: P.death ? null : +(P.percent * 100).toFixed(2),
    playerPersonal: P.death ? null : +(P.scheme.personalPercent * 100).toFixed(3),
  });
  const snaps: any[] = [snapshot("start")];

  // Instrument rule paths.
  const stats: Record<string, number> = {};
  const inc = (k: string) => (stats[k] = (stats[k] || 0) + 1);
  const origTrackHit = Track.handleIntersect;
  Track.handleIntersect = function (inter: any, unit: any, seg: any, game: any) {
    if (unit === this.unit) inc("trackHit:self");
    else if (this.unit.team && this.unit.team === unit.team) inc("trackHit:teammate->inject");
    else inc("trackHit:enemy->kill");
    return origTrackHit.call(this, inter, unit, seg, game);
  };
  const origKill = Game.kill;
  Game.kill = function (u: any, killer: any, reason: number) {
    if (!u.death) inc(`kill:reason${reason}:${killer ? (killer.team === u.team ? "teammateKiller" : "enemyKiller") : "noKiller"}`);
    return origKill.call(this, u, killer, reason);
  };
  const origCross = Game.handleCross;
  Game.handleCross = function (u: any, by: any) {
    inc(by ? "handleCross:teammateTrackAbsorbed" : "handleCross:hostInsideNewArea");
    return origCross.call(this, u, by);
  };
  const origReturn = Game.handleReturn;
  Game.handleReturn = function (u: any, pts: any, segs: any) {
    const before = g.bases.length;
    const teamBasesBefore = u.team ? u.team.bases.length : 0;
    const r = origReturn.call(this, u, pts, segs);
    inc("handleReturn");
    if (g.bases.length > before) inc("return:baseCountGrew(enemySplit)");
    if (u.team && u.team.bases.length < teamBasesBefore) inc("return:friendlyBasesMerged");
    return r;
  };
  let maxTeamBases = 0;
  let maxUnits = 0;
  const steps = Math.round(seconds * 60);
  for (let i = 0; i < steps; i++) {
    g.update(1000 / 60);
    maxUnits = Math.max(maxUnits, g.units.length);
    g.teams.forEach((t: any) => (maxTeamBases = Math.max(maxTeamBases, t.bases.length)));
    if (i === 60 * 30) snaps.push(snapshot("t=30s"));
    if (P.death && !stats.playerDiedAt) stats.playerDiedAt = i / 60;
  }
  snaps.push(snapshot(`t=${seconds}s`));
  // Shared territory check: are team percents == sum of their bases, and do teammates' unit.percent equal base share?
  const shared = g.teams.map((t: any) => t.units.map((u: any) => +(u.percent * 100).toFixed(2)));
  return { config: { teamsCount: g.config.teamsCount, teamSize: g.config.teamSize }, scheme: g.scheme.name, snaps, stats, maxTeamBases, maxUnits, unitPercentsByTeam: shared };
}, Number(secondsArg));

console.log(JSON.stringify({ ...result, errors: errors.slice(0, 5) }, null, 1));
await browser.close();
