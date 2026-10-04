import { describe, expect, test } from "bun:test";
import { DEATH_TRACK_CROSSED } from "@paperio/core/game/constants";
import { ProtocolError } from "../src/bit-stream";
import { DiedMsg, InputMsg, JoinedMsg, JoinMsg, Limits, MsgType, PROTOCOL_VERSION, UpdateMsg, decodeClientMessages, decodeServerMessages, encodeMessages } from "../src/messages";

const posStep = Limits.MaxPosition / (2 ** Limits.PositionBits - 1);
const pctStep = 1 / (2 ** Limits.PercentBits - 1);

describe("messages", () => {
  test("JoinMsg", () => {
    const msg = Object.assign(new JoinMsg(), { name: "golden", skin: "Ladybug" });
    const [decoded] = decodeClientMessages(encodeMessages(msg));
    expect(decoded).toBeInstanceOf(JoinMsg);
    expect(decoded).toEqual(Object.assign(new JoinMsg(), { protocolVersion: PROTOCOL_VERSION, name: "golden", skin: "Ladybug" }));
  });

  test("InputMsg", () => {
    const msg = Object.assign(new InputMsg(), { seq: 255, angle: 253 });
    expect(decodeClientMessages(encodeMessages(msg))).toEqual([msg]);
  });

  test("JoinedMsg", () => {
    const msg = Object.assign(new JoinedMsg(), { playerId: 65535, tickRate: 20, arenaSize: 2000 });
    expect(decodeServerMessages(encodeMessages(msg))).toEqual([msg]);
  });

  test("UpdateMsg: quantized positions/percent within half a step", () => {
    const msg = Object.assign(new UpdateMsg(), {
      tick: 4_000_000_000,
      units: [
        { id: 1, x: 1000.123, y: 33.3, percent: 0.0123, home: true },
        { id: 2, x: 0, y: 2000, percent: 1, home: false },
      ],
    });
    const [decoded] = decodeServerMessages(encodeMessages(msg));
    if (!(decoded instanceof UpdateMsg)) throw new Error("expected UpdateMsg");
    expect(decoded.tick).toBe(msg.tick);
    expect(decoded.units.length).toBe(2);
    decoded.units.forEach((unit, i) => {
      const sent = msg.units[i]!;
      expect([unit.id, unit.home]).toEqual([sent.id, sent.home]);
      expect(Math.abs(unit.x - sent.x)).toBeLessThanOrEqual(posStep / 2);
      expect(Math.abs(unit.y - sent.y)).toBeLessThanOrEqual(posStep / 2);
      expect(Math.abs(unit.percent - sent.percent)).toBeLessThanOrEqual(pctStep / 2);
    });
  });

  test("DiedMsg", () => {
    const msg = Object.assign(new DiedMsg(), { reason: DEATH_TRACK_CROSSED, killerId: 7, percent: 0.5, kills: 3 });
    const [decoded] = decodeServerMessages(encodeMessages(msg));
    expect(decoded).toBeInstanceOf(DiedMsg);
    expect(decoded).toMatchObject({ reason: DEATH_TRACK_CROSSED, killerId: 7, kills: 3 });
  });

  test("several messages in one frame, each byte-aligned", () => {
    const input = Object.assign(new InputMsg(), { seq: 1, angle: 10 });
    const frame = encodeMessages(new JoinMsg(), input, input);
    const decoded = decodeClientMessages(frame);
    expect(decoded.map(m => m.type)).toEqual([MsgType.Join, MsgType.Input, MsgType.Input]);
  });

  test("direction is enforced: clients cannot send server messages and vice versa", () => {
    expect(() => decodeClientMessages(encodeMessages(new UpdateMsg()))).toThrow(ProtocolError);
    expect(() => decodeServerMessages(encodeMessages(new InputMsg()))).toThrow(ProtocolError);
  });

  test("garbage is rejected with ProtocolError", () => {
    expect(() => decodeClientMessages(new Uint8Array([0]))).toThrow(ProtocolError); // MsgType.None
    expect(() => decodeClientMessages(new Uint8Array([99, 1, 2]))).toThrow(ProtocolError);
    expect(() => decodeClientMessages(new Uint8Array([MsgType.Input, 1]))).toThrow(ProtocolError); // truncated
    expect(() => decodeClientMessages(new Uint8Array([MsgType.Input, 1, 254]))).toThrow(ProtocolError); // bad angle
    expect(() => decodeServerMessages(new Uint8Array([MsgType.Died, 9, 0, 0, 0, 0, 0, 0]))).toThrow(ProtocolError);
    expect(decodeClientMessages(new Uint8Array([]))).toEqual([]);
  });
});
