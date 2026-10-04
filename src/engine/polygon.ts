import { EPSILON, isZero, pointInPolygon } from "./math";
import { Segment } from "./segment";
import { Vec2 } from "./vec2";
import { CELL_RADIUS, CELL_RADIUS_SQ } from "../game/constants";
import type { Bounds, Polyline } from "./polyline";
import type { Intersection } from "./segment";
import type { Base } from "../game/base";

const rayCrossingSign = (point: Vec2, point2: Vec2, point3: Vec2) => {
  const dx = point.x - point3.x;
  const dy = point.y - point3.y;
  const dx2 = point2.x - point3.x;
  const dy2 = point2.y - point3.y;
  if (dy * dy2 > 0) {
    return 1;
  }
  const distance = dx * dy2 - dy * dx2;
  const result = isZero(distance) ? 0 : Math.sign(distance);
  if (result === 0) {
    if (dx * dx2 <= 0) {
      return 0;
    }
    return 1;
  }
  if (dy < 0) {
    return -result;
  }
  if (dy2 < 0) {
    return result;
  }
  return 1;
};
/** Closed ring of segments (a unit's territory), with a simplified outline, bounds and Path2D. */
export class Polygon {
    segments: Segment[];
    /** Outline vertices thinned to roughly CELL_RADIUS spacing; used for bounds. */
    simplify: Vec2[];
    owner: Base | null;
    bounds: Bounds | null;
    path: Path2D;

  constructor(points: Vec2[]) {
    this.segments = [];
    this.simplify = [];
    this.owner = null;
    this.bounds = null;
    const {
      length
    } = points;
    for (let i = 0; i < length;) {
      this.segments.push(new Segment(points[i++], points[i < length ? i : 0]));
    }
    this.updateBounds();
  }
  commit(owner?: Base): void {
    if (owner) {
      this.owner = owner;
    }
    this.segments.forEach(segment => segment.commit(this));
  }
  remove(): void {
    this.segments.forEach(segment => segment.remove());
  }
  reverse(): this {
    this.segments.reverse();
    this.segments.forEach(segment => segment.reverse());
    return this;
  }
  insert(segment: Segment, end: Vec2): void {
    if (!segment.has(end)) {
      const index = this.segments.findIndex(segment2 => segment2 === segment);
      const _0x55e498 = new Segment(segment.start, end).commit(this);
      const _0x121664 = new Segment(end, segment.end).commit(this);
      segment.remove();
      this.segments.splice(index, 1, _0x55e498, _0x121664);
    }
  }
  hasPoint(point: Vec2): boolean {
    return this.segments.some(segment => segment.has(point));
  }
  findSegment(point: Vec2): number {
    const index = this.segments.findIndex(segment => segment.start === point);
    return index;
  }
  splice(_0x4ff73a: Polyline, _0x2e9f8f: number, _0x198893: number): void {
    const removed = this.segments.splice(_0x2e9f8f, _0x198893 - _0x2e9f8f, ..._0x4ff73a.segments);
    removed.forEach(item => item.remove());
    _0x4ff73a.commit(this);
  }
  unsplice(polylineCopy: Polyline, _0x35431a: number, _0x11653f: number): void {
    const removed = this.segments.splice(_0x35431a, _0x11653f - _0x35431a);
    this.remove();
    this.segments = removed.concat(polylineCopy.reverse().segments);
    polylineCopy.commit(this);
  }
  left(removed2: Vec2[], _0x2a2bca: number, _0x48f39f: number): void {
    const _0x18a162: Segment[] = [];
    for (let i = 0; i < removed2.length - 1; i++) {
      _0x18a162.push(new Segment(removed2[i], removed2[i + 1]));
    }
    const removed = this.segments.splice(_0x2a2bca, _0x48f39f - _0x2a2bca, ..._0x18a162);
    _0x18a162.forEach(item => item.commit(this));
    removed.forEach(item => item.remove());
  }
  right(removed2: Vec2[], _0x4ab91c: number, _0x458307: number): void {
    const _0x9feb94: Segment[] = [];
    for (let i = 0; i < removed2.length - 1; i++) {
      _0x9feb94.push(new Segment(removed2[i], removed2[i + 1]));
    }
    const removed = this.segments.splice(_0x4ab91c, _0x458307 - _0x4ab91c);
    this.remove();
    _0x9feb94.reverse().forEach(item => item.reverse().commit(this));
    this.segments = removed.concat(_0x9feb94);
  }
  points(): Vec2[] {
    return this.segments.map(segment => segment.start);
  }
  intersections(_0x5d6a44: Segment): Intersection[] {
    let result: Intersection[] = [];
    if (this.segments.length > 1) {
      this.segments.forEach(segment => {
        const _0x3c561e = segment.intersect(_0x5d6a44);
        if (_0x3c561e) {
          result.push(_0x3c561e);
        }
      });
    }
    if (result.length > 1) {
      result.sort((a, b) => a.distance - b.distance);
      result = result.filter(function (item, index) {
        return result.findIndex(item2 => item2.point === item.point) == index;
      });
    }
    return result;
  }
  inside(point3: Vec2): boolean {
    const {
      length
    } = this.segments;
    let _0x50b175 = 1;
    for (let i = 0; i < length; i++) {
      const {
        start,
        end
      } = this.segments[i];
      const _0x4985c4 = rayCrossingSign(start, end, point3);
      if (_0x4985c4 === 0) {
        return true;
      }
      _0x50b175 *= _0x4985c4;
    }
    return _0x50b175 !== 1;
  }
  insideNew(point: Vec2): boolean {
    return !!pointInPolygon(this.segments.map(segment => [segment.start.x, segment.start.y]), point.x, point.y);
  }
  rawSquare(): number {
    let _0x3e0443 = 0;
    this.segments.forEach(segment => {
      const {
        start,
        end
      } = segment;
      _0x3e0443 += (start.x + end.x) * (end.y - start.y);
    });
    return _0x3e0443 / 2;
  }
  square(): number {
    let result = this.rawSquare();
    if (result < 0) {
      {
        result *= -1;
      }
    }
    return result;
  }
  calcPath(): void {
    const path = new Path2D();
    const {
      segments
    } = this;
    const {
      length
    } = segments;
    const {
      start
    } = segments[0];
    path.moveTo(start.x, start.y);
    for (let i = 1; i < length; i++) {
      const {
        start: start
      } = segments[i];
      path.lineTo(start.x, start.y);
    }
    path.closePath();
    this.path = path;
    this.updateBounds();
  }
  calcSimplify(): void {
    this.simplify = [];
    let _0x3ed40b = 0;
    this.segments.forEach(segment => {
      const {
        start
      } = segment;
      if (_0x3ed40b < 2) {
        this.simplify.push(start);
        _0x3ed40b++;
      } else {
        const point = this.simplify[_0x3ed40b - 2];
        if (start.distance2(point) < CELL_RADIUS_SQ) {
          this.simplify[_0x3ed40b - 1] = start;
        } else {
          this.simplify.push(start);
          _0x3ed40b++;
        }
      }
    });
  }
  updateBounds(): void {
    this.calcSimplify();
    let min = Infinity;
    let max = -Infinity;
    let min2 = Infinity;
    let max2 = -Infinity;
    this.simplify.forEach(item => {
      const {
        x,
        y
      } = item;
      min = Math.min(min, x);
      max = Math.max(max, x);
      min2 = Math.min(min2, y);
      max2 = Math.max(max2, y);
    });
    min -= CELL_RADIUS;
    max += CELL_RADIUS;
    min2 -= CELL_RADIUS;
    max2 += CELL_RADIUS;
    this.bounds = {
      left: min,
      right: max,
      top: min2,
      bottom: max2
    };
  }
}
export const circlePoints = (point: Vec2, baseCount: number, baseRadius: number): Vec2[] => {
  if (typeof point.x !== "number") {
    throw Error("circle");
  }
  const _0x25a8fb = Math.PI * 2;
  const _0x2d7adf = _0x25a8fb / baseCount;
  const result: Vec2[] = [];
  for (let i = 0; i < _0x25a8fb - EPSILON; i += _0x2d7adf) {
    result.push(new Vec2(point.x + Math.cos(i) * baseRadius, point.y + Math.sin(i) * baseRadius));
  }
  return result;
};
