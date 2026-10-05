// Deterministic input sets for the trig.ts checks, shared by the Chromium bit-exactness test
// (e2e/test/trig-bit-exact.test.ts) and the Bun engine-independence test (core/test/trig.test.ts).
//
// Generation uses only integer ops and exactly specified IEEE double ops (no Math.sin/cos/...), so every
// engine builds the very same inputs. (The game-vector atan2 inputs use trig.ts's own sin/cos, as the game does.)

import { cos, sin } from "../src/engine/trig";

export type TrigFunction = "sin" | "cos" | "atan2";

const F64 = new Float64Array(1);
const U32 = new Uint32Array(F64.buffer);
const fromWords = (hi: number, lo: number): number => {
  U32[1] = hi;
  U32[0] = lo;
  return F64[0];
};

/** xorshift128 (32-bit words), seeded per input set. */
function createRandom(seed: number): () => number {
  let a = seed | 0 || 1;
  let b = 0x9e3779b9;
  let c = 0x85ebca6b;
  let d = 0xc2b2ae35;
  return () => {
    const t = a ^ (a << 11);
    a = b;
    b = c;
    c = d;
    d = (d ^ (d >>> 19) ^ (t ^ (t >>> 8))) >>> 0;
    return d;
  };
}

const TWO_32 = 4294967296;
const TWO_M53 = 1 / 9007199254740992;

class InputBuilder {
  readonly next: () => number;
  private values: number[] = [];
  constructor(seed: number) {
    this.next = createRandom(seed);
  }
  push(...values: number[]): void {
    for (const value of values) {
      this.values.push(value);
    }
  }
  /** Uniform in [0, 1) with 53 random bits. */
  unit(): number {
    return ((this.next() >>> 11) * TWO_32 + this.next()) * TWO_M53;
  }
  /** Uniform in (-range, range). */
  uniform(range: number): number {
    return (this.unit() * 2 - 1) * range;
  }
  /** Random sign, random mantissa, biased exponent uniform in [minExp, maxExp]. */
  withExponent(minExp: number, maxExp: number): number {
    const exponent = minExp + (this.next() % (maxExp - minExp + 1));
    const sign = this.next() & 0x80000000;
    return fromWords((sign | (exponent << 20) | (this.next() & 0xfffff)) >>> 0, this.next());
  }
  /** Any 64-bit pattern (includes subnormals, infinities and NaNs). */
  bits(): number {
    return fromWords(this.next(), this.next());
  }
  build(): Float64Array {
    return Float64Array.from(this.values);
  }
}

const SPECIALS = [
  0,
  -0,
  Infinity,
  -Infinity,
  NaN,
  Number.MIN_VALUE,
  -Number.MIN_VALUE,
  Number.MAX_VALUE,
  -Number.MAX_VALUE,
  2.2250738585072014e-308,
  -2.2250738585072014e-308,
  2.225073858507201e-308,
  1,
  -1,
  0.5,
  2,
  Math.PI,
  -Math.PI,
  Math.PI / 2,
  -Math.PI / 2,
  Math.PI / 4,
  Math.PI * 2,
  65536,
  -65536,
  65535.99999999999,
  0.0625,
  0.06249999999999999,
  1.4901161193847656e-8,
  7.450580596923828e-9,
  1e22,
  2 ** 52,
  2 ** 53,
  2 ** 62,
  2 ** 1023
];

/** Angles the game itself produces: quantized directions, circle vertices, turn rates. */
function gameAngles(): number[] {
  const angles: number[] = [];
  for (let k = 0; k < 254; k++) {
    angles.push((k * Math.PI) / 127, (-k * Math.PI) / 127);
  }
  for (let k = 0; k < 240; k++) {
    angles.push((k * Math.PI * 2) / 240, (-k * Math.PI * 2) / 240);
  }
  // circlePoints(): i += 2 * PI / count, for every vertex count the game could use.
  const fullTurn = Math.PI * 2;
  for (let count = 3; count <= 400; count++) {
    const step = fullTurn / count;
    for (let i = 0; i < fullTurn - 1.4901161193847656e-8; i += step) {
      angles.push(i);
    }
  }
  for (const fraction of [2, 3, 4, 6, 8, 10, 30, 1.5, 4 / 3]) {
    angles.push(Math.PI / fraction, -Math.PI / fraction);
  }
  return angles;
}

function sinCosInputs(seed: number): Float64Array {
  const input = new InputBuilder(seed);
  input.push(...SPECIALS, ...gameAngles());
  for (let i = 0; i < 1_000_000; i++) {
    input.push(input.uniform(Math.PI));
  }
  for (let i = 0; i < 1_000_000; i++) {
    input.push(input.uniform(1e3));
  }
  for (let i = 0; i < 1_000_000; i++) {
    input.push(input.uniform(1e6));
  }
  // |x| < 2^-4 (polynomial path, no range reduction), down to 2^-40.
  for (let i = 0; i < 500_000; i++) {
    input.push(input.withExponent(1023 - 40, 1023 - 5));
  }
  // Huge: 2^16 <= |x| < 2^1024 (large range reduction).
  for (let i = 0; i < 500_000; i++) {
    input.push(input.withExponent(1023 + 16, 2046));
  }
  // Tiny normals and subnormals.
  for (let i = 0; i < 125_000; i++) {
    input.push(input.withExponent(1, 1023 - 41));
  }
  for (let i = 0; i < 125_000; i++) {
    input.push(fromWords((input.next() & 0x800fffff) >>> 0, input.next()));
  }
  // Any bit pattern (infinities and NaNs included).
  for (let i = 0; i < 500_000; i++) {
    input.push(input.bits());
  }
  // Within a few ulps of k * pi/128 (hard cases for the range reduction and the rounding test).
  const piOver128 = Math.PI / 128;
  for (let i = 0; i < 250_000; i++) {
    const k = input.next() % (i < 125_000 ? 2048 : 4194304);
    const center = k * piOver128;
    F64[0] = center;
    const hi = U32[1];
    const lo = (U32[0] + (input.next() % 33) - 16) >>> 0;
    const value = fromWords(hi, lo);
    input.push(input.next() & 1 ? -value : value);
  }
  return input.build();
}

/** atan2 inputs as interleaved (y, x) pairs. */
function atan2Inputs(seed: number): Float64Array {
  const input = new InputBuilder(seed);
  const specials = [...SPECIALS, 1e-300, -1e-300, 1e300, -1e300, 3, -3];
  for (const y of specials) {
    for (const x of specials) {
      input.push(y, x);
    }
  }
  // Game vectors: unit directions at game angles against other directions (cross, dot) and raw (sin, cos).
  const angles = gameAngles();
  for (let i = 0; i < angles.length; i++) {
    const a = angles[i];
    const b = angles[(i * 7919) % angles.length];
    const ax = cos(a);
    const ay = sin(a);
    const bx = cos(b);
    const by = sin(b);
    input.push(ay, ax, ax * by - bx * ay, ax * bx + ay * by);
  }
  for (let i = 0; i < 1_500_000; i++) {
    input.push(input.uniform(100), input.uniform(100));
  }
  for (let i = 0; i < 500_000; i++) {
    input.push(input.uniform(1), input.uniform(1));
  }
  // Magnitudes over the whole exponent range, random signs.
  for (let i = 0; i < 1_000_000; i++) {
    input.push(input.withExponent(0, 2046), input.withExponent(0, 2046));
  }
  // Close magnitudes (exp_diff <= 54) at varied scales, including near over/underflow.
  for (let i = 0; i < 500_000; i++) {
    const y = input.withExponent(1, 2046);
    F64[0] = y;
    const exponent = (U32[1] >>> 20) & 0x7ff;
    const lo = Math.max(1, exponent - 60);
    const hi = Math.min(2046, exponent + 60);
    input.push(y, input.withExponent(lo, hi));
  }
  // Ratios near idx/64 (the table boundaries) and near 1.
  for (let i = 0; i < 500_000; i++) {
    const x = input.uniform(1000);
    const ratio = (input.next() % 129) / 128 + input.uniform(1e-12);
    input.push(x * ratio, input.next() & 1 ? x : -x);
  }
  // One zero, infinite or NaN component.
  const odd = [0, -0, Infinity, -Infinity, NaN];
  for (let i = 0; i < 250_000; i++) {
    const special = odd[input.next() % odd.length];
    const other = input.uniform(1e3);
    if (input.next() & 1) {
      input.push(special, other);
    } else {
      input.push(other, special);
    }
  }
  // Any bit patterns.
  for (let i = 0; i < 750_000; i++) {
    input.push(input.bits(), input.bits());
  }
  return input.build();
}

export function trigInputs(fn: TrigFunction): Float64Array {
  if (fn === "atan2") {
    return atan2Inputs(0x2a7a2);
  }
  return sinCosInputs(fn === "sin" ? 0x5157 : 0xc05);
}

/** 64-bit hash (two 32-bit FNV-1a-style lanes) of the outputs' bit patterns; every NaN hashes as one NaN. */
export function hashDoubles(values: Float64Array): string {
  const words = new Uint32Array(values.buffer, values.byteOffset, values.length * 2);
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < values.length; i++) {
    let lo = words[2 * i];
    let hi = words[2 * i + 1];
    if (values[i] !== values[i]) {
      lo = 0;
      hi = 0x7ff80000;
    }
    h1 = Math.imul(h1 ^ lo, 0x01000193);
    h1 = Math.imul(h1 ^ hi, 0x01000193);
    h2 = Math.imul(h2 ^ hi, 0x5bd1e995);
    h2 = Math.imul(h2 ^ (h2 >>> 15) ^ lo, 0x5bd1e995);
  }
  return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
}

/** Applies fn to every input (pairs for atan2). */
export function evaluate(
  fn: TrigFunction,
  inputs: Float64Array,
  impl: { sin(x: number): number; cos(x: number): number; atan2(y: number, x: number): number }
): Float64Array {
  if (fn === "atan2") {
    const out = new Float64Array(inputs.length / 2);
    for (let i = 0; i < out.length; i++) {
      out[i] = impl.atan2(inputs[2 * i], inputs[2 * i + 1]);
    }
    return out;
  }
  const f = fn === "sin" ? impl.sin : impl.cos;
  const out = new Float64Array(inputs.length);
  for (let i = 0; i < inputs.length; i++) {
    out[i] = f(inputs[i]);
  }
  return out;
}
