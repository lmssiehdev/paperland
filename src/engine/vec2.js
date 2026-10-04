import { nearlyEqual } from "./math.js";

const VEC_POOL_MAX = 30000;
const vecPool = Array.from({
  length: VEC_POOL_MAX
});
let vecPoolSize = 0;
export class Vec2 {
  constructor(x, y) {
    this.x = undefined;
    this.y = undefined;
    this.cell = null;
    this.segments = [];
    this.set(x, y);
  }
  set(_0x24ed4b, y) {
    this.x = _0x24ed4b || 0;
    this.y = y || (y === 0 ? 0 : this.x);
    return this;
  }
  commit(_0x49b35c) {
    if (this.segments.indexOf(_0x49b35c) === -1) {
      this.segments.push(_0x49b35c);
    }
    if (!this.cell) {
      const _0x19525f = Vec2.space.cell(this);
      _0x19525f.commit(this);
    }
  }
  remove(_0x5b5121) {
    const index = this.segments.indexOf(_0x5b5121);
    this.segments.splice(index, 1);
    if (this.cell && !this.segments.length) {
      this.cell.remove(this);
    }
  }
  release() {
    Vec2.release(this);
  }
  add(point) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }
  sub(point) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }
  mul(point) {
    this.x *= point.x;
    this.y *= point.y;
    return this;
  }
  mulScalar(dist3) {
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
  copy(point) {
    this.x = point.x;
    this.y = point.y;
    return this;
  }
  distance(point) {
    return Math.sqrt(this.distance2(point));
  }
  distance2(point) {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return dx * dx + dy * dy;
  }
  cross(point) {
    return this.x * point.y - this.y * point.x;
  }
  dot(point) {
    return this.x * point.x + this.y * point.y;
  }
  rotate(rotation) {
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
  angle(point) {
    return Math.atan2(this.cross(point), this.dot(point));
  }
  invert() {
    return this.mulScalar(-1);
  }
  equal(point) {
    return nearlyEqual(this.x, point.x) && nearlyEqual(this.y, point.y);
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  static alloc(x, y) {
    if (vecPoolSize) {
      let result = vecPool[--vecPoolSize].set(x, y);
      return result;
    }
    return new Vec2(x, y);
  }
  static clone(point) {
    return Vec2.alloc(point.x, point.y);
  }
  static poolLength() {
    return vecPoolSize;
  }
  toString() {
    return "[" + this.x.toFixed(4) + "," + this.y.toFixed(4) + "]";
  }
  static release(_0x1d0d5c) {
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
