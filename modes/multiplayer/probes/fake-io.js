// Fake socket.io client: replays the receive side of ws-frames.json with the recorded timing.
// No network: every "server" message comes from the capture. Sends are logged to window.__sent.
(function () {
  window.__sent = [];
  window.__log = [];
  const HP = new URLSearchParams(location.hash.slice(1));
  const SPEED = Number(HP.get("speed") || 1);
  // Optional desync experiment: change the local player's direction by +1 (1.5 deg) at one tic.
  const PERTURB = HP.get("perturb") ? Number(HP.get("perturb")) : null;
  window.io = function fakeIo(url, opts) {
    const handlers = {};
    const sock = {
      id: undefined,
      on(ev, cb) { (handlers[ev] ??= []).push(cb); return sock; },
      emit(ev, ...a) { (handlers[ev] || []).forEach((h) => h(...a)); },
      send(obj) {
        window.__sent.push({ t: performance.now(), obj });
        if (obj.cmd === "join") start();
      },
      disconnect() { window.__log.push("disconnect called"); },
    };
    let started = false;
    async function start() {
      if (started) return; started = true;
      const f = await (await fetch("/frames.json")).json();
      const msgs = f.messages;
      const joinIdx = msgs.findIndex((m) => m.type === "send" && String(m.data).includes('"cmd":"join"'));
      const t0 = msgs[joinIdx].time;
      const wall0 = performance.now();
      for (let i = joinIdx + 1; i < msgs.length; i++) {
        const m = msgs[i];
        if (m.type !== "receive") continue;
        const raw = String(m.data);
        let payload;
        if (m.opcode === 2) {
          const bin = Uint8Array.from(atob(raw), (c) => c.charCodeAt(0));
          payload = bin.buffer;
        } else if (raw.startsWith("42/game2,")) {
          payload = JSON.parse(raw.slice(raw.indexOf("[")))[1];
          if (PERTURB != null && payload.event === "moves" && payload.tic === PERTURB) {
            for (const k in payload.directions) payload.directions[k] = (payload.directions[k] + 1) % 240;
          }
        } else continue; // placeholder header / engine.io ping
        const due = wall0 + ((m.time - t0) * 1000) / SPEED;
        const wait = due - performance.now();
        if (wait > 1) await new Promise((r) => setTimeout(r, wait));
        sock.emit("message", payload);
      }
      window.__log.push("replay finished");
      window.__replayDone = true;
    }
    setTimeout(() => { sock.id = "c93rwBwyzG0ZRIWnAV4a"; sock.emit("connect"); }, 50);
    return sock;
  };
})();
