// Headless smoke test: boot the game, start a round, screenshot, report errors.
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
await page.screenshot({ path: `${SHOTS}/${label}-menu.png` });

await page.evaluate(() => (window as any).paperio2api.startGame());
await page.waitForTimeout(4000);
await page.screenshot({ path: `${SHOTS}/${label}-ingame.png` });

console.log(JSON.stringify({ label, apiKeys, errors, logs: logs.slice(0, 15) }, null, 2));
await browser.close();
