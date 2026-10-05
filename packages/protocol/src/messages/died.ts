import type { DeathReason } from "@paperio/core/game/constants";
import { DEATH_CAPITAL_SURROUNDED } from "@paperio/core/game/constants";
import { ProtocolError } from "../bit-stream";
import type { BitStream } from "../bit-stream";
import { Limits, MsgType } from "./shared";
import type { Msg } from "./shared";

/** Server -> client: the player's round ended (mirrors core's GameResult essentials). */
export class DiedMsg implements Msg {
  readonly type = MsgType.Died;
  reason: DeathReason = 0;
  /** 0 when killed by the arena/system. */
  killerId = 0;
  percent = 0;
  kills = 0;

  serialize(s: BitStream): void {
    s.writeUint8(this.reason);
    s.writeUint16(this.killerId);
    s.writeFloat(this.percent, 0, 1, Limits.PercentBits);
    s.writeUint16(this.kills);
  }

  deserialize(s: BitStream): void {
    const reason = s.readUint8();
    if (reason > DEATH_CAPITAL_SURROUNDED) {
      throw new ProtocolError(`DiedMsg: unknown death reason ${reason}`);
    }
    // SAFETY: range-checked against the last DEATH_* code above.
    this.reason = reason as DeathReason;
    this.killerId = s.readUint16();
    this.percent = s.readFloat(0, 1, Limits.PercentBits);
    this.kills = s.readUint16();
  }
}
