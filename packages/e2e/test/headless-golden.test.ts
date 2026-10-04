// Proves core is headless AND behavior-identical to the browser build: bundles core's golden scenario
// (no client code, no page, no DOM) and runs it inside Playwright's Chromium on about:blank. It must give
// the browser golden hash. In Bun the same code gives a different hash only because JSC's sin/cos/atan2
// differ from V8's by 1 ulp (see core/test/golden.test.ts).
import { expect, test } from "bun:test";
import { chromium } from "playwright";
import { BROWSER_GOLDEN_HASH, loadGoldenSetup } from "../../core/test/golden-scenario";
import type { runGoldenScenario } from "../../core/test/golden-scenario";

declare global {
  interface Window {
    /** Installed by headless-golden.entry.ts. */
    runGoldenScenario?: typeof runGoldenScenario;
  }
}

test("headless core in Chromium matches the browser golden", async () => {
  const build = await Bun.build({
    entrypoints: [new URL("./headless-golden.entry.ts", import.meta.url).pathname],
    format: "iife"
  });
  expect(build.success).toBe(true);
  const bundle = await build.outputs[0]!.text();
  const setup = await loadGoldenSetup();

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto("about:blank");
    await page.addScriptTag({ content: bundle });
    const result = await page.evaluate(setup => window.runGoldenScenario!(setup), setup);
    const hash = new Bun.CryptoHasher("sha256").update(result.checkpoints.join("\n")).digest("hex").slice(0, 16);
    expect(hash).toBe(BROWSER_GOLDEN_HASH);
  } finally {
    await browser.close();
  }
}, 60000);
