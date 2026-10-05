import { nearlyEqual } from "./math";
import * as trig from "./trig";
import type { Segment } from "./segment";
import type { GridCell, SpatialGrid } from "./spatial-grid";

const VEC_POOL_MAX = 30000;
const vecPool = Array.from<Vec2>({
  length: VEC_POOL_MAX
});
let vecPoolSize = 0;
/** Mutable, pooled 2D vector/point; as a territory or trail vertex it also tracks its grid cell and the segments using it. */
export class Vec2 {
  // Both assigned by this.set() in the constructor (TS can't see through the call).
  x!: number;
  y!: number;
  cell: GridCell | null;
  segments: Segment[];
  /** Grid that committed points register into; set by SpatialGrid's constructor. */
  static grid: SpatialGrid | undefined;

  constructor(x?: number, y?: number) {
    this.cell = null;
    this.segments = [];
    this.set(x, y);
  }
  set(x?: number, y?: number): this {
    this.x = x || 0;
    this.y = y || (y === 0 ? 0 : this.x);
    return this;
  }
  commit(segment: Segment): void {
    if (this.segments.indexOf(segment) === -1) {
      this.segments.push(segment);
    }
    if (!this.cell) {
      // Points are only committed once the Game has built its SpatialGrid (which sets Vec2.grid).
      const cell = Vec2.grid!.cell(this);
      cell.commit(this);
    }
  }
  remove(segment: Segment): void {
    const index = this.segments.indexOf(segment);
    this.segments.splice(index, 1);
    if (this.cell && !this.segments.length) {
      this.cell.remove(this);
    }
  }
  release(): void {
    Vec2.release(this);
  }
  add(point: Vec2): this {
    this.x += point.x;
    this.y += point.y;
    return this;
  }
  sub(point: Vec2): this {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }
  mul(point: Vec2): this {
    this.x *= point.x;
    this.y *= point.y;
    return this;
  }
  mulScalar(scalar: number): this {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  magnitude(): number {
    const { x, y } = this;
    return Math.sqrt(x * x + y * y);
  }
  normalize(): this {
    const len = this.magnitude();
    if (len) {
      this.mulScalar(1 / len);
    }
    return this;
  }
  copy(point: Vec2): this {
    this.x = point.x;
    this.y = point.y;
    return this;
  }
  distance(point: Vec2): number {
    return Math.sqrt(this.distance2(point));
  }
  distance2(point: Vec2): number {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return dx * dx + dy * dy;
  }
  cross(point: Vec2): number {
    return this.x * point.y - this.y * point.x;
  }
  dot(point: Vec2): number {
    return this.x * point.x + this.y * point.y;
  }
  rotate(rotation: number): this {
    const { x, y } = this;
    const cos = trig.cos(rotation);
    const sin = trig.sin(rotation);
    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
    return this;
  }
  angle(point: Vec2): number {
    return trig.atan2(this.cross(point), this.dot(point));
  }
  invert(): this {
    return this.mulScalar(-1);
  }
  equal(point: Vec2): boolean {
    return nearlyEqual(this.x, point.x) && nearlyEqual(this.y, point.y);
  }
  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }
  static alloc(x?: number, y?: number): Vec2 {
    if (vecPoolSize) {
      const result = vecPool[--vecPoolSize].set(x, y);
      return result;
    }
    return new Vec2(x, y);
  }
  static clone(point: Vec2): Vec2 {
    return Vec2.alloc(point.x, point.y);
  }
  static poolLength(): number {
    return vecPoolSize;
  }
  toString(): string {
    return "[" + this.x.toFixed(4) + "," + this.y.toFixed(4) + "]";
  }
  static release(point: Vec2): void {
    if (vecPoolSize < VEC_POOL_MAX) {
      point.set();
      vecPool[vecPoolSize++] = point;
    }
  }
}
Vec2.grid = undefined;
