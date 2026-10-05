// Proves core's trig.ts (sin, cos, atan2) is bit-identical to Playwright Chromium's native Math.sin/cos/atan2
// on millions of inputs (core/test/trig-inputs.ts), and that the checked-in output hashes core's Bun test
// compares against (core/test/trig-fixture.ts) are Chromium's own.
import { expect, test } from "bun:test";
import { chromium } from "playwright";
import { CHROMIUM_TRIG_HASHES } from "../../core/test/trig-fixture";
import type { TrigFunction } from "../../core/test/trig-inputs";
import type { TrigCheckResult } from "./trig-bit-exact.entry";

declare global {
  interface Window {
    /** Installed by trig-bit-exact.entry.ts. */
    trigCheck?: (fn: TrigFunction) => TrigCheckResult;
  }
}

test("trig.ts is bit-exact with Chromium's Math.sin/cos/atan2", async () => {
  const build = await Bun.build({
    entrypoints: [new URL("./trig-bit-exact.entry.ts", import.meta.url).pathname],
    format: "iife"
  });
  expect(build.success).toBe(true);
  const bundle = await build.outputs[0]!.text();

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto("about:blank");
    await page.addScriptTag({ content: bundle });
    const results = [];
    for (const fn of ["sin", "cos", "atan2"] as const) {
      const result = await page.evaluate(name => window.trigCheck!(name), fn);
      console.log(`${fn}: ${result.count} inputs, ${result.mismatches} mismatches, native hash ${result.nativeHash}`);
      if (result.mismatches > 0) {
        console.log(fn, "mismatches, e.g. [input(s)..., native, port]:", result.examples);
      }
      results.push({ fn, ...result });
    }
    for (const { fn, count, mismatches, nativeHash, portHash } of results) {
      expect(count).toBeGreaterThanOrEqual(5_000_000);
      expect({ fn, mismatches, nativeHash, portHash }).toEqual({
        fn,
        mismatches: 0,
        nativeHash: CHROMIUM_TRIG_HASHES[fn],
        portHash: CHROMIUM_TRIG_HASHES[fn]
      });
    }
  } finally {
    await browser.close();
  }
}, 300_000);
