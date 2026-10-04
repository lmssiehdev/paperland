import { Polygon } from "../engine/polygon";
import type { Unit } from "./units";
import type { Intersection, Segment } from "../engine/segment";
import type { Vec2 } from "../engine/vec2";

export class Base {
    unit: Unit;
    /** Always unset for bases (Track sets it to true); used to tell segment owners apart. */
    isTrack: boolean;
    merges: unknown[];
    polygon: Polygon;
    path: Path2D;
    area: number;

  constructor(unit: Unit, points: Vec2[]) {
    this.unit = undefined;
    this.isTrack = undefined;
    this.unit = unit;
    this.merges = [];
    this.polygon = new Polygon(points);
    this.polygon.commit(this);
    this.calcArea();
    this.polygon.calcPath();
  }
  calcPath() {
    this.path = new Path2D();
    const {
      segments
    } = this.polygon;
    const {
      length
    } = segments;
    const {
      start
    } = segments[0];
    this.path.moveTo(start.x, start.y);
    for (let i = 1; i < length; i++) {
      const {
        start: start
      } = segments[i];
      this.path.lineTo(start.x, start.y);
    }
    this.path.closePath();
    return this.path;
  }
  calcArea() {
    this.area = this.polygon.area();
  }
  remove() {
    this.polygon.remove();
  }
  /** `unit` moved along `movement` and crossed this base's outline at `intersection`. */
  handleIntersect(intersection: Intersection, unit: Unit, movement: Segment) {
    if (unit === this.unit) {
      this.handleSelfIntersect(intersection, unit, movement);
    } else {
      this.handleEnemyIntersect(intersection, unit, movement);
    }
  }
  handleSelfIntersect(intersection: Intersection, unit: Unit, movement: Segment) {
    if (intersection.overlay) {
      return;
    }
    this.unit.onScoreChanged();
    const {
      point: point,
      segment: segment
    } = intersection;
    if (unit.insideBase === this) {
      if (intersection.zn < 0) {
        return;
      }
      if (point.equal(movement.end)) {
        return;
      }
      this.polygon.insert(segment, point);
      unit.track.add(point);
      unit.insideBase = null;
      if (unit.schemes) {
        unit.schemes.out();
      }
      if (unit.achievements) {
        unit.achievements.onOut();
      }
    } else {
      if (intersection.zn > 0) {
        return;
      }
      if (point.equal(movement.start)) {
        return;
      }
      if (unit.insideBase) {
        return;
      }
      this.polygon.insert(segment, point);
      unit.track.add(point);
      if (unit.track.polyline.end) {
        this.unit.game.handleReturn(unit);
      }
      unit.insideBase = this;
      unit.track.remove();
    }
  }
  handleEnemyIntersect(intersection: Intersection, unit: Unit, movement: Segment) {
    const {
      point: point,
      segment: segment
    } = intersection;
    if (unit.insideBase === this) {
      if (intersection.zn < 0) {
        return;
      }
      this.polygon.insert(segment, point);
      unit.track.add(point);
      unit.track.intersect(intersection, this, false);
      unit.insideBase = null;
    } else {
      if (intersection.zn > 0) {
        return;
      }
      if (intersection.overlay) {
        return;
      }
      if (point.equal(movement.end)) {
        return;
      }
      if (unit.insideBase) {
        return;
      }
      this.polygon.insert(segment, point);
      unit.track.add(point);
      unit.track.intersect(intersection, this, true);
      unit.insideBase = this;
    }
  }
}
