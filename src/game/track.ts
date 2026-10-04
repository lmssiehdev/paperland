import { Polyline } from "../engine/polyline";
import { CELL_RADIUS_SQ, DEATH_SELF_INTERSECT, DEATH_TRACK_CROSSED, DEATH_WALL } from "./constants";
import type { DeathReason } from "./constants";
import type { Intersection, Segment } from "../engine/segment";
import type { Vec2 } from "../engine/vec2";
import type { Base } from "./base";
import type { Unit } from "./units";

/** One base-outline crossing recorded on a trail. */
export interface TrackBaseCrossing {
  intersection: Intersection;
  base: Base;
  /** True when the trail enters `base`, false when it leaves it. */
  enter: boolean;
}

/** All base crossings recorded at the same trail point. */
export interface TrackIntersection {
  point: Vec2;
  intersections: TrackBaseCrossing[];
}

export class Track {
    polyline: Polyline;
    /** Coarse copy of the trail (points at least CELL_RADIUS apart), used by the AI. */
    simplyline: Vec2[];
    unit: Unit;
    length: number;
    intersections: TrackIntersection[];
    isTrack: boolean;

  constructor(unit: Unit) {
    this.polyline = new Polyline(this);
    this.simplyline = [];
    this.unit = unit;
    this.length = 0;
    this.intersections = [];
    this.isTrack = true;
  }
  add(end: Vec2) {
    if (this.polyline.add2(end)) {
      const count = this.polyline.segments.length;
      if (count > 0) {
        const segment = this.polyline.segments[count - 1];
        this.length += segment.start.distance(segment.end);
      }
      const {
        simplyline
      } = this;
      const {
        length
      } = simplyline;
      if (length > 2) {
        const point = simplyline[length - 2];
        if (end.distance2(point) < CELL_RADIUS_SQ) {
          simplyline[length - 1] = end;
        } else {
          simplyline.push(end);
        }
      } else {
        simplyline.push(end);
      }
    }
  }
  intersect(crossing: Intersection, base: Base, enter: boolean) {
    const intersection = this.intersections.find(intersection => intersection.point.equal(crossing.point));
    if (intersection) {
      intersection.intersections.push({
        intersection: crossing,
        base: base,
        enter: enter
      });
    } else {
      this.intersections.push({
        point: crossing.point,
        intersections: [{
          intersection: crossing,
          base: base,
          enter: enter
        }]
      });
    }
  }
  remove() {
    this.polyline.remove();
    this.polyline = new Polyline(this);
    this.length = 0;
    this.simplyline = [];
    this.intersections = [];
  }
  /** `unit` moved along `movement` and crossed this trail at `intersection`. */
  handleIntersect(intersection: Intersection, unit: Unit, movement: Segment) {
    let game = unit.game;
    if (unit === this.unit) {
      if (intersection.overlay === true || intersection.point !== this.polyline.segments[this.polyline.segments.length - 1].end) {
        this.unit.position = intersection.point;
        const reason: DeathReason = game.border.radius - unit.position.distance(game.space.center) < 5 ? DEATH_WALL : DEATH_SELF_INTERSECT;
        game.kill(this.unit, undefined, reason);
      }
    } else {
      game.kill(this.unit, unit, DEATH_TRACK_CROSSED);
    }
  }
}
