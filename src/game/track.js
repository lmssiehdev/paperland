import { Polyline } from "../engine/polyline.js";
import { CELL_RADIUS_SQ, DEATH_SELF_INTERSECT, DEATH_TRACK_CROSSED, DEATH_WALL } from "./constants.js";

export class Track {
  constructor(unit) {
    this.polyline = new Polyline(this);
    this.simplyline = [];
    this.unit = unit;
    this.length = 0;
    this.intersections = [];
    this.isTrack = true;
  }
  add(end) {
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
  intersect(_0x19b8cd, _0x3142da, _0x463f2a) {
    const intersection = this.intersections.find(intersection => intersection.point.equal(_0x19b8cd.point));
    if (intersection) {
      intersection.intersections.push({
        intersection: _0x19b8cd,
        base: _0x3142da,
        enter: _0x463f2a
      });
    } else {
      this.intersections.push({
        point: _0x19b8cd.point,
        intersections: [{
          intersection: _0x19b8cd,
          base: _0x3142da,
          enter: _0x463f2a
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
  handleIntersect(_0x1d2561, unit, _0x413bce) {
    let game = unit.game;
    if (unit === this.unit) {
      if (_0x1d2561.overlay === true || _0x1d2561.point !== this.polyline.segments[this.polyline.segments.length - 1].end) {
        this.unit.position = _0x1d2561.point;
        const _0x75cb21 = game.border.radius - unit.position.distance(game.space.center) < 5 ? DEATH_WALL : DEATH_SELF_INTERSECT;
        game.kill(this.unit, undefined, _0x75cb21);
      }
    } else {
      game.kill(this.unit, unit, DEATH_TRACK_CROSSED);
    }
  }
}
