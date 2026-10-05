import type { BitStream } from "../bit-stream";
import { Limits, MsgType, PROTOCOL_VERSION } from "./shared";
import type { Msg } from "./shared";

/** Client -> server: first message on /play. */
export class JoinMsg implements Msg {
  readonly type = MsgType.Join;
  protocolVersion = PROTOCOL_VERSION;
  name = "";
  /** Skin asset name ("" for a random colored skin), as in api.start(). */
  skin = "";

  serialize(s: BitStream): void {
    s.writeUint16(this.protocolVersion);
    s.writeAsciiString(this.name, Limits.NameLength);
    s.writeAsciiString(this.skin, Limits.SkinLength);
  }

  deserialize(s: BitStream): void {
    this.protocolVersion = s.readUint16();
    this.name = s.readAsciiString(Limits.NameLength);
    this.skin = s.readAsciiString(Limits.SkinLength);
  }
}
