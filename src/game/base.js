import { Polygon } from "../engine/polygon.js";

export class Base {
  constructor(unit, points) {
    this.unit = undefined;
    this.isTrack = undefined;
    this.unit = unit;
    this.merges = [];
    this.polygon = new Polygon(points);
    this.polygon.commit(this);
    this.calcSquare();
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
  calcSquare() {
    this.square = this.polygon.square();
  }
  remove() {
    this.polygon.remove();
  }
  handleIntersect(_0x17a22b, _0x7347fa, segment) {
    if (_0x7347fa === this.unit) {
      this.handleSelfIntersect(_0x17a22b, _0x7347fa, segment);
    } else {
      this.handleEnemyIntersect(_0x17a22b, _0x7347fa, segment);
    }
  }
  handleSelfIntersect(_0x445601, _0x56072c, segment) {
    if (_0x445601.overlay) {
      return;
    }
    this.unit.onScoreChanged();
    const {
      point: point,
      segment: segment2
    } = _0x445601;
    if (_0x56072c.in === this) {
      if (_0x445601.zn < 0) {
        return;
      }
      if (point.equal(segment.end)) {
        return;
      }
      this.polygon.insert(segment2, point);
      _0x56072c.track.add(point);
      _0x56072c.in = null;
      if (_0x56072c.schemes) {
        _0x56072c.schemes.out();
      }
      if (_0x56072c.achievements) {
        _0x56072c.achievements.onOut();
      }
    } else {
      if (_0x445601.zn > 0) {
        return;
      }
      if (point.equal(segment.start)) {
        return;
      }
      if (_0x56072c.in) {
        return;
      }
      this.polygon.insert(segment2, point);
      _0x56072c.track.add(point);
      if (_0x56072c.track.polyline.end) {
        this.unit.game.handleReturn(_0x56072c);
      }
      _0x56072c.in = this;
      _0x56072c.track.remove();
    }
  }
  handleEnemyIntersect(_0x1cb2ac, _0x25139d, segment2) {
    const {
      point: point,
      segment: segment
    } = _0x1cb2ac;
    if (_0x25139d.in === this) {
      if (_0x1cb2ac.zn < 0) {
        return;
      }
      this.polygon.insert(segment, point);
      _0x25139d.track.add(point);
      _0x25139d.track.intersect(_0x1cb2ac, this, false);
      _0x25139d.in = null;
    } else {
      if (_0x1cb2ac.zn > 0) {
        return;
      }
      if (_0x1cb2ac.overlay) {
        return;
      }
      if (point.equal(segment2.end)) {
        return;
      }
      if (_0x25139d.in) {
        return;
      }
      this.polygon.insert(segment, point);
      _0x25139d.track.add(point);
      _0x25139d.track.intersect(_0x1cb2ac, this, true);
      _0x25139d.in = this;
    }
  }
}
