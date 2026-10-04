# Multiplayer ("party" / PvP) netcode analysis

Client: `original/pvp-final-31225.js` ("Version: A25-2025-12-03"). Line numbers (`L1234`) refer to
`deob/deobfuscated.js`. Data: `ws-frames.json` (one 38.9 s session, 2301 WebSocket frames) and the
HTTP calls in `../../paperio.site.multiplayer.har` (`api-calls.jsonl` holds only the last of them).
Scripts are in `probes/`.

## TL;DR
- **Deterministic lockstep with a relay server.** The server never simulates. It stamps inputs
  with tic numbers and broadcasts them. Every client runs the whole game: all bots, all humans, and
  every collision, capture and death.
- **Verified offline.** `probes/replay.ts` runs the unmodified bundle in headless Chromium and feeds
  it only the recorded server frames, through a fake socket.io with no network.
  - The local player dies at tic 1734 with reason 1, the same `death {tic:1734}` the real client sent.
  - All 13 area-leaderboard scores (and their `secret` hashes) match the HAR exactly.
  - The result is identical at 8× speed.
  - Changing one direction by one step at tic 1100 makes all 13 scores differ. Nothing detects or
    corrects the desync.
- **About 98% of the bytes are overhead.** The real information is about 1 byte per changed input
  per tic. The wire carries 72–111 B of socket.io/JSON per message, plus a 78 B ack for every input.
  The client uses those acks only for a debug ping readout.
- **No server authority.** Death is detected by the client. Leaderboard scores are reported by the
  client and "signed" with Java `String.hashCode`. Every client has full information. A name
  containing `dratest` unlocks admin hotkeys, including an autopilot bot.

## 1. Architecture
 ┌──────────────────────── browser (every participant) ───────────────────────────┐
 │ Controller.readInput() ─(setInterval 50ms, L9238/L9385)─► NetClient.sendMove     │
 │      (dir 0..239)                                  {cmd:"move",direction,time}  │──┐
 │ NetClient (L9550) ◄─ {event:"moves",tic,directions:{id:dir},now} ───────────────│◄─┤ socket.io v3, EIO=4
 │   │ binary snapshot ─► Recorder.deserialize (L9671) ─► warmup replay (L7666)     │  │ ns /game2, JSON text
 │   ▼                                                                             │  │ + 1 binary attachment
 │ Recorder (L7242): input log, per-player byte array of directions                │  │
 │   │ tryToCompleteMove (L7301) emits join/spawn/moves/death events in tic order  │  │
 │   ▼                                                                             │  │
 │ Game.update(50ms, directions) (L4640): fixed step, seeded LCG, all bots         │  │
 │   │ (runs synchronously when a tic arrives: no buffer, no prediction)           │  │
 │   ▼                                                                             │  │
 │ rAF render: extrapolateUnits(accumulatedTime ≤ 500ms) (L8850) ─► canvas         │  │
 │ local death detected in sim ─► {cmd:"death",tic} (L9325)                        │  │
 │ returnToBase / kill ─► POST /leaderboards addrecord (L6878)                     │  │
 └─────────────────────────────────────────────────────────────────────────────────┘  │
 ┌──────────────── psus.paperio.site (relay) ──────────────────────┐                  │
 │ room "pvpWithBots|p-ca1iomqk2f": seed, initialTic, msPerTic=50  │◄─────────────────┘
 │ every 50 ms: tic++, directions = {each live human: latest move} │
 │ ack every move {event:"move",time,now}; pong; death broadcast   │
 │ on join: binary Recorder snapshot (full input history)          │
 │ HTTP: ping/cpu (region pick), socket (game server), leaderboards│
 └─────────────────────────────────────────────────────────────────┘

### 1.1 Lockstep evidence
| Evidence | Where |
|---|---|
| `moves` only ever lists humans (`{}` for 41 tics, then only the human); bots never appear | ws-frames |
| Bots spawn and think inside `Game.update` using `createRng(seed)` | L4291, L4675-L4690 |
| Each `moves` event = exactly one `game.update(50, directions)` | L4318-L4325 |
| The server relayed the player for tics 1735–1736 after the client sim killed it at 1734, and broadcast `death` only 176 ms after the client's report. A simulating server would have known at 1734. | `probes/stats.ts` |
| Offline replay from seed + recorded directions is bit-exact | `probes/replay.ts` |

### 1.2 Tic → simulation step
1. **Server stamps tics** with each human's **most recent received direction** (last writer wins).
   - Tested against the per-move ack timestamps: 723/729 tics match; the 6 misses are
     same-millisecond ties (`probes/tic-assignment.ts`).
   - In 244/769 tic windows no new move arrived, and the server repeated the last direction.
   - 205/730 client moves (28%) were overwritten before any tic used them.
   - The client's `setMoves(force)` / `forceCompleteMove` / `deadline` (L7456-L7512) contain the
     same "fill with lastKnownMove" logic. The recorder code is probably shared with the server.
2. **Client handler** (L9587): applies optional debug lag, then `recorder.onEvent`.
3. **`Recorder.setMoves`** (L7456) → `tryToCompleteMove` (L7301) immediately emits join+spawn (when
   `firstTic == tic`), then moves.
4. **`Game.actions().moves`** (L4318) → `update(50, directions)`. The `Director` reads
   `game.directions[unit.id]` (L3467-L3474).

There is **no input delay buffer and no jitter buffer**. Bunched tics (10 in the capture) run
several steps in one frame. A late tic stalls the simulation. Both are safe because TCP keeps tics
in order.

### 1.3 Rendering / "prediction"
- `Paper.listen` (L9164) keeps an EMA (α = 0.1) of `arrival − tic·50`.
- `accumulatedTime` (L9173) = time since the expected arrival of the last tic, clamped to 0..500 ms.
- Every frame, `extrapolateUnits` (L8850) dead-reckons **all** units by `accumulatedTime` along their
  last simulated direction and lerps the drawn position toward it (`min(1, dt/50)`).
- **No own-unit prediction.** Only the facing arrow is nudged toward local input (L8855).
- Input-to-screen latency = RTT + 0–50 ms tic wait. Measured: move → own tic p50 209 ms; move→ack
  RTT p50 164 ms.
- The `extrapolation` option (default true, admin key E) is never read, so extrapolation is always on.

### 1.4 Gaps / reconnect / background
- **Missing tic:** `setMoves` jumps `lastCompleteTic` without simulating the skipped tic (L7464).
  That would desync silently. It can't happen over TCP (0 gaps in 770 tics).
- **Reconnect:** none (`reconnection:false`, L9456). A disconnect calls
  `killPlayerByServer("disconnect")`. `freezes` is never incremented.
- **Join / late join:**
  - The binary snapshot is 4-byte length + JSON `{initialTic, initialTicTime, lastCompleteTic, seed,
    players[{id,name,skin,firstTic,deathTic}], notes:{gameMode}, msPerTic}`, then one raw
    `Uint8Array` of directions per player (0xFF = none) (`serialize(true)`, L7360).
  - The client replays **every tic from 0** (`toEventLog`, L7320; warmup L7666).
  - This room was new: `initialTic 1000` (= `warmupTics` in modes.json), no players, so 1001
    bot-only tics, about 170 ms in headless Chromium. The player spawned at tic 1008.
  - Snapshot size and join CPU grow linearly with room age and with every player who ever joined.
- **Background tab:**
  - Throttled `setInterval` means few moves; the server repeats the last direction. Lockstep stays
    correct.
  - The **death report waits for an animation frame** (L9311), so it is delayed until the tab is
    visible.
  - Render extrapolation stops (see §2.3).

## 2. Determinism
- **RNG:**
  - The seed is a float (`0.0077794644373809785`). `createRng` (L1702) turns it into
    `floor(seed·1e9)`, then runs `s=(s·69069+1) mod 2^31` (same LCG as classic). This is exact in
    doubles (`< 1.5e14 < 2^53`).
  - Name and skin managers are seeded from the same room seed. Each bot's AI uses `rng(-1)` (L4452).
    Each human's autopilot uses `createRng(rng(-1))` (L4509).
  - `Math.random` appears only in particles (L2925-L3019).
- **Fixed step:** always `update(50)`. Directions are integers 0..239 (L1347, `toDirection` L1500;
  observed 0–239). Turn limit: `fullTurnsPerSecond 1` = 12 units per tic (L3749).
- **Hazards** (no desync check exists, so none were detected at runtime):
  1. **The render path changes game state.**
     - `extrapolateAt` (L3699) calls `nextSteps` (L3786).
     - `nextSteps` writes `realSpeedRatio` (L3794) and can **kill** units pinned against the border
       ("squashed", reason 10, L3800).
     - This runs every animation frame with a wall-clock `accumulatedTime`, so it depends on frame
       rate. Hidden tabs run none of it.
     - The simulation's own `nextSteps` reads other units' `realSpeedRatio`, which may have been
       written by the last render frame.
  2. **`Math.cos/sin`** in `fromDirection` (L1506) is not guaranteed bit-identical across JS
     engines. Only 240 inputs exist, so a precomputed table would fix it. (The `Math.sin(tic*10)` at
     L4522 is in the unused `adjustForBorder`; the live path is `adjustForBorderNewer`.)
  3. **Cosmetic:** `emojiOfTheDay` is registered only on non-Safari browsers (L1353, L5593), and the
     local player reserves its own skin, so bot skins/emoji can differ between clients. The skin
     RNG is separate, so the simulation is unaffected.
  4. **No state hashing anywhere.** The perturbation test shows divergence is silent.

## 3. Server role / trust
| Concern | Decided by | Notes |
|---|---|---|
| 20 Hz tic clock | server | `now` jitter between tics: p50 50, p99 61 ms; at most 20 ms behind schedule |
| Input → tic mapping | server | last writer wins; the client can't choose a tic (`nextMoveToSend` L9594 is unused) |
| Movement, collisions, captures, kills | each client | |
| Own death | client reports `{cmd:"death",tic}` | server stops relaying and broadcasts `{event:"death",id}`; receivers set `deathTic = firstTic+len−1` (L7282), not the client's tic |
| Disconnect / kick | server | `leave`/`error`/`disconnect` → `killPlayerByServer` (L9613-L9640) |
| Leaderboards | client | §3.2 |
| Achievements / skin unlocks / stars | client `localStorage` | not server-backed |

Server-side direction validation is unknown. The client only logs and hits a `debugger` on values
≥240 (L4645).

**Rooms:**
- The query string `?p-ca1iomqk2f` = mode prefix `p` (pvpWithBots) + `-ca1` (server name) +
  shortName (random if empty). No query string → `defaultInvitePrefix "newparty"` (L7085-L7118).
- On the wire the room is `pvpWithBots|p-ca1iomqk2f` (`useModePrefix`, L6780). A party is just
  "share the URL".
- Sanitisation bug: the `replace()` result is discarded (L6677).

**Modes:** `modeConfig` merges defaults + pvp.json + modes.json.

| Mode | Bots | Arena | Notes |
|---|---|---|---|
| pvpWithBots | 8 (8 at tic 1; only 5 placed here, after 1600 attempts) | 2000 | `warmupTics` 1000 |
| pvpNoBots | 0 | 1000 | |
| pvpMegaField | — | 3000 | |
| pvpSmall | — | — | |
| ffa | — | — | |

**Region pick** (L6714):
- 5× HTTP `ping` + `cpu` per public server.
- Every 1.5 s, check whether all 5 pongs are back; if so, take the mean RTT.
- Score = RTT + `max(0, cpu−30)·5`; pick the lowest.
- Then `{cmd:"socket",room}` → game server URI (L6796).
- servers.json has only `ca1` + `master`, both psus.paperio.site.

### 3.2 HTTP API (HAR)
| POST body | Response | Purpose |
|---|---|---|
| `/` `{cmd:"ping",time}` ×5 | `{now,time,event:"pong"}` | region RTT |
| `/` `{cmd:"cpu"}` | `17.61` | load penalty |
| `/` `{cmd:"socket",room}` | `{uri:".../game2"}` | room → game server |
| `/leaderboards` `[{cmd:"top"|"score"|"place",category,…}]` | `[[[name,score]],score,place,…]` | daily boards `<room>:kills:daily`, `<room>:area:daily` |
| `/leaderboards` `[{cmd:"addrecord",player,type,score,category,secret}]` | `[1]`/`[0]` | personal best (13× this session) |
| `/` `{cmd:"save",reason,serverName,playerId,ping,freezes,duration}` | `{}` | post-game debrief/analytics (L9359) |

`secret = javaHashCode(category+"secret"+player+"salt"+score)` (L6881, L1921). Recomputed
1092674830 = HAR. Anyone can forge it.

## 4. Clock sync
- **Pings:** `{cmd:"ping",time}` every 100 ms for **30 pings only**, then never (L9681).
  - The first 10 were queued before connect and flushed as a burst, so their RTT is inflated by up
    to 800 ms.
- **Acks:** every `move` is acked `{time,now}` and handled as a pong (L9601). That is about 20
  samples/s.
- **Estimators:** EMAs over 30 samples (L9564-L9580): `offset = now − (time+recv)/2` (≈ +200 ms
  here) and ping (p50 164 ms).
- **Used by:** only the admin info panel and the debrief `ping`. `currentTic()` / `ticTime()` /
  `accumulatedTime()` on NetClient (L9697-L9708) are dead code; the renderer has its own
  arrival-time EMA.
- **Unused fields:** `now` in `moves` (handler passes `.time`, which is undefined, L7238), and the
  `now` in join/death.
- **Engine.io heartbeat:** every 25 s.

## 5. Bandwidth
### 5.1 Message catalogue (measured)
| Dir | Message | Rate | Avg B | Share |
|---|---|---|---|---|
| ↑ | `42/game2,["message",{cmd:"move",direction,time}]` | 20/s (client timer, not tic-aligned) | 71.5 | 96.6% ↑ |
| ↑ | `ping {time}` | 30 total | 56 | 3.1% |
| ↑ | `join {name,skin?,room}` / `death {tic}` | once | 79 / 47 | |
| ↓ | `moves {tic,directions:{20-char id:dir},now}` | 20/s | 85 empty / 110.5 with 1 human | 58.4% ↓ |
| ↓ | `move` ack `{time,now}` | 20/s | 78 | 39.5% |
| ↓ | `pong` | 30 total | 78 | 1.6% |
| ↓ | binary snapshot (`451-` placeholder 52 B + 269 B) | once | 321 | |
| ↓ | `join {id,name,now}` / `death {id,now}` | per event | 95 / 86 | |
| ↕ | engine.io `0`, `40`, `2`/`3` | handshake / 25 s | 1–107 | |

**Totals:** ↑ 1.39 KB/s (1.51 with WS headers); ↓ 3.70 KB/s (3.78 with WS headers). With
TLS+TCP (~75–80 B per packet, about 40↓ + 20↑ packets/s): about 7 KB/s down and 3 KB/s up.

### 5.2 Waste
Anatomy of one `moves` frame (111 B):

| Bytes | Content |
|---|---|
| 9 | `42/game2,` |
| 11 | `["message",` |
| 17 | `{"event":"moves",` |
| 11 | `"tic":N,` |
| 14 | `"directions":{` |
| 26 | `"<20-char id>":199` (≈1 useful byte) |
| 20 | `},"now":…` (unused) |
| 2 | `}]` |

| Waste | Size |
|---|---|
| Acks (debug only; double the ↓ packet rate) | 39.5% of ↓ |
| Unused `now` | 10.7% of ↓ |
| Unchanged ↑ moves | 44% of ↑ moves |
| ↑ moves overwritten before use | 28% of ↑ moves |

### 5.3 Scaling (current protocol)
↓ per client ≈ `20·(87+27N) + 20·80` B/s.

| Humans | ↓ per client | Server egress |
|---|---|---|
| 1 | 3.8 KB/s | 3.8 KB/s |
| 10 | 8.8 KB/s | 88 KB/s |

↑ stays 1.5 KB/s per client.

### 5.4 Doing it better (still lockstep)
Use a raw binary WebSocket (Bun) and give each player a 1-byte slot at join.

| Message | Format |
|---|---|
| ↓ tic | `[u8 n] + n×[u8 slot, u8 dir]`, tic implicit by order, absolute u32 every 64 tics |
| ↑ input | only on change, quantised to tics: `[u8 dir]` |
| ack | none: the tic stream is the ack |
| clock | 1 ping every 5 s |

Assumes a 43% change rate (measured):

| | Current | Binary | Factor |
|---|---|---|---|
| ↓ per client, N=1 | 3.8 KB/s | 20·(1+0.86+2) ≈ **77 B/s** | ~49× |
| ↓ per client, N=10 | 8.8 KB/s | 20·(1+8.6+2) ≈ **232 B/s** | ~38× |
| ↑ per client | 1.5 KB/s | ≈ **60 B/s** (max 140) | ~25× |
| Server egress, 10 humans | 88 KB/s | **2.3 KB/s** | ~38× |
| ↓ packets/s | 40 | 20 (10 if batching 2 tics) | |

Headers then dominate, so the next lever is 2 tics per packet at 10 Hz (+50 ms delay).
Compression won't help payloads this small.

Beyond bytes:
1. Tag inputs with a target tic, use a fixed 2-tic input delay, and play out on a smoothed clock (the
   `currentTic` / `zeroTicTimeEstimate` code already exists). This removes the
   client-timer-vs-server-tic aliasing.
2. Predict the local unit and correct when the tic arrives, or use GGPO-style rollback with snapshots.
3. Make render extrapolation pure (no `realSpeedRatio` writes or kills).
4. Use a 240-entry cos/sin table and fixed-point positions.
5. Send a 4-byte state hash every 100 tics for desync detection.
6. Use checkpoints for late join, possibly from a headless Bun simulation, which would also allow
   server-verified deaths and scores.

### 5.5 Typical .io approach
Agar.io, slither.io and Paper.io 1 style games are usually server-authoritative: inputs go up,
binary interest-managed snapshots and deltas come down, and clients interpolate. That costs server
CPU (territory clipping) but resists cheating, hides off-screen information and makes late join
cheap.

This design instead gives near-zero server CPU (bots are free), but it is fragile, offers full
information, relies on client-reported outcomes, and has unpredicted RTT input lag. That is fine
for friend parties but weak for public rooms.

## 6. Security (analysis only)
| Vector | Feasible? | Why |
|---|---|---|
| Speed hack / teleport / faster turning | No | peers derive movement from the direction byte and config |
| Immortality / fake death | Local only | peers' sims kill you regardless |
| Full map / wallhack | Yes | the whole arena is simulated on every client |
| Perfect bot prediction | Yes | bots are deterministic from the seed |
| Autoplay | **Built in** | a name with `dratest` (L1919) unlocks admin keys (L9919-L9970) |
| Leaderboard forgery | Yes | hashCode "secret" |
| Malformed direction | Unknown | if relayed unchecked it could break every peer (NaN), i.e. grief the room; needs server clamping |
| Anti-tamper | None | obfuscator.io only; no domain lock in this build; unlocks/stars in localStorage |

Admin keys unlocked by `dratest`:
- **Shift+A: autopilot.** The "assassin" bot AI plays for you (L9393). `dratest` is stripped from
  the displayed name (L10217).
- **Shift+1–4: stepping.** Shift+4 sends up to 100 moves per 50 ms (L9389).
- **Space:** pause.
- **L:** lag simulation.
- **N:** kills all other units locally only.
- **K:** suicide.
- **S:** save replay.

## 7. Relation to classic `src/`
Same engine family. The PvP engine changes:

| Aspect | Classic `src/` | PvP engine |
|---|---|---|
| `update` | `update(dt?)`, variable step with `Math.random` (`src/game/game.ts:1630`) | `update(ms, directions)`, fixed 50 ms |
| Tick rate | 60 Hz | 20 Hz |
| Directions | 254-step angle byte (`game.ts:871`) | 240 steps |
| Humans | one `this.player` | multiple units with id-keyed `Director` |
| Spawn / kill | — | `spawnPlayer(id)` via `game.rng`, `killById` |
| Death reasons | — | adds reason 10 |
| Bot spawning | — | `botsSpawnImmediately`, `initialBot{Min,Max}BaseSize` |

Other notes:
- **Replay system:** `Recorder` + `LocalServer` (L7579) with `startGame({recorder})`. This is the
  grown-up version of classic `recording`/`replaying`.
- **Bugs spotted:**
  - `setMove` dereferences an unknown player (L7438).
  - `freezes`, `nextMoveToSend`, `currentTic` and the `extrapolation` option are unused.
  - The kill score is overwritten instead of added (L4023), same as classic bug #1.

**Needed in `src/` for netplay:**
1. A deterministic fixed-step core. Remove `Math.random`/`now()` from the step path (and the
   domain-lock `moveTo` dependency). Use integer direction bytes.
2. Multi-human units by id; spawn/kill events at tics.
3. A Recorder input log (extend `GameRecording`/`GameReplay`).
4. Rendering kept apart from the simulation.
5. A DOM-free engine for headless Bun.
6. A `Bun.serve` WebSocket relay at 20 Hz with the binary format from §5.4.

## Probes
| File | What it does |
|---|---|
| `decode-init.ts` | decodes the binary snapshot → `init.json` |
| `stats.ts` | catalogue, rates, sizes, RTT/offset, latency, redundancy |
| `tic-assignment.ts` | input→tic model (last writer wins, 723/729) |
| `replay-server.ts`, `replay.html`, `fake-io.js` | offline harness on 127.0.0.1; fake psus API, fake `io()` replaying recorded frames |
| `replay.ts [speed] [perturbTic]` | headless driver; aborts any non-127.0.0.1 request (0 attempted). Result: 13/13 exact at 1× and 8×; 0/13 with one perturbed direction |
