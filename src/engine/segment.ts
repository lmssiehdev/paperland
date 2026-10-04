import { EPSILON, cross2d, inRange, isZero, rangeOverlap } from "./math";
import { Vec2 } from "./vec2";
import type { Polygon } from "./polygon";
import type { Polyline } from "./polyline";

/** A shape that owns segments: a territory polygon or a trail polyline. */
export type Shape = Polygon | Polyline;

/** Result of intersecting two segments (see Segment.intersect). */
export interface Intersection {
  /** Intersection point; reuses an existing endpoint Vec2 when it coincides with one. */
  point: Vec2;
  /** The segment `intersect` was called on. */
  segment: Segment;
  /** Squared distance from the other segment's start to `point`. */
  distance: number;
  /** True when the segments are collinear and overlap over a length. */
  overlay: boolean;
  /** Sign of the cross product of the two segment normals (0 when parallel). */
  zn: number;
}

/** Directed line segment between two Vec2 points, with cached direction vector and normalized line equation ax + by + c = 0. */
export class Segment {
    vector: Vec2;
    a: number;
    b: number;
    c: number;
    mark: number;
    shape: Shape | null;
    start: Vec2;
    end: Vec2;

  constructor(start: Vec2, end: Vec2) {
    this.vector = undefined;
    this.a = undefined;
    this.b = undefined;
    this.c = undefined;
    if (start.equal(end)) {}
    this.mark = 0;
    this.shape = null;
    this.start = start;
    this.end = end;
    this.calc();
  }
  get owner(): null {
    return null;
  }
  calc(): void {
    const {
      start,
      end
    } = this;
    this.vector = end.clone().sub(start);
    let dy = start.y - end.y;
    let dx = end.x - start.x;
    const dist = Math.sqrt(dy * dy + dx * dx);
    dy /= dist;
    dx /= dist;
    this.a = dy;
    this.b = dx;
    this.c = -(dy * start.x + dx * start.y);
  }
  clone(): Segment {
    return new Segment(this.start, this.end);
  }
  reverse(): this {
    const start = this.start;
    this.start = this.end;
    this.end = start;
    this.calc();
    return this;
  }
  commit(shape: Shape): this {
    this.shape = shape;
    this.start.commit(this);
    this.end.commit(this);
    return this;
  }
  remove(): void {
    this.shape = null;
    this.start.remove(this);
    this.end.remove(this);
  }
  length(): number {
    return this.vector.magnitude();
  }
  zn(_0xc6e8f: Segment): number {
    const a2 = _0xc6e8f.a;
    const b2 = _0xc6e8f.b;
    const {
      a,
      b
    } = this;
    return cross2d(a2, b2, a, b);
  }
  intersect(segment: Segment): Intersection | null {
    const a2 = segment.a;
    const b2 = segment.b;
    const c2 = segment.c;
    const start2 = segment.start;
    const end2 = segment.end;
    const {
      a,
      b,
      c,
      start,
      end
    } = this;
    const distance = cross2d(a2, b2, a, b);
    if (!isZero(distance)) {
      const x = -cross2d(c2, b2, c, b) / distance;
      const y = -cross2d(a2, c2, a, c) / distance;
      const point = inRange(start2.x, end2.x, x) && inRange(start2.y, end2.y, y) && inRange(start.x, end.x, x) && inRange(start.y, end.y, y) && new Vec2(x, y);
      if (!point) {
        return null;
      }
      return {
        point: start.equal(point) && start || end.equal(point) && end || start2.equal(point) && start2 || end2.equal(point) && end2 || point,
        segment: this,
        distance: point.distance2(start2),
        overlay: false,
        zn: Math.sign(distance)
      };
    }
    const _0x4d2c22 = rangeOverlap(start2.x, end2.x, start.x, end.x);
    const _0x599176 = rangeOverlap(start2.y, end2.y, start.y, end.y);
    if (isZero(cross2d(a2, c2, a, c)) && isZero(cross2d(b2, c2, b, c)) && _0x4d2c22 >= -EPSILON && _0x599176 >= -EPSILON) {
      if (_0x4d2c22 >= EPSILON || _0x599176 >= EPSILON) {
        let _0x357b15;
        if (inRange(start.x, end.x, start2.x) && inRange(start.y, end.y, start2.y)) {
          _0x357b15 = start.equal(start2) && start || end.equal(start2) && end || start2;
        } else {
          _0x357b15 = start2.distance2(start) >= start2.distance2(end) ? end : start;
        }
        return {
          point: _0x357b15,
          segment: this,
          distance: _0x357b15.distance2(start2),
          overlay: true,
          zn: 0
        };
      }
      const _0x447570 = start.equal(start2) || start.equal(end2) ? start : end;
      return {
        point: _0x447570,
        segment: this,
        distance: _0x447570.distance2(start2),
        overlay: false,
        zn: 0
      };
    }
    return null;
  }
  has(point: Vec2): boolean {
    return this.start === point || this.end === point;
  }
}
