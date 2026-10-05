import { Polyline } from "../engine/polyline";
import { CELL_RADIUS_SQ, DEATH_SELF_INTERSECT, DEATH_TRACK_CROSSED, DEATH_WALL } from "./constants";
import type { DeathReason } from "./constants";
import type { Intersection, Segment } from "../engine/segment";
import type { Vec2 } from "../engine/vec2";
import type { Base } from "./base";
import type { Unit } from "./units";
import { areAllies } from "./team";

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

/** A trail handed to Game.handleReturn: a unit's whole Track, or a slice of one (team modes, handleCross). */
export interface ReturnTrail {
  polyline: Polyline;
  intersections: TrackIntersection[];
}

export class Track {
  polyline: Polyline;
  /** Coarse copy of the trail (points at least CELL_RADIUS apart), used by the AI. */
  simplifiedPoints: Vec2[];
  unit: Unit;
  length: number;
  intersections: TrackIntersection[];
  isTrack: boolean;

  constructor(unit: Unit) {
    this.polyline = new Polyline(this);
    this.simplifiedPoints = [];
    this.unit = unit;
    this.length = 0;
    this.intersections = [];
    this.isTrack = true;
  }
  add(end: Vec2) {
    if (this.polyline.addPoint(end)) {
      const count = this.polyline.segments.length;
      if (count > 0) {
        const segment = this.polyline.segments[count - 1];
        this.length += segment.start.distance(segment.end);
      }
      const { simplifiedPoints } = this;
      const { length } = simplifiedPoints;
      if (length > 2) {
        const point = simplifiedPoints[length - 2];
        if (end.distance2(point) < CELL_RADIUS_SQ) {
          simplifiedPoints[length - 1] = end;
        } else {
          simplifiedPoints.push(end);
        }
      } else {
        simplifiedPoints.push(end);
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
        intersections: [
          {
            intersection: crossing,
            base: base,
            enter: enter
          }
        ]
      });
    }
  }
  /**
   * Teammates sharing my base whose trails share a vertex with mine (I crossed theirs or they crossed mine).
   * Always [] for a base with a single host, so classic never pays for it.
   */
  crossedTeammates(): Unit[] {
    const result: Unit[] = [];
    const { base } = this.unit;
    if (base.hosts.length > 1) {
      const collect = (point: Vec2) => {
        point.segments.forEach(segment => {
          const owner = segment.shape?.owner;
          if (
            owner instanceof Track &&
            owner.unit !== this.unit &&
            base.hasHost(owner.unit) &&
            !result.includes(owner.unit)
          ) {
            result.push(owner.unit);
          }
        });
      };
      this.polyline.points().forEach(collect);
    }
    return result;
  }
  /** Cuts the trail back so it starts at its last point that lies on my base outline (team modes). */
  truncateToBase() {
    const { polygon } = this.unit.base;
    const lastBaseContact = this.polyline.segments.reduce(
      (acc, segment, index) => (segment.start.segments.some(touching => touching.shape === polygon) ? index : acc),
      -1
    );
    if (lastBaseContact <= 0) {
      return;
    }
    this.polyline.truncate(lastBaseContact);
    const points = this.polyline.points();
    this.length = 0;
    this.polyline.segments.forEach(segment => {
      this.length += segment.start.distance(segment.end);
    });
    this.simplifiedPoints = [];
    points.forEach(point => {
      const { simplifiedPoints } = this;
      const { length } = simplifiedPoints;
      if (length > 2 && point.distance2(simplifiedPoints[length - 2]) < CELL_RADIUS_SQ) {
        simplifiedPoints[length - 1] = point;
      } else {
        simplifiedPoints.push(point);
      }
    });
    this.intersections = this.intersections.filter(intersection => points.includes(intersection.point));
  }
  remove() {
    this.polyline.remove();
    this.polyline = new Polyline(this);
    this.length = 0;
    this.simplifiedPoints = [];
    this.intersections = [];
  }
  /** `unit` moved along `movement` and crossed this trail at `intersection`. */
  handleIntersect(intersection: Intersection, unit: Unit, movement: Segment) {
    const game = unit.game;
    if (unit === this.unit) {
      if (
        intersection.overlay === true ||
        intersection.point !== this.polyline.segments[this.polyline.segments.length - 1].end
      ) {
        this.unit.position = intersection.point;
        const reason: DeathReason =
          game.border.radius - unit.position.distance(game.grid.center) < 5 ? DEATH_WALL : DEATH_SELF_INTERSECT;
        game.kill(this.unit, undefined, reason);
      }
    } else if (!areAllies(unit, this.unit)) {
      game.kill(this.unit, unit, DEATH_TRACK_CROSSED);
    } else {
      // A teammate crossed this trail: both trails get the same vertex, so a later capture by either one can
      // find the other (see Game.handleCross).
      this.polyline.insert(intersection.segment, intersection.point);
      game.teamEvents.injects++;
      if (unit.insideBase !== unit.base) {
        unit.track.add(intersection.point);
      }
    }
  }
}
