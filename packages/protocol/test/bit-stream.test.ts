import { describe, expect, test } from "bun:test";
import { BitStream, ProtocolError } from "../src/bit-stream";

const reread = (write: (s: BitStream) => void) => {
  const w = new BitStream(1); // tiny on purpose: exercises growth
  write(w);
  return new BitStream(w.toBytes().slice());
};

describe("BitStream", () => {
  test("bits of every width 1..32 round-trip, unaligned", () => {
    const values = Array.from({ length: 32 }, (_, i) => (2 ** (i + 1) - 1) - (i % 3)); // near max of each width
    const r = reread(s => values.forEach((v, i) => s.writeBits(v, i + 1)));
    values.forEach((v, i) => expect(r.readBits(i + 1)).toBe(v));
    expect(r.remainingBits).toBeLessThan(8);
  });

  test("u8/u16/u32 and booleans, mixed alignment", () => {
    const r = reread(s => {
      s.writeBoolean(true);
      s.writeUint8(255);
      s.writeUint16(0xbeef);
      s.writeBoolean(false);
      s.writeUint32(0xffffffff);
      s.writeUint32(0x80000001);
    });
    expect([r.readBoolean(), r.readUint8(), r.readUint16(), r.readBoolean(), r.readUint32(), r.readUint32()]).toEqual([true, 255, 0xbeef, false, 0xffffffff, 0x80000001]);
  });

  test("float32 is bit-exact", () => {
    const values = [0, -0, 1.5, -123.25, Math.PI, 3.4e38, Number.POSITIVE_INFINITY];
    const r = reread(s => {
      s.writeBits(1, 3); // misalign
      values.forEach(v => s.writeFloat32(v));
    });
    r.readBits(3);
    values.forEach(v => expect(r.readFloat32()).toBe(Math.fround(v)));
  });

  test("quantized float stays within half a step and clamps", () => {
    const [min, max, bits] = [-10, 2000, 12];
    const step = (max - min) / (2 ** bits - 1);
    const values = [-10, 0, 0.001, 999.999, 1234.5, 2000, -50, 5000];
    const r = reread(s => values.forEach(v => s.writeFloat(v, min, max, bits)));
    for (const v of values) {
      const clamped = Math.min(max, Math.max(min, v));
      expect(Math.abs(r.readFloat(min, max, bits) - clamped)).toBeLessThanOrEqual(step / 2 + 1e-9);
    }
  });

  test("ascii strings: terminator, exact max length, truncation, non-ascii", () => {
    const r = reread(s => {
      s.writeAsciiString("", 8);
      s.writeAsciiString("golden", 8);
      s.writeAsciiString("exactly8", 8);
      s.writeAsciiString("much too long", 8);
      s.writeAsciiString("Игрок é", 16);
      s.writeUint8(42);
    });
    expect(r.readAsciiString(8)).toBe("");
    expect(r.readAsciiString(8)).toBe("golden");
    expect(r.readAsciiString(8)).toBe("exactly8");
    expect(r.readAsciiString(8)).toBe("much too");
    expect(r.readAsciiString(16)).toBe("????? ?");
    expect(r.readUint8()).toBe(42);
  });

  test("arrays", () => {
    const items = [{ a: 1, b: true }, { a: 300, b: false }, { a: 65535, b: true }];
    const r = reread(s => s.writeArray(items, 5, item => {
      s.writeUint16(item.a);
      s.writeBoolean(item.b);
    }));
    expect(r.readArray(5, () => ({ a: r.readUint16(), b: r.readBoolean() }))).toEqual(items);
    expect(reread(s => s.writeArray([], 4, () => {})).readArray(4, () => 0)).toEqual([]);
  });

  test("align to byte", () => {
    const r = reread(s => {
      s.writeBits(5, 3);
      s.writeAlignToByte();
      s.writeUint8(9);
    });
    expect(r.readBits(3)).toBe(5);
    r.readAlignToByte();
    expect(r.index).toBe(8);
    expect(r.readUint8()).toBe(9);
  });

  test("errors: reading past the end, values that do not fit", () => {
    const r = new BitStream(new Uint8Array([1]));
    r.readBits(5);
    expect(() => r.readBits(4)).toThrow(ProtocolError);
    const w = new BitStream();
    expect(() => w.writeUint8(256)).toThrow(ProtocolError);
    expect(() => w.writeBits(-1, 4)).toThrow(ProtocolError);
    expect(() => w.writeBits(1.5, 4)).toThrow(ProtocolError);
    expect(() => w.writeArray([1, 2, 3, 4], 2, () => {})).toThrow(ProtocolError);
  });
});
