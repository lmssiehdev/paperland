// Headless probe: start a Battle Royale round via the real UI button, then step the game manually
// and log zone stages, zone radius/center, HP/buff of the player and bots, kills (with reasons),
// the winner, and the results.php body (decoded).
// usage: bun modes/battleroyale/probes/round.ts [maxTicks=14000] [dtMs=16.667] [playerMode=center|straight]
import { chromium } from "playwright";

const [maxTicksArg = "14000", dtArg = String(1000 / 60), playerMode = "center"] = process.argv.slice(2);
const maxTicks = Number(maxTicksArg);
const dt = Number(dtArg);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const posts: string[] = [];
await page.route("**/*", (r) => {
  const u = new URL(r.request().url());
  if (u.hostname !== "localhost") return r.abort();
  if (u.pathname.endsWith("results.php")) posts.push(r.request().postData() ?? "");
  return r.continue();
});
const errors: string[] = [];
page.on("pageerror", (e) => errors.push(e.message));

await page.goto("http://localhost:3000/battleroyale/");
await page.waitForFunction(() => (window as any).paperio2api?.game, null, { timeout: 15000 });
const boot = await page.evaluate(() => {
  const g = (window as any).paperio2api.game;
  return { build: g.build, unitsAtBoot: g.units.length, scheme: g.scheme.name, stage: g.scheme.current, borderRadius: g.border.radius, center: [g.border.center.x, g.border.center.y] };
});
console.log("boot", JSON.stringify(boot));

// Real UI flow: Play button -> token.php + ads.preroll() -> ads.onClose -> route "game" -> api.start(...)
await page.click("#play");
await page.waitForFunction(() => (window as any).paperio2api.game.player, null, { timeout: 10000 });
const t0 = Date.now();
await page.evaluate(() => {
  const g = (window as any).paperio2api.game;
  g.stopped = true; // halt the rAF loop; we step manually below
  const w = window as any;
  w.__kills = [];
  const origKill = g.kill.bind(g);
  g.kill = (unit: any, killer: any, reason: number) => {
    if (!unit.death) w.__kills.push({ t: w.__tick ?? 0, name: unit.name, isPlayer: !!unit.isPlayer, killer: killer?.name ?? null, reason, hp: unit.scheme?.HP, maxHP: unit.scheme?.maxHP, alive: g.units.length });
    return origKill(unit, killer, reason);
  };
  w.__over = null;
  const cb = g.gameOverCallback;
  g.gameOverCallback = (r: any) => { w.__over = { ...r, game: undefined, image: r.image?.slice(0, 30) }; cb && cb(r); };
});
// Bots are added by setTimeout(500..2500ms) chains in real time; wait until all start positions are filled.
await page.waitForFunction(() => !(window as any).paperio2api.game.scheme.preparing, null, { timeout: 60000 });
console.log("all spawned after", Date.now() - t0, "ms real time");

const snap = await page.evaluate(() => {
  const g = (window as any).paperio2api.game;
  return { units: g.units.length, teams: g.teams.length, teamSizes: g.teams.map((t: any) => t.units.length), states: g.units.map((u: any) => u.fsm?.state ?? "player"), ignoreIntersections: g.ignoreIntersections, stage: g.scheme.current, startPositions: g.scheme.startPositions.length };
});
console.log("spawned", JSON.stringify(snap));

let lastStage = -1;
for (let tick = 0; tick < maxTicks; tick += 60) {
  const s = await page.evaluate(({ dt, n, playerMode, tick }) => {
    const g = (window as any).paperio2api.game;
    const w = window as any;
    for (let i = 0; i < n; i++) {
      w.__tick = tick + i;
      const p = g.player;
      if (p && !p.death && playerMode === "center") {
        // steer the player towards the current zone center (keeps it alive-ish, leaves trails)
        const c = g.scheme.currentZoneCenter || g.border.center;
        g.direction.set(c.x - p.position.x, c.y - p.position.y).normalize();
      }
      g.update(dt);
    }
    const sc = g.scheme;
    const st = sc.stages[sc.current];
    const p = g.player;
    const unsafe = g.units.filter((u: any) => !u.scheme.safe);
    return {
      tick: tick + n, stage: sc.current, timer: Math.round(sc.timer), active: sc.active,
      text: st ? (sc.active ? st.activeText : st.preparingText(Math.round((st.preparing - sc.timer) / 1000))) : null,
      zoneR: sc.currentZoneRadius && +sc.currentZoneRadius.toFixed(2),
      zoneC: sc.currentZoneCenter && [+sc.currentZoneCenter.x.toFixed(1), +sc.currentZoneCenter.y.toFixed(1)],
      nextR: sc.nextZoneRadius && +sc.nextZoneRadius.toFixed(2),
      alive: g.units.length, unsafe: unsafe.length,
      minHP: g.units.length ? Math.min(...g.units.map((u: any) => u.scheme.HP)).toFixed(1) : null,
      player: p ? { hp: +p.scheme.HP.toFixed(1), maxHP: p.scheme.maxHP, buff: Math.round(p.scheme.buff), safe: p.scheme.safe, kills: p.statistics.kills, top: p.top, death: !!p.death } : null,
      states: Object.entries(g.units.reduce((a: any, u: any) => { const k = u.fsm?.state ?? "PLAYER"; a[k] = (a[k] || 0) + 1; return a; }, {})).map(([k, v]) => k + ":" + v).join(","),
      over: w.__over,
    };
  }, { dt, n: 60, playerMode, tick });
  if (s.stage !== lastStage || tick % 600 === 0) {
    console.log(JSON.stringify(s));
    lastStage = s.stage;
  }
  if (s.alive <= 1 && s.stage >= 2) { console.log("END", JSON.stringify(s)); break; }
}
// let the winDelay / kill-delay setTimeouts fire, then results screen posts results.php
await page.waitForTimeout(12000);
const tail = await page.evaluate(() => ({ kills: (window as any).__kills, over: (window as any).__over }));
const reasons: Record<string, number> = {};
for (const k of tail.kills) reasons[k.reason] = (reasons[k.reason] || 0) + 1;
console.log("kill reasons histogram", JSON.stringify(reasons));
console.log("kills", JSON.stringify(tail.kills.slice(0, 40)));
console.log("gameOver result", JSON.stringify(tail.over));
console.log("results.php posts", posts.length);
if (posts.length) {
  const token = "fad34e08bb15f388bd5b67e574e08157"; // replayed token.php
  const key = `..1${token}2${await page.evaluate(() => (window as any).playerId)}3..`;
  const body = posts[0];
  let b64 = "";
  for (let i = 0; i < body.length; i++) b64 += String.fromCharCode(body.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  console.log("decoded results.php", decodeURIComponent(atob(b64)));
}
console.log("errors", JSON.stringify(errors));
await browser.close();
