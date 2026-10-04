// The golden scenario, shared by the headless tests: core/test/golden.test.ts runs it in Bun and
// e2e/test/headless-golden.test.ts bundles it into Chromium. Same scenario as e2e/src/golden.ts (which runs
// it on the real page): mulberry32-seeded Math.random (seed 12345), fresh game, 4000 ticks of
// update(1000/60), player spawned at tick 1000, a state snapshot every 500 ticks.
import { createHeadlessGame } from "../src/headless";
import type { HeadlessGameOptions } from "../src/headless";
import type { LanguageStrings } from "../src/language";
import type { Unit } from "../src/game/units";

/** Expected hash in Chromium (Playwright's build): the browser golden, see README "Checks". */
export const BROWSER_GOLDEN_HASH = "11a98dae6745f942";

export const mulberry32 = (seed: number) => {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export type GoldenSetup = Pick<HeadlessGameOptions, "skinNames" | "language">;

/** Skin names and English strings from the captured assets, as the browser loads them. */
export const loadGoldenSetup = async (): Promise<GoldenSetup> => {
  const assets = new URL("../../../original/assets/", import.meta.url).pathname;
  // SAFETY: captured asset files with a fixed shape (the client and server read the same files).
  const skins = (await Bun.file(assets + "skins/skins.json").json()) as { name: string }[];
  // SAFETY: as above; "en" is the complete entry.
  const languages = (await Bun.file(assets + "languages.json").json()) as { en: LanguageStrings };
  return { skinNames: skins.map(skin => skin.name), language: languages.en };
};

export interface GoldenResult {
  checkpoints: string[];
  units: number;
  kills: number;
}

/** Runs the scenario with Math.random seeded (restored afterwards). Hash `checkpoints.join("\n")` with sha256. */
export function runGoldenScenario(setup: GoldenSetup, ticks = 4000): GoldenResult {
  const realRandom = Math.random;
  Math.random = mulberry32(12345);
  try {
    const game = createHeadlessGame(setup);
    game.debugView = true;
    const snap = () =>
      game.units
        .map((u: Unit) =>
          [
            u.position.x.toFixed(6),
            u.position.y.toFixed(6),
            u.percent.toFixed(8),
            u.fsm?.state ?? "p",
            u.base.polygon.segments.length
          ].join(",")
        )
        .join(";") + `|kills:${game.events.kills}|cycle:${game.cycle}`;
    const checkpoints: string[] = [];
    for (let i = 0; i < ticks; i++) {
      if (i === 1000) game.spawnPlayer("golden", "", 0);
      game.update(1000 / 60);
      if (i % 500 === 499) checkpoints.push(snap());
    }
    game.stop();
    return { checkpoints, units: game.units.length, kills: game.events.kills };
  } finally {
    Math.random = realRandom;
  }
}
