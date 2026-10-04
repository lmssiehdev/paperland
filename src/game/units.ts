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
import { areAllies } from "./team";
import type { Team } from "./team";

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
  /** Nearest trail point; null only if the trail has no points (never read). */
  trackPoint: Vec2 | null;
  /** baseDistance / trackDistance: > 1 means the enemy reaches the trail before the bot gets home. */
  danger: number;
}

export class Unit {
    /** Set by Game.kill; undefined while alive or when killed by the arena/system. */
    killer: Unit | undefined;
    /** Only the player gets a profile (Game.addPlayer). */
    achievements: AchievementsProfile | undefined;
    /** Assigned by setSkin(), which Game.spawnBot/spawnPlayer call right after construction. */
    skin!: Skin;
    death: boolean | undefined;
    /** Per-bot difficulty jitter; unset for the player (Bot redeclares it as always set). */
    jitter: number | undefined;
    /** Turn-rate divisor; unset for the player (getMovement falls back to 1). */
    smoothness: number | undefined;
    /** Bot difficulty tier (index into Game.bots); unset for the player. */
    type: number | undefined;
    /** Bot AI; unset for the player. */
    fsm: StateMachine<Bot, BotStateName> | undefined;
    game: Game;
    name: string;
    position: Vec2;
    base: Base;
    track: Track;
    lastArea: number;
    /** Territory captured in this unit's own returns, as a share of the arena (team score). */
    personalPercent = 0;
    /** Base the unit is currently inside (its own or an enemy's); null while outside every base. */
    insideBase: Base | null;
    /** Team in team modes (set by Team.add); null in classic. */
    team: Team | null = null;
    target: Vec2 | null;
    respawn: boolean;
    statistics: { kills: number; };
    positionLog: Vec2[];
    bornTime: number;
    cities: City[];
    labels: UnitLabel[];
    percent: number;
    bestPercent: number;
    scale: number;
    viewRange: number;
    direction: number;
    rank: number;
    scores: { accumulator: number; kills: number; };
    schemes: SchemeSet;
    baseDistance: number;
    /** The next three are null while the unit is inside its own base (see update). */
    baseNearestPoint: Vec2 | null;
    baseNearestPointTangent: Vec2 | null;
    baseNearestPointNormal: Vec2 | null;

  /** `basePoints` builds the unit its own base; passing an existing Base makes the unit a co-host of it (team modes). */
  constructor(game: Game, name: string, position: Vec2, basePoints: Vec2[] | Base, unusedArg: unknown, schemesManager: SchemesManager) {
    this.killer = undefined;
    this.achievements = undefined;
    this.death = undefined;
    this.jitter = undefined;
    this.smoothness = undefined;
    this.type = undefined;
    this.fsm = undefined;
    this.game = game;
    this.name = name;
    this.position = position;
    if (basePoints instanceof Base) {
      this.base = basePoints;
      basePoints.hosts.push(this);
    } else {
      this.base = new Base(this, basePoints);
    }
    this.track = new Track(this);
    this.lastArea = this.base.area;
    this.insideBase = this.base;
    this.target = null;
    this.respawn = false;
    this.statistics = {
      kills: 0
    };
    this.positionLog = [];
    this.bornTime = now();
    this.cities = [];
    this.labels = [];
    this.percent = 0;
    this.bestPercent = 0;
    this.scale = 0;
    this.viewRange = 1;
    this.direction = 0;
    this.rank = 0;
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
    this.positionLog.push(this.position);
    if (this.insideBase !== this.base) {
      this.scores.accumulator += this.percent * 100 * dt / 1000;
    }
    let nearestDistance = 0;
    let nearestPoint: Vec2 | null = null;
    let tangent: Vec2 | null = null;
    if (this.insideBase !== this.base) {
      nearestDistance = Infinity;
      let nearestIndex = 0;
      const {
        simplifiedPoints
      } = this.base.polygon;
      simplifiedPoints.forEach((item, index) => {
        const distSq = item.distance2(this.position);
        if (distSq < nearestDistance) {
          nearestDistance = distSq;
          nearestPoint = item;
          nearestIndex = index;
        }
      });
      const prev = simplifiedPoints[nearestIndex > 0 ? nearestIndex - 1 : simplifiedPoints.length - 1];
      const next = simplifiedPoints[nearestIndex < simplifiedPoints.length - 1 ? nearestIndex + 1 : 0];
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

  get isPlayer() {
    return true;
  }
  constructor(game: Game, name: string, position: Vec2, basePoints: Vec2[] | Base, unusedArg: unknown, schemesManager: SchemesManager) {
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
    defense: number;
    targets: Vec2[];
    maxDanger: number;
    declare jitter: number;
    declare smoothness: number;
    declare type: number;
    declare fsm: StateMachine<Bot, BotStateName>;
    unitDanger: Unit | null;
    /** Recomputed at the start of every update(), before the FSM (its only reader) runs. */
    unitToTrackDistances!: UnitToTrackDistance[];
    /** Recomputed in every update(), before the FSM (its only reader) runs. */
    distanceDanger!: number;
    /** Area of the loop the current trail would close (set by the "capture" state). */
    declare captureArea: number;
    /** Debug label of the current capture maneuver (set by the "capture" state). */
    declare aspect: string;

  constructor(game: Game, type: number, name: string, position: Vec2, basePoints: Vec2[] | Base, unusedArg: unknown, schemesManager: SchemesManager) {
    super(game, name, position, basePoints, unusedArg, schemesManager);
    this.aggro = 0;
    this.greed = 0;
    this.safety = 0;
    this.defense = 0;
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
    let dangerUnit: Unit | null = null;
    if (this.insideBase !== this.base) {
      const {
        player
      } = this.game;
      this.game.units.forEach((unit: Unit) => {
        const isFarPlayer = player === unit && this.position.distance(unit.position) > this.viewRange;
        if (unit !== this && !isFarPlayer && !areAllies(unit, this)) {
          let min = Infinity;
          let nearestTrackPoint: Vec2 | null = null;
          this.track.simplifiedPoints.forEach(point => {
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
