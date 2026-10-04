import { BOT_STATES } from "../ai/bot-states";
import type { BotStateName } from "../ai/bot-states";
import { StateMachine } from "../ai/state-machine";
import { now } from "../engine/math";
import { Vec2 } from "../engine/vec2";
import { Base } from "./base";
import { Track } from "./track";
import type { Skin } from "../skins/skin";
import type { AchievementsProfile } from "./achievements";
import type { City } from "./city";
import type { Game } from "./game";
import type { SchemeSet, SchemesManager } from "./scoring";

/** Floating text queued on a unit; Game turns it into a FloatingLabel. */
export interface UnitLabel {
  text: string;
  color: string;
  /** Unit the label follows; addLabel defaults it to the receiving unit. */
  unit?: Unit;
  /** Lifetime in ms. */
  time: number;
  fading?: boolean;
}

/** Per-enemy danger sample computed in Bot.update while the bot is outside its base. */
export interface UnitToTrackDistance {
  unit: Unit;
  /** Distance from `unit` to the nearest point of this bot's trail. */
  trackDistance: number;
  trackPoint: Vec2;
  /** baseDistance / trackDistance: > 1 means the enemy reaches the trail before the bot gets home. */
  danger: number;
}

export class Unit {
    killer: Unit;
    achievements: AchievementsProfile;
    skin: Skin;
    death: boolean;
    jitter: number;
    smoothness: number;
    /** Bot difficulty tier (index into Game.bots); unset for the player. */
    type: number;
    fsm: StateMachine<Bot, BotStateName>;
    game: Game;
    name: string;
    position: Vec2;
    base: Base;
    track: Track;
    lastSquare: number;
    in: Base;
    target: Vec2;
    respawn: boolean;
    statistics: { kills: number; };
    log: Vec2[];
    bornTime: number;
    cities: City[];
    labels: UnitLabel[];
    percent: number;
    bestPercent: number;
    scale: number;
    vrange: number;
    direction: number;
    top: number;
    scores: { accumulator: number; kills: number; };
    schemes: SchemeSet;
    baseDistance: number;
    baseNearestPoint: Vec2;
    baseNearestPointTangent: Vec2;
    baseNearestPointNormal: Vec2;

  constructor(game: Game, name: string, position: Vec2, basePoints: Vec2[], unusedArg: unknown, schemesManager: SchemesManager) {
    this.killer = undefined;
    this.achievements = undefined;
    this.skin = undefined;
    this.death = undefined;
    this.jitter = undefined;
    this.smoothness = undefined;
    this.type = undefined;
    this.fsm = undefined;
    this.game = game;
    this.name = name;
    this.position = position;
    this.base = new Base(this, basePoints);
    this.track = new Track(this);
    this.lastSquare = this.base.square;
    this.in = this.base;
    this.target = null;
    this.respawn = false;
    this.statistics = {
      kills: 0
    };
    this.log = [];
    this.bornTime = now();
    this.cities = [];
    this.labels = [];
    this.percent = 0;
    this.bestPercent = 0;
    this.scale = 0;
    this.vrange = 1;
    this.direction = 0;
    this.top = 0;
    this.scores = {
      accumulator: 0,
      kills: 0
    };
    this.schemes = schemesManager && schemesManager.getSchemes(this);
    this.baseDistance = 0;
    this.baseNearestPoint = null;
    this.baseNearestPointTangent = null;
    this.baseNearestPointNormal = null;
  }
  get isPlayer() {
    return false;
  }
  setSkin(skin: Skin) {
    this.skin = skin;
    skin.user = this;
  }
  onScoreChanged() {
    if (this.game.units.indexOf(this) <= 5 || this.isPlayer) {
      this.game.topListChanged = true;
    }
  }
  update(dt: number) {
    this.log.push(this.position);
    if (this.in !== this.base) {
      this.scores.accumulator += this.percent * 100 * dt / 1000;
    }
    let nearestDistance = 0;
    let nearestPoint: Vec2 = null;
    let tangent: Vec2 = null;
    if (this.in !== this.base) {
      nearestDistance = Infinity;
      let nearestIndex = 0;
      const {
        simplify
      } = this.base.polygon;
      simplify.forEach((item, index) => {
        const distSq = item.distance2(this.position);
        if (distSq < nearestDistance) {
          nearestDistance = distSq;
          nearestPoint = item;
          nearestIndex = index;
        }
      });
      const prev = simplify[nearestIndex > 0 ? nearestIndex - 1 : simplify.length - 1];
      const next = simplify[nearestIndex < simplify.length - 1 ? nearestIndex + 1 : 0];
      tangent = next.clone().sub(prev).normalize();
    }
    nearestDistance = Math.sqrt(nearestDistance);
    this.baseDistance = nearestDistance;
    this.baseNearestPoint = nearestPoint;
    this.baseNearestPointTangent = tangent;
    this.baseNearestPointNormal = tangent && tangent.clone().rotate(-Math.PI / 2);
  }
  movement() {
    return this.target && this.target.clone().sub(this.position).normalize();
  }
  addLabel(label: UnitLabel) {
    if (!label.unit) {
      label.unit = this;
    }
    this.labels.push(label);
  }
}
export class Player extends Unit {
    win: boolean;
    /** Set on the prototype by domain-lock.ts (true only on the licensed host in the original). */
    declare moveTo: boolean;

  get isPlayer() {
    return true;
  }
  constructor(game: Game, name: string, position: Vec2, basePoints: Vec2[], unusedArg: unknown, schemesManager: SchemesManager) {
    super(game, name, position, basePoints, unusedArg, schemesManager);
    this.win = false;
  }
  update(dt: number) {
    super.update(dt);
    if (!this.respawn) {
      this.target = new Vec2(1, 0).rotate(this.game.angle * Math.PI / 127).mulScalar(50).add(this.position);
    }
  }
}
export class Bot extends Unit {
    aggro: number;
    greed: number;
    safety: number;
    def: number;
    targets: Vec2[];
    maxDanger: number;
    unitDanger: Unit;
    unitToTrackDistances: UnitToTrackDistance[];
    distanceDanger: number;
    /** Area of the loop the current trail would close (set by the "capture" state). */
    declare capSquare: number;
    /** Debug label of the current capture maneuver (set by the "capture" state). */
    declare aspect: string;

  constructor(game: Game, type: number, name: string, position: Vec2, basePoints: Vec2[], unusedArg: unknown, schemesManager: SchemesManager) {
    super(game, name, position, basePoints, unusedArg, schemesManager);
    this.aggro = 0;
    this.greed = 0;
    this.safety = 0;
    this.def = 0;
    this.type = type;
    this.jitter = (this.game.rng() * 2 - 1) * 0.1;
    this.targets = [];
    this.smoothness = 1;
    this.maxDanger = 0;
    this.unitDanger = null;
    this.fsm = new StateMachine(BOT_STATES, "idle", this);
  }
  update(dt: number) {
    super.update(dt);
    this.unitToTrackDistances = [];
    let maxDanger = 0;
    let dangerDistance = 0;
    let dangerUnit: Unit = null;
    if (this.in !== this.base) {
      const {
        player
      } = this.game;
      this.game.units.forEach((unit: Unit) => {
        const isFarPlayer = player === unit && this.position.distance(unit.position) > this.vrange;
        if (unit !== this && !isFarPlayer) {
          let min = Infinity;
          let nearestTrackPoint: Vec2 = null;
          this.track.simplyline.forEach(point => {
            const distSq = point.distance2(unit.position);
            if (distSq < min) {
              min = distSq;
              nearestTrackPoint = point;
            }
          });
          min = Math.sqrt(min);
          const danger = this.baseDistance / min;
          this.unitToTrackDistances.push({
            unit: unit,
            trackDistance: min,
            trackPoint: nearestTrackPoint,
            danger: danger
          });
          if (danger > maxDanger) {
            dangerUnit = unit;
            dangerDistance = min;
            maxDanger = danger;
          }
        }
      });
    }
    this.unitDanger = dangerUnit;
    this.distanceDanger = dangerDistance;
    this.maxDanger = maxDanger;
    this.smoothness = 1;
    this.fsm.update();
  }
}
