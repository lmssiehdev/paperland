// Offline statistics over the recorded session (modes/multiplayer/ws-frames.json).
const f = await Bun.file(new URL("../ws-frames.json", import.meta.url)).json();
const m: any[] = f.messages;
const PID = "c93rwBwyzG0ZRIWnAV4a";
type Row = { type: string; t: number; kind: string; bytes: number; payload?: any; raw: string };
const rows: Row[] = m.map((x) => {
  const raw = String(x.data);
  let kind = "eio:" + raw.slice(0, 2);
  let payload: any;
  if (x.opcode === 2) kind = "binary-attachment";
  else if (raw.startsWith("42/game2,") || raw.startsWith("451-/game2,")) {
    payload = JSON.parse(raw.slice(raw.indexOf("[")))[1];
    kind = payload.cmd ?? payload.event ?? (payload._placeholder ? "init-placeholder" : "?");
  }
  const bytes = x.opcode === 2 ? Buffer.from(raw, "base64").length : Buffer.byteLength(raw);
  return { type: x.type, t: x.time * 1000, kind, bytes, payload, raw };
});
const t0 = rows[0].t, t1 = rows[rows.length - 1].t;
const dur = (t1 - t0) / 1000;
console.log("duration s", dur.toFixed(2), "frames", rows.length);
const agg: Record<string, { n: number; b: number; first: number; last: number }> = {};
for (const r of rows) {
  const k = r.type + " " + r.kind;
  agg[k] ??= { n: 0, b: 0, first: r.t, last: r.t };
  agg[k].n++; agg[k].b += r.bytes; agg[k].last = r.t;
}
let up = 0, down = 0;
for (const [k, v] of Object.entries(agg).sort((a, b) => b[1].b - a[1].b)) {
  const span = (v.last - v.first) / 1000;
  console.log(k.padEnd(30), "n", String(v.n).padStart(5), "bytes", String(v.b).padStart(7), "avg", (v.b / v.n).toFixed(1).padStart(6), "rate/s", span > 0 ? (v.n / span).toFixed(2) : "-");
  if (k.startsWith("send")) up += v.b; else down += v.b;
}
console.log("payload up", up, "B =", (up / dur).toFixed(0), "B/s; down", down, "B =", (down / dur).toFixed(0), "B/s");
// add websocket framing: client->server masked: 2+4 bytes (+2 if >125), server->client 2 (+2 if >125)
const wsOver = (r: Row) => (r.type === "send" ? 6 : 2) + (r.bytes > 125 ? 2 : 0);
const upW = rows.filter((r) => r.type === "send").reduce((s, r) => s + r.bytes + wsOver(r), 0);
const downW = rows.filter((r) => r.type === "receive").reduce((s, r) => s + r.bytes + wsOver(r), 0);
console.log("with WS framing: up", (upW / dur).toFixed(0), "B/s, down", (downW / dur).toFixed(0), "B/s");

// pings
const pings = rows.filter((r) => r.kind === "ping" && r.type === "send");
console.log("pings", pings.length, "client times", pings.map((p) => p.payload.time - pings[0].payload.time).join(","));

// moves analysis
const moves = rows.filter((r) => r.kind === "moves");
const tics = moves.map((r) => r.payload.tic);
let gaps = 0; for (let i = 1; i < tics.length; i++) if (tics[i] !== tics[i - 1] + 1) gaps++;
console.log("moves tics", tics[0], "..", tics[tics.length - 1], "count", tics.length, "gaps", gaps);
const nows = moves.map((r) => r.payload.now);
const dn = nows.slice(1).map((v, i) => v - nows[i]);
const arr = moves.map((r) => r.t);
const da = arr.slice(1).map((v, i) => v - arr[i]);
const st = (a: number[]) => { const s = [...a].sort((x, y) => x - y); const mean = a.reduce((p, c) => p + c, 0) / a.length; return `mean ${mean.toFixed(1)} min ${s[0].toFixed(0)} p50 ${s[s.length >> 1].toFixed(0)} p95 ${s[Math.floor(s.length * .95)].toFixed(0)} p99 ${s[Math.floor(s.length * .99)].toFixed(0)} max ${s[s.length - 1].toFixed(0)}`; };
console.log("server now delta between tics:", st(dn));
console.log("client arrival delta between tics:", st(da));
// server tic schedule vs initialTicTime: now - (initialTicTime + (tic-1000)*50)
const init = 1791123416428;
const drift = moves.map((r) => r.payload.now - (init + (r.payload.tic - 1000) * 50));
console.log("server now - ideal tic time:", st(drift));
// bunching: arrivals within 10ms of previous
console.log("bunched arrivals (<10ms apart):", da.filter((d) => d < 10).length, " late (>100ms):", da.filter((d) => d > 100).length);
// player presence
const withP = moves.filter((r) => PID in r.payload.directions);
console.log("tics with player:", withP.length, "first", withP[0]?.payload.tic, "last", withP[withP.length - 1]?.payload.tic);
const others = new Set<string>(); moves.forEach((r) => Object.keys(r.payload.directions).forEach((k) => k !== PID && others.add(k)));
console.log("other ids in directions:", [...others]);
// direction values range and changes
const dirs = withP.map((r) => r.payload.directions[PID]);
let ch = 0; for (let i = 1; i < dirs.length; i++) if (dirs[i] !== dirs[i - 1]) ch++;
console.log("dir min/max", Math.min(...dirs), Math.max(...dirs), "changes", ch, "of", dirs.length);

// sent moves -> which tic did they land in? match each sent move with ack (by time) and with tic carrying that dir
const sent = rows.filter((r) => r.kind === "move" && r.type === "send");
const acks = rows.filter((r) => r.kind === "move" && r.type === "receive");
console.log("sent moves", sent.length, "acks", acks.length);
const sd = sent.map((r) => r.payload.direction);
let sch = 0; for (let i = 1; i < sd.length; i++) if (sd[i] !== sd[i - 1]) sch++;
console.log("sent move dir changes", sch, "of", sent.length);
const sdt = sent.map((r) => r.payload.time); const sdd = sdt.slice(1).map((v, i) => v - sdt[i]);
console.log("client move send interval:", st(sdd));
// ack RTT: capture recv time of ack - capture send time of move with same time
const sentByTime = new Map(sent.map((r) => [r.payload.time, r]));
const rtt = acks.map((a) => a.t - (sentByTime.get(a.payload.time)?.t ?? NaN)).filter((x) => !isNaN(x));
console.log("move->ack RTT (capture clock):", st(rtt));
// clock offset estimate as the client does: now - (time + recvClient)/2 ; we use capture clock as client clock
const off = acks.map((a) => a.payload.now - (a.payload.time + a.t) / 2);
console.log("server-client offset estimate:", st(off));
// does tic direction sequence equal sent move sequence (no drops/dups)?
// Each sent move should produce exactly one tic. Compare counts and sequences.
console.log("sent moves while alive (before death):", sent.filter((r) => r.t < rows.find((x) => x.kind === "death" && x.type === "send")!.t).length);
// align: find tic arrival for k-th player tic vs k-th sent move
const lat: number[] = []; const ackLat: number[] = [];
let mism = 0;
for (let k = 0; k < Math.min(sent.length, withP.length); k++) {
  if (sent[k].payload.direction !== withP[k].payload.directions[PID]) mism++;
  lat.push(withP[k].t - sent[k].t);
}
console.log("k-th sent move vs k-th player tic: dir mismatches", mism, "/", Math.min(sent.length, withP.length));
console.log("input->own tic arrival latency (k-th alignment):", st(lat));
// Server 'now' of tic vs move.time (client clock) -> how long server held input
const hold = []; for (let k = 0; k < Math.min(sent.length, withP.length); k++) hold.push(withP[k].payload.now - acks[k]?.payload.now);
console.log("tic now - ack now (server hold time, ms):", st(hold.filter((x) => !isNaN(x))));
// death
const dSend = rows.find((r) => r.kind === "death" && r.type === "send")!;
const dRecv = rows.find((r) => r.kind === "death" && r.type === "receive")!;
const lastP = withP[withP.length - 1];
console.log("client death tic", dSend.payload.tic, "at", (dSend.t - t0).toFixed(0), "ms; server death echo", (dRecv.t - dSend.t).toFixed(0), "ms later; last tic carrying player", lastP.payload.tic);
const moveAfterDeath = sent.filter((r) => r.t > dSend.t).length;
console.log("moves sent after death:", moveAfterDeath);
// per-tic frame size breakdown
const emptyMoves = moves.filter((r) => Object.keys(r.payload.directions).length === 0);
const fullMoves = moves.filter((r) => Object.keys(r.payload.directions).length === 1);
const avg = (a: Row[]) => (a.reduce((s, r) => s + r.bytes, 0) / a.length).toFixed(1);
console.log("moves frame avg bytes: empty", avg(emptyMoves), "n", emptyMoves.length, "; with player", avg(fullMoves), "n", fullMoves.length);
console.log("sample moves:", fullMoves[5].raw, Buffer.byteLength(fullMoves[5].raw));
console.log("sample move:", sent[5].raw, Buffer.byteLength(sent[5].raw));
console.log("sample ack:", acks[5].raw, Buffer.byteLength(acks[5].raw));
