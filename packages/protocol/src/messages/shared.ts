import type { BitStream } from "../bit-stream";

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

/** What every message class implements. */
export interface Msg {
  readonly type: MsgType;
  serialize(s: BitStream): void;
  deserialize(s: BitStream): void;
}
