import { nearlyEqual } from "./math";

const VEC_POOL_MAX = 30000;
const vecPool = Array.from({
  length: VEC_POOL_MAX
});
let vecPoolSize = 0;
export class Vec2 {
    x: number;
    y: number;
    cell: any;
    segments: any[];
    static space: any;

  constructor(x: number, y: number) {
    this.x = undefined;
    this.y = undefined;
    this.cell = null;
    this.segments = [];
    this.set(x, y);
  }
  set(_0x24ed4b: number, y: number) {
    this.x = _0x24ed4b || 0;
    this.y = y || (y === 0 ? 0 : this.x);
    return this;
  }
  commit(_0x49b35c: any) {
    if (this.segments.indexOf(_0x49b35c) === -1) {
      this.segments.push(_0x49b35c);
    }
    if (!this.cell) {
      const _0x19525f = Vec2.space.cell(this);
      _0x19525f.commit(this);
    }
  }
  remove(_0x5b5121: any) {
    const index = this.segments.indexOf(_0x5b5121);
    this.segments.splice(index, 1);
    if (this.cell && !this.segments.length) {
      this.cell.remove(this);
    }
  }
  release() {
    Vec2.release(this);
  }
  add(point: Vec2) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }
  sub(point: Vec2) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }
  mul(point: Vec2) {
    this.x *= point.x;
    this.y *= point.y;
    return this;
  }
  mulScalar(dist3: number) {
    this.x *= dist3;
    this.y *= dist3;
    return this;
  }
  magnitude() {
    const {
      x,
      y
    } = this;
    return Math.sqrt(x * x + y * y);
  }
  normalize() {
    const len = this.magnitude();
    if (len) {
      this.mulScalar(1 / len);
    }
    return this;
  }
  copy(point: Vec2) {
    this.x = point.x;
    this.y = point.y;
    return this;
  }
  distance(point: Vec2) {
    return Math.sqrt(this.distance2(point));
  }
  distance2(point: Vec2) {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return dx * dx + dy * dy;
  }
  cross(point: Vec2) {
    return this.x * point.y - this.y * point.x;
  }
  dot(point: Vec2) {
    return this.x * point.x + this.y * point.y;
  }
  rotate(rotation: number) {
    const {
      x,
      y
    } = this;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
    return this;
  }
  angle(point: Vec2) {
    return Math.atan2(this.cross(point), this.dot(point));
  }
  invert() {
    return this.mulScalar(-1);
  }
  equal(point: Vec2) {
    return nearlyEqual(this.x, point.x) && nearlyEqual(this.y, point.y);
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  static alloc(x: number, y: number) {
    if (vecPoolSize) {
      let result = vecPool[--vecPoolSize].set(x, y);
      return result;
    }
    return new Vec2(x, y);
  }
  static clone(point: Vec2) {
    return Vec2.alloc(point.x, point.y);
  }
  static poolLength() {
    return vecPoolSize;
  }
  toString() {
    return "[" + this.x.toFixed(4) + "," + this.y.toFixed(4) + "]";
  }
  static release(_0x1d0d5c: unknown) {
    if (vecPoolSize < VEC_POOL_MAX) {
      _0x1d0d5c.set();
      if (_0x1d0d5c.cell || _0x1d0d5c.segments.length) {
        debugger;
      }
      vecPool[vecPoolSize++] = _0x1d0d5c;
    }
  }
}
Vec2.space = undefined;
