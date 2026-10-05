// Headless golden in Bun (no browser, no DOM). See golden-scenario.ts.
//
// Bun gives the browser golden hash, 11a98dae6745f942, exactly like the same core bundle run inside Chromium
// (e2e/test/headless-golden.test.ts) and the real page (e2e/src/golden.ts). That holds because core computes
// sin/cos/atan2 with engine/trig.ts (bit-exact ports of Chromium V8's implementations) instead of Math.*,
// whose last bit differs between JavaScriptCore and V8 (it gave e969d562c614ced4 here before).
import { expect, test } from "bun:test";
import { BROWSER_GOLDEN_HASH, loadGoldenSetup, runGoldenScenario } from "./golden-scenario";

const { skinNames, language } = await loadGoldenSetup();
const sha16 = (text: string) => new Bun.CryptoHasher("sha256").update(text).digest("hex").slice(0, 16);

test("headless golden in Bun is deterministic and equals the browser golden", () => {
  const first = runGoldenScenario({ skinNames, language });
  const second = runGoldenScenario({ skinNames, language });
  const hash = sha16(first.checkpoints.join("\n"));
  expect(sha16(second.checkpoints.join("\n"))).toBe(hash);
  expect({ hash, units: first.units, kills: first.kills }).toEqual({
    hash: BROWSER_GOLDEN_HASH,
    units: first.units,
    kills: first.kills
  });
});

test("headless game does not touch the real Math.random", () => {
  const random = Math.random;
  runGoldenScenario({ skinNames, language }, 10);
  expect(Math.random).toBe(random);
});
