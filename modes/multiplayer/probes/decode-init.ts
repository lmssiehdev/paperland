// Decode the socket.io binary attachment (recorder snapshot) from ws-frames.json.
const f = await Bun.file(new URL("../ws-frames.json", import.meta.url)).json();
const bin = f.messages.find((m: any) => m.opcode === 2);
const buf = Buffer.from(bin.data, "base64");
console.log("binary frame bytes:", buf.length);
const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
const chunks: Uint8Array[] = [];
for (let o = 0; o < buf.length; ) {
  const len = dv.getInt32(o);
  chunks.push(buf.subarray(o + 4, o + 4 + len));
  o += 4 + len;
}
const json = JSON.parse(new TextDecoder().decode(chunks[0]));
console.log(JSON.stringify(json, null, 1));
console.log("direction chunks:", chunks.slice(1).map((c) => c.length));
await Bun.write(new URL("./init.json", import.meta.url), JSON.stringify(json, null, 2));
