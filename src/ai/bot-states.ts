import { lerp } from "../engine/math";
import { Segment } from "../engine/segment";
import type { Unit } from "../game/units";
import type { Bot } from "../game/units";

const botNearPlayerTrack = (unit: Unit) => {
  const {
    player
  } = unit.game;
  if (player) {
    const _0x4ac939 = Math.max(unit.vrange, player.vrange);
    const _0x4c70de = _0x4ac939 * unit.aggro * 0.75;
    const {
      simplyline
    } = player.track;
    for (let i = 0, count = simplyline.length; i < count; i++) {
      if (unit.position.distance2(simplyline[i]) < _0x4c70de * _0x4c70de) {
        return true;
      }
    }
  }
};
const botFeelsThreatened = (bot: Bot, _0x44a2f5: undefined) => {
  if (bot.in === bot.base) {
    return false;
  }
  return bot.maxDanger > bot.def * 0.8;
};
export var BOT_STATES = {
  idle: {
    enter: function () {
      return {};
    },
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      if (bot.in === bot.base) {
        if (bot.game.rng() < 0.25) {
          return "cut";
        } else {
          return "exit";
        }
      } else {
        return "back";
      }
    }
  },
  capital: {
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      if (bot.in !== bot.base) {
        return "capture";
      }
      const dist = bot.position.distance(bot.game.space.center);
      const _0x13ff07 = bot.game.border.radius - dist;
      bot.target = ctx.point;
    }
  },
  cut: {
    enter: function (bot: Bot) {
      const delta = bot.position.clone().sub(bot.game.space.center);
      const len = delta.magnitude();
      const segment = new Segment(bot.position, delta.normalize().mulScalar(bot.game.border.radius + 10).add(bot.game.space.center));
      const intersections = bot.base.polygon.intersections(segment);
      const result = {};
      if (!intersections.length) {
        console.log("bot.position", bot.position.x, bot.position.y);
        console.log("intersections", intersections);
      }
      intersections.sort((a, b) => a.distance - b.distance);
      result.exitPoint = intersections[0] && intersections[0].point;
      return result;
    },
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      if (bot.in !== bot.base) {
        return "capture";
      }
      const dist = bot.position.distance(bot.game.space.center);
      const _0x4daa27 = bot.game.border.radius - dist;
      if (!ctx.exitPoint || _0x4daa27 < 1) {
        return "idle";
      }
      bot.target = ctx.exitPoint;
    }
  },
  exit: {
    enter: function (bot: Bot) {
      const result = {};
      let min = Infinity;
      let _0x16aea8;
      const {
        length
      } = bot.base.polygon.segments;
      let unitSpeed = bot.game.config.unitSpeed;
      result.minDistance = unitSpeed;
      while (_0x16aea8 === undefined) {
        for (let i = 0; i < 1; i++) {
          const _0x6b2a20 = ~~(bot.game.rng() * length);
          const start = bot.base.polygon.segments[_0x6b2a20].start;
          const dist = start.distance(bot.position);
          if (dist < min && dist > unitSpeed) {
            min = dist;
            _0x16aea8 = _0x6b2a20;
          }
        }
        unitSpeed *= 0.75;
      }
      result.exitPoint = bot.base.polygon.segments[_0x16aea8].start;
      return result;
    },
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      if (bot.in !== bot.base) {
        ctx = {};
        return "capture";
      }
      if (botNearPlayerTrack(bot)) {
        return "attack";
      }
      const {
        length
      } = bot.base.polygon.segments;
      const {
        minDistance
      } = ctx;
      const _0x51571e = ~~(bot.game.rng() * length);
      const start = bot.base.polygon.segments[_0x51571e].start;
      const dist = start.distance(bot.position);
      let dist2 = ctx.exitPoint.distance(bot.position);
      if (dist > minDistance && dist < dist2) {
        ctx.exitPoint = start;
      } else {
        if (!Object.values(ctx.exitPoint.segments).some(item => item && item.shape === bot.base.polygon)) {
          ctx.exitPoint = start;
        }
        if (bot.target && bot.target.distance(bot.game.space.center) > bot.game.border.radius - 1) {
          ctx.exitPoint = start;
        }
      }
      bot.target = ctx.exitPoint;
    }
  },
  capture: {
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      if (bot.in === bot.base) {
        return "idle";
      }
      if (botNearPlayerTrack(bot)) {
        return "attack";
      }
      const {
        unitSpeed
      } = bot.game.config;
      const {
        center
      } = bot.game.space;
      const {
        radius
      } = bot.game.border;
      const dist = bot.position.distance(center);
      const _0x4dd06d = radius - dist;
      if (bot.baseDistance < unitSpeed / 4 && bot.track.length > unitSpeed * 2 && _0x4dd06d > 10) {
        return "back";
      }
      const dist32 = 25;
      const _0x3e1504 = dist32 / 2;
      const _0x3cd5f8 = _0x3e1504 * _0x3e1504;
      if (bot.position.distance2(bot.target) < _0x3cd5f8 && _0x4dd06d > dist32) {
        return;
      }
      let _0x35b163 = 0;
      for (let i = 1, count = bot.track.simplyline.length; i < count; i++) {
        const point = bot.track.simplyline[i - 1];
        const point2 = bot.track.simplyline[i];
        _0x35b163 += (point.x + point2.x) * (point2.y - point.y);
      }
      let point = bot.track.simplyline[bot.track.simplyline.length - 1];
      let baseNearestPoint = bot.baseNearestPoint;
      _0x35b163 += (point.x + baseNearestPoint.x) * (baseNearestPoint.y - point.y);
      point = bot.baseNearestPoint;
      baseNearestPoint = bot.track.simplyline[0];
      _0x35b163 += (point.x + baseNearestPoint.x) * (baseNearestPoint.y - point.y);
      const sign = Math.sign(_0x35b163);
      _0x35b163 = Math.abs(_0x35b163 / 2);
      bot.capSquare = _0x35b163;
      const {
        def,
        greed,
        safety
      } = bot;
      const _0x212344 = Math.PI * 2 * bot.vrange * greed;
      const _0x422057 = bot.track.length / _0x212344;
      const _0x3d5796 = Math.min(bot.base.square, Math.PI * bot.vrange * bot.vrange) * greed;
      const _0x34bce9 = bot.capSquare / _0x3d5796;
      const _0x4b3e7c = bot.vrange * lerp(3, 0.7, safety);
      const _0x58b3d5 = bot.position.distance(bot.track.polyline.start) / _0x4b3e7c;
      const _0x557094 = bot.unitToTrackDistances.reduce((acc, unitToTrackDistance) => Math.min(unitToTrackDistance.trackDistance, acc), Infinity) * 0.8 * def;
      const _0x33222d = bot.baseDistance / _0x557094;
      const _0x30c878 = Math.max(_0x422057, _0x34bce9, _0x58b3d5, _0x33222d);
      if (_0x30c878 > 1) {
        return "back";
      }
      const _0x5318d4 = bot.vrange * greed;
      const _0x3cc1e4 = bot.distanceDanger * 0.6 * def;
      const _0x3447ec = _0x5318d4;
      const _0x1c2e20 = _0x3447ec * 0.8;
      const delta = bot.target.clone().sub(bot.position);
      let point2;
      if (bot.baseDistance > _0x3447ec || _0x30c878 > 0.75) {
        bot.aspect = "приближение";
        point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate((Math.PI / 2 + Math.PI / 4) * sign);
      } else if (bot.baseDistance < _0x1c2e20) {
        bot.aspect = "отдаление";
        let _0x3d0139 = Math.PI / 4;
        const _0xcd291b = bot.track.length / _0x1c2e20;
        if (_0xcd291b < 1) {
          bot.aspect = "отстрел";
          _0x3d0139 = lerp(Math.PI / 2 * greed, 0, _0xcd291b);
        }
        point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate((Math.PI / 2 - _0x3d0139) * sign);
      } else {
        bot.aspect = "проход";
        point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate(Math.PI / 2 * sign);
        bot.smoothness = 1 + (1 - Math.min(1, bot.maxDanger)) * 3;
      }
      bot.smoothness = 1 + (1 - Math.min(1, bot.maxDanger)) * 1;
      if (_0x4dd06d < dist32 * 2 && _0x4dd06d > dist32 / 4 && _0x4dd06d < bot.position.clone().add(point2).distance(center)) {
        const delta2 = bot.position.clone().sub(center);
        const angle = delta2.angle(delta);
        const sign = Math.sign(angle);
        let angle2 = delta2.angle(point2);
        let sign2 = Math.sign(angle2);
        if (sign !== sign2) {
          angle2 *= -1;
          sign2 *= -1;
          point2.rotate(angle2 * 2);
        }
        const _0x26e63b = Math.abs(angle2);
        if (_0x26e63b < Math.PI / 4) {
          point2.rotate((Math.PI / 4 - _0x26e63b) * sign2);
        }
      }
      bot.target = bot.position.clone().add(point2);
      if (bot.target.distance(center) > radius + dist32 * 0.75) {
        const delta2 = bot.position.clone().sub(center);
        const angle = delta2.angle(delta);
        const dist2 = dist;
        const dist33 = (radius * radius - dist32 * dist32 + dist2 * dist2) / (dist2 * 2);
        const dist3 = Math.sqrt(radius * radius - dist33 * dist33);
        const dir = bot.position.clone().sub(center).normalize();
        const _0x58fa5c = center.clone().add(dir.clone().mulScalar(dist33));
        point2 = dir.clone().rotate(Math.PI / 2 * angle).rotate(Math.PI / 8 * -angle).mulScalar(dist3);
        bot.target = _0x58fa5c.clone().add(point2);
      } else if (bot.target.distance(center) > radius && bot.target.distance(center) < radius + dist32 * 0.5) ;
    }
  },
  back: {
    enter: function (bot: Bot, ctx: CanvasRenderingContext2D) {},
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      if (bot.in === bot.base) {
        return "idle";
      }
      bot.smoothness = lerp(1, Math.max(1, Math.max(1, Math.min(bot.def, bot.greed) * 4)), Math.max(1, bot.maxDanger));
      const _0x396076 = bot.game.border.radius - bot.position.distance(bot.game.space.center);
      if (_0x396076 < 20) {
        bot.smoothness = 1;
      }
      bot.target = bot.baseNearestPoint;
    }
  },
  attack: {
    enter: () => ({}),
    update: function (bot: Bot, ctx: CanvasRenderingContext2D) {
      const {
        player
      } = bot.game;
      if (!player || player.death) {
        return "idle";
      }
      const {
        simplyline
      } = player.track;
      if (!simplyline.length) {
        return "idle";
      }
      if (player.track.length < bot.game.config.botAttackTrackLength && botFeelsThreatened(bot)) {
        return "idle";
      }
      let _0x2f1e36 = 0;
      let min = Infinity;
      simplyline.forEach((point: any, index: number) => {
        const distSq = bot.position.distance2(point);
        if (distSq < min) {
          min = distSq;
          _0x2f1e36 = index;
        }
      });
      bot.target = simplyline[_0x2f1e36];
    }
  }
};
