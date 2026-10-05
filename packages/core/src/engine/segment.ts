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
  // These four are assigned by this.calc() in the constructor (TS can't see through the call).
  vector!: Vec2;
  normalX!: number;
  normalY!: number;
  lineOffset!: number;
  mark: number;
  shape: Shape | null;
  start: Vec2;
  end: Vec2;

  constructor(start: Vec2, end: Vec2) {
    if (start.equal(end)) {
    }
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
    const { start, end } = this;
    this.vector = end.clone().sub(start);
    let dy = start.y - end.y;
    let dx = end.x - start.x;
    const dist = Math.sqrt(dy * dy + dx * dx);
    dy /= dist;
    dx /= dist;
    this.normalX = dy;
    this.normalY = dx;
    this.lineOffset = -(dy * start.x + dx * start.y);
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
  zn(other: Segment): number {
    const a2 = other.normalX;
    const b2 = other.normalY;
    const { normalX, normalY } = this;
    return cross2d(a2, b2, normalX, normalY);
  }
  intersect(segment: Segment): Intersection | null {
    const otherNormalX = segment.normalX;
    const otherNormalY = segment.normalY;
    const otherLineOffset = segment.lineOffset;
    const otherStart = segment.start;
    const otherEnd = segment.end;
    const { normalX, normalY, lineOffset, start, end } = this;
    const distance = cross2d(otherNormalX, otherNormalY, normalX, normalY);
    if (!isZero(distance)) {
      const x = -cross2d(otherLineOffset, otherNormalY, lineOffset, normalY) / distance;
      const y = -cross2d(otherNormalX, otherLineOffset, normalX, lineOffset) / distance;
      const point =
        inRange(otherStart.x, otherEnd.x, x) &&
        inRange(otherStart.y, otherEnd.y, y) &&
        inRange(start.x, end.x, x) &&
        inRange(start.y, end.y, y) &&
        new Vec2(x, y);
      if (!point) {
        return null;
      }
      return {
        point:
          (start.equal(point) && start) ||
          (end.equal(point) && end) ||
          (otherStart.equal(point) && otherStart) ||
          (otherEnd.equal(point) && otherEnd) ||
          point,
        segment: this,
        distance: point.distance2(otherStart),
        overlay: false,
        zn: Math.sign(distance)
      };
    }
    const overlapX = rangeOverlap(otherStart.x, otherEnd.x, start.x, end.x);
    const overlapY = rangeOverlap(otherStart.y, otherEnd.y, start.y, end.y);
    if (
      isZero(cross2d(otherNormalX, otherLineOffset, normalX, lineOffset)) &&
      isZero(cross2d(otherNormalY, otherLineOffset, normalY, lineOffset)) &&
      overlapX >= -EPSILON &&
      overlapY >= -EPSILON
    ) {
      if (overlapX >= EPSILON || overlapY >= EPSILON) {
        let overlapPoint;
        if (inRange(start.x, end.x, otherStart.x) && inRange(start.y, end.y, otherStart.y)) {
          overlapPoint = (start.equal(otherStart) && start) || (end.equal(otherStart) && end) || otherStart;
        } else {
          overlapPoint = otherStart.distance2(start) >= otherStart.distance2(end) ? end : start;
        }
        return {
          point: overlapPoint,
          segment: this,
          distance: overlapPoint.distance2(otherStart),
          overlay: true,
          zn: 0
        };
      }
      const touchPoint = start.equal(otherStart) || start.equal(otherEnd) ? start : end;
      return {
        point: touchPoint,
        segment: this,
        distance: touchPoint.distance2(otherStart),
        overlay: false,
        zn: 0
      };
    }
    return null;
  }
  /** True if `point` lies on this segment (on its line, within its extent). */
  contains(point: Vec2): boolean {
    return (
      isZero(this.normalX * point.x + this.normalY * point.y + this.lineOffset) &&
      inRange(this.start.x, this.end.x, point.x) &&
      inRange(this.start.y, this.end.y, point.y)
    );
  }
  has(point: Vec2): boolean {
    return this.start === point || this.end === point;
  }
}
