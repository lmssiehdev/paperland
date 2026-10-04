/** Thrown when a read runs past the end of the data or a value cannot be encoded. */
export class ProtocolError extends Error {
  override name = "ProtocolError";
}

const scratch = new DataView(new ArrayBuffer(4));

/**
 * Bit-level reader/writer over a byte buffer (pattern from survev's bitBuffer/BitStream, own code).
 * Bits are packed least-significant first within each byte. Writing grows the buffer as needed;
 * reading past the written/received length throws a ProtocolError.
 */
export class BitStream {
  private bytes: Uint8Array;
  /** Bits available to read (received data) or written so far. */
  private lengthBits: number;
  /** Current read/write position in bits. */
  index = 0;

  /** Pass bytes to read them, or a capacity in bytes (default 64) to write. */
  constructor(source: Uint8Array | ArrayBuffer | number = 64) {
    if (typeof source === "number") {
      this.bytes = new Uint8Array(Math.max(1, source));
      this.lengthBits = 0;
    } else {
      this.bytes = source instanceof Uint8Array ? source : new Uint8Array(source);
      this.lengthBits = this.bytes.length * 8;
    }
  }

  /** Whole bytes covering everything written (or received). */
  get byteLength(): number {
    return Math.ceil(this.lengthBits / 8);
  }

  /** Bits left to read. */
  get remainingBits(): number {
    return this.lengthBits - this.index;
  }

  /** The written bytes (a view, not a copy). */
  toBytes(): Uint8Array {
    return this.bytes.subarray(0, this.byteLength);
  }

  private ensureCapacity(bits: number): void {
    const needed = Math.ceil((this.index + bits) / 8);
    if (needed <= this.bytes.length) {
      return;
    }
    let size = this.bytes.length * 2;
    while (size < needed) {
      size *= 2;
    }
    const grown = new Uint8Array(size);
    grown.set(this.bytes);
    this.bytes = grown;
  }

  /** Writes the low `bits` (1..32) bits of `value` as an unsigned integer. */
  writeBits(value: number, bits: number): void {
    if (!(bits >= 1 && bits <= 32)) {
      throw new ProtocolError(`writeBits: bit count ${bits} out of range 1..32`);
    }
    if (!Number.isInteger(value) || value < 0 || value >= 2 ** bits) {
      throw new ProtocolError(`writeBits: ${value} is not an unsigned ${bits}-bit integer`);
    }
    this.ensureCapacity(bits);
    let v = value >>> 0;
    let written = 0;
    while (written < bits) {
      const bitOffset = this.index & 7;
      const count = Math.min(bits - written, 8 - bitOffset);
      const mask = (1 << count) - 1;
      const byteIndex = this.index >> 3;
      this.bytes[byteIndex] = (this.bytes[byteIndex]! & ~(mask << bitOffset)) | ((v & mask) << bitOffset);
      v >>>= count;
      written += count;
      this.index += count;
    }
    if (this.index > this.lengthBits) {
      this.lengthBits = this.index;
    }
  }

  /** Reads `bits` (1..32) bits as an unsigned integer. */
  readBits(bits: number): number {
    if (!(bits >= 1 && bits <= 32)) {
      throw new ProtocolError(`readBits: bit count ${bits} out of range 1..32`);
    }
    if (bits > this.remainingBits) {
      throw new ProtocolError(`readBits: need ${bits} bit(s) at ${this.index}, ${this.remainingBits} left`);
    }
    let value = 0;
    let read = 0;
    while (read < bits) {
      const bitOffset = this.index & 7;
      const count = Math.min(bits - read, 8 - bitOffset);
      const mask = (1 << count) - 1;
      const chunk = (this.bytes[this.index >> 3]! >> bitOffset) & mask;
      value += chunk * 2 ** read; // not `<<`: bit 31 would make it negative
      read += count;
      this.index += count;
    }
    return value;
  }

  writeBoolean(value: boolean): void {
    this.writeBits(value ? 1 : 0, 1);
  }

  readBoolean(): boolean {
    return this.readBits(1) === 1;
  }

  writeUint8(value: number): void {
    this.writeBits(value, 8);
  }

  readUint8(): number {
    return this.readBits(8);
  }

  writeUint16(value: number): void {
    this.writeBits(value, 16);
  }

  readUint16(): number {
    return this.readBits(16);
  }

  writeUint32(value: number): void {
    this.writeBits(value, 32);
  }

  readUint32(): number {
    return this.readBits(32);
  }

  writeFloat32(value: number): void {
    scratch.setFloat32(0, value, true);
    this.writeBits(scratch.getUint32(0, true), 32);
  }

  readFloat32(): number {
    scratch.setUint32(0, this.readBits(32), true);
    return scratch.getFloat32(0, true);
  }

  /** Quantizes `value` (clamped to [min, max]) to `bits` (1..30) bits. Error is at most (max - min) / (2^bits - 1) / 2. */
  writeFloat(value: number, min: number, max: number, bits: number): void {
    if (!(bits >= 1 && bits <= 30)) {
      throw new ProtocolError(`writeFloat: bit count ${bits} out of range 1..30`);
    }
    const range = 2 ** bits - 1;
    const clamped = value < min ? min : value > max ? max : value;
    this.writeBits(Math.floor(((clamped - min) / (max - min)) * range + 0.5), bits);
  }

  readFloat(min: number, max: number, bits: number): number {
    const range = 2 ** bits - 1;
    return min + (this.readBits(bits) / range) * (max - min);
  }

  /**
   * Writes up to `maxLength` characters, one byte each, terminated by a 0 byte unless exactly
   * `maxLength` long. Characters outside printable ASCII become "?". Longer strings are truncated.
   */
  writeAsciiString(text: string, maxLength: number): void {
    const length = Math.min(text.length, maxLength);
    for (let i = 0; i < length; i++) {
      const code = text.charCodeAt(i);
      this.writeUint8(code >= 32 && code < 127 ? code : 63);
    }
    if (length < maxLength) {
      this.writeUint8(0);
    }
  }

  readAsciiString(maxLength: number): string {
    let text = "";
    for (let i = 0; i < maxLength; i++) {
      const code = this.readUint8();
      if (code === 0) {
        break;
      }
      text += String.fromCharCode(code);
    }
    return text;
  }

  /** Writes the length in `lengthBits` bits, then each item. Throws if the array does not fit. */
  writeArray<T>(items: readonly T[], lengthBits: number, writeItem: (item: T, index: number) => void): void {
    const max = 2 ** lengthBits - 1;
    if (items.length > max) {
      throw new ProtocolError(`writeArray: ${items.length} items, at most ${max} fit in ${lengthBits} bits`);
    }
    this.writeBits(items.length, lengthBits);
    items.forEach(writeItem);
  }

  readArray<T>(lengthBits: number, readItem: (index: number) => T): T[] {
    const length = this.readBits(lengthBits);
    const items: T[] = [];
    for (let i = 0; i < length; i++) {
      items.push(readItem(i));
    }
    return items;
  }

  /** Pads with zero bits up to the next byte boundary. */
  writeAlignToByte(): void {
    const pad = (8 - (this.index & 7)) & 7;
    if (pad) {
      this.writeBits(0, pad);
    }
  }

  readAlignToByte(): void {
    const pad = (8 - (this.index & 7)) & 7;
    if (pad) {
      this.readBits(pad);
    }
  }
}
