# paperio

Reverse-engineering of the Paper.io 2 clone at paperio.site.

## Quick start

```sh
bun install
bun run build            # src/ -> dist/app2.js
bun run serve            # local mirror on :3000 serving dist/app2.js
bun run smoke            # headless boot + start round + screenshots in shots/
bun run autopilot 5 180  # 5 trials x 180 simulated seconds, straight-line vs AI autopilot
```

`GAME_JS=src|game|deob|original bun server.ts` picks which `app2.js` is served.

## Layout

```
src/                     readable game source (ES modules), bundled by `bun run build`
  main.js                boot: fetch languages/skins, createApi, mount Preact App
  api.js                 window.paperio2api (create/prepare/start)
  config.js              DEFAULT_CONFIG, PALETTE
  engine/                math, vec2 (pooled), segment, polyline, polygon, border, spatial-grid, color
  game/                  game.js (Game loop/rules), units (Unit/Player/Bot), base, track,
                         scoring, achievements, particles, names, constants, domain-lock (disabled)
  ai/                    state-machine, bot-states (BOT_STATES)
  render/                game-renderer (canvas), debug-overlay
  skins/                 skin, display (layers/patterns/avatars)
  input/                 controller (mouse/keyboard)
  ui/                    components (Preact menus/results), i18n
deps (npm, were vendored) preact + preact/hooks, js-cookie@2
original/                files extracted from the HAR (+ 8 missing skins)
deob/                    intermediate: stage1 (strings), stage2 (webcrack), game.js (renamed)
scripts/                 the pipeline + headless tools
```

## Pipeline

`bun run regen` rebuilds `src/` from `original/app2.js`. It overwrites `src/`, so stop using it
once you start editing `src/` by hand.

| Step | Script | Output |
|---|---|---|
| HAR -> files | `scripts/extract-har.ts`, `fetch-missing-assets.ts` | `original/` |
| String-array inline | `scripts/decode-strings.ts` | `deob/stage1.js` (3859 strings) |
| webcrack | `webcrack` | `deob/stage2/deobfuscated.js` |
| Top-level names | `scripts/rename.ts` (hand map, ~160) | `deob/game.js` |
| Local names | `scripts/rename-locals.ts` (evidence-based, ~900 of 1665) | `deob/game.js` |
| Split into modules | `scripts/split.ts` (imports/exports from scope analysis) | `src/` |
| Bundle | `bun build` | `dist/app2.js` |

Local names are inferred from what survived obfuscation: `this.game = x` -> `game`,
`{ game: x }` -> `game`, `units.forEach(x =>` -> `unit`, `new Vec2()` -> `vec2`, `x / 1000` -> `dt`,
call sites `kill(unit, ...)` <-> params, and property-usage shape (`.start/.end` -> `segment`).
~630 `_0x` names remain in `src/` (mostly short-lived temporaries in math/render code).

Patches vs the original (both applied by `split.ts`):
- domain lock disabled (it redirects to paper-io.com after ~3-4 min on any other host)
- `useContext` hoisted out of a `useEffect` callback (needed for current Preact)

## What the game is

- Fully client-side. No WebSocket, no server sim. The 15 "players" are local bots.
- Only network call: `POST /newpaperio/ajax/results.php` at game over, body is
  `escape(JSON.stringify(stats))` XOR 42 per char. The local server swallows it.
- Build: `Version: A6 2020-10-14`, internal build 704. UI is Preact 10. Dev comments in Russian.
- `debugger;` statements are dev asserts, not anti-debug.

## Code map

| Area | Names (see `src/` for files) |
|---|---|
| UI | Preact (now from npm), `App` in `ui/components.js` |
| Geometry | `Vec2` (pooled), `Segment`, `Polyline`, `Polygon`, `SpatialGrid` (20px cells), `Border` |
| Entities | `Unit` -> `Player`, `Bot`; each has a `Base` (polygon) and `Track` (trail) |
| Bot AI | `StateMachine` + `BOT_STATES` |
| Game | `Game` (`update`, `handleUnitMovements`, `handleReturn`, `kill`, `spawnBot`, `loop`) |
| Entry | `createApi` -> `window.paperio2api` (`create/prepare/start/startGame/game`) |
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
`scripts/autopilot.ts` sets `game.debugView = true` (freezes the rAF update) and steps
`game.update(1000/60)` manually, so a 3-minute round simulates in under a second.

First result (3 trials x 180s): bot-AI autopilot reaches ~2.6% / rank 5 but dies in ~1 min
(track crossed, wall). Straight-line baseline stays at 0.1%.
