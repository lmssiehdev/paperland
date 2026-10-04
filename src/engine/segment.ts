import { EPSILON, cross2d, inRange, isZero, rangeOverlap } from "./math";
import { Vec2 } from "./vec2";

export class Segment {
    vector: any;
    a: number;
    b: number;
    c: number;
    mark: number;
    shape: this;
    start: { equal: (arg0: any) => any; };
    end: any;

  constructor(start: { equal: (arg0: any) => any; }, end: { x: any; y: any; }) {
    this.vector = undefined;
    this.a = undefined;
    this.b = undefined;
    this.c = undefined;
    if (start.equal(end)) ;
    this.mark = 0;
    this.shape = null;
    this.start = start;
    this.end = end;
    this.calc();
  }
  get owner(): any {
    return null;
  }
  calc() {
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
  clone() {
    return new Segment(this.start, this.end);
  }
  reverse() {
    const start = this.start;
    this.start = this.end;
    this.end = start;
    this.calc();
    return this;
  }
  commit(shape: this | this) {
    this.shape = shape;
    this.start.commit(this);
    this.end.commit(this);
    return this;
  }
  remove() {
    this.shape = null;
    this.start.remove(this);
    this.end.remove(this);
  }
  length() {
    return this.vector.magnitude();
  }
  zn(_0xc6e8f: { a: any; b: any; }) {
    const a2 = _0xc6e8f.a;
    const b2 = _0xc6e8f.b;
    const {
      a,
      b
    } = this;
    return cross2d(a2, b2, a, b);
  }
  intersect(segment: Segment) {
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
  has(_0x1924dc: any) {
    return this.start === _0x1924dc || this.end === _0x1924dc;
  }
}
