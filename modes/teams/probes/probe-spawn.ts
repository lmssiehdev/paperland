// Probe how the player joins a team (replaces a bot with DEATH_REMOVED=6?) and initial unit/team counts.
// usage: bun modes/teams/probes/probe-spawn.ts [runs=5]
import { chromium } from "playwright";
const runs = Number(process.argv[2] ?? 5);
const browser = await chromium.launch();
for (let r = 0; r < runs; r++) {
  const page = await browser.newPage();
  await page.route("**/*", (q) => (new URL(q.request().url()).hostname === "localhost" ? q.continue() : q.abort()));
  await page.goto("http://localhost:3000/teams/");
  await page.waitForFunction(() => (window as any).paperio2api?.game?.units?.length > 0, null, { timeout: 30000 });
  const out = await page.evaluate(async () => {
    const api = (window as any).paperio2api;
    const g = api.game;
    const G = g.constructor.prototype;
    const kills: any[] = [];
    const orig = G.kill;
    G.kill = function (u: any, k: any, reason: number) {
      if (!u.death) kills.push({ name: u.name, reason, sameTeamAsPlayer: !!(this.player && u.team === this.player.team) });
      return orig.call(this, u, k, reason);
    };
    (window as any).StartGame();
    while (!g.player) await new Promise((r) => setTimeout(r, 50));
    g.stopped = true;
    const P = g.player;
    return {
      unitsAfterStart: g.units.length,
      teams: g.teams.map((t: any) => t.units.length),
      playerTeamSize: P.team.units.length,
      playerSharesBaseWithAllTeammates: P.team.units.every((u: any) => u.base === P.base),
      playerInBase: P.in === P.base,
      playerSkinIsTeamSkin: P.team.skin.colors.main,
      killsDuringSpawn: kills.filter((k) => k.reason === 6),
    };
  });
  console.log(JSON.stringify(out));
  await page.close();
}
await browser.close();
