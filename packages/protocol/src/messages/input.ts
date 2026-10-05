import { ProtocolError } from "../bit-stream";
import type { BitStream } from "../bit-stream";
import { MsgType } from "./shared";
import type { Msg } from "./shared";

/** Client -> server: steering. */
export class InputMsg implements Msg {
  readonly type = MsgType.Input;
  /** Wraps at 256; lets the server ack inputs later (prediction). */
  seq = 0;
  /** Heading in core's own quantization: Game.angle, 0..253, radians = angle * PI / 127. */
  angle = 0;

  serialize(s: BitStream): void {
    s.writeUint8(this.seq);
    s.writeUint8(this.angle);
  }

  deserialize(s: BitStream): void {
    this.seq = s.readUint8();
    this.angle = s.readUint8();
    if (this.angle > 253) {
      throw new ProtocolError(`InputMsg: angle ${this.angle} out of range 0..253`);
    }
  }
}
