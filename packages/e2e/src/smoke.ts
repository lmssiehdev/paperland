// Headless smoke test: boot, check the menu (nick, Play, mode buttons), start a round with the Play
// button, screenshot, check units move, report errors. Exits 1 on any failed check or page error.
// Also switches the language (RU and back): a menu string and the game's strings must follow, and the
// extra-life popup must use the current language.
// usage: [BASE_URL=http://localhost:3000/] bun packages/e2e/src/smoke.ts [url] [label]
import { chromium } from "playwright";
const SHOTS = new URL("../../../shots", import.meta.url).pathname;

const [url = process.env.BASE_URL ?? "http://localhost:3000/", label = "deob"] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

// Block anything that isn't our local mirror.
const external: string[] = [];
await page.route("**/*", r => {
  const requested = new URL(r.request().url());
  if (requested.hostname === "localhost") return r.continue();
  external.push(requested.href);
  return r.abort();
});

const errors: string[] = [];
const logs: string[] = [];
page.on("pageerror", e => errors.push(e.message));
page.on("console", m => logs.push(`[${m.type()}] ${m.text()}`));

await page.goto(url);
await page.waitForFunction(() => (window as any).paperio2api, null, { timeout: 15000 });
const apiKeys = await page.evaluate(() => Object.keys((window as any).paperio2api));
await page.waitForSelector("#play");
// The self-hosted UI font must actually load (no Google Fonts).
const fontLoaded = await page.evaluate(async () => {
  await document.fonts.ready;
  await document.fonts.load("700 16px 'PT Sans Caption'");
  return [...document.fonts].some(
    font => font.family.replace(/["']/g, "") === "PT Sans Caption" && font.status === "loaded"
  );
});
const menu = await page.evaluate(() => ({
  nick: !!document.getElementById("nick"),
  play: document.getElementById("play")?.textContent ?? null,
  modeButtons: [...document.querySelectorAll(".modes button")].map(b => b.id)
}));
await page.screenshot({ path: `${SHOTS}/${label}-menu.png` });

// Language switch through the footer (I18nProvider) -> menu text and game strings (GameSession.setLanguage).
const playText = () => page.evaluate(() => document.getElementById("play")!.textContent);
const gameStrings = () => page.evaluate(() => (window as any).paperio2api.game.language.btnPlay as string);
const clickLanguage = (code: string) => page.locator("#lng li", { hasText: new RegExp(`^${code}$`) }).click();
await clickLanguage("RU");
const switched = { menu: await playText(), game: await gameStrings() };
await clickLanguage("EN");
const switchedBack = { menu: await playText(), game: await gameStrings() };
const languageOk =
  switched.menu === "ИГРАТЬ" &&
  switched.game === "ИГРАТЬ" &&
  switchedBack.menu === menu.play &&
  switchedBack.game === menu.play;

await page.click("#play");
await page.waitForFunction(() => !!(window as any).paperio2api.game.player, null, { timeout: 10000 });
await page.waitForTimeout(4000);
await page.screenshot({ path: `${SHOTS}/${label}-ingame.png` });

// Unit positions by name, 1 s apart, while the real rAF loop runs.
const positions = () =>
  page.evaluate(
    () =>
      Object.fromEntries(
        (window as any).paperio2api.game.units.map((u: any) => [u.name, [u.position.x, u.position.y]])
      ) as Record<string, [number, number]>
  );
const before = await positions();
await page.waitForTimeout(1000);
const after = await positions();
const unitsMoved = Object.keys(after).filter(
  name => before[name] && Math.hypot(after[name]![0] - before[name]![0], after[name]![1] - before[name]![1]) > 1
).length;
const hasPlayer = await page.evaluate(() => !!(window as any).paperio2api.game.player);
// Extra-life popup: a continue-style start must label the player in the current language (was always Russian).
const extraLife = await page.evaluate(() => {
  const api = (window as any).paperio2api;
  api.start({ name: "again", skin: "", best: 0, extraLife: 0.01 });
  return api.game.player.labels.map((label: { text: string }) => label.text).join("|");
});

const menuOk = menu.nick && !!menu.play && menu.modeButtons.includes("mode-classic");
const extraLifeOk = extraLife === "EXTRA LIFE!";
console.log(
  JSON.stringify(
    {
      label,
      apiKeys,
      menu,
      switched,
      switchedBack,
      extraLife,
      hasPlayer,
      units: Object.keys(after).length,
      unitsMoved,
      errors,
      logs: logs.slice(0, 15)
    },
    null,
    2
  )
);
// Teams: fresh page, pick Teams, Play -> a teams round with the player in it.
await page.reload();
await page.waitForSelector("#mode-teams");
await page.click("#mode-teams");
await page.click("#play");
await page.waitForFunction(() => !!(window as any).paperio2api.game.player, null, { timeout: 10000 });
const teams = await page.evaluate(() => {
  const game = (window as any).paperio2api.game;
  return { mode: game.mode.id as string, teams: game.mode.teams.length as number, playerTeam: !!game.player.team };
});
const teamsOk = teams.mode === "teams" && teams.teams > 0 && teams.playerTeam;
console.log(JSON.stringify({ teams, external, fontLoaded }));
await browser.close();
if (
  external.length ||
  !fontLoaded ||
  !teamsOk ||
  errors.length ||
  !menuOk ||
  !languageOk ||
  !extraLifeOk ||
  !unitsMoved ||
  !hasPlayer
)
  process.exit(1);
