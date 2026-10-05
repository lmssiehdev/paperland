// Hashes (hashDoubles in trig-inputs.ts) of Playwright Chromium 153's native Math.sin/cos/atan2 over
// trigInputs(fn) (5.08M inputs each for sin and cos, 5.16M pairs for atan2). e2e/test/trig-bit-exact.test.ts
// checks they are Chromium's own outputs (and trig.ts's in Chromium); core/test/trig.test.ts checks trig.ts
// reproduces them in Bun.
export const CHROMIUM_TRIG_HASHES = {
  sin: "3f228826d3acc45a",
  cos: "92cf210dbd008a9e",
  atan2: "02de369c4698c5fe"
} as const;
