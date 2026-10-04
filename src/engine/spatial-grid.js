import { nextId } from "./math.js";
import { Vec2 } from "./vec2.js";

const _0x49b883 = 1;
class GridCell {
  constructor(x, y) {
    this.points = [];
    this.x = x;
    this.y = y;
  }
  commit(_0x2450aa) {
    this.points.push(_0x2450aa);
    _0x2450aa.cell = this;
  }
  remove(_0x113f3c) {
    const {
      points
    } = this;
    const index = points.indexOf(_0x113f3c);
    if (index !== -1) {
      points.splice(index, 1);
      _0x113f3c.cell = null;
    }
  }
}
export class SpatialGrid {
  constructor(width, height, size) {
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
  count() {
    let result = 0;
    this.cells.forEach(cell => {
      result += cell.points.length;
    });
    return result;
  }
  cell(point) {
    return this.getCell(Math.floor(point.x / this.size) % this.w, Math.floor(point.y / this.size) % this.h);
  }
  getCell(j, i) {
    let cell = this.cells[j + i * this.w];
    if (!cell) {
      debugger;
    }
    return cell;
  }
  checkPoint(point) {
    const _0x5e04d1 = this.cell(point);
    return _0x5e04d1.points.find(point2 => point2.equal(point)) || point;
  }
  segmentsCount() {
    const result = {};
    for (let i = 0; i < this.h; i++) {
      for (let j = 0; j < this.w; j++) {
        this.getCell(j, i).points.forEach(point => {
          point.segments.forEach(segment => result[segment.id] = segment);
        });
      }
    }
    return result;
  }
  intersections(segment) {
    const point = this.cell(segment.start);
    const point2 = this.cell(segment.end);
    const _0x25009c = Math.max(0, Math.min(point.x, point2.x) - _0x49b883);
    const _0x3daed4 = Math.min(this.w - 1, Math.max(point.x, point2.x) + _0x49b883);
    const _0x511ed8 = Math.max(0, Math.min(point.y, point2.y) - _0x49b883);
    const _0x149c88 = Math.min(this.h - 1, Math.max(point.y, point2.y) + _0x49b883);
    const _0x4cb258 = nextId();
    const result = [];
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
  clear() {
    this.cells = [];
  }
}
