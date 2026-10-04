// Headless experiment: drive the human player with the game's own bot AI and measure results.
// The sim is stepped manually (fast-forward), so a 3-minute round takes a few seconds.
// usage: [BASE_URL=http://localhost:3000/] bun packages/e2e/src/autopilot.ts [trials=5] [seconds=180]
import { chromium } from "playwright";

const trials = Number(process.argv[2] ?? 5);
const seconds = Number(process.argv[3] ?? 180);
const DEATH = [
  "win",
  "self-intersect",
  "wall",
  "track crossed",
  "exit captured",
  "surrounded",
  "removed",
  "capital surrounded",
  "split from capital"
];

const browser = await chromium.launch();

async function runTrial(mode: "straight" | "autopilot") {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.route("**/*", r => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
  page.on("console", () => {}); // game logs dt every frame in some paths; ignore
  await page.goto(process.env.BASE_URL ?? "http://localhost:3000/");
  await page.waitForFunction(() => (window as any).paperio2api?.game && (window as any).__paperio);
  await page.evaluate(() => (window as any).paperio2api.startGame());
  await page.waitForFunction(() => (window as any).paperio2api.game.player);

  return page.evaluate(
    ({ mode, ticks }) => {
      const { BOT_STATES, StateMachine, Bot } = (window as any).__paperio;
      const game = (window as any).paperio2api.game;
      const player = game.player;
      game.debugView = true; // pauses the rAF update loop; we step manually below

      // `as`: TS cannot see the assignment inside the gameOver closure and would narrow this to null.
      let death = null as { reason: number; cycle: number } | null;
      const origGameOver = game.gameOver.bind(game);
      game.gameOver = (reason: number) => {
        death ??= { reason, cycle: game.cycle };
        try {
          origGameOver(reason);
        } catch {}
      };

      if (mode === "autopilot") {
        // Bot AI minus "attack" (attack targets game.player's track, i.e. ourselves).
        const { attack, ...states } = BOT_STATES;
        Object.assign(player, {
          aggro: 0,
          greed: 0.35,
          safety: 0.9,
          defense: 1.2,
          jitter: 0,
          smoothness: 1,
          targets: [],
          maxDanger: 0
        });
        player.fsm = new StateMachine(states, "idle", player);
        player.update = function (dt: number) {
          Bot.prototype.update.call(this, dt);
        };
        game.readInput = () => {}; // ignore (absent) mouse/keyboard
      }

      const TICK = 1000 / 60;
      const startCycle = game.cycle;
      for (let i = 0; i < ticks && !death; i++) game.update(TICK);

      return {
        mode,
        survivedSec: +((((death?.cycle ?? game.cycle) - startCycle) * TICK) / 1000).toFixed(1),
        died: death ? death.reason : null,
        finalPct: +(player.percent * 100).toFixed(2),
        bestPct: +(player.bestPercent * 100).toFixed(2),
        kills: player.statistics.kills,
        rank: player.rank,
        fsmState: player.fsm?.state
      };
    },
    { mode, ticks: seconds * 60 }
  );
}

const results: any[] = [];
for (const mode of ["straight", "autopilot"] as const) {
  for (let t = 0; t < trials; t++) {
    const r = await runTrial(mode);
    console.log(JSON.stringify({ ...r, died: r.died === null ? "alive" : DEATH[r.died] }));
    results.push(r);
  }
}
for (const mode of ["straight", "autopilot"]) {
  const rs = results.filter(r => r.mode === mode);
  const avg = (k: string) => (rs.reduce((s, r) => s + r[k], 0) / rs.length).toFixed(2);
  console.log(
    `${mode.padEnd(9)} avg survived ${avg("survivedSec")}s, best ${avg("bestPct")}%, alive at end: ${rs.filter(r => r.died === null).length}/${rs.length}`
  );
}
await browser.close();
