import { BOT_STATES } from "../ai/bot-states";
import { StateMachine } from "../ai/state-machine";
import { now } from "../engine/math";
import { Vec2 } from "../engine/vec2";
import { Base } from "./base";
import { Track } from "./track";
import type { Game } from "./game";

export class Unit {
    killer: Unit;
    achievements: any;
    skin: Skin;
    death: any;
    jitter: any;
    smoothness: any;
    type: any;
    fsm: any;
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
    log: any[];
    bornTime: any;
    cities: any[];
    labels: any[];
    percent: number;
    bestPercent: number;
    scale: number;
    vrange: number;
    direction: number;
    top: number;
    scores: { accumulator: number; kills: number; };
    schemes: any;
    baseDistance: number;
    baseNearestPoint: any;
    baseNearestPointTangent: any;
    baseNearestPointNormal: any;

  constructor(game: Game, name: string, position: Vec2, basePoints: any[], unusedArg: any, schemesManager) {
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
    let _0x1175a6 = 0;
    let _0x580a5a = null;
    let _0x2dff70 = null;
    if (this.in !== this.base) {
      _0x1175a6 = Infinity;
      let _0x18290a = 0;
      const {
        simplify
      } = this.base.polygon;
      simplify.forEach((item, index) => {
        const distSq = item.distance2(this.position);
        if (distSq < _0x1175a6) {
          _0x1175a6 = distSq;
          _0x580a5a = item;
          _0x18290a = index;
        }
      });
      const point = simplify[_0x18290a > 0 ? _0x18290a - 1 : simplify.length - 1];
      const _0x54faf7 = simplify[_0x18290a < simplify.length - 1 ? _0x18290a + 1 : 0];
      _0x2dff70 = _0x54faf7.clone().sub(point).normalize();
    }
    _0x1175a6 = Math.sqrt(_0x1175a6);
    this.baseDistance = _0x1175a6;
    this.baseNearestPoint = _0x580a5a;
    this.baseNearestPointTangent = _0x2dff70;
    this.baseNearestPointNormal = _0x2dff70 && _0x2dff70.clone().rotate(-Math.PI / 2);
  }
  movement() {
    return this.target && this.target.clone().sub(this.position).normalize();
  }
  addLabel(_0x265f51) {
    if (!_0x265f51.unit) {
      _0x265f51.unit = this;
    }
    this.labels.push(_0x265f51);
  }
}
export class Player extends Unit {
    win: boolean;

  get isPlayer() {
    return true;
  }
  constructor(game: Game, name: string, position: Vec2, basePoints: Vec2[], unusedArg: any, schemesManager: any) {
    super(game, name, position, basePoints, unusedArg, schemesManager);
    this.win = false;
  }
  update(_0x46f3c4: number) {
    super.update(_0x46f3c4);
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
    type: number;
    jitter: number;
    targets: any[];
    smoothness: number;
    maxDanger: number;
    unitDanger: any;
    fsm: StateMachine;
    unitToTrackDistances: any[];
    distanceDanger: number;

  constructor(game: Game, type: number, name: string, position: Vec2, basePoints: Vec2[], unusedArg: any, schemesManager: any) {
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
  update(_0x227a04: number) {
    super.update(_0x227a04);
    this.unitToTrackDistances = [];
    let _0x1349bf = 0;
    let _0x21ee3d = 0;
    let _0x22e30a = null;
    if (this.in !== this.base) {
      const {
        player
      } = this.game;
      this.game.units.forEach((unit: this): this => {
        const _0x5cc7c2 = player === unit && this.position.distance(unit.position) > this.vrange;
        if (unit !== this && !_0x5cc7c2) {
          let min = Infinity;
          let _0x48ff76 = null;
          this.track.simplyline.forEach(point => {
            const distSq = point.distance2(unit.position);
            if (distSq < min) {
              min = distSq;
              _0x48ff76 = point;
            }
          });
          min = Math.sqrt(min);
          const _0x552a35 = this.baseDistance / min;
          this.unitToTrackDistances.push({
            unit: unit,
            trackDistance: min,
            trackPoint: _0x48ff76,
            danger: _0x552a35
          });
          if (_0x552a35 > _0x1349bf) {
            _0x22e30a = unit;
            _0x21ee3d = min;
            _0x1349bf = _0x552a35;
          }
        }
      });
    }
    this.unitDanger = _0x22e30a;
    this.distanceDanger = _0x21ee3d;
    this.maxDanger = _0x1349bf;
    this.smoothness = 1;
    this.fsm.update();
  }
}
