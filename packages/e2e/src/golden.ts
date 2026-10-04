// Deterministic regression check: seeded Math.random, fresh Game via paperio2api.create(),
// fixed number of manual ticks, then a hash of the simulation state.
// Same hash before/after a refactor => same behavior.  usage: [BASE_URL=http://localhost:3000/] bun packages/e2e/src/golden.ts [ticks=4000]
import { chromium } from "playwright";

const ticks = Number(process.argv[2] ?? 4000);
const url = process.argv[3] ?? process.env.BASE_URL ?? "http://localhost:3000/";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.route("**/*", (r) => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
await page.goto(url);
await page.waitForFunction(() => (window as any).paperio2api?.game);

const result = await page.evaluate((ticks) => {
  let s = 12345; // mulberry32
  Math.random = () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const api = (window as any).paperio2api;
  api.game.stop();
  api.create(document.createElement("canvas"));
  const game = api.game;
  game.debugView = true;
  game.readInput = () => {};
  const snap = () => game.units.map((u: any) => [u.position.x.toFixed(6), u.position.y.toFixed(6), u.percent.toFixed(8), u.fsm?.state ?? "p", u.base.polygon.segments.length].join(",")).join(";") + `|kills:${game.events.kills}|cycle:${game.cycle}`;
  const checkpoints: string[] = [];
  for (let i = 0; i < ticks; i++) {
    if (i === 1000) game.spawnPlayer("golden", "", false);
    game.update(1000 / 60);
    if (i % 500 === 499) checkpoints.push(snap());
  }
  return { checkpoints, units: game.units.length, kills: game.events.kills };
}, ticks);

const hash = new Bun.CryptoHasher("sha256").update(result.checkpoints.join("\n")).digest("hex").slice(0, 16);
console.log(JSON.stringify({ hash, ticks, units: result.units, kills: result.kills }));
await browser.close();
