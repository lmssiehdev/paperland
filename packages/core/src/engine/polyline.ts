import { Segment } from "./segment";
import type { Shape } from "./segment";
import type { Vec2 } from "./vec2";
import type { Track } from "../game/track";
import type { PathHandle } from "../handles";
import { platform } from "../platform";

/** Axis-aligned bounding box. */
export interface Bounds {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

/** Open chain of segments (a unit's trail), with bounds and a Path2D built incrementally. */
export class Polyline {
    owner: Track | null;
    start: Vec2 | null;
    end: Vec2 | null;
    segments: Segment[];
    bounds: Bounds;
    path: PathHandle;

  constructor(owner?: Track) {
    this.owner = owner || null;
    this.start = null;
    this.end = null;
    this.segments = [];
    this.bounds = {
      left: Infinity,
      right: -Infinity,
      top: Infinity,
      bottom: -Infinity
    };
    this.path = platform.createPath();
  }
  commit(shape: Shape): void {
    this.segments.forEach(segment => segment.commit(shape));
  }
  remove(): void {
    this.segments.forEach(segment => segment.remove());
  }
  reverse(): this {
    this.segments.reverse().forEach(item => item.reverse());
    if (this.end) {
      [this.start, this.end] = [this.end, this.start];
    }
    return this;
  }
  clone(): Polyline {
    const polyline = new Polyline();
    polyline.segments = this.segments.map(segment => segment.clone());
    polyline.start = this.start;
    polyline.end = this.end;
    Object.assign(polyline.bounds, this.bounds);
    return polyline;
  }
  updateBounds(point: Vec2): void {
    const {
      x,
      y
    } = point;
    this.bounds.left = Math.min(this.bounds.left, x);
    this.bounds.right = Math.max(this.bounds.right, x);
    this.bounds.top = Math.min(this.bounds.top, y);
    this.bounds.bottom = Math.max(this.bounds.bottom, y);
  }
  addPoint(end: Vec2): boolean {
    const last = this.end || this.start;
    if (last && last.equal(end)) {
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
  /** Splits `segment` at `point` (team modes: a teammate crossed this trail there). No-op on an endpoint. */
  insert(segment: Segment, point: Vec2): void {
    if (segment.has(point) || segment.start.equal(point) || segment.end.equal(point)) {
      return;
    }
    const index = this.segments.indexOf(segment);
    if (index === -1) {
      return;
    }
    const head = new Segment(segment.start, point).commit(this);
    const tail = new Segment(point, segment.end).commit(this);
    segment.remove();
    this.segments.splice(index, 1, head, tail);
  }
  /** Drops (and uncommits) the first `count` segments, then rebuilds bounds and path. */
  truncate(count: number): void {
    if (count <= 0) {
      return;
    }
    this.segments.splice(0, count).forEach(segment => segment.remove());
    const first = this.segments[0];
    if (first) {
      this.start = first.start;
    } else {
      this.start = null;
      this.end = null;
    }
    this.rebuild();
  }
  /** Recomputes bounds and the Path2D from the segments. */
  rebuild(): void {
    this.bounds = {
      left: Infinity,
      right: -Infinity,
      top: Infinity,
      bottom: -Infinity
    };
    this.path = platform.createPath();
    if (!this.start) {
      return;
    }
    this.updateBounds(this.start);
    this.path.moveTo(this.start.x, this.start.y);
    this.segments.forEach(segment => {
      this.updateBounds(segment.end);
      this.path.lineTo(segment.end.x, segment.end.y);
    });
  }
  points(): Vec2[] {
    const segments = this.segments.map(segment => segment.start);
    if (this.end) {
      segments.push(this.end);
    }
    return segments;
  }
  toString(): string {
    return this.segments.map(segment => segment.start.toString()).join("");
  }
}
