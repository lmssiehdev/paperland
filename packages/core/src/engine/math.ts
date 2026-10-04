import { Vec2 } from "./vec2";

export const EPSILON = Math.pow(2, -26);
export const isZero = (distance: number): boolean => Math.abs(distance) <= EPSILON;
export const nearlyEqual = (a: number, b: number): boolean => Math.abs(a - b) <= EPSILON;
export const lerp = (from: number, to: number, t: number): number => from + (to - from) * t;
export const easeOutCubic = (t: number): number => --t * t * t + 1;
export const clamp = (min: number, max: number, value: number): number => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};
export const cross2d = (ax: number, ay: number, bx: number, by: number): number => ax * by - ay * bx;
export const inRange = (a: number, b: number, value: number): boolean =>
  Math.min(a, b) - EPSILON <= value && value <= Math.max(a, b) + EPSILON;
export const rangeOverlap = (a1: number, a2: number, b1: number, b2: number): number => {
  if (a1 > a2) {
    [a1, a2] = [a2, a1];
  }
  if (b1 > b2) {
    [b1, b2] = [b2, b1];
  }
  return Math.min(a2, b2) - Math.max(a1, b1);
};
/** Even-odd test; returns 0 outside, 1 on an edge, 2 inside. `vertices` is a list of [x, y] vertices. */
export function pointInPolygon(vertices: ArrayLike<ArrayLike<number>>, x: number, y: number): 0 | 1 | 2 {
  let inside = false;
  const count = vertices.length;
  for (let i = 0, j = count - 1; i < count; j = i++) {
    const xi = vertices[i][0];
    const yi = vertices[i][1];
    const xj = vertices[j][0];
    const yj = vertices[j][1];
    if (pointOnSegment(x, y, xi, yi, xj, yj)) {
      return 1;
    }
    const crosses = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (crosses) {
      inside = !inside;
    }
  }
  if (inside) {
    return 2;
  } else {
    return 0;
  }
}
function pointOnSegment(x: number, y: number, x1: number, y1: number, x2: number, y2: number): boolean {
  const dx1 = x1 - x;
  const dy1 = y1 - y;
  const dx2 = x2 - x;
  const dy2 = y2 - y;
  const cross = dx1 * dy2 - dy1 * dx2;
  const dot = dx1 * dx2 + dy1 * dy2;
  return cross === 0 && dot <= 0;
}
let idCounter = 1;
export const nextId = (): number => idCounter++;
const clock = typeof performance !== "undefined" ? performance : Date;
export const now = clock.now.bind(clock);
/** Seeded LCG. rng() returns a float in [0, 1); rng(n) returns an integer in [0, n). */
export type Rng = (max?: number) => number;

export function createRng(seed: number): Rng {
  if (seed > 0 && seed < 1) {
    seed = Math.floor(seed * 1000000000);
  }
  const nextInt = (modulus: number): number => {
    seed = (seed * 69069 + 1) % 2147483648;
    return seed % modulus;
  };
  const result = (max?: number): number => (max == null ? nextInt(1000000000) / 1000000000 : nextInt(max));
  return result;
}
export function fmt2(value: number): string {
  return value.toFixed(2);
}
export const TAU = Math.PI * 2;
const BASE_ANGLE_COS = Math.cos(0);
const BASE_ANGLE_SIN = Math.sin(0);
/** Number of per-frame metrics kept for the debug graph (Game.metrics). */
export const METRICS_HISTORY_LENGTH = 240;
export const vecFromAngle = (direction: number): Vec2 => {
  const cos = Math.cos(direction);
  const sin = Math.sin(direction);
  const x = BASE_ANGLE_COS * cos - BASE_ANGLE_SIN * sin;
  const y = BASE_ANGLE_COS * sin + BASE_ANGLE_SIN * cos;
  return Vec2.alloc(x, y);
};
