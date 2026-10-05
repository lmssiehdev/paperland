import type { BitStream } from "../bit-stream";
import { MsgType } from "./shared";
import type { Msg } from "./shared";

/** Server -> client: the join was accepted. */
export class JoinedMsg implements Msg {
  readonly type = MsgType.Joined;
  playerId = 0;
  /** Server updates per second. */
  tickRate = 20;
  arenaSize = 2000;

  serialize(s: BitStream): void {
    s.writeUint16(this.playerId);
    s.writeUint8(this.tickRate);
    s.writeUint16(this.arenaSize);
  }

  deserialize(s: BitStream): void {
    this.playerId = s.readUint16();
    this.tickRate = s.readUint8();
    this.arenaSize = s.readUint16();
  }
}
