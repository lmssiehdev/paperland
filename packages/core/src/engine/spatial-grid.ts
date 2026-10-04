import { nextId } from "./math";
import { Vec2 } from "./vec2";
import type { Intersection, Segment } from "./segment";

const CELL_MARGIN = 1;
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
    const { points } = this;
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
    Vec2.grid = this;
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
    const cell = this.cells[j + i * this.w];
    if (!cell) {
      debugger;
    }
    return cell;
  }
  checkPoint(point: Vec2): Vec2 {
    const cell = this.cell(point);
    return cell.points.find(point2 => point2.equal(point)) || point;
  }
  segmentsCount(): Record<string, Segment> {
    const result: Record<string, Segment> = {};
    for (let i = 0; i < this.h; i++) {
      for (let j = 0; j < this.w; j++) {
        this.getCell(j, i).points.forEach(point => {
          // SAFETY: TODO(types): Segment has no `id`, so every entry lands under the key "undefined" (FINDINGS #21).
          // The cast claims a numeric id only so the original indexing type-checks; it is undefined at runtime.
          point.segments.forEach(segment => (result[(segment as Segment & { id: number }).id] = segment));
        });
      }
    }
    return result;
  }
  intersections(segment: Segment): Intersection[] {
    const point = this.cell(segment.start);
    const point2 = this.cell(segment.end);
    const minCol = Math.max(0, Math.min(point.x, point2.x) - CELL_MARGIN);
    const maxCol = Math.min(this.w - 1, Math.max(point.x, point2.x) + CELL_MARGIN);
    const minRow = Math.max(0, Math.min(point.y, point2.y) - CELL_MARGIN);
    const maxRow = Math.min(this.h - 1, Math.max(point.y, point2.y) + CELL_MARGIN);
    const mark = nextId();
    const result: Intersection[] = [];
    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        this.getCell(j, i).points.forEach(point => {
          point.segments.forEach(segment2 => {
            if (segment2.mark !== mark) {
              const intersection = segment2.intersect(segment);
              if (intersection) {
                result.push(intersection);
              }
              segment2.mark = mark;
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
