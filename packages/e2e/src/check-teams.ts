// Plays a Teams round headlessly through the real menu and reports team sizes and ally kills.
// usage: [BASE_URL=http://localhost:3000/] bun packages/e2e/src/check-teams.ts [seconds=120]
import { chromium } from "playwright";
const SHOTS = new URL("../../../shots", import.meta.url).pathname;

const seconds = Number(process.argv[2] ?? 120);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.route("**/*", (r) => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
const errors: string[] = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(process.env.BASE_URL ?? "http://localhost:3000/");
await page.waitForSelector("#mode-teams");
await page.click("#mode-teams");
await page.screenshot({ path: SHOTS + "/teams-menu.png" });
await page.click("#play");
for (let i = 0; i < 50 && !(await page.evaluate(() => !!(window as any).paperio2api.game.player)); i++) await page.waitForTimeout(200);

const report = await page.evaluate((ticks) => {
  const game = (window as any).paperio2api.game;
  game.debugView = true; // freeze the rAF loop; step manually
  const allyKills: string[] = [];
  const kill = game.kill.bind(game);
  game.kill = (unit: any, killer: any, reason: number) => {
    if (killer && unit.team && unit.team === killer.team) allyKills.push(`${killer.name} -> ${unit.name} (${reason})`);
    return kill(unit, killer, reason);
  };
  let kills = 0;
  const events = game.events;
  for (let i = 0; i < ticks && game.player && !game.player.death; i++) game.update(1000 / 60);
  kills = events.kills;
  const teams = game.mode.teams.map((t: any) => ({ size: t.units.length, color: t.skin.colors.main, coverage: +(game.mode.coverage(game, t) * 100).toFixed(1) }));
  game.debugView = false;
  return { mode: game.mode.id, teams, units: game.units.length, kills, allyKills, playerAlive: !!game.player && !game.player.death, playerTeamSize: game.player?.team?.units.length };
}, seconds * 60);
await page.waitForTimeout(500);
await page.screenshot({ path: SHOTS + "/teams-ingame.png" });
console.log(JSON.stringify({ ...report, errors }, null, 2));
await browser.close();
