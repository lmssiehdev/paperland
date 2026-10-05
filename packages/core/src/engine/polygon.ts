import { EPSILON, isZero, pointInPolygon } from "./math";
import { Segment } from "./segment";
import { cos, sin } from "./trig";
import { Vec2 } from "./vec2";
import { CELL_RADIUS, CELL_RADIUS_SQ } from "../game/constants";
import type { Bounds, Polyline } from "./polyline";
import type { Intersection } from "./segment";
import type { Base } from "../game/base";
import type { PathHandle } from "../handles";
import { platform } from "../platform";

const rayCrossingSign = (edgeStart: Vec2, edgeEnd: Vec2, probe: Vec2) => {
  const dx = edgeStart.x - probe.x;
  const dy = edgeStart.y - probe.y;
  const dx2 = edgeEnd.x - probe.x;
  const dy2 = edgeEnd.y - probe.y;
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
  simplifiedPoints: Vec2[];
  owner: Base | null;
  /** Assigned by this.updateBounds() in the constructor (TS can't see through the call). */
  bounds!: Bounds;
  /** Assigned by calcPath(), which Base and Game call right after building every polygon that gets drawn. */
  path!: PathHandle;

  constructor(points: Vec2[]) {
    this.segments = [];
    this.simplifiedPoints = [];
    this.owner = null;
    const { length } = points;
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
      const index = this.segments.findIndex(candidate => candidate === segment);
      const firstHalf = new Segment(segment.start, end).commit(this);
      const secondHalf = new Segment(end, segment.end).commit(this);
      segment.remove();
      this.segments.splice(index, 1, firstHalf, secondHalf);
    }
  }
  hasPoint(point: Vec2): boolean {
    return this.segments.some(segment => segment.has(point));
  }
  findSegment(point: Vec2): number {
    const index = this.segments.findIndex(segment => segment.start === point);
    return index;
  }
  splice(polyline: Polyline, startIndex: number, endIndex: number): void {
    const removed = this.segments.splice(startIndex, endIndex - startIndex, ...polyline.segments);
    removed.forEach(item => item.remove());
    polyline.commit(this);
  }
  unsplice(polylineCopy: Polyline, startIndex: number, endIndex: number): void {
    const removed = this.segments.splice(startIndex, endIndex - startIndex);
    this.remove();
    this.segments = removed.concat(polylineCopy.reverse().segments);
    polylineCopy.commit(this);
  }
  left(replacementPoints: Vec2[], startIndex: number, endIndex: number): void {
    const newSegments: Segment[] = [];
    for (let i = 0; i < replacementPoints.length - 1; i++) {
      newSegments.push(new Segment(replacementPoints[i], replacementPoints[i + 1]));
    }
    const removed = this.segments.splice(startIndex, endIndex - startIndex, ...newSegments);
    newSegments.forEach(item => item.commit(this));
    removed.forEach(item => item.remove());
  }
  right(replacementPoints: Vec2[], startIndex: number, endIndex: number): void {
    const newSegments: Segment[] = [];
    for (let i = 0; i < replacementPoints.length - 1; i++) {
      newSegments.push(new Segment(replacementPoints[i], replacementPoints[i + 1]));
    }
    const removed = this.segments.splice(startIndex, endIndex - startIndex);
    this.remove();
    newSegments.reverse().forEach(item => item.reverse().commit(this));
    this.segments = removed.concat(newSegments);
  }
  points(): Vec2[] {
    return this.segments.map(segment => segment.start);
  }
  intersections(querySegment: Segment): Intersection[] {
    let result: Intersection[] = [];
    if (this.segments.length > 1) {
      this.segments.forEach(segment => {
        const intersection = segment.intersect(querySegment);
        if (intersection) {
          result.push(intersection);
        }
      });
    }
    if (result.length > 1) {
      result.sort((a, b) => a.distance - b.distance);
      result = result.filter(function (item, index) {
        return result.findIndex(candidate => candidate.point === item.point) === index;
      });
    }
    return result;
  }
  inside(point: Vec2): boolean {
    const { length } = this.segments;
    let crossingSign = 1;
    for (let i = 0; i < length; i++) {
      const { start, end } = this.segments[i];
      const crossing = rayCrossingSign(start, end, point);
      if (crossing === 0) {
        return true;
      }
      crossingSign *= crossing;
    }
    return crossingSign !== 1;
  }
  insideNew(point: Vec2): boolean {
    return !!pointInPolygon(
      this.segments.map(segment => [segment.start.x, segment.start.y]),
      point.x,
      point.y
    );
  }
  signedArea(): number {
    let sum = 0;
    this.segments.forEach(segment => {
      const { start, end } = segment;
      sum += (start.x + end.x) * (end.y - start.y);
    });
    return sum / 2;
  }
  area(): number {
    let result = this.signedArea();
    if (result < 0) {
      {
        result *= -1;
      }
    }
    return result;
  }
  calcPath(): void {
    const path = platform.createPath();
    const { segments } = this;
    const { length } = segments;
    const { start } = segments[0];
    path.moveTo(start.x, start.y);
    for (let i = 1; i < length; i++) {
      const { start } = segments[i];
      path.lineTo(start.x, start.y);
    }
    path.closePath();
    this.path = path;
    this.updateBounds();
  }
  calcSimplify(): void {
    this.simplifiedPoints = [];
    let count = 0;
    this.segments.forEach(segment => {
      const { start } = segment;
      if (count < 2) {
        this.simplifiedPoints.push(start);
        count++;
      } else {
        const point = this.simplifiedPoints[count - 2];
        if (start.distance2(point) < CELL_RADIUS_SQ) {
          this.simplifiedPoints[count - 1] = start;
        } else {
          this.simplifiedPoints.push(start);
          count++;
        }
      }
    });
  }
  updateBounds(): void {
    this.calcSimplify();
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    this.simplifiedPoints.forEach(item => {
      const { x, y } = item;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    });
    minX -= CELL_RADIUS;
    maxX += CELL_RADIUS;
    minY -= CELL_RADIUS;
    maxY += CELL_RADIUS;
    this.bounds = {
      left: minX,
      right: maxX,
      top: minY,
      bottom: maxY
    };
  }
}
export const circlePoints = (point: Vec2, baseCount: number, baseRadius: number): Vec2[] => {
  // Original sanity check `typeof point.x !== "number"`, written without typeof (a boxed primitive is a Number
  // exactly when it is a number). Vec2.set always stores numbers, so it never fires.
  if (!(Object(point.x) instanceof Number)) {
    throw Error("circle");
  }
  const fullTurn = Math.PI * 2;
  const step = fullTurn / baseCount;
  const result: Vec2[] = [];
  for (let i = 0; i < fullTurn - EPSILON; i += step) {
    result.push(new Vec2(point.x + cos(i) * baseRadius, point.y + sin(i) * baseRadius));
  }
  return result;
};
