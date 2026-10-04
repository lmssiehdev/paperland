// 1:1 check against the hosted game: runs the golden simulation on
//   (a) the original obfuscated app2.js served under the real hostname https://paperio.site
//       (so its domain lock passes and it behaves exactly like the live site), and
//   (b) our build (dist/app2.js) on localhost,
// for several seeds, and compares the state hashes.  usage: [BASE_URL=http://localhost:3000/] bun packages/e2e/src/parity.ts [seeds=5] [ticks=4000]
import { chromium, type Page } from "playwright";

const seeds = Number(process.argv[2] ?? 5);
const ticks = Number(process.argv[3] ?? 4000);
const browser = await chromium.launch();

async function load(url: string, serveAs?: string): Promise<Page> {
  const page = await browser.newPage();
  await page.route("**/*", async (route) => {
    const u = new URL(route.request().url());
    if (serveAs && u.hostname === serveAs) {
      // Serve the captured site files under the real hostname.
      const path = u.pathname === "/" ? "/index.html" : u.pathname;
      const file = Bun.file(new URL(`../../../original${path}`, import.meta.url).pathname);
      if (await file.exists()) return route.fulfill({ body: Buffer.from(await file.arrayBuffer()), contentType: path.endsWith(".js") ? "text/javascript" : path.endsWith(".html") ? "text/html" : undefined });
      return route.fulfill({ status: 404, body: "" });
    }
    return u.hostname === "localhost" ? route.continue() : route.abort();
  });
  await page.goto(url);
  await page.waitForFunction(() => !!(window as any).paperio2api?.game, null, { polling: 200 });
  return page;
}

const simulate = (page: Page, seed: number) =>
  page.evaluate(({ seed, ticks }) => {
    let s = seed;
    Math.random = () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const api = (window as any).paperio2api;
    api.game.stop();
    api.create(document.createElement("canvas"));
    const game = api.game;
    game.debugView = true;
    game.readInput = () => {};
    const parts: string[] = [];
    for (let i = 0; i < ticks; i++) {
      if (i === 1000) game.spawnPlayer("golden", "", false);
      // Scripted steering: straight out, U-turn, straight back home, U-turn: captures a strip each lap.
      if (game.player && (i - 1000) % 240 >= 60 && (i - 1000) % 240 < 120) game.direction.rotate(Math.PI / 60);
      if (game.player && (i - 1000) % 240 >= 180) game.direction.rotate(Math.PI / 60);
      game.update(1000 / 60);
      if (i % 500 === 499) parts.push(game.units.map((u: any) => [u.position.x.toFixed(6), u.position.y.toFixed(6), u.percent.toFixed(8), u.fsm?.state ?? "p", u.base.polygon.segments.length].join(",")).join(";") + `|${game.events.kills}|${game.cycle}`);
    }
    const p = game.player;
    return { state: parts.join("\n"), player: p ? { pct: +(p.percent * 100).toFixed(2), kills: p.statistics.kills, dead: !!p.death } : null };
  }, { seed, ticks });

const hash = (s: string) => new Bun.CryptoHasher("sha256").update(s).digest("hex").slice(0, 16);
const hosted = await load("https://paperio.site/", "paperio.site");
const ours = await load(process.env.BASE_URL ?? "http://localhost:3000/");
let same = 0;
for (let seed = 1; seed <= seeds; seed++) {
  const ra = await simulate(hosted, seed * 12345);
  const rb = await simulate(ours, seed * 12345);
  const a = hash(ra.state), b = hash(rb.state);
  if (a === b) same++;
  console.log(`seed ${seed}: hosted ${a}  ours ${b}  ${a === b ? "MATCH" : "DIFF"}  player ${JSON.stringify(rb.player)}`);
}
console.log(`${same}/${seeds} seeds identical`);
await browser.close();
