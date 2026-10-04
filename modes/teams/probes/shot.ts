// Screenshot of a Teams round a few seconds in (HUD check). usage: bun modes/teams/probes/shot.ts
import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.route("**/*", (r) => (new URL(r.request().url()).hostname === "localhost" ? r.continue() : r.abort()));
await page.goto("http://localhost:3000/teams/");
await page.waitForFunction(() => (window as any).paperio2api?.game?.units?.length > 0, null, { timeout: 30000 });
await page.evaluate(() => (window as any).StartGame());
await page.waitForTimeout(2500);
await page.screenshot({ path: "modes/teams/probes/ingame.png" });
await browser.close();
