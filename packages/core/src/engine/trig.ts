// Engine-independent sin, cos and atan2: bit-exact ports of the implementations behind V8's Math.sin,
// Math.cos and Math.atan2 in Chromium 153 (V8 15.3.76.4, the Chromium Playwright 1.63 drives).
//
// Why: ECMAScript lets engines approximate these functions. JavaScriptCore (Bun, Safari) differs from V8 in
// the last bit for ~2.5% of the inputs the game produces, and the simulation amplifies that, so the same
// seed diverged between Bun and Chromium. Core uses these functions instead of Math.*, so the simulation is
// bit-identical in every engine (only IEEE-754 +, -, *, / and exact bit manipulation are used here).
//
// Source: V8 15.3's src/base/ieee754.cc forwards sin/cos/atan2 to LLVM libc
// (`LIBC_NAMESPACE::shared::{sin,cos,atan2}`), third_party/llvm-libc at
// llvm-project/libc 20fd93c3ba54634c545ae2045fb207e7e58bb648, built with LIBC_MATH = 0 (no
// SKIP_ACCURATE_PASS, full tables) and -ffp-contract=off:
//   src/__support/math/sin.h, cos.h, sincos_eval.h, range_reduction_double_common.h,
//   range_reduction_double_nofma.h, atan2.h, atan_utils.h; src/__support/FPUtil/double_double.h,
//   dyadic_float.h, nearest_integer.h; src/__support/big_int.h (quick_mul_hi).
//
// - sin, cos: LLVM libc's are correctly rounded (a fast double-double pass, then Ziv's rounding test, then a
//   128-bit accurate pass), so the result is the unique correctly rounded value whichever code path computed
//   it. This port follows the no-FMA variant (range_reduction_double_nofma.h, Dekker products), which needs no
//   fused multiply-add; Chromium on arm64 runs the FMA variant. Both return the correctly rounded result.
// - atan2: LLVM libc's has no accurate pass, so its last bit depends on the code path. Chromium on arm64 (the
//   Playwright Chromium the golden hashes come from) compiles the FMA variant, so this port does too, with a
//   software fma (`fma` below, exact). Chromium on x86-64 is built without FMA and may differ from this in
//   the last bit for some inputs.
//
// Bit access goes through one 8-byte ArrayBuffer viewed as Float64Array and Uint32Array. That assumes a
// little-endian host (word 0 = low 32 bits, word 1 = high 32 bits), which every JS engine on x86-64 and
// arm64 is; the check below throws at load otherwise.
//
// License: LLVM libc is Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
// This file is a derivative work (a translation to TypeScript) of the files listed above.

import {
  ATAN_I_HEX,
  ONE_TWENTY_EIGHT_OVER_PI_HEX,
  SIN_K_PI_OVER_128_F128_HEX,
  SIN_K_PI_OVER_128_HEX
} from "./trig-tables";

// ---------------------------------------------------------------------------------------------------------
// Bit access (FPBits)

const F64 = new Float64Array(1);
const U32 = new Uint32Array(F64.buffer);
const LO = 0;
const HI = 1;
F64[0] = 1;
if (U32[HI] !== 0x3ff00000) {
  throw new Error("trig.ts assumes a little-endian host");
}

const highWord = (x: number): number => {
  F64[0] = x;
  return U32[HI];
};
const fromWords = (hi: number, lo: number): number => {
  U32[HI] = hi;
  U32[LO] = lo;
  return F64[0];
};
/** 2^e for -1022 <= e <= 1023, built from its bits (exact). */
const pow2 = (e: number): number => fromWords((e + 1023) << 20, 0);

/** Parses a C hexadecimal floating literal ("-0x1.921fb54442d18p+1") or a plain decimal ("0", "0.0") exactly. */
function hexDouble(literal: string): number {
  const negative = literal[0] === "-";
  const text = negative ? literal.slice(1) : literal;
  let value: number;
  if (text.startsWith("0x")) {
    const p = text.indexOf("p");
    const mantissa = text.slice(2, p);
    const dot = mantissa.indexOf(".");
    const digits = dot < 0 ? mantissa : mantissa.slice(0, dot) + mantissa.slice(dot + 1);
    const fractionDigits = dot < 0 ? 0 : mantissa.length - dot - 1;
    const integer = parseInt(digits, 16);
    if (!(integer <= 2 ** 53)) {
      throw new Error(`hexDouble: ${literal} has more than 53 significant bits`);
    }
    value = integer === 0 ? 0 : integer * pow2(Number(text.slice(p + 1)) - 4 * fractionDigits);
  } else {
    value = Number(text);
  }
  return negative ? -value : value;
}
const h = hexDouble;

// ---------------------------------------------------------------------------------------------------------
// Double-double helpers (FPUtil/double_double.h). Pairs are returned through module-level scratch variables
// to avoid allocating in the hot path: each function documents which ones it writes.

let rHi = 0;
let rLo = 0;

/** Veltkamp split with 2^n + 1 (split<double, n>): writes rHi, rLo. */
function split(a: number, cn1: number): void {
  const t1 = cn1 * a;
  const t2 = a - t1;
  rHi = t1 + t2;
  rLo = a - rHi;
}
const C27 = 134217729; // 2^27 + 1 (DefaultSplit<double>)
const C28 = 268435457; // 2^28 + 1 (range_reduction_double_common.h, SPLIT without FMA)

/** exact_mult<double, SPLIT_B>(as, a, b), Dekker's product with `a` pre-split: writes rHi, rLo. */
function exactMultSplit(asHi: number, asLo: number, a: number, b: number, splitB: number): void {
  split(b, splitB);
  const bsHi = rHi;
  const bsLo = rLo;
  const hi = a * b;
  const t1 = asHi * bsHi - hi;
  const t2 = asHi * bsLo + t1;
  const t3 = asLo * bsHi + t2;
  rLo = asLo * bsLo + t3;
  rHi = hi;
}
/** exact_mult<double, SPLIT_B>(a, b) without FMA: writes rHi, rLo. */
function exactMult(a: number, b: number, splitB: number): void {
  split(a, C27);
  exactMultSplit(rHi, rLo, a, b, splitB);
}
/** quick_mult<SPLIT_B>(DoubleDouble a, DoubleDouble b) without FMA: writes rHi, rLo. */
function quickMultDD(aHi: number, aLo: number, bHi: number, bLo: number, splitB: number): void {
  exactMult(aHi, bHi, splitB);
  const t1 = aHi * bLo + rLo;
  const t2 = aLo * bHi + t1;
  rLo = t2;
}

/** fputil::nearest_integer(double), the generic version (round half to even in round-to-nearest). */
function nearestInteger(x: number): number {
  if (x < 0x20000000000000 && x > -0x20000000000000) {
    const r = x < 0 ? x - 0x10000000000000 + 0x10000000000000 : x + 0x10000000000000 - 0x10000000000000;
    const diff = x - r;
    if (diff > 0.5) {
      return r + 1.0;
    }
    if (diff < -0.5) {
      return r - 1.0;
    }
    return r;
  }
  return x;
}

// ---------------------------------------------------------------------------------------------------------
// Fused multiply-add (needed for atan2, which V8 on arm64 computes with fma instructions).

/** Round-to-odd addition (exact result if representable, else the neighbor with an odd last bit). */
function addRoundToOdd(a: number, b: number): number {
  const s = a + b;
  const bb = s - a;
  const err = a - (s - bb) + (b - bb);
  if (err === 0) {
    return s;
  }
  F64[0] = s;
  if ((U32[LO] & 1) === 1) {
    return s;
  }
  // s is even: the exact sum lies between s and its neighbor toward err; that neighbor is odd.
  const awayFromZero = err > 0 === s > 0;
  let lo = U32[LO];
  let hi = U32[HI];
  if (awayFromZero) {
    lo = (lo + 1) >>> 0;
    if (lo === 0) {
      hi = (hi + 1) >>> 0;
    }
  } else {
    if (lo === 0) {
      hi = (hi - 1) >>> 0;
    }
    lo = (lo - 1) >>> 0;
  }
  return fromWords(hi, lo);
}

/** Exact value of a finite double as mantissa * 2^exponent. */
function toDyadic(x: number): [bigint, number] {
  F64[0] = x;
  const hi = U32[HI];
  const biased = (hi >>> 20) & 0x7ff;
  let m = (BigInt(hi & 0xfffff) << 32n) | BigInt(U32[LO]);
  if (biased !== 0) {
    m |= 1n << 52n;
  }
  const e = (biased === 0 ? 1 : biased) - 1075;
  return [hi >>> 31 === 1 ? -m : m, e];
}

/** Rounds m * 2^e (exact, any size) to the nearest double, ties to even. Zero results are +0. */
function roundDyadic(m: bigint, e: number): number {
  if (m === 0n) {
    return 0;
  }
  const negative = m < 0n;
  let mag = negative ? -m : m;
  const length = mag.toString(2).length;
  // Target: 53 significant bits, but no lower than 2^-1074.
  let shift = length - 53;
  if (e + shift < -1074) {
    shift = -1074 - e;
  }
  if (shift > 0) {
    const s = BigInt(shift);
    const rest = mag & ((1n << s) - 1n);
    const half = 1n << (s - 1n);
    mag >>= s;
    if (rest > half || (rest === half && (mag & 1n) === 1n)) {
      mag += 1n;
    }
    e += shift;
  }
  // mag < 2^54 and mag * 2^e is exactly representable (or overflows to infinity).
  let result = Number(mag);
  while (e > 0) {
    const step = Math.min(e, 1000);
    result *= pow2(step);
    e -= step;
  }
  // Exact: the final value is representable (a multiple of 2^-1074 with at most 53 bits), and so is every
  // intermediate, which has the same significand and a larger exponent.
  while (e < 0) {
    const step = Math.min(-e, 1000);
    result *= pow2(-step);
    e += step;
  }
  return negative ? -result : result;
}

const FMA_MIN = pow2(-900);
const FMA_MAX = pow2(900);

/** fma(a, b, c) = round(a * b + c) with a single rounding, for finite inputs. */
function fma(a: number, b: number, c: number): number {
  if (a === 0 || b === 0) {
    return a * b + c;
  }
  const ph = a * b;
  const absP = Math.abs(ph);
  const absC = Math.abs(c);
  // The error-free transformations below are exact only far from overflow and underflow.
  if (
    !(absP > FMA_MIN && absP < FMA_MAX) ||
    !(Math.abs(a) < FMA_MAX) ||
    !(Math.abs(b) < FMA_MAX) ||
    absC >= FMA_MAX ||
    (c !== 0 && absC <= FMA_MIN)
  ) {
    return fmaExact(a, b, c);
  }
  // Boldo & Melquiond, "Emulation of FMA and correctly rounded sums: proved algorithms using rounding to
  // odd" (IEEE TC 2008): exact product, exact sum, one round-to-odd addition, one final rounding.
  split(a, C27);
  const aHi = rHi;
  const aLo = rLo;
  split(b, C27);
  const pl = aHi * rHi - ph + aHi * rLo + aLo * rHi + aLo * rLo;
  const th = c + ph;
  const bb = th - c;
  const tl = c - (th - bb) + (ph - bb);
  return th + addRoundToOdd(tl, pl);
}
function fmaExact(a: number, b: number, c: number): number {
  const [ma, ea] = toDyadic(a);
  const [mb, eb] = toDyadic(b);
  const [mc, ec] = toDyadic(c);
  const mp = ma * mb;
  const ep = ea + eb;
  const e = Math.min(ep, ec);
  const sum = (mp << BigInt(ep - e)) + (mc << BigInt(ec - e));
  if (sum === 0n) {
    // a * b is non-zero here, so an exact zero sum is +0 in round to nearest.
    return 0;
  }
  return roundDyadic(sum, e);
}

// ---------------------------------------------------------------------------------------------------------
// DyadicFloat<128> (FPUtil/dyadic_float.h): sign * mantissa * 2^exponent, mantissa a 128-bit integer,
// normalized (top bit set) unless zero. Only the accurate passes of sin/cos use it (rarely), so BigInt is fine.

interface Dyadic {
  negative: boolean;
  exponent: number;
  mantissa: bigint;
}
const MASK64 = (1n << 64n) - 1n;
const MASK128 = (1n << 128n) - 1n;
const TOP128 = 1n << 127n;

function normalize(d: Dyadic): Dyadic {
  if (d.mantissa !== 0n) {
    const shift = 128 - d.mantissa.toString(2).length;
    d.exponent -= shift;
    d.mantissa = (d.mantissa << BigInt(shift)) & MASK128;
  }
  return d;
}
const dyadic = (negative: boolean, exponent: number, mantissa: bigint): Dyadic =>
  normalize({ negative, exponent, mantissa });

/** DyadicFloat<128>(double). */
function dyadicFromDouble(x: number): Dyadic {
  F64[0] = x;
  const hi = U32[HI];
  const biased = (hi >>> 20) & 0x7ff;
  let mantissa = (BigInt(hi & 0xfffff) << 32n) | BigInt(U32[LO]);
  if (biased !== 0) {
    mantissa |= 1n << 52n;
  }
  const explicitExponent = biased === 0 ? -1022 : biased - 1023;
  return dyadic(hi >>> 31 === 1, explicitExponent - 52, mantissa);
}

/** fputil::quick_add. */
function quickAdd(a: Dyadic, b: Dyadic): Dyadic {
  if (a.mantissa === 0n) {
    return b;
  }
  if (b.mantissa === 0n) {
    return a;
  }
  let ae = a.exponent;
  let am = a.mantissa;
  let be = b.exponent;
  let bm = b.mantissa;
  // Align exponents (shift_right: a shift of 128 or more zeroes both mantissa and exponent).
  if (ae > be) {
    const shift = ae - be;
    if (shift < 128) {
      be += shift;
      bm >>= BigInt(shift);
    } else {
      be = 0;
      bm = 0n;
    }
  } else if (be > ae) {
    const shift = be - ae;
    if (shift < 128) {
      ae += shift;
      am >>= BigInt(shift);
    } else {
      ae = 0;
      am = 0n;
    }
  }
  if (a.negative === b.negative) {
    let mantissa = am + bm;
    let exponent = ae;
    if (mantissa > MASK128) {
      // Mantissa addition overflow: shift_right(1), then set the top bit.
      mantissa = ((mantissa & MASK128) >> 1n) | TOP128;
      exponent += 1;
    }
    return { negative: a.negative, exponent, mantissa };
  }
  if (am >= bm) {
    return normalize({ negative: a.negative, exponent: ae, mantissa: am - bm });
  }
  return normalize({ negative: b.negative, exponent: be, mantissa: bm - am });
}

/** fputil::quick_mul: the high 128 bits of the product, approximated as BigInt::quick_mul_hi does. */
function quickMul(a: Dyadic, b: Dyadic): Dyadic {
  const negative = a.negative !== b.negative;
  let exponent = a.exponent + b.exponent + 128;
  if (a.mantissa === 0n || b.mantissa === 0n) {
    return { negative, exponent, mantissa: 0n };
  }
  const a0 = a.mantissa & MASK64;
  const a1 = a.mantissa >> 64n;
  const b0 = b.mantissa & MASK64;
  const b1 = b.mantissa >> 64n;
  // multiword::quick_mul_hi for 2 words: the a0*b0 column is skipped.
  let mantissa = (((a0 * b1 + a1 * b0) >> 64n) + a1 * b1) & MASK128;
  if (mantissa >> 127n === 0n) {
    exponent -= 1;
    mantissa = (mantissa << 1n) & MASK128;
  }
  return { negative, exponent, mantissa };
}

/** polyeval(x, a0, a1, ...) with multiply_add(x, rest, a0) = quick_add(a0, quick_mul(x, rest)). */
function polyeval(x: Dyadic, coeffs: readonly Dyadic[]): Dyadic {
  let p = coeffs[coeffs.length - 1];
  for (let i = coeffs.length - 2; i >= 0; i--) {
    p = quickAdd(coeffs[i], quickMul(x, p));
  }
  return p;
}

/** static_cast<double>(DyadicFloat<128>): DyadicFloat::fast_as<double>, round to nearest. */
function dyadicToDouble(d: Dyadic): number {
  const signBit = d.negative ? 0x80000000 : 0;
  if (d.mantissa === 0n) {
    return d.negative ? -0 : 0;
  }
  let expHi = d.exponent + 127 + 1023;
  if (expHi > 2 * 1023) {
    return 2 * fromWords((signBit | (2046 << 20)) >>> 0, 0);
  }
  let denorm = false;
  let shift = 128 - 53;
  if (expHi <= 0) {
    denorm = true;
    shift = 128 - 53 + (1 - expHi);
    expHi = 1023;
  }
  const expLo = expHi - 53 - 1;
  const mHi = shift >= 128 ? 0n : d.mantissa >> BigInt(shift);
  const fraction = mHi & ((1n << 52n) - 1n);
  const dHi = fromWords((signBit | (expHi << 20) | Number(fraction >> 32n)) >>> 0, Number(fraction & 0xffffffffn));
  const roundMask = shift - 1 >= 128 ? 0n : 1n << BigInt(shift - 1);
  const stickyMask = (roundMask - 1n) & MASK128;
  const roundBit = (d.mantissa & roundMask) !== 0n;
  const stickyBit = (d.mantissa & stickyMask) !== 0n;
  const roundAndSticky = (roundBit ? 2 : 0) + (stickyBit ? 1 : 0);
  if (expLo <= 0) {
    const scaleUpExponent = 1 - expLo;
    const scaleUp = fromWords((1023 + scaleUpExponent) << 20, 0);
    const scaleDown = fromWords((1023 - scaleUpExponent) << 20, 0);
    const dLo = fromWords((signBit | ((expLo + scaleUpExponent) << 20)) >>> 0, 0);
    return (dLo * roundAndSticky + dHi * scaleUp) * scaleDown;
  }
  const dLo = fromWords((signBit | (expLo << 20)) >>> 0, 0);
  const r = dLo * roundAndSticky + dHi;
  if (denorm) {
    // Clear the exponent field (expHi << 52) from r's bits.
    F64[0] = r;
    const hi = (U32[HI] - (expHi << 20)) >>> 0;
    return fromWords(hi, U32[LO]);
  }
  return r;
}

const u128 = (digits: string): bigint => BigInt("0x" + digits.replaceAll("'", ""));

// ---------------------------------------------------------------------------------------------------------
// Tables

const ONE_TWENTY_EIGHT_OVER_PI = Float64Array.from(ONE_TWENTY_EIGHT_OVER_PI_HEX, hexDouble); // [64][4]
const SIN_K_LO = new Float64Array(256);
const SIN_K_HI = new Float64Array(256);
for (let i = 0; i < 256; i++) {
  SIN_K_LO[i] = hexDouble(SIN_K_PI_OVER_128_HEX[2 * i]);
  SIN_K_HI[i] = hexDouble(SIN_K_PI_OVER_128_HEX[2 * i + 1]);
}
const SIN_K_PI_OVER_128_F128: readonly Dyadic[] = SIN_K_PI_OVER_128_F128_HEX.map(([negative, exponent, digits]) =>
  dyadic(negative === 1, exponent, u128(digits))
);
const ATAN_I_LO = new Float64Array(65);
const ATAN_I_HI = new Float64Array(65);
for (let i = 0; i < 65; i++) {
  ATAN_I_LO[i] = hexDouble(ATAN_I_HEX[2 * i]);
  ATAN_I_HI[i] = hexDouble(ATAN_I_HEX[2 * i + 1]);
}

// ---------------------------------------------------------------------------------------------------------
// Range reduction (range_reduction_double_common.h, range_reduction_double_nofma.h)

const FAST_PASS_EXPONENT = 16;
const MPI_OVER_128_0 = h("-0x1.921fb544p-6");
const MPI_OVER_128_1 = h("-0x1.0b4611a6p-40");
const MPI_OVER_128_2 = h("-0x1.3198a2e037073p-75");
const ONE_TWENTY_EIGHT_OVER_PI_D = h("0x1.45f306dc9c883p5");
const PI_OVER_128_DD_LO = h("0x1.1a62633145c07p-60");
const PI_OVER_128_DD_HI = h("0x1.921fb54442d18p-6");
const PI_OVER_128_F128 = dyadic(false, -133, u128("c90f'daa2'2168'c234'c4c6'628b'80dc'1cd1"));

// The reduced argument u = uHi + uLo (DoubleDouble &u).
let uHi = 0;
let uLo = 0;

/** range_reduction_small: writes uHi, uLo; returns k (as unsigned). */
function rangeReductionSmall(x: number): number {
  const prodHi = x * ONE_TWENTY_EIGHT_OVER_PI_D;
  const kd = nearestInteger(prodHi);
  const yHi = kd * MPI_OVER_128_0 + x;
  uHi = kd * MPI_OVER_128_1 + yHi;
  const u0 = yHi - uHi;
  const u1 = kd * MPI_OVER_128_1 + u0;
  uLo = kd * MPI_OVER_128_2 + u1;
  return kd >>> 0;
}

// LargeRangeReduction's private state, kept for its accurate() pass.
let lrIdx = 0;
let lrXReduced = 0;
let lrYHi = 0;
let lrYLo = 0;
let lrYMidHi = 0;
let lrYMidLo = 0;

/** LargeRangeReduction::fast (no-FMA variant): writes uHi, uLo and the lr* state; returns k. */
function largeRangeReductionFast(input: number): number {
  F64[0] = input;
  const hi = U32[HI];
  const xEm62 = ((hi >>> 20) & 0x7ff) - (1023 + 62);
  lrIdx = (xEm62 >> 4) + 3;
  // Scale x down by 2^(-(16 * (idx - 3))).
  lrXReduced = fromWords(((hi & 0x800fffff) | (((xEm62 & 15) + 1023 + 62) << 20)) >>> 0, U32[LO]);
  const x = lrXReduced;
  split(x, C27);
  const xsHi = rHi;
  const xsLo = rLo;
  const row = lrIdx * 4;
  exactMultSplit(xsHi, xsLo, x, ONE_TWENTY_EIGHT_OVER_PI[row], C28);
  const phLo = rLo;
  exactMultSplit(xsHi, xsLo, x, ONE_TWENTY_EIGHT_OVER_PI[row + 1], C28);
  const pmHi = rHi;
  const pmLo = rLo;
  exactMultSplit(xsHi, xsLo, x, ONE_TWENTY_EIGHT_OVER_PI[row + 2], C28);
  const plHi = rHi;
  const plLo = rLo;
  const sumHi = phLo + pmHi;
  const kd = nearestInteger(sumHi);
  lrYHi = phLo - kd + pmHi;
  // y_mid = exact_add(pm.lo, pl.hi)
  lrYMidHi = pmLo + plHi;
  lrYMidLo = plHi - (lrYMidHi - pmLo);
  lrYLo = plLo;
  const yL = x * ONE_TWENTY_EIGHT_OVER_PI[row + 3] + lrYLo;
  // y = exact_add(y_hi, y_mid.hi); y.lo += y_mid.lo + y_l
  const yHi = lrYHi + lrYMidHi;
  let yLo = lrYMidHi - (yHi - lrYHi);
  yLo += lrYMidLo + yL;
  quickMultDD(yHi, yLo, PI_OVER_128_DD_HI, PI_OVER_128_DD_LO, C28);
  uHi = rHi;
  uLo = rLo;
  return kd >>> 0;
}

/** LargeRangeReduction::accurate, from the state the last largeRangeReductionFast left. */
function largeRangeReductionAccurate(): Dyadic {
  const yLo0 = dyadicFromDouble(lrXReduced * ONE_TWENTY_EIGHT_OVER_PI[lrIdx * 4 + 3]);
  const yLo1 = quickAdd(dyadicFromDouble(lrYLo), yLo0);
  const yMid = quickAdd(dyadicFromDouble(lrYMidLo), yLo1);
  const yHi = quickAdd(dyadicFromDouble(lrYHi), dyadicFromDouble(lrYMidHi));
  const y = quickAdd(yHi, yMid);
  return quickMul(y, PI_OVER_128_F128);
}

/** range_reduction_small_f128. */
function rangeReductionSmallF128(x: number): Dyadic {
  const prodHi = x * ONE_TWENTY_EIGHT_OVER_PI_D;
  const kd = nearestInteger(prodHi);
  const mk = dyadicFromDouble(-kd);
  const xf = dyadicFromDouble(x);
  const pHi = quickMul(xf, dyadicFromDouble(ONE_TWENTY_EIGHT_OVER_PI[12]));
  const pMid = quickMul(xf, dyadicFromDouble(ONE_TWENTY_EIGHT_OVER_PI[13]));
  const pLo = quickMul(xf, dyadicFromDouble(ONE_TWENTY_EIGHT_OVER_PI[14]));
  const sHi = quickAdd(pHi, mk);
  const sLo = quickAdd(pMid, pLo);
  const y = quickAdd(sHi, sLo);
  return quickMul(y, PI_OVER_128_F128);
}

// ---------------------------------------------------------------------------------------------------------
// sincos_eval.h

const SC_P1_A = h("-0x1.a01a01a01a01ap-13");
const SC_P1_B = h("0x1.1111111111111p-7");
const SC_Q1_A = h("0x1.5555555555555p-5");
const SC_Q1_B = h("-0x1.0p-1");
const SC_P2_B = h("-0x1.5555555555555p-3");
const SC_R1_A = h("0x1.a01a01a01a01ap-16");
const SC_R1_B = h("-0x1.6c16c16c16c17p-10");
const SC_S1_A = h("0x1.5555555555555p-3");
const SC_R2_B = h("0x1.5555555555555p-5");
const SC_ERR_A = h("0x1.0p-51");
const SC_ERR_B = h("0x1.0p-105");

let sinYHi = 0;
let sinYLo = 0;
let cosYHi = 0;
let cosYLo = 0;

/** sincos_eval(DoubleDouble u) on (uHi, uLo), no-FMA variant: writes sinY*, cosY*; returns the error bound. */
function sincosEval(): number {
  const uhi = uHi;
  const ulo = uLo;
  const uHiSq = uhi * uhi;
  const p1 = uHiSq * SC_P1_A + SC_P1_B;
  const q1 = uHiSq * SC_Q1_A + SC_Q1_B;
  const uHi3 = uHiSq * uhi;
  const p2 = uHiSq * p1 + SC_P2_B;
  const q2 = uHiSq * q1 + 1.0;
  const sinLo = uHi3 * p2 + ulo * q2;

  const uHiNegHalf = -0.5 * uhi;
  exactMult(uhi, uHiNegHalf, C27);
  const sqHi = rHi;
  const sqLo = rLo;
  // v = exact_add(1.0, u_hi_sq_neg_half.hi); v.lo += u_hi_sq_neg_half.lo
  const vHi = 1.0 + sqHi;
  let vLo = sqHi - (vHi - 1.0);
  vLo += sqLo;

  const r1 = uHiSq * SC_R1_A + SC_R1_B;
  const s1 = uHiSq * SC_S1_A + -1.0;
  const uHi4 = uHiSq * uHiSq;
  const uHiULo = uhi * ulo;
  const r2 = uHiSq * r1 + SC_R2_B;
  const s2 = uHiULo * s1 + vLo;
  const cosLo = uHi4 * r2 + s2;

  sinYHi = uhi + sinLo;
  sinYLo = sinLo - (sinYHi - uhi);
  cosYHi = vHi + cosLo;
  cosYLo = cosLo - (cosYHi - vHi);

  return Math.abs(uHi3) * SC_ERR_A + SC_ERR_B;
}

const SIN_COEFFS: readonly Dyadic[] = [
  dyadic(false, -127, u128("80000000'00000000'00000000'00000000")), // 1
  dyadic(true, -130, u128("aaaaaaaa'aaaaaaaa'aaaaaaaa'aaaaaaab")), // -1/3!
  dyadic(false, -134, u128("88888888'88888888'88888888'88888889")), // 1/5!
  dyadic(true, -140, u128("d00d00d0'0d00d00d'00d00d00'd00d00d0")), // -1/7!
  dyadic(false, -146, u128("b8ef1d2a'b6399c7d'560e4472'800b8ef2")), // 1/9!
  dyadic(true, -153, u128("d7322b3f'aa271c7f'3a3f25c1'bee38f10")), // -1/11!
  dyadic(false, -160, u128("b092309d'43684be5'1c198e91'd7b4269e")) // 1/13!
];
const COS_COEFFS: readonly Dyadic[] = [
  dyadic(false, -127, u128("80000000'00000000'00000000'00000000")), // 1.0
  dyadic(true, -128, u128("80000000'00000000'00000000'00000000")), // 1/2
  dyadic(false, -132, u128("aaaaaaaa'aaaaaaaa'aaaaaaaa'aaaaaaab")), // 1/4!
  dyadic(true, -137, u128("b60b60b6'0b60b60b'60b60b60'b60b60b6")), // 1/6!
  dyadic(false, -143, u128("d00d00d0'0d00d00d'00d00d00'd00d00d0")), // 1/8!
  dyadic(true, -149, u128("93f27dbb'c4fae397'780b69f5'333c725b")), // 1/10!
  dyadic(false, -156, u128("8f76c77f'c6c4bdaa'26d4c3d6'7f425f60")) // 1/12!
];

/** sincos_eval(DFloat128 u): returns [sin(u), cos(u)]. */
function sincosEvalF128(u: Dyadic): [Dyadic, Dyadic] {
  const uSq = quickMul(u, u);
  return [quickMul(u, polyeval(uSq, SIN_COEFFS)), polyeval(uSq, COS_COEFFS)];
}

/** get_sin_k from sin_accurate/cos_accurate: sin(kk * pi/128) from the 65-entry table. */
function getSinK(kk: number): Dyadic {
  const idx = (kk & 64) !== 0 ? 64 - (kk & 63) : kk & 63;
  const entry = SIN_K_PI_OVER_128_F128[idx];
  return { negative: (kk & 128) !== 0 ? true : entry.negative, exponent: entry.exponent, mantissa: entry.mantissa };
}

function accurateReduction(x: number, xE: number): Dyadic {
  return xE < 1023 + FAST_PASS_EXPONENT ? rangeReductionSmallF128(x) : largeRangeReductionAccurate();
}

function sinAccurate(x: number, xE: number, k: number): number {
  const [sinU, cosU] = sincosEvalF128(accurateReduction(x, xE));
  const sinK = getSinK(k);
  const cosK = getSinK(k + 64);
  return dyadicToDouble(quickAdd(quickMul(sinK, cosU), quickMul(cosK, sinU)));
}

function cosAccurate(x: number, xE: number, k: number): number {
  const [sinU, cosU] = sincosEvalF128(accurateReduction(x, xE));
  const msinK = getSinK(k + 128);
  const cosK = getSinK(k + 64);
  return dyadicToDouble(quickAdd(quickMul(cosK, cosU), quickMul(msinK, sinU)));
}

// ---------------------------------------------------------------------------------------------------------
// sin.h

const SIN_C0 = h("-0x1.5555555555555p-3");
const SIN_C1 = h("0x1.111111110f491p-7");
const SIN_C2 = h("-0x1.a01a00e16af3ep-13");
const SIN_C3 = h("0x1.71c24233f1bafp-19");
const TINY_SIN = h("-0x1.0p-54");
const ERR_53 = h("0x1.0p-53");
const ERR_68 = h("0x1.0p-68");
const ERR_69 = h("0x1.0p-69");

/** Math.sin as V8 15.3 (Chromium 153) computes it: LLVM libc's correctly rounded sin. */
export function sin(x: number): number {
  const xE = (highWord(x) >>> 20) & 0x7ff;
  let k: number;
  if (xE < 1023 + FAST_PASS_EXPONENT) {
    // |x| < 2^-4
    if (xE < 1023 - 4) {
      // |x| < 2^-26, |sin(x) - x| < ulp(x)/2.
      if (xE < 1023 - 26) {
        if (x === 0) {
          return x + x;
        }
        // The FMA variant (Chromium on arm64). Without FMA (x * -2^-54 + x) the product underflows for
        // |x| < 2^-968 and the result can be 1 ulp low.
        return fma(x, TINY_SIN, x);
      }
      const xSq = x * x;
      const c0 = xSq * SIN_C1 + SIN_C0;
      const c1 = xSq * SIN_C3 + SIN_C2;
      const x4 = xSq * xSq;
      const x3 = x * xSq;
      const rLoPoly = (x4 * c1 + c0) * x3;
      const err = xSq * ERR_53 + ERR_68;
      const rLoU = x * err + rLoPoly;
      const rLoL = -x * err + rLoPoly;
      const upper = x + rLoU;
      const lower = x + rLoL;
      if (upper === lower) {
        return upper;
      }
      k = rangeReductionSmall(x);
      return sinAccurate(x, xE, k);
    }
    k = rangeReductionSmall(x);
  } else {
    // Inf or NaN: sin(+-Inf) = NaN.
    if (xE > 2 * 1023) {
      return NaN;
    }
    k = largeRangeReductionFast(x);
  }

  const err = sincosEval();
  const sinKHi = SIN_K_HI[k & 255];
  const sinKLo = SIN_K_LO[k & 255];
  const cosKHi = SIN_K_HI[(k + 64) & 255];
  const cosKLo = SIN_K_LO[(k + 64) & 255];
  quickMultDD(cosYHi, cosYLo, sinKHi, sinKLo, C27);
  const aHi = rHi;
  const aLo = rLo;
  quickMultDD(sinYHi, sinYLo, cosKHi, cosKLo, C27);
  const bHi = rHi;
  const bLo = rLo;
  const rrHi = aHi + bHi;
  let rrLo = bHi - (rrHi - aHi);
  rrLo += aLo + bLo;

  const rlp = rrLo + err;
  const rlm = rrLo - err;
  const upper = rrHi + rlp;
  const lower = rrHi + rlm;
  // Ziv's rounding test.
  if (upper === lower) {
    return upper;
  }
  return sinAccurate(x, xE, k);
}

// ---------------------------------------------------------------------------------------------------------
// cos.h

const COS_C0 = h("-0x1p-1");
const COS_C1 = h("0x1.5555555555262p-5");
const COS_C2 = h("-0x1.6c16c1508bff1p-10");
const COS_C3 = h("0x1.a00ffd769159ap-16");

/** Math.cos as V8 15.3 (Chromium 153) computes it: LLVM libc's correctly rounded cos. */
export function cos(x: number): number {
  const xE = (highWord(x) >>> 20) & 0x7ff;
  let k: number;
  if (xE < 1023 + FAST_PASS_EXPONENT) {
    // |x| < 2^-4
    if (xE < 1023 - 4) {
      // |x| < 2^-27: cos(x) rounds to 1 (round_result_slightly_down(1.0) in round-to-nearest).
      if (xE < 1023 - 27) {
        return 1.0;
      }
      const xSq = x * x;
      const c0 = xSq * COS_C1 + COS_C0;
      const c1 = xSq * COS_C3 + COS_C2;
      const x4 = xSq * xSq;
      const rLoPoly = (x4 * c1 + c0) * xSq;
      const err = xSq * ERR_53 + ERR_69;
      const rLoU = rLoPoly + err;
      const rLoL = rLoPoly - err;
      const upper = 1.0 + rLoU;
      const lower = 1.0 + rLoL;
      if (upper === lower) {
        return upper;
      }
      k = rangeReductionSmall(x);
      return cosAccurate(x, xE, k);
    }
    k = rangeReductionSmall(x);
  } else {
    // Inf or NaN: cos(+-Inf) = NaN.
    if (xE > 2 * 1023) {
      return NaN;
    }
    k = largeRangeReductionFast(x);
  }

  const err = sincosEval();
  const msinKHi = SIN_K_HI[(k + 128) & 255];
  const msinKLo = SIN_K_LO[(k + 128) & 255];
  const cosKHi = SIN_K_HI[(k + 64) & 255];
  const cosKLo = SIN_K_LO[(k + 64) & 255];
  quickMultDD(cosYHi, cosYLo, cosKHi, cosKLo, C27);
  const aHi = rHi;
  const aLo = rLo;
  quickMultDD(sinYHi, sinYLo, msinKHi, msinKLo, C27);
  const bHi = rHi;
  const bLo = rLo;
  const rrHi = aHi + bHi;
  let rrLo = bHi - (rrHi - aHi);
  rrLo += bLo + aLo;

  const rlp = rrLo + err;
  const rlm = rrLo - err;
  const upper = rrHi + rlp;
  const lower = rrHi + rlm;
  // Ziv's rounding test.
  if (upper === lower) {
    return upper;
  }
  return cosAccurate(x, xE, k);
}

// ---------------------------------------------------------------------------------------------------------
// atan2.h, atan_utils.h (FMA variant: multiply_add is a fused multiply-add on arm64)

const PI_HI = h("0x1.921fb54442d18p+1");
const PI_LO = h("0x1.1a62633145c07p-53");
const PI_OVER_2_HI = h("0x1.921fb54442d18p0");
const PI_OVER_2_LO = h("0x1.1a62633145c07p-54");
const PI_OVER_4_HI = h("0x1.921fb54442d18p-1");
const PI_OVER_4_LO = h("0x1.1a62633145c07p-55");
const THREE_PI_OVER_4_HI = h("0x1.2d97c7f3321d2p+1");
const THREE_PI_OVER_4_LO = h("0x1.a79394c9e8a0ap-54");
type Pair = readonly [hi: number, lo: number];
const ZERO: Pair = [0.0, 0.0];
const MZERO: Pair = [-0.0, -0.0];
const PI: Pair = [PI_HI, PI_LO];
const MPI: Pair = [-PI_HI, -PI_LO];
const PI_OVER_2: Pair = [PI_OVER_2_HI, PI_OVER_2_LO];
const MPI_OVER_2: Pair = [-PI_OVER_2_HI, -PI_OVER_2_LO];
const PI_OVER_4: Pair = [PI_OVER_4_HI, PI_OVER_4_LO];
const THREE_PI_OVER_4: Pair = [THREE_PI_OVER_4_HI, THREE_PI_OVER_4_LO];
const IS_NEG = [1.0, -1.0] as const;
/** CONST_ADJ[x_sign][y_sign][recip]. */
const CONST_ADJ: readonly (readonly (readonly Pair[])[])[] = [
  [
    [ZERO, MPI_OVER_2],
    [MZERO, MPI_OVER_2]
  ],
  [
    [MPI, PI_OVER_2],
    [MPI, PI_OVER_2]
  ]
];
/** EXCEPTS[y_except][x_except][x_is_neg]; except: 0 zero, 1 finite non-zero, 2 infinity. */
const EXCEPTS: readonly (readonly (readonly Pair[])[])[] = [
  [
    [ZERO, PI],
    [ZERO, PI],
    [ZERO, PI]
  ],
  [
    [PI_OVER_2, PI_OVER_2],
    [ZERO, ZERO],
    [ZERO, PI]
  ],
  [
    [PI_OVER_2, PI_OVER_2],
    [PI_OVER_2, PI_OVER_2],
    [PI_OVER_4, THREE_PI_OVER_4]
  ]
];
const ATAN_C0_A = h("0x1.999999999999ap-3");
const ATAN_C0_B = h("-0x1.5555555555555p-2");
const ATAN_C1_A = h("0x1.c71c71c71c71cp-4");
const ATAN_C1_B = h("-0x1.2492492492492p-3");
const TWO_64 = h("0x1.0p64");
const TWO_M64 = h("0x1.0p-64");
const TWO_M6 = h("0x1.0p-6");

/** Math.atan2 as V8 15.3 (Chromium 153 on arm64) computes it: LLVM libc's atan2, FMA variant. */
export function atan2(y: number, x: number): number {
  F64[0] = x;
  const xHiBits = U32[HI];
  const xLoBits = U32[LO];
  F64[0] = y;
  const yHiBits = U32[HI];
  const yLoBits = U32[LO];
  const xSign = xHiBits >>> 31;
  const ySign = yHiBits >>> 31;
  const xAbsHi = xHiBits & 0x7fffffff;
  const yAbsHi = yHiBits & 0x7fffffff;
  // x_abs < y_abs as 64-bit unsigned integers.
  const recip = xAbsHi < yAbsHi || (xAbsHi === yAbsHi && xLoBits < yLoBits) ? 1 : 0;
  const minHi = recip === 1 ? xAbsHi : yAbsHi;
  const minLo = recip === 1 ? xLoBits : yLoBits;
  const maxHi = recip === 1 ? yAbsHi : xAbsHi;
  const maxLo = recip === 1 ? yLoBits : xLoBits;
  let minExp = minHi >>> 20;
  let maxExp = maxHi >>> 20;
  let num = fromWords(minHi, minLo);
  let den = fromWords(maxHi, maxLo);

  // Exceptional cases: zero, inf, nan, close to overflow or underflow.
  if (maxExp > 0x7ff - 128 || minExp < 128) {
    if (x !== x || y !== y) {
      return NaN;
    }
    const xExcept = x === 0 ? 0 : xAbsHi === 0x7ff00000 && xLoBits === 0 ? 2 : 1;
    const yExcept = y === 0 ? 0 : yAbsHi === 0x7ff00000 && yLoBits === 0 ? 2 : 1;
    if (xExcept !== 1 || yExcept !== 1) {
      const r = EXCEPTS[yExcept][xExcept][xSign];
      // multiply_add(IS_NEG[y_sign], r.hi, IS_NEG[y_sign] * r.lo): the product is exact, so one rounding.
      return fma(IS_NEG[ySign], r[0], IS_NEG[ySign] * r[1]);
    }
    const scaleUp = minExp < 128;
    const scaleDown = maxExp > 0x7ff - 128;
    // At least one input is denormal (or huge): rescale by a power of 2.
    if (scaleUp) {
      num *= TWO_64;
      if (!scaleDown) {
        den *= TWO_64;
      }
    } else if (scaleDown) {
      den *= TWO_M64;
      if (!scaleUp) {
        num *= TWO_M64;
      }
    }
    minExp = highWord(num) >>> 20;
    maxExp = highWord(den) >>> 20;
  }

  const finalSign = IS_NEG[(xSign !== ySign ? 1 : 0) ^ recip];
  const constTerm = CONST_ADJ[xSign][ySign][recip];
  const expDiff = (maxExp - minExp) >>> 0;
  if (expDiff > 54) {
    return fma(finalSign, constTerm[0], finalSign * (constTerm[1] + num / den));
  }

  let k = nearestInteger((64.0 * num) / den);
  const idx = k >>> 0;
  k *= TWO_M6;

  // exact_mult with FMA: {a * b, fma(a, b, -a * b)}, both exact.
  const numKHi = num * k;
  const numKLo = fma(num, k, -numKHi);
  const denKHi = den * k;
  const denKLo = fma(den, k, -denKHi);

  // num_dd = exact_add(num - den_k.hi, -den_k.lo)
  const nA = num - denKHi;
  const numDdHi = nA + -denKLo;
  const numDdLo = -denKLo - (numDdHi - nA);
  // den_dd = exact_add(den, num_k.hi); den_dd.lo += num_k.lo
  const denDdHi = den + numKHi;
  let denDdLo = numKHi - (denDdHi - den);
  denDdLo += numKLo;

  // q = div(num_dd, den_dd), FMA variant.
  const q0 = 1.0 / denDdHi;
  const qHi = numDdHi * q0;
  const eHi = fma(denDdHi, -qHi, numDdHi);
  const eLo = fma(denDdLo, -qHi, numDdLo);
  const qLo = q0 * (eHi + eLo);

  // p = atan_eval(q)
  const xHiSq = qHi * qHi;
  const c0 = fma(xHiSq, ATAN_C0_A, ATAN_C0_B);
  const c1 = fma(xHiSq, ATAN_C1_A, ATAN_C1_B);
  const xHi3 = xHiSq * qHi;
  const xHi4 = xHiSq * xHiSq;
  const d0 = fma(xHi4, c1, c0);
  const d1 = fma(xHi4 - xHiSq, qLo, qLo);
  const pHi = qHi;
  const pLo = fma(xHi3, d0, d1);

  // r = add(const_term, add(ATAN_I[idx], p))
  let sHi = ATAN_I_HI[idx] + pHi;
  let sLo = pHi - (sHi - ATAN_I_HI[idx]);
  let lo = ATAN_I_LO[idx] + pLo;
  let tHi = sHi + (sLo + lo);
  let tLo = sLo + lo - (tHi - sHi);
  sHi = constTerm[0] + tHi;
  sLo = tHi - (sHi - constTerm[0]);
  lo = constTerm[1] + tLo;
  const t = sLo + lo;
  tHi = sHi + t;
  tLo = t - (tHi - sHi);

  return tHi * finalSign + tLo * finalSign;
}
