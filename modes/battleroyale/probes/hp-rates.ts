// Measures HP drain / regen / buff rates of the BattleRoyale scheme directly.
// usage: bun modes/battleroyale/probes/hp-rates.ts
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.route("**/*", (r) => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
await page.goto("http://localhost:3000/battleroyale/");
await page.waitForFunction(() => (window as any).paperio2api?.game, null, { timeout: 15000 });
await page.click("#play");
await page.waitForFunction(() => (window as any).paperio2api.game.player, null, { timeout: 10000 });
await page.evaluate(() => { (window as any).paperio2api.game.stopped = true; });

const out = await page.evaluate(() => {
  const g = (window as any).paperio2api.game;
  const sc = g.scheme;
  const p = g.player;
  const dt = 1000 / 60;
  const step = (n: number) => { for (let i = 0; i < n; i++) { sc.updateSensors(p); sc.updateUnit(p, dt); } };
  const r: Record<string, unknown> = {};
  // 1) outside the zone: shrink the zone to a tiny circle far from the player
  const saveR = sc.currentZoneRadius, saveC = sc.currentZoneCenter;
  sc.currentZoneRadius = 1; sc.currentZoneCenter = g.border.center.clone().add({ x: 0, y: 0 } as any);
  if (p.position.distance(sc.currentZoneCenter) < 5) sc.currentZoneCenter.x += 100;
  step(60);
  r.drainPerSecond_maxHP100 = +(100 - p.scheme.HP).toFixed(3);
  // 2) back inside: regen
  sc.currentZoneRadius = saveR; sc.currentZoneCenter = saveC;
  const before = p.scheme.HP; step(60);
  r.regenPerSecond = +(p.scheme.HP - before).toFixed(3);
  // 3) kill reward via scheme.kill(killer, victim)
  p.scheme.HP = 100;
  sc.kill(p, { name: "dummy" });
  r.afterKill = { maxHP: p.scheme.maxHP, buffMs: p.scheme.buff };
  const hp0 = p.scheme.HP;
  sc.currentZoneRadius = 1; sc.currentZoneCenter = g.border.center.clone(); if (p.position.distance(sc.currentZoneCenter) < 5) sc.currentZoneCenter.x += 100;
  step(60);
  r.netPerSecondOutsideWhileBuffed = +(p.scheme.HP - hp0).toFixed(3); // +25 buff - 33.3 drain
  r.buffLeftMs = Math.round(p.scheme.buff);
  // 4) comeback buff: increment = fraction of arena captured
  p.scheme.buff = 0;
  sc.comeback(p, { increment: 0.01 });
  r.comebackBuffMsFor1pct = p.scheme.buff;
  r.labels = g.labels.map((l: any) => l.text);
  return r;
});
console.log(JSON.stringify(out, null, 2));
await browser.close();
