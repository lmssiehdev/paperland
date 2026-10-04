import { Segment } from "./segment.js";

export class Polyline {
  constructor(_0x3d26c8) {
    this.owner = _0x3d26c8 || null;
    this.start = null;
    this.end = null;
    this.segments = [];
    this.bounds = {
      left: Infinity,
      right: -Infinity,
      top: Infinity,
      bottom: -Infinity
    };
    this.path = new Path2D();
  }
  commit(_0x3f07dd) {
    this.segments.forEach(segment => segment.commit(_0x3f07dd));
  }
  remove() {
    this.segments.forEach(segment => segment.remove());
  }
  reverse() {
    this.segments.reverse().forEach(item => item.reverse());
    if (this.end) {
      [this.start, this.end] = [this.end, this.start];
    }
    return this;
  }
  clone() {
    const polyline = new Polyline();
    polyline.segments = this.segments.map(segment => segment.clone());
    polyline.start = this.start;
    polyline.end = this.end;
    Object.assign(polyline.bounds, this.bounds);
    return polyline;
  }
  updateBounds(_0x1f0631) {
    const {
      x,
      y
    } = _0x1f0631;
    this.bounds.left = Math.min(this.bounds.left, x);
    this.bounds.right = Math.max(this.bounds.right, x);
    this.bounds.top = Math.min(this.bounds.top, y);
    this.bounds.bottom = Math.max(this.bounds.bottom, y);
  }
  add2(end) {
    const _0x2b66d7 = this.end || this.start;
    if (_0x2b66d7 && _0x2b66d7.equal(end)) {
      return false;
    }
    const {
      x,
      y
    } = end;
    if (this.end) {
      this.segments.push(new Segment(this.end, end).commit(this));
      this.end = end;
      this.updateBounds(end);
      this.path.lineTo(x, y);
      return true;
    }
    if (this.start) {
      this.segments.push(new Segment(this.start, end).commit(this));
      this.end = end;
      this.updateBounds(end);
      this.path.lineTo(x, y);
      return true;
    }
    this.start = end;
    this.updateBounds(end);
    this.path.moveTo(x, y);
    return true;
  }
  points() {
    const segments = this.segments.map(segment => segment.start);
    if (this.end) {
      segments.push(this.end);
    }
    return segments;
  }
  toString() {
    return this.segments.map(segment => segment.start.toString()).join("");
  }
}
