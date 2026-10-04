// Test how the server maps client "move" messages onto tics.
// Hypothesis: each tic carries the most recent direction the server has received (last-writer-wins),
// using the server timestamp in the per-move ack ("now") as the receive time.
const f = await Bun.file(new URL("../ws-frames.json", import.meta.url)).json();
const PID = "c93rwBwyzG0ZRIWnAV4a";
const P = (s: string) => JSON.parse(s.slice(s.indexOf("[")))[1];
const msgs = f.messages.filter((x: any) => x.opcode === 1 && String(x.data).startsWith("42/"));
const sent = msgs.filter((x: any) => x.type === "send" && P(x.data).cmd === "move").map((x: any) => ({ ...P(x.data), cap: x.time * 1000 }));
const acks = msgs.filter((x: any) => x.type === "receive" && P(x.data).event === "move").map((x: any) => P(x.data));
const tics = msgs.filter((x: any) => x.type === "receive" && P(x.data).event === "moves").map((x: any) => ({ ...P(x.data), cap: x.time * 1000 }));
const ackNow = new Map(acks.map((a: any) => [a.time, a.now]));
const recv = sent.map((s: any) => ({ dir: s.direction, srvNow: ackNow.get(s.time)!, time: s.time }));
console.log("client clock vs capture clock (move.time - capture send):", Math.min(...sent.map((s: any) => s.time - s.cap)).toFixed(1), Math.max(...sent.map((s: any) => s.time - s.cap)).toFixed(1));
for (const strict of [true, false]) {
  let ok = 0, bad = 0, nodata = 0; const used = new Set<number>();
  for (const t of tics) {
    if (!(PID in t.directions)) continue;
    const cand = recv.filter((r: any) => (strict ? r.srvNow < t.now : r.srvNow <= t.now));
    if (!cand.length) { nodata++; continue; }
    const last = cand[cand.length - 1];
    used.add(last.time);
    if (last.dir === t.directions[PID]) ok++; else bad++;
  }
  console.log(strict ? "ack.now <  tic.now" : "ack.now <= tic.now", "match", ok, "mismatch", bad, "no-data", nodata, "moves never used", recv.length - used.size);
}
// Queue model: each tic consumes one queued move (FIFO) if available, else repeats last
{
  let q = 0, last: number | undefined, ok = 0, bad = 0;
  for (const t of tics) {
    if (!(PID in t.directions)) continue;
    // moves that arrived before this tic
    while (q < recv.length && recv[q].srvNow <= t.now && false) q++;
  }
}
// How many moves arrive per tic window (bunching on uplink)
const counts: Record<number, number> = {};
for (let i = 1; i < tics.length; i++) {
  const n = recv.filter((r: any) => r.srvNow > tics[i - 1].now && r.srvNow <= tics[i].now).length;
  counts[n] = (counts[n] ?? 0) + 1;
}
console.log("moves received by server per tic window:", counts);
// first player tic vs first move
console.log("first move srvNow", recv[0].srvNow, "first tic with player", tics.find((t: any) => PID in t.directions).tic, tics.find((t: any) => PID in t.directions).now);
console.log("join event now", 1791123416429, "init initialTicTime", 1791123416428);
