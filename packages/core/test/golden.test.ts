// Headless golden in Bun (no browser, no DOM). See golden-scenario.ts.
//
// Bun's hash differs from the browser's 11a98dae6745f942 for one reason only: JavaScriptCore's
// Math.sin/cos/atan2 differ from Chromium V8's in the last bit (1 ulp) for ~2.5% of the inputs this
// run produces, and the sim amplifies that. The very same headless core bundle run inside Chromium gives
// 11a98dae6745f942 (e2e/test/headless-golden.test.ts), so core is behavior-identical to the browser
// build; the constant below is Bun's (JSC's) result for the same scenario. If a Bun upgrade changes its
// libm this may move: re-check that the Chromium test still passes, then update it.
import { expect, test } from "bun:test";
import type { LanguageStrings } from "@paperio/core/language";
import { runGoldenScenario } from "./golden-scenario";

const BUN_GOLDEN_HASH = "e969d562c614ced4";

const assets = new URL("../../../original/assets/", import.meta.url).pathname;
const skinNames = ((await Bun.file(assets + "skins/skins.json").json()) as { name: string }[]).map(skin => skin.name);
const language = ((await Bun.file(assets + "languages.json").json()) as { en: LanguageStrings }).en;
const sha16 = (text: string) => new Bun.CryptoHasher("sha256").update(text).digest("hex").slice(0, 16);

test("headless golden in Bun is deterministic and pinned", () => {
  const first = runGoldenScenario({ skinNames, language });
  const second = runGoldenScenario({ skinNames, language });
  const hash = sha16(first.checkpoints.join("\n"));
  expect(sha16(second.checkpoints.join("\n"))).toBe(hash);
  expect({ hash, units: first.units, kills: first.kills }).toEqual({
    hash: BUN_GOLDEN_HASH,
    units: first.units,
    kills: first.kills
  });
});

test("headless game does not touch the real Math.random", () => {
  const random = Math.random;
  runGoldenScenario({ skinNames, language }, 10);
  expect(Math.random).toBe(random);
});
