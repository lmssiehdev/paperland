import type { BitStream } from "../bit-stream";
import { Limits, MsgType } from "./shared";
import type { Msg } from "./shared";

export interface UnitState {
  id: number;
  x: number;
  y: number;
  /** Share of the arena owned, 0..1. */
  percent: number;
  /** Inside its own base (no trail). */
  home: boolean;
}

/** Server -> client: world state. Skeleton: every unit, absolute values, no culling or deltas yet. */
export class UpdateMsg implements Msg {
  readonly type = MsgType.Update;
  /** Game.cycle on the server. */
  tick = 0;
  units: UnitState[] = [];

  serialize(s: BitStream): void {
    s.writeUint32(this.tick);
    s.writeArray(this.units, 8, unit => {
      s.writeUint16(unit.id);
      s.writeFloat(unit.x, 0, Limits.MaxPosition, Limits.PositionBits);
      s.writeFloat(unit.y, 0, Limits.MaxPosition, Limits.PositionBits);
      s.writeFloat(unit.percent, 0, 1, Limits.PercentBits);
      s.writeBoolean(unit.home);
    });
  }

  deserialize(s: BitStream): void {
    this.tick = s.readUint32();
    this.units = s.readArray(8, () => ({
      id: s.readUint16(),
      x: s.readFloat(0, Limits.MaxPosition, Limits.PositionBits),
      y: s.readFloat(0, Limits.MaxPosition, Limits.PositionBits),
      percent: s.readFloat(0, 1, Limits.PercentBits),
      home: s.readBoolean()
    }));
  }
}
