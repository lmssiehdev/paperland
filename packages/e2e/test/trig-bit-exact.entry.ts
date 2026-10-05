// Bundle entry for trig-bit-exact.test.ts: compares core's trig.ts with the page's native Math.* bit for bit.
import { atan2, cos, sin } from "../../core/src/engine/trig";
import { evaluate, hashDoubles, trigInputs } from "../../core/test/trig-inputs";
import type { TrigFunction } from "../../core/test/trig-inputs";

export interface TrigCheckResult {
  count: number;
  mismatches: number;
  /** First mismatches as [input(s)..., native, port], in exact (round-trip) decimal. */
  examples: number[][];
  nativeHash: string;
  portHash: string;
}

const native = { sin: Math.sin, cos: Math.cos, atan2: Math.atan2 };
const port = { sin, cos, atan2 };

function trigCheck(fn: TrigFunction): TrigCheckResult {
  const inputs = trigInputs(fn);
  const expected = evaluate(fn, inputs, native);
  const actual = evaluate(fn, inputs, port);
  const expectedBits = new Uint32Array(expected.buffer);
  const actualBits = new Uint32Array(actual.buffer);
  const arity = fn === "atan2" ? 2 : 1;
  let mismatches = 0;
  const examples: number[][] = [];
  for (let i = 0; i < expected.length; i++) {
    // Bit patterns, not ===: -0 vs +0 is a mismatch. Any NaN equals any NaN (JS cannot observe NaN payloads
    // reliably, engines canonicalize them).
    const bothNaN = expected[i] !== expected[i] && actual[i] !== actual[i];
    if (!bothNaN && (expectedBits[2 * i] !== actualBits[2 * i] || expectedBits[2 * i + 1] !== actualBits[2 * i + 1])) {
      mismatches++;
      if (examples.length < 20) {
        examples.push([...inputs.subarray(i * arity, i * arity + arity), expected[i], actual[i]]);
      }
    }
  }
  return {
    count: expected.length,
    mismatches,
    examples,
    nativeHash: hashDoubles(expected),
    portHash: hashDoubles(actual)
  };
}

Object.assign(globalThis, { trigCheck });
