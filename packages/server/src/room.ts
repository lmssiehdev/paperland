import { TICK_MS } from "@paperio/core/game/constants";
import type { Game } from "@paperio/core/game/game";
import type { Unit } from "@paperio/core/game/units";
import { createHeadlessGame } from "@paperio/core/headless";
import type { ModeId } from "@paperio/core/modes/index";
import { UpdateMsg } from "@paperio/protocol/messages";
import type { GameData } from "./game-data";

export interface RoomOptions {
  id: string;
  data: GameData;
  mode?: ModeId;
  /** Network/update rate. The sim still advances in core's 1/60 s steps (several per room tick). */
  tickRate?: number;
  /** Run core's bot-only warm-up (prepareCounter ticks) before the first tick, like the browser does. */
  warmUp?: boolean;
}

/**
 * One headless core game ticking on the server. Phase 1 skeleton: bots only, no players, no netcode.
 * It proves core runs under Bun and gives /play something to snapshot.
 */
export class Room {
  readonly id: string;
  readonly mode: ModeId;
  readonly tickRate: number;
  readonly game: Game;
  /** Room ticks since start(). */
  ticks = 0;
  private timer: ReturnType<typeof setInterval> | undefined;
  private readonly unitIds = new WeakMap<Unit, number>();
  private nextUnitId = 1;

  constructor(options: RoomOptions) {
    this.id = options.id;
    this.mode = options.mode ?? "classic";
    this.tickRate = options.tickRate ?? 20;
    this.game = createHeadlessGame({
      skinNames: options.data.skinNames,
      language: options.data.language,
      mode: this.mode
    });
    if (options.warmUp ?? true) {
      this.game.finishPrepare();
    }
  }

  get running(): boolean {
    return this.timer !== undefined;
  }

  start(): void {
    if (!this.timer) {
      this.timer = setInterval(() => this.tick(), 1000 / this.tickRate);
    }
  }

  /** Advances the sim by one room tick (1000 / tickRate ms) in TICK_MS steps. */
  tick(): void {
    const steps = Math.max(1, Math.round(1000 / this.tickRate / TICK_MS));
    for (let i = 0; i < steps; i++) {
      this.game.update(TICK_MS);
    }
    this.ticks++;
  }

  stop(): void {
    clearInterval(this.timer);
    this.timer = undefined;
    this.game.stop();
  }

  /** Stable small id per unit for the wire (core units have none). */
  unitId(unit: Unit): number {
    let id = this.unitIds.get(unit);
    if (id === undefined) {
      id = this.nextUnitId++;
      this.unitIds.set(unit, id);
    }
    return id;
  }

  /** Full-world snapshot (no culling yet). */
  snapshot(): UpdateMsg {
    const msg = new UpdateMsg();
    msg.tick = this.game.cycle;
    msg.units = this.game.units.map(unit => ({
      id: this.unitId(unit),
      x: unit.position.x,
      y: unit.position.y,
      percent: unit.percent,
      home: unit.insideBase === unit.base
    }));
    return msg;
  }
}
