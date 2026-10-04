# paperio

Reverse-engineering of the Paper.io 2 clone at paperio.site.

## Quick start

```sh
bun install
bun run build            # packages/client -> packages/client/dist/app2.js
bun run serve            # Elysia server on :3000 (PORT=3100 bun run serve for another port)
bun run dev              # build once, then serve with --watch on the server
bun run typecheck        # every package, 0 errors
bun test                 # unit tests of every package (+ the Chromium headless golden, needs Playwright)
bun run smoke            # headless boot + start round + units move + screenshots in shots/
bun run autopilot 5 180  # 5 trials x 180 simulated seconds, straight-line vs AI autopilot
```

`GAME_JS=src|game|deob|original bun run serve` picks which `app2.js` is served (`src` = the client build).
All Playwright scripts take `BASE_URL` (default `http://localhost:3000/`), e.g.
`BASE_URL=http://localhost:3100/ bun run golden`.

## Layout

Bun workspaces (`packages/*`). Packages import each other's TypeScript source directly
(`"@paperio/core": "workspace:*"`, deep imports like `@paperio/core/game/game`); nothing is prebuilt.

```
packages/
  core/      THE GAME, headless: config, engine/ (geometry, grid, vec2, color), game/ (Game loop/rules,
             units, base, track, scoring, achievements, particles state, names), ai/, modes/,
             skins/skin (skin pools + manager, by name), handles.ts, platform.ts, headless.ts
  protocol/  wire format shared by client + server: bit-stream.ts (BitStream), messages.ts (MsgType,
             Join/Joined/Input/Update/Died, encode/decode), api.ts (HTTP JSON shapes)
  client/    browser: main.ts (boot), api.ts (window.paperio2api), render/ (canvas), ui/ (Preact JSX;
             i18n.tsx = I18nProvider + useI18n),
             input/ (mouse/keyboard), skins/ (artwork: display, image-skins), core-handles.ts
  server/    Bun + Elysia: index.ts (entry), app.ts, site.ts (page + assets), api.ts (POST /api/find),
             play.ts (ws /play), room.ts/rooms.ts (headless rooms ticking at 20 Hz)
  e2e/       Playwright + cross-package: src/ golden, parity, smoke, autopilot, check-teams;
             test/ headless golden in Chromium, dependency rules
original/    files extracted from the HAR (+ 8 missing skins); the server serves the page from here
deob/        intermediate: stage1 (strings), stage2 (webcrack), game.js (renamed)
modes/       captured Teams / Battle Royale / multiplayer builds and analyses
scripts/     the historical deobfuscation pipeline (targets the old src/ layout)
```

Each package has its own `tsconfig.json`; `bun run typecheck` runs them all:

| Package | `lib` / types | Effect |
|---|---|---|
| core, protocol | ES2022, no `@types` (+ `core/src/host.d.ts`: console, timers, performance) | any DOM or Bun/Node API is a compile error |
| client | ES2022 + DOM | |
| server, e2e, `*/test` | ES2022 + bun (e2e also DOM, for `page.evaluate`) | |

## Dependency rules

```
client -> protocol -> core
server -> protocol -> core
```

- core imports nothing outside core (no npm packages either).
- protocol imports only core.
- client never imports server; server never imports client. The browser types its HTTP calls with
  `@paperio/protocol/api`, not with the server's Elysia app type.
- e2e may import anything (it is the cross-package test bench).

`packages/e2e/test/dependency-rules.test.ts` checks this on every import, as part of `bun test`.

## How core stays headless (seams)

Core was cut from the browser code with the smallest seams that work; gameplay code is unchanged.

- `core/src/handles.ts`: opaque `ViewHandle`, `ControllerHandle`, `ImageHandle`, `PathHandle`,
  `SkinPatternHandle`, `SkinLayerHandle`, `SkinAvatarHandle`. Core only stores/passes them. The client
  widens them to the real types by declaration merging (`client/src/core-handles.ts`, e.g.
  `interface PathHandle extends Path2D {}`), so the renderer reads `polygon.path` as a `Path2D` unchanged.
- `core/src/platform.ts`: `createPath()`, `loadImage()`, `storage` with headless defaults (no-op path,
  no images, in-memory storage). `client/src/main.ts` installs `Path2D`, `Image` and js-cookie via `setPlatform()`.
- `Game` hooks next to the existing `renderer`, all set by `client/src/api.ts`:
  `input` (`readInput()` delegates to it; body in `client/src/input/read-input.ts`), `territoryImage`
  (results-screen PNG, `client/src/render/territory-image.ts`), `requestFrame` (`requestAnimationFrame`;
  headless default is a one-tick timeout).
- Moved to the client: `getRenderContext`/`RenderContext` (`render/render-context.ts`),
  `Particle.draw`/`FloatingLabel.draw` (`render/effects.ts`), `ImageAsset`/`ClassicSkinPool`/colored-skin
  canvases (`skins/image-skins.ts`; core's `ColoredPool` takes an optional avatar factory).
- Moved to core: `SkinDisplay` (`skins/skin-display.ts`), `LanguageStrings` (`language.ts`).
- `core/src/headless.ts`: `createHeadlessGame()` = the client's `api.create()` minus view, input,
  renderer and images. Used by tests and server rooms.

## UI language (i18n)

`original/assets/languages.json` has 9 languages (en ru tr sp fr nl pt de it), each merged over English.
`main.ts` loads it once, picks the browser's language (else English) and renders
`<I18nProvider languages initial onChange>` around `App`; components read strings with
`const { t } = useI18n()` and the footer switches with `setLanguage`. Core never sees the UI context: it
keeps plain `LanguageStrings` on `game.language`, and the provider's `onChange` forwards each switch via
`api.setLanguage(strings)` (also used for the extra-life popup, which used to be hardcoded Russian).
`extraLife` was added to the en and ru entries of languages.json (the only edit to a captured file).

## Server and protocol

- `POST /api/find` `{ mode? }` -> `{ roomId, wsPath }`. Elysia `t` schemas validate it and give Eden
  Treaty its types; a compile-time assertion keeps them equal to the plain interfaces in
  `@paperio/protocol/api`.
- `ws /play?room=<id>`: binary frames only. Elysia types the socket from its schemas (`query` ->
  `ws.data.query`, `body` -> the `message` argument, `response` -> `ws.send`), but its JSON-oriented
  pipeline does not fit binary: text frames are JSON-parsed, `ws.send()` JSON-stringifies anything that
  is not a Node `Buffer` (a `Uint8Array` included), and a returned `Buffer` is sent as text. Eden's
  `subscribe()` client also JSON-encodes or `toString()`s what it sends. So:
  - `body: t.Uint8Array()` lets only binary frames through (text frames get a validation error) and
    types `message` as `Uint8Array`;
  - `decodeClientMessages()` turns that into the `ClientMessage` union, narrowed by `msg.type`;
  - the server sends only via a `send(ws, ...msgs: ServerMessage[])` helper that encodes and calls
    `ws.sendBinary()`;
  - clients use a plain `WebSocket` (`binaryType = "arraybuffer"`) + `decodeServerMessages()`. Eden is
    used for the JSON HTTP API only.
  - If a JSON control channel is ever needed, give it its own Elysia `t` schema (a union with
    `t.Uint8Array()`), and Eden can then type it.
- Messages (`protocol/src/messages.ts`): one-byte `MsgType` (append-only, `Join = 1`), fields packed by
  `BitStream`, each message byte-aligned, several per frame. `InputMsg.angle` uses core's own
  `Game.angle` quantization (0..253). Phase 1: Join -> Joined + one full `UpdateMsg` snapshot; inputs
  are decoded and ignored; no players, culling or prediction yet.
- `Room` = `createHeadlessGame()` ticked by `setInterval` at 20 Hz, each tick 3 core steps of 1/60 s,
  after core's usual 6000-tick bot warm-up. Rooms are created on demand by `/api/find`.

## Checks

```sh
bun run typecheck        # strict: true, 0 errors, no `any`, no ts-ignore, no `_0x` names
bun test                 # unit tests + headless golden (Bun and Chromium) + dependency rules
bun run golden           # browser: deterministic sim hash on the real page; must not change on refactors
bun run parity 6         # browser: 1:1 vs the hosted game (original app2.js as https://paperio.site), 6 seeds
bun run smoke            # browser: boots, starts a round, units move, no page errors
bun run stress:teams     # headless Teams invariants, 5 seeds x 6000 ticks (core/test/teams-stress.ts);
                         # browser version: packages/e2e/src/stress-teams.ts
```

`parity` loads the captured original `app2.js` under the real hostname (Playwright route), so its
domain lock passes and it runs exactly like the live site, then compares per-seed sim hashes with our
build. The player follows a scripted loop (leaves base, captures, can kill and die).

`golden` seeds `Math.random`, builds a fresh `Game`, runs 4000 ticks (player joins at 1000) and
hashes unit positions/areas/FSM states. Browser hash: `11a98dae6745f942`.
The original obfuscated game gives `0f69990241912066`. The only cause is the domain lock: on the
real site it enables tail recovery (`moveTo`); we removed the lock and kept tail recovery always on.
With tail recovery disabled the hashes match, so deobfuscation + split + TS migration + renames are
behavior-identical. Ads, analytics, the score upload and the domain lock are removed from the sources.

The same scenario runs headless (`core/test/golden-scenario.ts`):
- `e2e/test/headless-golden.test.ts` bundles core alone (no client code, no page) and runs it in
  Playwright's Chromium: `11a98dae6745f942`, identical to the browser golden.
- `core/test/golden.test.ts` runs it in Bun: `e969d562c614ced4`, deterministic. It differs only because
  JavaScriptCore's `Math.sin/cos/atan2` differ from V8's in the last bit: on this run's inputs 5024/198153
  `sin`, 5544/198153 `cos` and 757/70326 `atan2` results are 1 ulp off from Chromium 153 (Node 22's V8
  differs from Chromium by 1 ulp too), and the sim amplifies that. The browser hash is thus tied to the
  Chromium build; a server sim is deterministic per runtime but will not bit-match browsers.

Property renames went through `scripts/rename-props.ts` (TS language service, type-linked; still
points at the old `src/` layout).

## Pipeline (historical: produced the initial src/, now hand-maintained TypeScript in packages/)

The pipeline rebuilt the old `src/` from `original/app2.js`. Its scripts are kept for reference; `split`
and `regen` were removed from package.json since the code now lives in `packages/` and is edited by hand.

| Step | Script | Output |
|---|---|---|
| HAR -> files | `scripts/extract-har.ts`, `fetch-missing-assets.ts` | `original/` |
| String-array inline | `scripts/decode-strings.ts` | `deob/stage1.js` (3859 strings) |
| webcrack | `webcrack` | `deob/stage2/deobfuscated.js` |
| Top-level names | `scripts/rename.ts` (hand map, ~160) | `deob/game.js` |
| Local names | `scripts/rename-locals.ts` (evidence-based, ~900 of 1665) | `deob/game.js` |
| Split into modules | `scripts/split.ts` (imports/exports from scope analysis) | `src/` (now `packages/core` + `packages/client`) |
| Bundle | `bun build` | `packages/client/dist/app2.js` |

Local names are inferred from what survived obfuscation: `this.game = x` -> `game`,
`{ game: x }` -> `game`, `units.forEach(x =>` -> `unit`, `new Vec2()` -> `vec2`, `x / 1000` -> `dt`,
call sites `kill(unit, ...)` <-> params, and property-usage shape (`.start/.end` -> `segment`).
~630 `_0x` names remained in `src/` (mostly short-lived temporaries in math/render code).

Patches vs the original (both applied by `split.ts`):
- domain lock disabled (it redirects to paper-io.com after ~3-4 min on any other host)
- `useContext` hoisted out of a `useEffect` callback (needed for current Preact)

## What the game is

- The original is fully client-side: no WebSocket, no server sim. The 15 "players" are local bots. (This repo adds a server in `packages/server`, see above.)
- Only network call: `POST /newpaperio/ajax/results.php` at game over, body is
  `escape(JSON.stringify(stats))` XOR 42 per char. The local server swallows it.
- Build: `Version: A6 2020-10-14`, internal build 704. UI is Preact 10. Dev comments in Russian.
- `debugger;` statements are dev asserts, not anti-debug.

## Code map

| Area | Names (see `packages/core/src` and `packages/client/src`) |
|---|---|
| UI | Preact (from npm), `App` in `client/src/ui/components.tsx` |
| Geometry | `Vec2` (pooled), `Segment`, `Polyline`, `Polygon`, `SpatialGrid` (20px cells), `Border` |
| Entities | `Unit` -> `Player`, `Bot`; each has a `Base` (polygon) and `Track` (trail) |
| Bot AI | `StateMachine` + `BOT_STATES` |
| Game | `Game` (`update`, `handleUnitMovements`, `handleReturn`, `kill`, `spawnBot`, `loop`) |
| Entry | `createApi` (client) -> `window.paperio2api` (`create/prepare/start/startGame/game`); `createHeadlessGame` (core) |
| Config | `DEFAULT_CONFIG`: arena 2000, speed 90/s, 15 bots, turn rate TAU rad/s |

## Mechanics found

- **Deterministic RNG**: LCG `seed * 69069 + 1 mod 2^31` (`createRng`). Recording/replay code exists.
- **Warm-up**: 6000 bot-only ticks are simulated before the player spawns.
- **Difficulty** = `lerp(0.1, 1, player.percent)` (+ per-bot jitter of up to 0.1). Bigger you = smarter bots.
- **Anti-greed rule**: when your trail exceeds 1500 units, the nearest bot is forced into `attack`.
- **Bot types 1-3** scale aggro/greed/safety/def differently (aggressive, greedy, very greedy + defensive).
- **Bot states**: `idle -> exit|cut -> capture -> back -> idle`, plus `attack` (only ever targets *the player's* trail; bots never hunt each other on purpose).
- `capture` picks a heading from the shoelace area of trail+base, "approach/retreat/pass" aspects
  (Russian: приближение/отдаление/проход/отстрел), and returns home when any of
  trail length / captured area / distance / danger ratio exceeds 1.
- **Death reasons** (`DEATH_*`): 0 win, 1 self-intersect, 2 wall, 3 track crossed, 4 exit captured,
  5 surrounded, 6 removed, 7 capital surrounded.
- **Hidden debug**: hold Shift+Alt+Q+B+M toggles `game.debug`; G toggles `game.debugGraph`.

## Headless harness

`window.__paperio` exposes `Game, Unit, Player, Bot, Vec2, Polygon, StateMachine, BOT_STATES, ...`.
`packages/e2e/src/autopilot.ts` sets `game.debugView = true` (freezes the rAF update) and steps
`game.update(1000/60)` manually, so a 3-minute round simulates in under a second.

First result (3 trials x 180s): bot-AI autopilot reaches ~2.6% / rank 5 but dies in ~1 min
(track crossed, wall). Straight-line baseline stays at 0.1%.
