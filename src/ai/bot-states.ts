import { lerp } from "../engine/math";
import { Segment } from "../engine/segment";
import type { Vec2 } from "../engine/vec2";
import type { Bot } from "../game/units";
import type { FsmState } from "./state-machine";

/** Context returned by the "idle" / "attack" enter handlers. */
export type EmptyContext = Record<string, never>;

/** Context of the (unused) "capital" state. */
export interface CapitalContext {
  point?: Vec2;
}

/** Context of the "cut" state: where the bot leaves its base heading away from the arena center. */
export interface CutContext {
  /** Undefined when no base edge was found on the ray. */
  exitPoint?: Vec2;
}

/** Context of the "exit" state. */
export interface ExitContext {
  /** Base vertex the bot heads for to leave its territory. */
  exitPoint: Vec2;
  /** Candidate exit points closer than this are ignored. */
  minDistance: number;
}

/** A bot FSM state whose handlers work with context `C`. */
export type BotState<C extends object = object> = FsmState<Bot, BotStateName, C>;

/** Bot state table: each state with its own context type. */
export interface BotStates {
  idle: BotState<EmptyContext>;
  capital: BotState<CapitalContext>;
  cut: BotState<CutContext>;
  exit: BotState<ExitContext>;
  capture: BotState;
  back: BotState;
  attack: BotState<EmptyContext>;
}

export type BotStateName = keyof BotStates;

/** True when the player's trail is within the bot's aggro range. */
const botNearPlayerTrack = (bot: Bot) => {
  const {
    player
  } = bot.game;
  if (player) {
    const range = Math.max(bot.vrange, player.vrange);
    const aggroRange = range * bot.aggro * 0.75;
    const {
      simplyline
    } = player.track;
    for (let i = 0, count = simplyline.length; i < count; i++) {
      if (bot.position.distance2(simplyline[i]) < aggroRange * aggroRange) {
        return true;
      }
    }
  }
};
const botFeelsThreatened = (bot: Bot, _unused?: unknown) => {
  if (bot.in === bot.base) {
    return false;
  }
  return bot.maxDanger > bot.def * 0.8;
};
export var BOT_STATES: BotStates = {
  idle: {
    enter: function () {
      return {};
    },
    update: function (bot: Bot, ctx: EmptyContext) {
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
    update: function (bot: Bot, ctx: CapitalContext) {
      if (bot.in !== bot.base) {
        return "capture";
      }
      const dist = bot.position.distance(bot.game.space.center);
      const borderDistance = bot.game.border.radius - dist;
      bot.target = ctx.point;
    }
  },
  cut: {
    enter: function (bot: Bot) {
      const delta = bot.position.clone().sub(bot.game.space.center);
      const len = delta.magnitude();
      const segment = new Segment(bot.position, delta.normalize().mulScalar(bot.game.border.radius + 10).add(bot.game.space.center));
      const intersections = bot.base.polygon.intersections(segment);
      const result: CutContext = {};
      if (!intersections.length) {
        console.log("bot.position", bot.position.x, bot.position.y);
        console.log("intersections", intersections);
      }
      intersections.sort((a, b) => a.distance - b.distance);
      result.exitPoint = intersections[0] && intersections[0].point;
      return result;
    },
    update: function (bot: Bot, ctx: CutContext) {
      if (bot.in !== bot.base) {
        return "capture";
      }
      const dist = bot.position.distance(bot.game.space.center);
      const borderDistance = bot.game.border.radius - dist;
      if (!ctx.exitPoint || borderDistance < 1) {
        return "idle";
      }
      bot.target = ctx.exitPoint;
    }
  },
  exit: {
    enter: function (bot: Bot) {
      const result = {} as ExitContext;
      let min = Infinity;
      let exitIndex: number;
      const {
        length
      } = bot.base.polygon.segments;
      let unitSpeed = bot.game.config.unitSpeed;
      result.minDistance = unitSpeed;
      while (exitIndex === undefined) {
        for (let i = 0; i < 1; i++) {
          const index = ~~(bot.game.rng() * length);
          const start = bot.base.polygon.segments[index].start;
          const dist = start.distance(bot.position);
          if (dist < min && dist > unitSpeed) {
            min = dist;
            exitIndex = index;
          }
        }
        unitSpeed *= 0.75;
      }
      result.exitPoint = bot.base.polygon.segments[exitIndex].start;
      return result;
    },
    update: function (bot: Bot, ctx: ExitContext) {
      if (bot.in !== bot.base) {
        // ORIGINAL: reassigns the local parameter only (no effect on the FSM context).
        ctx = {} as ExitContext;
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
      const index = ~~(bot.game.rng() * length);
      const start = bot.base.polygon.segments[index].start;
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
    update: function (bot: Bot, ctx: object) {
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
      const borderDistance = radius - dist;
      if (bot.baseDistance < unitSpeed / 4 && bot.track.length > unitSpeed * 2 && borderDistance > 10) {
        return "back";
      }
      const dist32 = 25;
      const halfStep = dist32 / 2;
      const halfStepSq = halfStep * halfStep;
      if (bot.position.distance2(bot.target) < halfStepSq && borderDistance > dist32) {
        return;
      }
      let loopArea = 0;
      for (let i = 1, count = bot.track.simplyline.length; i < count; i++) {
        const point = bot.track.simplyline[i - 1];
        const point2 = bot.track.simplyline[i];
        loopArea += (point.x + point2.x) * (point2.y - point.y);
      }
      let point = bot.track.simplyline[bot.track.simplyline.length - 1];
      let baseNearestPoint = bot.baseNearestPoint;
      loopArea += (point.x + baseNearestPoint.x) * (baseNearestPoint.y - point.y);
      point = bot.baseNearestPoint;
      baseNearestPoint = bot.track.simplyline[0];
      loopArea += (point.x + baseNearestPoint.x) * (baseNearestPoint.y - point.y);
      const sign = Math.sign(loopArea);
      loopArea = Math.abs(loopArea / 2);
      bot.capSquare = loopArea;
      const {
        def,
        greed,
        safety
      } = bot;
      const maxTrackLength = Math.PI * 2 * bot.vrange * greed;
      const trackLengthRatio = bot.track.length / maxTrackLength;
      const maxCapSquare = Math.min(bot.base.square, Math.PI * bot.vrange * bot.vrange) * greed;
      const capSquareRatio = bot.capSquare / maxCapSquare;
      const maxStartDistance = bot.vrange * lerp(3, 0.7, safety);
      const startDistanceRatio = bot.position.distance(bot.track.polyline.start) / maxStartDistance;
      const safeBaseDistance = bot.unitToTrackDistances.reduce((acc, unitToTrackDistance) => Math.min(unitToTrackDistance.trackDistance, acc), Infinity) * 0.8 * def;
      const dangerRatio = bot.baseDistance / safeBaseDistance;
      const returnUrge = Math.max(trackLengthRatio, capSquareRatio, startDistanceRatio, dangerRatio);
      if (returnUrge > 1) {
        return "back";
      }
      const greedRange = bot.vrange * greed;
      const dangerRange = bot.distanceDanger * 0.6 * def;
      const farDistance = greedRange;
      const nearDistance = farDistance * 0.8;
      const delta = bot.target.clone().sub(bot.position);
      let point2;
      if (bot.baseDistance > farDistance || returnUrge > 0.75) {
        bot.aspect = "приближение";
        point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate((Math.PI / 2 + Math.PI / 4) * sign);
      } else if (bot.baseDistance < nearDistance) {
        bot.aspect = "отдаление";
        let awayAngle = Math.PI / 4;
        const trackRatio = bot.track.length / nearDistance;
        if (trackRatio < 1) {
          bot.aspect = "отстрел";
          awayAngle = lerp(Math.PI / 2 * greed, 0, trackRatio);
        }
        point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate((Math.PI / 2 - awayAngle) * sign);
      } else {
        bot.aspect = "проход";
        point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate(Math.PI / 2 * sign);
        bot.smoothness = 1 + (1 - Math.min(1, bot.maxDanger)) * 3;
      }
      bot.smoothness = 1 + (1 - Math.min(1, bot.maxDanger)) * 1;
      if (borderDistance < dist32 * 2 && borderDistance > dist32 / 4 && borderDistance < bot.position.clone().add(point2).distance(center)) {
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
        const absAngle = Math.abs(angle2);
        if (absAngle < Math.PI / 4) {
          point2.rotate((Math.PI / 4 - absAngle) * sign2);
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
        const chordCenter = center.clone().add(dir.clone().mulScalar(dist33));
        point2 = dir.clone().rotate(Math.PI / 2 * angle).rotate(Math.PI / 8 * -angle).mulScalar(dist3);
        bot.target = chordCenter.clone().add(point2);
      } else if (bot.target.distance(center) > radius && bot.target.distance(center) < radius + dist32 * 0.5) {
        // ORIGINAL: empty branch (condition still evaluated).
      }
    }
  },
  back: {
    enter: function (bot: Bot, ctx: object) {},
    update: function (bot: Bot, ctx: object) {
      if (bot.in === bot.base) {
        return "idle";
      }
      bot.smoothness = lerp(1, Math.max(1, Math.max(1, Math.min(bot.def, bot.greed) * 4)), Math.max(1, bot.maxDanger));
      const borderDistance = bot.game.border.radius - bot.position.distance(bot.game.space.center);
      if (borderDistance < 20) {
        bot.smoothness = 1;
      }
      bot.target = bot.baseNearestPoint;
    }
  },
  attack: {
    enter: () => ({}),
    update: function (bot: Bot, ctx: EmptyContext) {
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
      let nearestIndex = 0;
      let min = Infinity;
      simplyline.forEach((point, index) => {
        const distSq = bot.position.distance2(point);
        if (distSq < min) {
          min = distSq;
          nearestIndex = index;
        }
      });
      bot.target = simplyline[nearestIndex];
    }
  }
};
