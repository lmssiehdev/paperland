import { nextId } from "./math";
import { Vec2 } from "./vec2";
import type { Intersection, Segment } from "./segment";

const _0x49b883 = 1;
/** One bucket of the spatial grid: the committed points that fall inside it. */
export class GridCell {
    points: Vec2[];
    x: number;
    y: number;

  constructor(x: number, y: number) {
    this.points = [];
    this.x = x;
    this.y = y;
  }
  commit(point: Vec2): void {
    this.points.push(point);
    point.cell = this;
  }
  remove(point: Vec2): void {
    const {
      points
    } = this;
    const index = points.indexOf(point);
    if (index !== -1) {
      points.splice(index, 1);
      point.cell = null;
    }
  }
}
/** Uniform grid over the arena that buckets committed points, used to find segment intersections locally. */
export class SpatialGrid {
    width: number;
    height: number;
    center: Vec2;
    size: number;
    w: number;
    h: number;
    cells: GridCell[];

  constructor(width: number, height: number, size: number) {
    this.width = width;
    this.height = height;
    this.center = new Vec2(width / 2, height / 2);
    this.size = size;
    this.w = Math.ceil(width / size);
    this.h = Math.ceil(height / size);
    this.cells = [];
    for (let i = 0; i < this.h; i++) {
      for (let j = 0; j < this.w; j++) {
        this.cells.push(new GridCell(j, i));
      }
    }
    Vec2.space = this;
  }
  count(): number {
    let result = 0;
    this.cells.forEach(cell => {
      result += cell.points.length;
    });
    return result;
  }
  cell(point: Vec2): GridCell {
    return this.getCell(Math.floor(point.x / this.size) % this.w, Math.floor(point.y / this.size) % this.h);
  }
  getCell(j: number, i: number): GridCell {
    let cell = this.cells[j + i * this.w];
    if (!cell) {
      debugger;
    }
    return cell;
  }
  checkPoint(point: Vec2): Vec2 {
    const _0x5e04d1 = this.cell(point);
    return _0x5e04d1.points.find(point2 => point2.equal(point)) || point;
  }
  segmentsCount(): Record<string, Segment> {
    const result: Record<string, Segment> = {};
    for (let i = 0; i < this.h; i++) {
      for (let j = 0; j < this.w; j++) {
        this.getCell(j, i).points.forEach(point => {
          // TODO(types): Segment has no `id`, so every entry lands under the key "undefined".
          point.segments.forEach(segment => result[(segment as Segment & { id?: number }).id] = segment);
        });
      }
    }
    return result;
  }
  intersections(segment: Segment): Intersection[] {
    const point = this.cell(segment.start);
    const point2 = this.cell(segment.end);
    const _0x25009c = Math.max(0, Math.min(point.x, point2.x) - _0x49b883);
    const _0x3daed4 = Math.min(this.w - 1, Math.max(point.x, point2.x) + _0x49b883);
    const _0x511ed8 = Math.max(0, Math.min(point.y, point2.y) - _0x49b883);
    const _0x149c88 = Math.min(this.h - 1, Math.max(point.y, point2.y) + _0x49b883);
    const _0x4cb258 = nextId();
    const result: Intersection[] = [];
    for (let i = _0x511ed8; i <= _0x149c88; i++) {
      for (let j = _0x25009c; j <= _0x3daed4; j++) {
        this.getCell(j, i).points.forEach(point => {
          point.segments.forEach(segment2 => {
            if (segment2.mark !== _0x4cb258) {
              const _0x302e7a = segment2.intersect(segment);
              if (_0x302e7a) {
                result.push(_0x302e7a);
              }
              segment2.mark = _0x4cb258;
            }
          });
        });
      }
    }
    return result;
  }
  clear(): void {
    this.cells = [];
  }
}
