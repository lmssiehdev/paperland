// Headless smoke test: boot, check the menu (nick, Play, mode buttons), start a round with the Play
// button, screenshot, check units move, report errors. Exits 1 on any failed check or page error.
// usage: [BASE_URL=http://localhost:3000/] bun packages/e2e/src/smoke.ts [url] [label]
import { chromium } from "playwright";
const SHOTS = new URL("../../../shots", import.meta.url).pathname;

const [url = process.env.BASE_URL ?? "http://localhost:3000/", label = "deob"] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

// Block anything that isn't our local mirror.
await page.route("**/*", (r) => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));

const errors: string[] = [];
const logs: string[] = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => logs.push(`[${m.type()}] ${m.text()}`));

await page.goto(url);
await page.waitForFunction(() => (window as any).paperio2api, null, { timeout: 15000 });
const apiKeys = await page.evaluate(() => Object.keys((window as any).paperio2api));
await page.waitForSelector("#play");
const menu = await page.evaluate(() => ({
  nick: !!document.getElementById("nick"),
  play: document.getElementById("play")?.textContent ?? null,
  modeButtons: [...document.querySelectorAll(".modes button")].map(b => b.id),
}));
await page.screenshot({ path: `${SHOTS}/${label}-menu.png` });

await page.click("#play");
await page.waitForFunction(() => !!(window as any).paperio2api.game.player, null, { timeout: 10000 });
await page.waitForTimeout(4000);
await page.screenshot({ path: `${SHOTS}/${label}-ingame.png` });

// Unit positions by name, 1 s apart, while the real rAF loop runs.
const positions = () => page.evaluate(() => Object.fromEntries((window as any).paperio2api.game.units.map((u: any) => [u.name, [u.position.x, u.position.y]])) as Record<string, [number, number]>);
const before = await positions();
await page.waitForTimeout(1000);
const after = await positions();
const unitsMoved = Object.keys(after).filter(name => before[name] && Math.hypot(after[name]![0] - before[name]![0], after[name]![1] - before[name]![1]) > 1).length;
const hasPlayer = await page.evaluate(() => !!(window as any).paperio2api.game.player);

const menuOk = menu.nick && !!menu.play && menu.modeButtons.includes("mode-classic");
console.log(JSON.stringify({ label, apiKeys, menu, hasPlayer, units: Object.keys(after).length, unitsMoved, errors, logs: logs.slice(0, 15) }, null, 2));
await browser.close();
if (errors.length || !menuOk || !unitsMoved || !hasPlayer) process.exit(1);
