// Engine independence: trig.ts run in Bun (JavaScriptCore) must give exactly the outputs Chromium's native
// Math.sin/cos/atan2 give on the same 5M+ inputs (hashes recorded in Chromium, see trig-fixture.ts).
// JSC's own Math.* differ from them in the last bit on a few percent of these inputs.
import { expect, test } from "bun:test";
import { atan2, cos, sin } from "../src/engine/trig";
import { CHROMIUM_TRIG_HASHES } from "./trig-fixture";
import { evaluate, hashDoubles, trigInputs } from "./trig-inputs";

for (const fn of ["sin", "cos", "atan2"] as const) {
  test(`trig.ts ${fn} in Bun reproduces Chromium's Math.${fn}`, () => {
    const outputs = evaluate(fn, trigInputs(fn), { sin, cos, atan2 });
    expect(hashDoubles(outputs)).toBe(CHROMIUM_TRIG_HASHES[fn]);
  });
}

test("trig.ts edge cases", () => {
  expect(Object.is(sin(-0), -0)).toBe(true);
  expect(Object.is(sin(0), 0)).toBe(true);
  expect(cos(-0)).toBe(1);
  expect(Number.isNaN(sin(Infinity))).toBe(true);
  expect(Number.isNaN(cos(-Infinity))).toBe(true);
  expect(Number.isNaN(sin(NaN))).toBe(true);
  expect(Number.isNaN(atan2(NaN, 1))).toBe(true);
  expect(Object.is(atan2(0, 0), 0)).toBe(true);
  expect(Object.is(atan2(-0, 0), -0)).toBe(true);
  expect(atan2(0, -0)).toBe(Math.PI);
  expect(atan2(-0, -0)).toBe(-Math.PI);
  expect(atan2(1, 0)).toBe(Math.PI / 2);
  expect(atan2(Infinity, -Infinity)).toBe((3 * Math.PI) / 4);
});
