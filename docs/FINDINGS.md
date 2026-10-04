# Findings: paperio.site reverse-engineering

State as of commit `44fca4c`. Line numbers refer to `src/` at that commit.

## Summary

- The game is a **single-player Paper.io 2 clone**. The 15 opponents are local bots. There is no game server and no WebSocket.
- The obfuscated `app2.js` (240 KB, obfuscator.io) is now **33 typed TypeScript modules** in `src/`: 0 `tsc` errors, no `any`, no `@ts-ignore`.
- **Behavior is unchanged.** A seeded 4000-tick simulation (`bun run golden`) gives the same hash as the original obfuscated build. The one exception is the intentional domain-lock patch below. With that patch removed, the hashes match exactly.
- **31 suspected bugs** were reported in the original code. 27 are confirmed by reading the code, 2 are plausible and unconfirmed, and 2 were checked and dismissed. None are fixed: this report records the original behavior.

## Security and network behavior

| Finding | Where | Details |
|---|---|---|
| Domain lock | `src/game/domain-lock.ts` | Decodes `paperio.site` / `paper-io.com` from number arrays. On any other host it redirects to `http://paper-io.com/?bc=<host>` after 3.1–4.1 min. On the real host it sets `Player.prototype.moveTo = true`, which `Game.recoverTail` needs. **Patched:** our build always sets `moveTo` and never redirects. |
| Score upload | `Game.post`, `src/game/game.ts` | `POST /newpaperio/ajax/results.php` at game over. The body is `escape(JSON.stringify(stats))` XOR 42 per character. That is obfuscation, not authentication, so scores can be forged by anyone. The local server discards it. |
| Hidden debug | `src/api.ts` | Hold Shift+Alt+Q+B+M to toggle `game.debug`. G toggles the debug graph. |
| `debugger;` statements | engine, skins | Developer asserts, not anti-debugging. |

## Game mechanics (for reference)

- **Deterministic RNG:** an LCG, `seed * 69069 + 1 mod 2^31` (`createRng`, `src/engine/math.ts`). Recording and replay hooks exist but are never enabled.
- **Warm-up:** 6000 bot-only ticks run before the player spawns.
- **Difficulty:** `lerp(0.1, 1, player.percent)`, with per-bot jitter of up to 0.1. Bots get smarter as you grow.
- **Long-trail punishment:** when your trail exceeds 1500 units (`botAttackTrackLength`), the nearest bot is forced into `attack`.
- **Bot AI** (`src/ai/bot-states.ts`): `idle → exit|cut → capture → back → idle`, plus `attack`. `attack` only ever targets the player's trail. Bot types 1–3 scale aggro, greed, safety and defense.
- **Death reasons** (`DeathReason`, `src/game/constants.ts`): 0 win, 1 self-intersect, 2 wall, 3 track crossed, 4 exit captured, 5 surrounded, 6 removed, 7 capital surrounded.

## Bugs in the original code

Severity: **High** = visible gameplay or score effect. **Medium** = a feature is broken or degraded. **Low** = dead code or cosmetic.

### Gameplay and scoring

| # | Sev | Bug | Where | Status |
|---|---|---|---|---|
| 1 | High | Kill score is **overwritten**, not added: `killer.scores.kills = unit.scores.kills + unit.scores.accumulator`. The killer loses kill score from earlier kills. | `game.ts:683` | Confirmed |
| 2 | High | **Extra life never triggers.** `GameScreen` takes `lastPercent`, but `App` never passes it, so `api.start(..., lastPercent)` always gets `undefined`. | `components.ts:607-615`, `:319` | Confirmed |
| 3 | Medium | **Mouse takeover needs movement on both axes.** `keyboard.x !== mouse.x && keyboard.y !== mouse.y` was probably meant to be `||`. After using the keyboard, moving the mouse purely horizontally or vertically doesn't switch back to mouse control. | `game.ts:796` | Confirmed |
| 4 | Medium | **The FPS median is wrong.** `fpsSequence.sort()` has no comparator, so the numbers sort as strings (`"100" < "59"`). Automatic quality scaling uses this median. | `game.ts:1147` | Confirmed |
| 5 | Medium | `handleReturn` returns `false` from inside its loop, which skips `schemes.comeback` and the `unit.insideBase` updates for the remaining units. | `game.ts:1344-1349` | Plausible, unconfirmed |
| 6 | Low | `prepareAndUpdate` runs `console.log(dt)` every frame while the game isn't visible. | `game.ts:812` | Confirmed |
| 7 | Low | Particles that fly to the killer add to `getScheme().accumulator`, a field that is never initialized (so it becomes NaN) and never read. | `particles.ts:149` | Confirmed, harmless |

### UI

| # | Sev | Bug | Where | Status |
|---|---|---|---|---|
| 8 | Medium | `App` assigns `api.startGame` without checking `api`. Without `Path2D`, `createApi` returns `null`, so the app crashes and the "not supported" message can never show. | `components.ts:561` | Confirmed |
| 9 | Medium | `LANG_RU` is never added to `LANGUAGES`. The extra-life label always uses the Russian string, and the other languages have no `extraLife` key. | `api.ts:119`, `i18n.ts` | Confirmed |
| 10 | Low | `Results` pushes the `levelCompletion` analytics event to `dataLayer` on every render, not once. | `components.ts` (Results) | Confirmed |
| 11 | Low | `MainMenu` ignores its `playable` and `preparing` props; Play is enabled whenever `api` exists. | `components.ts` (MainMenu) | Confirmed |
| 12 | Low | `ShowPreroll` (a page global) is called without checking it exists, so it throws if the host page doesn't define it. | `components.ts` (App) | Confirmed |
| 13 | Low | `getLanguage()` returns `undefined` if `languages.json` has no `en`, and the `.lng` reads then crash. | `i18n.ts` | Confirmed |
| 14 | Low | Unused props and locals in `MainMenu`, `Results` and `App`. | `components.ts` | Confirmed |

### Rendering and input

| # | Sev | Bug | Where | Status |
|---|---|---|---|---|
| 15 | Medium | **The background gradient cache never works.** The cache-key variables are compared but never assigned, so the gradient is rebuilt every frame. | `game-renderer.ts:18-25` | Confirmed |
| 16 | Low | `Controller.dispose` removes the mouse and keyboard listeners but not `touchstart`, `touchmove`, `touchend` and `touchcancel`. | `controller.ts:122-136` | Confirmed |
| 17 | Low | Key chords: `codes.sort()` has no comparator, so key codes sort as strings, and the sort mutates the caller's array. | `controller.ts:224` | Confirmed |
| 18 | Low | `drawUnitName` reads `asset.pool.name` without a null check. The minimap and leaderboard do check. | `game-renderer.ts` | Confirmed |
| 19 | Low | `drawTrack` ignores its `position` param. In `ColoredPool.add`, `lighter` is computed but never used. | `game-renderer.ts`, `skin.ts` | Confirmed |
| 20 | Low | The flag/shield skin modes would crash: `changeShields` calls `Skin.removeAsset`, which doesn't exist, and `getCitySkin` is a `debugger` stub. Both are unreachable in this build. | `game.ts:1213`, `skin.ts` | Confirmed, dead code |

### Engine

| # | Sev | Bug | Where | Status |
|---|---|---|---|---|
| 21 | Low | `SpatialGrid.segmentsCount` keys its result by `segment.id`, which is never set, so every entry lands under the key `"undefined"`. Only the unused `checkSegments` debug code calls it. | `spatial-grid.ts:78-84` | Confirmed |
| 22 | Low | `SpatialGrid.clear()` sets `cells = []` without rebuilding the cells, so a later `getCell` returns `undefined`. Never called. | `spatial-grid.ts:116` | Confirmed, dead code |
| 23 | Low | `SpatialGrid.cell()` wraps coordinates with `%` instead of clamping, so a negative coordinate gives a negative index. | `spatial-grid.ts:65` | Confirmed, latent |
| 24 | Low | `Vec2.remove` calls `splice(indexOf(x), 1)` without checking for -1, so removing a segment the point doesn't hold deletes the last one instead. | `vec2.ts:40-42` | Confirmed, latent |
| 25 | Low | `Segment.owner` is a getter that always returns `null`. | `segment.ts:46` | Confirmed |
| 26 | Low | `loadImage` never rejects, so a failed image load leaves its promise pending forever. | `load-image.ts` | Confirmed |
| 27 | Info | `Vec2.set(x)` with no `y` copies `x` into `y`. This may be intended. | `vec2.ts` | Plausible, unconfirmed |

### Bot AI

| # | Sev | Bug | Where | Status |
|---|---|---|---|---|
| 28 | Low | In the `exit` state, `ctx = {}` only reassigns the local parameter, so it does nothing. | `bot-states.ts:151` | Confirmed |
| 29 | Low | In the `capture` state, `dangerRange` is computed but never used. The pass-through branch sets `bot.smoothness`, which the next line overwrites, and the final `else if` is empty. | `bot-states.ts` (capture) | Confirmed |
| 30 | Low | The `capital` state is never entered, and it reads `ctx.point`, which nothing sets. | `bot-states.ts` | Confirmed, dead code |
| 31 | Low | `NamePool.release` is never called, so bot names are never returned to the pool. | `names.ts` | Confirmed |

### Checked and dismissed

- **"Particles fly to NaN positions"** (reported by an agent): homing replaces `velocity` with a number, but it also sets `time = 1`. The next `update` calls the callback and returns before it reads `velocity.x` (`particles.ts:55-63`). Not reachable.
- **"Tail recovery never runs"** (reported by an agent): `moveTo` *is* set by the real site and by our domain-lock patch. The early return only applies on non-official hosts in the original.

## Patches in our build vs the original

1. Domain lock disabled, with `Player.prototype.moveTo = true` set unconditionally (`domain-lock.ts`). This is the only behavioral difference (golden hash `11a98dae6745f942` vs `0f69990241912066`).
2. `useContext` was moved out of a `useEffect` callback into the `GameScreen` body (`components.ts`). Current Preact throws on the original pattern; the bundled old Preact allowed it. There's no gameplay effect.
3. The bundled Preact 10 and js-cookie 2 were replaced by npm `preact` and `js-cookie@2`.

## Open items

- **One unexplained crash:** a single autopilot run crashed without output once and didn't recur in 6 later trials.
- **Remaining unrecovered names:** 149 `_0x` names remain, mostly short-lived temporaries in math and render code.
- **Remaining `TODO(types)` markers:** 4, all in dead or flag-mode code paths.
- **Autopilot:** it reaches about 1–3% territory and rank 5–12, but dies in under 90 s. It needs threat avoidance.
