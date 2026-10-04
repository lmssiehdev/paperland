import type { DeathReason } from "@paperio/core/game/constants";
import { DEATH_CAPITAL_SURROUNDED } from "@paperio/core/game/constants";
import { BitStream, ProtocolError } from "./bit-stream";

/** Bumped on any wire-format change; sent in JoinMsg so the server can refuse stale clients. */
export const PROTOCOL_VERSION = 1;

export const Limits = {
  NameLength: 16,
  SkinLength: 32,
  /** Positions are quantized over [0, MaxPosition] (the classic arena is 2000). */
  MaxPosition: 4096,
  PositionBits: 16,
  PercentBits: 16,
  /** UpdateMsg unit count is sent in 8 bits. */
  MaxUnits: 255
} as const;

/**
 * First byte of every message. Append only: never reorder or reuse ids (Join stays 1 so a version
 * check works across versions, as in survev).
 */
export enum MsgType {
  None = 0,
  Join = 1,
  Joined = 2,
  Input = 3,
  Update = 4,
  Died = 5
}

interface Msg {
  readonly type: MsgType;
  serialize(s: BitStream): void;
  deserialize(s: BitStream): void;
}

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

export type ClientMessage = JoinMsg | InputMsg;
export type ServerMessage = JoinedMsg | UpdateMsg | DiedMsg;
export type Message = ClientMessage | ServerMessage;

const CLIENT_MESSAGES: Partial<Record<MsgType, new () => ClientMessage>> = {
  [MsgType.Join]: JoinMsg,
  [MsgType.Input]: InputMsg
};
const SERVER_MESSAGES: Partial<Record<MsgType, new () => ServerMessage>> = {
  [MsgType.Joined]: JoinedMsg,
  [MsgType.Update]: UpdateMsg,
  [MsgType.Died]: DiedMsg
};

/** One binary frame: each message is its type byte plus its fields, padded to a whole byte. */
export function encodeMessages(...messages: Message[]): Uint8Array {
  const s = new BitStream(64);
  for (const message of messages) {
    s.writeUint8(message.type);
    message.serialize(s);
    s.writeAlignToByte();
  }
  return s.toBytes();
}

function decode<M extends Message>(bytes: Uint8Array, table: Partial<Record<MsgType, new () => M>>): M[] {
  const s = new BitStream(bytes);
  const messages: M[] = [];
  while (s.remainingBits >= 8) {
    const type = s.readUint8();
    // SAFETY: any byte is a valid lookup key; unknown types miss and throw below.
    const MessageClass = table[type as MsgType];
    if (!MessageClass) {
      throw new ProtocolError(`unexpected message type ${type}`);
    }
    const message = new MessageClass();
    message.deserialize(s);
    s.readAlignToByte();
    messages.push(message);
  }
  return messages;
}

/** Server side: decodes a frame from a client. Throws ProtocolError on server-only or unknown types. */
export const decodeClientMessages = (bytes: Uint8Array): ClientMessage[] => decode(bytes, CLIENT_MESSAGES);

/** Client side: decodes a frame from the server. */
export const decodeServerMessages = (bytes: Uint8Array): ServerMessage[] => decode(bytes, SERVER_MESSAGES);
