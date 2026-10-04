import { Polygon } from "../engine/polygon";
import type { Unit } from "./units";
import type { Intersection, Segment } from "../engine/segment";
import type { Vec2 } from "../engine/vec2";
import type { Team } from "./team";

export class Base {
    /**
     * Units that own this territory. Classic: exactly the unit that built it. Team modes: every teammate
     * sharing it (they join an existing base instead of building one). Empty only once the base is removed.
     */
    hosts: Unit[];
    /** Always unset for bases (Track sets it to true); used to tell segment owners apart. */
    isTrack: undefined;
    merges: unknown[];
    polygon: Polygon;
    /** Only set by calcPath(), which nothing calls (the drawn path is polygon.path). */
    path: Path2D | undefined;
    /** Assigned by calcArea() in the constructor. */
    area!: number;

  constructor(unit: Unit, points: Vec2[]) {
    this.isTrack = undefined;
    this.hosts = [unit];
    this.merges = [];
    this.polygon = new Polygon(points);
    this.polygon.commit(this);
    this.calcArea();
    this.polygon.calcPath();
  }
  /** Primary host (the unit that built the base, or its oldest surviving co-host). */
  get unit(): Unit {
    return this.hosts[0]!;
  }
  /** Team of the hosts (they all share one); null in classic. */
  get team(): Team | null {
    return this.hosts.length ? this.hosts[0]!.team : null;
  }
  /** Adds `unit` as a host: it now owns this territory and stands in it. */
  join(unit: Unit) {
    this.hosts.push(unit);
    unit.base = this;
    unit.insideBase = this;
  }
  leave(unit: Unit) {
    const index = this.hosts.indexOf(unit);
    if (index !== -1) {
      this.hosts.splice(index, 1);
    }
  }
  hasHost(unit: Unit): boolean {
    return this.hosts.includes(unit);
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
    if (this.hasHost(unit)) {
      this.handleSelfIntersect(intersection, unit, movement);
    } else {
      this.handleEnemyIntersect(intersection, unit, movement);
    }
  }
  handleSelfIntersect(intersection: Intersection, unit: Unit, movement: Segment) {
    if (intersection.overlay) {
      return;
    }
    unit.onScoreChanged();
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
        unit.game.handleReturn(unit);
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
