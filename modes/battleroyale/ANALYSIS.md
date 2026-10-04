# Battle Royale mode: analysis

Source: `modes/battleroyale/deob/pass3/deobfuscated.js` (build 627, from `original/app.js?v11`). All `L1234` refs are lines in that file. The classic refs point to our `src/` (classic build 704).

Probes in `modes/battleroyale/probes/` (run them against `bun run serve`):

| Probe | What it verifies |
|---|---|
| `round.ts [ticks] [dt]` | Real UI start (`#play`), manual stepping, stage/zone/HP log, kill reasons, decoded results.php |
| `hp-rates.ts` | HP drain/regen/buff numbers |
| `decode-results.ts` | Decodes the results.php body recorded in the HAR |

## 0. Big picture: this is a different engine branch

BR isn't "classic plus a zone". It runs on the **team engine**, the same lineage as the Teams build (676); their method sets are identical except for 10 BR-only scheme/achievement methods. Compared to classic `src/` (build 704):

- **Teams everywhere.** `Unit.team`, a `Team` class (L4409), and `Game.teams`. Enemy checks are `a.team !== b.team`. In BR every team has exactly one unit (`teamsCount 15`, `teamSize 1`), so BR is solo. The team code still runs, though.
- **Bases have hosts.** `Base.hosts[]`, `join/leave/hasHost` (L2725). Classic has `base.unit`. A base is destroyed only when it has no hosts left (`kill`, L5104). `unit.in` plays the role of classic `insideBase`.
- **A pluggable "scheme" (game-mode rules object).** `game.scheme` (base class `_0xc3ab5e` L8338, BR subclass `_0x419e34` L8474) owns these hooks: `assign`, `updateSensors`, `update`, `kill`, `death`, `out`, `comeback`, `decrease`, `checkEnd`, `completed`, `scores`, `print`, `result`, `results`. Classic only has `SchemesManager`/`ClassicScoreScheme` for scoring (`src/game/scoring.ts`).
- **A pluggable spawner** `_0x326b7b` (L9128): `createBot`, `respawn` (no-op in BR), `spawnBot` (no-op), `spawnPlayer`. Classic hard-codes `Game.spawnBot`/`spawnPlayer` and calls three spawns per tick (`game.ts:1016-1019`).
- **An injected renderer** (15th constructor arg, `_0x5e48b2` L1272) and an injected AI table (`_0x1e6cd8`, 2nd arg).
- **`Math.random` everywhere.** No seeded RNG (classic has `game.rng`), no record/replay, no `cycle`, no `recoverTail`/`moveTo`.
- **Same capture algorithm family** (track splice into the base polygon, cut enemy bases), with team extensions in L5934-6366:
  - teammates aren't killed;
  - crossing a teammate's track `inject`s instead of killing (Track L3854);
  - an enemy base cut with hosts on both sides is split into two bases (L6086-6130);
  - touching a teammate's base merges it (L6234-6330);
  - `handleCross` re-runs captures for teammates whose tracks were crossed (L5870).

  None of this matters with `teamSize 1`, except that the code paths exist.
- A greiner-hormann polygon clip library (`union/intersection/diff/clip`, L8054-8333) is bundled but never used.

## 1. Zone

State lives on the scheme (L8480-8483, reset in `startMatch` L8995-8998): `currentZoneCenter`, `currentZoneRadius`, `nextZoneCenter`, `nextZoneRadius`. `zoneCenter`, `zonePath`, `zoneLinePath` and `nextPath` are only read and destructured in the renderer (L1220-1226). They are never assigned, so they're dead. The `exitCenter2` bot state reads `scheme.zoneCenter` (always undefined), but that state is never entered.

**Shape:** a circle. The arena is an ellipse `Border` (L2605) with `ellipticity: 1`, so it's a circle too. `arenaSize 1500` gives center (750,750) and radius `750*0.95 = 712.5`. Classic: 2000, radius 950.

**Schedule** (`stages`, L8516-8590; the stage machine runs in `scheme.update`, L8895-8902). Each stage waits `preparing` ms of game time (`timer += dt`), then calls `active()` every tick until it returns true. Then `current++` and the next stage's `init()` runs.

| # | wait | HUD text while waiting / while active | `active()` | next radius |
|---|---|---|---|---|
| 0 | 0 | "" / "Waiting for players..." | `!preparing` (all 15 slots filled) | |
| 1 | 3 s | "Battle starting in Ns" | teleport every unit to its slot; `ignoreIntersections=false`; true | |
| 2 | 10 s | "Stay inside the safe area and survive as long as you can!" | true | |
| 3 | 10 s | "Safe area shrinking in Ns" / "Go to safe area!" | shrink | 0.8·R = 570 |
| 4 | 20 s | same | shrink | 0.5·R = 356.25 |
| 5 | 20 s | same | shrink | 0.2·R = 142.5 |
| 6 | 60 s | same | shrink | 0.09·R = 64.125 |
| 7 | 0 | "Stay inside..." | never true (final) | |

**Next zone** (`init` = `_0x1fd447`, L8503-8514):
- `nextR = stage.radius * border.radius`, a fraction of the **original** radius.
- `nextCenter = currentCenter + rot(random·2π) * (curR - nextR - 10)`. So the new circle is almost internally tangent to the old one (10 units of slack), on a random side.
- It's announced when the wait starts (green dots on the minimap).

**Shrink** (`_0x571c74`, L8489-8501):
- `curR -= 0.2` per **update call**, and the center moves toward `nextCenter` proportionally. It snaps when the remaining gap is under 0.2.
- This is not dt-scaled. At 60 updates/s that's 12 units/s, so the four shrinks take about 11.9 s, 17.8 s, 17.8 s and 6.5 s.
- Verified with `round.ts`: at dt=16.7 the zone reached 570 after about 712 ticks; at dt=33.3 it also took about 712 ticks, i.e. twice the game time.
- `loop()` (L6367) splits each frame into updates of at most 33 ms, so the shrink speed depends on the monitor refresh rate (144 Hz gives about 29 u/s). This is a frame-rate bug.

**Total:** about 178 s to the final zone, after waiting for players (3 + 10 + 10 + 12 + 20 + 18 + 20 + 18 + 60 + 6.5 s).

**Outside the zone:**
- "Safe" means `position.distance(currentCenter) < currentR`, a point test on the unit (`checkSafe` L8755). `updateSensors` (L8760) sets `scheme.safe` and `distanceToZoneCenter`.
- Being outside only drains HP (§2). Territory outside the zone is untouched: no base clipping, no squishing, no speed change.
- At HP < 0 the unit is killed with **reason 9**. This is new; classic has reasons 0-7 (`src/game/constants.ts`). `killer` is undefined, so there is no kill credit.

**Rendering:**
- Red `#ff000099` fill between the arena circle and the zone circle (`_0x5dbd73` L1210).
- Red `#cc2222` 2 px ring (`_0x452e6b` L1237).
- The next zone is drawn as green `#00aa00` dots, on the minimap only (L1612-1613).
- While the player is unsafe, the minimap flashes one of 10 random red radial gradients (`game.radarTexes`, created in the Game constructor L4766-4779; drawn L1610-1612).

## 2. HP and buffs

Per-unit state comes from `scheme.assign` (L8743) and is stored in `unit.scheme`: `{maxHP: baseHP, HP: baseHP, buff: 0, debuff: 0, safe: true}`. It's updated in `scheme.updateUnit(unit, dt)` (L8787), called for every unit each tick from `scheme.update`.

| Effect | Formula | Rate (verified, `hp-rates.ts`) |
|---|---|---|
| Buff heal (while `buff > 0`; inside or outside the zone) | `HP = min(maxHP, HP + baseHP/buffDuration·dt)`, `buff -= dt` | +25 HP/s |
| Inside the zone (regen; returns early, no damage) | `HP += baseHP/regenDuration·dt`, capped at maxHP | +16.67 HP/s (empty to full in 6 s at maxHP 100) |
| Outside the zone | `HP -= baseHP/deathDuration·dt`; `HP < 0` → `kill(unit, undefined, 9)` | −33.33 HP/s (3 s from 100 HP; flat, so a bigger maxHP lasts longer) |
| Kill (`scheme.kill(killer, victim)` L9044) | `maxHP += killHP (50)`, `buff += buffDuration·killHP/baseHP` = +2000 ms; label "+50 to maximum HP for killing X" | +50 maxHP, healed over 2 s |
| Territory capture (`scheme.comeback` L9078) | `buff += increment·100000` ms, where `increment` = captured fraction of the arena; label "+N.Ns buff" if ≥ 100 ms | 1% of the arena = 1 s = +25 HP |

- Outside with a buff, the net is −8.33 HP/s (measured).
- `debuff`/`debuffDuration` are declared but unused.
- Above every unit: an HP bar and the text `HP/maxHP + N.Ns` (L1488-1516).
- Particles (only when the game is visible): green for buff, red for damage (denser as HP drops), fireworks around the winner.
- Nothing else damages a unit. Trail, wall and self kills stay instant, as in classic:
  - track crossed = 3, self-intersection = 1, surrounded = 5, exit captured = 4;
  - wall = 2: a self-cross within 5 units of the border counts as a wall death (Track L3857-3861).

## 3. Teams

BR is solo: `teamsCount 15`, `teamSize 1` (unused). Every bot and the player get their own `game.createTeam()` (scheme.spawnBot L8962, spawner.spawnPlayer L9164). Verified: 15 teams of size 1.

Team machinery that is live in BR:
- `Team.percent` and `top` (Game.update L5481-5493).
- `team.suspendSpawn`, set on death from `bottom/topTeamSuspendSpawn` (L5096-5101). Never read in BR, because `respawn` is a no-op.
- Same-team exclusions in sensors and `handleReturn`.

**Overlap with Teams:** the Team class, `Base.hosts`, base split/merge, `track.inject`, `handleCross`, the scheme and spawner interfaces, and `game.ignoreIntersections` are the shared engine. BR needs none of the multi-unit-team behaviour.

## 4. Round flow and win condition

**Boot.**
- `api.create(canvas)` builds the Game and sets `game.scheme = new BRScheme(game)`. Then `scheme.init()` calls `startMatch()` (L9033), which starts a **bot-only background match**.
- `prepareCounter 0`, so there's no warm-up (classic runs 6000 bot-only ticks).
- `units.length` at boot depends on timing; we saw 2, you saw 6. `startMatch(false)` spawns 1 bot synchronously; the `setTimeout` chain then spawns one immediately and one every `500 + rand·2000` ms (L9015-9023).

**Starting a round.** There's no `StartGame` global.
1. The Play button (`#play`, MainMenu L6764) calls `start` = `_0x44afd5` (App L7292). That fetches `token.php` (stored in state) and calls `window.ads.preroll()`.
2. With no ad provider, `preroll()` immediately calls `ads.onClose()`. That handler (L7299) sets `game.visible = true` and routes to `"game"`.
3. `GameScreen` (L6864) calls `api.start(name, skin, best, cb, lastPercent)` (L9842). That calls `game.spawnPlayer`, then `spawner.spawnPlayer` (L9150), then `scheme.startMatch(true)` (L8975).

Headless: `page.click('#play')`, or call `paperio2api.start(name, "", 0, cb)` directly.

**`startMatch(withPlayer)`** (L8975-9031):
- Sets `ignoreIntersections = true`. Kills every unit with reason 6 (silently, `visible=false`), clears particles, resets the zone to the full arena, returns to stage 0.
- Builds 15 slots: `circlePoints(space.center, teamsCount=15, R − 3·baseRadius = 622.5)`.
- With a player: `1 + floor(rand·13)` bots spawn at once, then the chain. The player takes the slot after the first chained bot, so it's always 1 player + 14 bots.
- When the chain runs out, `preparing = false`, which ends stage 0. Measured: about 12.7 s of real time waiting for players.
- Bases are `circlePoints(pos, round(2π·30·baseDensity) = 47, 30)`. Classic bases have 50 points.
- During stages 0-1, `ignoreIntersections` makes `updateState` skip all `handleIntersects` (L5288), so nobody can capture or die. Bots wander toward random bases (`prepare` state). At "Battle starting" everyone is teleported back to their slot.

**No respawn and no reinforcements:** `spawner.respawn` and `spawnBot` are no-ops (L9147-9148).

**End** (`scheme.checkEnd` L8598, evaluated at the end of every `Game.update` L5553-5565):
- 0 units: `{winner: null, completed: true}`.
- 1 unit: that unit is the winner (`unit.winner = true`, which triggers fireworks). If it's the player, `title()` shows "#1" / "Victory Royale" (L8617) and `game.gameOver(0)` runs.
- Otherwise the match isn't over.

**Completed** (`scheme.completed` L8734): 15 s later (a real `setTimeout`), `startMatch()` starts a new bot-only background match.

**Player death.**
- `kill` (L5088) calls `gameOver(reason)` (L4998). That takes the base snapshot image, builds the result, and after a delay calls `gameOverCallback`, which routes to the results screen.
- Delays: `enemyKillDelay` 2 s for reasons 3/4/5; `winDelay` 10 s for a win; `selfKillDelay` 1 s otherwise. On a win, all units are also killed with reason 6.
- The bot match keeps running behind the UI. The camera follows the killer (`followKiller`), or the arena center if there is no killer.
- `scheme.checkWin` (a percent > 99.99% win, L8920) is **never called**. Owning the whole map doesn't win.

**Ranking.**
- `scheme.scores(u) = u.statistics.kills`. `units` are sorted by kills and `unit.top` is the index in that order.
- So `result.top`, which is posted to the server, is **kill rank among the units still alive at death time, not finishing place**. The probe player died first (15th) and got `top: 7`; the HAR posted `top: 15`.
- The HUD has no leaderboard, only "Players Alive: N" (L1547).

**Results screen** (L6897):
- Shows the base image, time played (mm:ss, wall-clock `performance.now() − bornTime`) and players killed.
- Buttons: Play again (new token, same flow), Menu, and "Classic game mode" (`//paperio.site`).

## 5. Bot AI (`_0x1e6cd8` L9198-9673 vs `src/ai/bot-states.ts`)

BR states: `idle`, `exit`, `capture`, `back`, `attack`, plus new `patrol`, `exitCenter`, `zoneCapture`, `prepare`, and a dead `exitCenter2`. Classic: `idle`, `capital` (dead), `cut`, `exit`, `capture`, `back`, `attack`. **`cut` is gone in BR.**

**idle:**
- If `game.ignoreIntersections`, go to `prepare`. Else: in base → `exitCenter`; outside → `back`.
- Classic picks `cut` 25% / `exit` 75% using `rng`.

**prepare** (new, L9656): every 500 ms, target vertex 0 of a random unit's base. This is the warm-up wandering.

**exitCenter** (new; replaces `cut`, L9542). This is the main loop, and it's how bots are zone-aware: they grow **toward the (next) zone center**.
- Casts a segment toward `nextZoneCenter || currentZoneCenter || border.center` and takes the nearest base-edge crossing.
- Scans an 8-gon of radius `unitSpeed/4` around that crossing for base intersections. That gives `exitPoint` and `capturePoint = edge + dir·22.5`.
- Goes to `patrol` if there's no exit, if an enemy is within `0.3·unitSpeed` (27) **and** the bot is safe, or if it overshot the exit point.
- Goes to `zoneCapture` once it's outside the base.

**zoneCapture** (new, L9601): loops around `capturePoint`.
- Each tick the target is offset 90° from the capture point, 25 units out, nudged ±0.3 rad when the bot is too far from or too close to it.
- Goes to `back` on any of:
  - track length > 1.5π·captureDistance or 1.5π·outDistance;
  - close to its base with a long track;
  - `baseDistance > 0.8·def·min(enemy distance to track)`;
  - danger (`_0x305ad3`);
  - a predicted self-cross (`_0x926422`).
- Zone rule: if unsafe and HP < 90%, the target becomes `currentZoneCenter` (run in).

**patrol** (new, L9389): orbits just outside its own base edge (5-unit steps along the normal, ±45°).
- `back` if it left the base; `attack` if the player trail is near; `idle` if unsafe (after 50 ms).
- `exitCenter` once no enemy has been within 45 for 200 ms.

**capture** (still reachable via `exitCenter → exit → capture`): classic logic plus:
- `!safe && HP/maxHP < 0.9` → `back` (L9281);
- the give-up threshold becomes `max(ratios) > (safe ? 1 : 0.7)` instead of `> 1` (L9325);
- `back` when the next step would cross its own trail (`_0x926422` L8446). Classic has no self-cross prediction.

**exit:** like classic, plus `patrol` when an enemy is within 27.

**back:** like classic, but steers sideways along its own trail when the straight path would self-cross (L9476-9500). Smoothness is fixed at 1 (classic lerps it by danger).

**attack:** still chases only the player's trail, but the trigger differs.
- BR (`_0x41862b` L8424): an enemy-team player trail point within `0.6·max(vrange)`, with **no `aggro` factor**. Classic uses `0.75·range·aggro`.
- The "feels threatened" bail-out `_0x305ad3` (L8433) uses a different formula from classic `botFeelsThreatened`.
- The nearest enemy is still forced into `attack` when the player's trail exceeds 1500 (Game.update L5530-5551).

**Sensors.**
- `Unit.updateSensors` (L3965) runs for every unit every tick:
  - it computes `baseNearestPoint`/`Normal` even inside the base;
  - it adds `nearestEnemyDistance` (other teams only);
  - `unitToTrackDistances` excludes teammates but does **not** skip a far-away player (classic skips the player beyond viewRange).
- `updateExtendedSensors` (L4090, predicted tracks) runs for one unit per tick, round-robin.

**Tuning.** Bot params (aggro/greed/safety/def with the type multipliers) and `game.level` moved from `Game.update` into `scheme.update` (L8846-8892). The formulas are identical to classic `game.ts:930-990`, and so is the type-rotation table in `createBot` (L9130).

**Turning.** `maxAnglePerSecond·unitSpeed = 0.0698·90 = 6.28 rad/s`, the same as classic's TAU/s (`game.ts:711`, `:762`).

## 6. Config (`_0x1972ff` L9675 = engine defaults merged with BR overrides)

Compared to `DEFAULT_CONFIG` in `src/config.ts`:

| Key | Classic | BR | Note |
|---|---|---|---|
| arenaSize | 2000 | **1500** | BR override |
| prepareCounter | 6000 | **0** | engine default 3000, BR override 0 (no warm-up) |
| prepareMult | 3 | **1** | BR override |
| maxPreparingTime | 500 | — | renamed `prepareMaxTime: 500` |
| prepareAcceleration | 30 | — | absent |
| baseCount | 50 | 50 | unused in BR |
| baseDensity | — | 0.25 | new: base points = round(2π·baseRadius·density) = 47 |
| ellipticity | — | 1 | new: arena is an ellipse (b = a·ellipticity) |
| maxAnglePerSecond | — | 0.0698 | new; × unitSpeed = classic TAU |
| botsCount | 15 | 15 | unused (slot count comes from teamsCount) |
| teamsCount | — | 15 | new: number of start slots and players |
| teamSize | — | 1 | new; unused |
| teamSuspendSpawn / bottomTeamSuspendSpawn / topTeamSuspendSpawn | — | 10000 / 5000 / 20000 | new; only the last two are read (in `kill`), and the result is unused in BR |
| winDelay | — | **10000** | engine default 2000 |
| deathDuration | — | 3000 | ms to drain baseHP outside the zone |
| regenDuration | — | 6000 | ms to regenerate baseHP inside the zone |
| buffDuration | — | 4000 | ms for a buff to heal baseHP |
| debuffDuration | — | 4000 | unused |
| baseHP | — | 100 | |
| killHP | — | 50 | maxHP bonus per kill |
| lightTheme / darkTheme | — | color objects | unused |
| nearPlayerBotSpawnCount, spawnTimeout | 1, 3000 | same | unused (only the dead `checkTeamSpawn` reads spawnTimeout) |

All other keys are identical: quadSize, borderPoints, baseRadius, the scales, trackWidth, unitSpeed, baseHeight, the bot* tuning, followKiller, the kill delays, colors, font.

## 7. Network and anti-cheat

**token.php** (GET):
- Fetched every time Play or Play again is pressed (L7293).
- Recorded response: `{"token":"fad34e08bb15f388bd5b67e574e08157","build":146}`. The token is a 32-hex nonce, probably a server-side session or round id.
- `build` goes to `window.last_build` and is never read.

**results.php** (POST, relative to `/battleroyale/`, `Content-Type: text/plain`):
- Sent from the Results screen effect (L6905-6946), only if a token was received.
- Payload: `{build, player_id: window.playerId, name, top, percent: round(percent·10000), score: kills, time (s), kills, reason, match_mode: 5}`.
- Encoding: `btoa(encodeURIComponent(JSON))`, then XORed char-by-char with the repeating key `..1${token}2${window.playerId}3..`.
- `window.playerId` is set inline in index.html (938661124) and is also sent as the `player_id` cookie.
- The HAR body decodes (`probes/decode-results.ts`) to `{"build":627,"player_id":938661124,"name":"Player","top":15,"percent":198,"score":0,"time":22,"kills":0,"reason":3,"match_mode":5}`.
- Classic `Game.post`, for comparison, sends `escape(JSON)` XOR 42 to `/newpaperio/ajax/results.php` with a different field set. In BR that method (L5727) is still present but dead: it reads `window.paper2_results`, which nothing sets.
- **Anti-cheat:** obfuscation plus a server nonce only. All key material is in the client, so anyone can forge results with a fresh token. There is no state hash or HMAC.

**lb.php** (GET):
- Polled on mount and every 60 s on the menu and results screens.
- Returns `{players:[{top,name,scores,player}]}` (top 10). This is the only "TOP LIST", shown in the menu side panel. `scores` are presumably server-side wins or kills.

**Other traffic and hooks:**
- `https://gameads.io/adspixel.png`, 2-3 min after `addPlayer` (L4831).
- GA events: `battle_royale/start_play|win|play_again`, `skins_unlock`, `fps qN`.
- Debug: Shift+Alt+Q+B+M toggles debug and G toggles the graph (L9824-9829). The player name "dratest" turns debug on (L4834).

**The domain lock is still active in the deob build** (`dcheck` L4657):
- Allow-list: `paperio.site;paper-io.com;kevin.games;dravk.ru`.
- On any other host it calls `location.replace("http://paperio.site/?bc=" + host)` after `60000·(π + rand)` ms, i.e. 3.1-4.1 minutes.
- On localhost this fires. Patch the IIFE out of the served build, or keep sessions under 3 minutes with external navigation blocked.

## 8. `afs2.js`

It's the ad framework (`window.afs`), not game code:
- `SingleAdManager(intervals=[0,120000,30000])` throttles prerolls: the first is immediate, then at most one every 2 min, then every 30 s.
- `AdProviderGD` wraps the GameDistribution SDK.
- `AdProviderAIP` wraps the AdinPlay `aipPlayer` preroll and `aipDisplayTag` banners.

index.html creates `window.ads` with the AIP provider. The game calls `ads.preroll()` on Play and overrides `ads.onOpen`/`onClose` to hide/show the game (L7299-7312). With ads blocked, `preroll()` immediately calls `onClose()`, which is what actually starts the round. If the SDK fails to load, `adblock()` returns true.

## 9. Other differences from classic

**Renderer** (`_0x5e48b2` L1272):
- Bases are drawn by iterating `game.bases` (several per team) with `team.skin`.
- HP bars over all units.
- No top-10 leaderboard, no score bar, no best-score bar. Instead: "Players Alive" (top right) and the stage text (bottom center). Classic draws a leaderboard and percent (`game-renderer.ts:442-575`).
- The minimap draws only the player's team bases, plus the zone and the radar flash.
- A notifications queue ("New skin unlocked!").

**Achievements:**
- `AchievementStore("paper.io.br")` with 5 skin unlocks: duck/watermelon/cake for 1/5/10 wins, bat/tank for 1/10 kills (L9790-9800). Checkers: wins `_0x5c49f4` (L4482), kills `_0x58905b` (L4506).
- **Bug:** the wins checker does `progress++` every tick while the player is the sole survivor. One win (10 s `winDelay`, about 600 ticks) unlocks all three win skins.
- The 5 unlockable skins have no `category`, so they also go into the random bot skin pool (the classic pool is tried first 75% of the time, L8028). Picking one takes it away from a bot (L8016-8021).

**Player:** `Player.update` sets the target to `direction·50` ahead; classic does this through `Game.readInput` plus Player. The `extraLife`/`lastPercent` argument reaches `spawnPlayer` but is ignored.

**Kill score:** classic bug #1 (overwriting kill score) doesn't exist here. BR only does `statistics.kills++`.

**Name pool:** `NamePool` (L9173) picks names randomly with replacement and never runs out (`aviable()` is always true).

**Game loop:**
- There are no `prepareAndUpdate`/`cycle`/replay paths.
- The `fpsSequence.sort()` string-sort bug and the mouse `&&` bug are both still present (L5701, L5409).

**Camera** (`getRenderContext` L5569): follows the player, else the killer, else the arena center, smoothed (`origin` lerp /30).

## Class map (BR `_0x` name → classic)

| BR var (inner ctor) | Line | Methods (BR) | Classic counterpart |
|---|---|---|---|
| `_0x1c98db` (`_0x180e6b`) | 1816 | alloc/clone/flush/release, vector math | `Vec2` `engine/vec2.ts` |
| `_0x143a8e` | 2019 | findPoint/commit/remove | `GridCell` `spatial-grid.ts` |
| `_0x5d4ee5` | 2052 | count/cell/getCell/checkPoint/segmentsCount/intersections | `SpatialGrid` |
| `_0x7f4089` | 2156 | calc/reverse/commit/intersect/zn/contains/owner | `Segment` `segment.ts` |
| `_0x1a133d` | 2309 | insert/left/right/inside/square/calcSimplify/findNearestPoint | `Polygon` `polygon.ts` (which has `area`/`splice`/`unsplice`) |
| `_0x4dcc26` | 2605 | radiusByAngle/radiusByPoint/nearPoint/distance/inside/radius | `Border` `border.ts`, but elliptical |
| `_0x40f7b4` | 2725 | join/leave/hasHost/hasSomeHost/boundaryHasPoint/handle{Self,Enemy}Intersect(s)/check{Self,Enemy}{Entry,Leave} | `Base` `base.ts` (single `unit`) |
| `_0x5e7208` | 3056 | mover/fader/getTransformer/change/update/draw | `FloatingLabel` `floating-label.ts` |
| `_0x4bf1e3` | 3218 | pooled alloc/release/update/draw | `Particle` `particles.ts` |
| `_0x43defd` / `_0x9140ab` | 3353 / 6497 | pressed/onKeyChange/addButton/addSet; mode2 | `Controller` / `KeyboardModeSwitch` `controller.ts` |
| `_0x3adc1c` | 3565 | truncate/rebuild/insert/lastEqual/add | `Polyline` `polyline.ts` |
| `_0xcedd0d` | 3741 | crossedUnits/truncate/updateSimplyline/add/inject/remove/handleIntersect(s) | `Track` `track.ts` |
| `_0x2e2597` | 3876 | change/update | `StateMachine` `state-machine.ts` |
| `_0x3d6b24` | 3922 | updateSensors/updateEnvironment2/updateExtendedSensors/update/movement | `Unit` `units.ts` |
| `_0x39ade6` | 4343 | update (target from game.direction) | `Player` |
| `_0x506598` | 4368 | updateSensors/update (fsm) | `Bot` |
| `_0x45f06d` | 4409 | update/has/add/remove/name | **new: Team** |
| `_0x3fd995`, `_0x5c49f4`, `_0x58905b` | 4460-4527 | onKill/onOut/update/check | achievement checkers (`achievements.ts`); BR: wins, kills |
| `_0x23ef94` / `_0x34ef09` / `_0x429066` | 4528 / 4564 / 4605 | success / load, save / update, finish, onKill, onOut | `Achievement` / `AchievementStore` / `AchievementsProfile` |
| `_0x17bba1` (`_0x4a5c7d`) | 4709 | addPlayer/addUnit/createBase/createTeam/removeTeam/joinToTeam/spawnBot/spawnPlayer/gameOver/kill/getMovement/updateState/update/handleCross/handleReturn/loop/post/saveState | `Game` `game.ts` (`updateState` = `handleUnitMovements`) |
| `_0x45f010` | 7476 | update/position | `Tip` `achievements.ts` |
| `_0x113df1`, `_0x280bbc`, `_0x4ec743`/`_0x38adf0`, `_0x529d3b`, `_0x2d4c51`, `_0x435101`, `_0x5cbefd`, `_0x5c3c06` | 7514-7995 | skin classes | `SkinLayer`, `SkinDisplay`, `Skin`, `Asset`, `AssetPool`, `ColoredPool`, `ClassicSkinPool`, `SkinManager` |
| `_0xc3ab5e` | 8338 | init/checkWin/checkEnd/assign/scores/print/result/results/updateSensors/update/kill/death/out/comeback/decrease | roughly `ScoreScheme` `scoring.ts`, but it's a full mode-rules object |
| `_0x419e34` (`_0x4ec47a`) | 8474 | + title/completed/checkSafe/fireworks/updateUnit/spawnBot/startMatch/active | **new: BattleRoyale scheme** |
| `_0x326b7b` (object) | 9128 | createBot/respawn/spawnBot/spawnPlayer | `Game.spawnBot` / `spawnPlayer` |
| `_0x19860b` | 9173 | get/aviable/request/release | `NamePool` `names.ts` |
| `_0x1e6cd8` (object) | 9198 | FSM states | `BOT_STATES` `bot-states.ts` |
| `_0x1972ff` | 9675 | config | `DEFAULT_CONFIG` `config.ts` |
| `_0x1db84f` | 9799 | create/prepare/start | `createApi` `api.ts` |
| `_0x5e48b2`, `_0x5dbd73`, `_0x452e6b`, `_0x37a4b9` | 1272, 1210, 1237, 1180 | render; zone fill; zone ring and next-zone dots; arena and background | `renderGame` `game-renderer.ts` (plus new zone drawing) |
| `_0x242d3c`, `_0x1ced8c`, `_0x3657e8`, `_0x4b5dbd`, `_0x46a4c8` | 7178, 6764, 6864, 6897, 7107 | App, MainMenu, GameScreen, Results, Skins | `components.ts` |
| `dcheck` IIFE | 4657 | domain lock | `domain-lock.ts` |

## Porting plan

**Constraint:** classic must stay bit-identical (`bun run golden` = `11a98dae6745f942`). Every change below is either new code or runs only when `game.mode` is set. When `mode === null`: no extra `rng()` calls, no reordering, no changed sorts.

**Approach:** do not port the team engine for BR. Implement BR's rules (zone, HP, last survivor, no respawn) on the classic engine. This works because BR teams have exactly one member.

1. **Mode hook interface**, shared with Teams. New `src/game/mode.ts`, ~80 lines:

   ```ts
   interface GameMode {
     readonly name: "classic" | "battleroyale" | "teams";
     assign(unit: Unit): void;                       // per-unit state (BR: HP)
     beforeMovement?(dt: number): void;              // BR: safe flags
     update(dt: number): void;                       // BR: stages, zone, HP, bot tuning
     onKill(victim: Unit, killer: Unit | undefined, reason: DeathReason): void;
     onComeback(unit: Unit, increment: number): void;
     checkEnd(): { winner: Unit | null; completed: boolean };
     readonly spawnsBots: boolean;                   // false => skip game.ts:1014-1019 spawn calls
     readonly percentWin: boolean;                   // false => skip game.ts:1010 win check
     readonly ignoreIntersections: boolean;
   }
   ```

   Add `mode: GameMode | null = null` to `Game`. If the Teams agent defines a scheme-like interface, merge the two; the BR scheme methods map 1:1.
2. **Constants and config** (~40 lines):
   - Add `DEATH_ZONE = 9` to `src/game/constants.ts`.
   - Add a new `BR_CONFIG = {...DEFAULT_CONFIG, arenaSize: 1500, prepareCounter: 0, prepareMult: 1, winDelay: 10000, deathDuration: 3000, regenDuration: 6000, buffDuration: 4000, baseHP: 100, killHP: 50, playersCount: 15, baseDensity: 0.25}`.
   - Widen `Config` with an optional BR part. `DEFAULT_CONFIG` stays untouched.
3. **Game hooks** in `src/game/game.ts` (~60-90 lines, all `if (this.mode)`-guarded):
   - `addUnit`: `mode?.assign(unit)`.
   - `update`: call `mode.update(dt)` after `handleUnitMovements` (`:890`).
     - Gate the percent win (`:1010`) and the spawn calls (`:1014-1019`).
     - At the end, run `checkEnd`: mark the winner, and call `gameOver(DEATH_WIN)` if it's the player.
   - `handleUnitMovements` (`:1556`): skip `handleIntersect` while `mode?.ignoreIntersections`.
   - `kill` (`:655`): call `mode?.onKill`.
   - `handleReturn` (`:1444`): call `mode?.onComeback(unit, increment)`.
   - `gameOver` (`:636`): use `winDelay` for `DEATH_WIN` when it's set. In BR, kill all units on a win.
   - Add `spawnBotAt(position, type?)` and an explicit-position `spawnPlayer`. Both reuse the existing bodies; classic call sites don't change.
4. **Battle Royale mode**, new `src/modes/battle-royale.ts` (~350 lines):
   - Zone state, the 8-stage table, `nextZone()`, `shrink()`.
   - Per-unit `{HP, maxHP, buff, safe}` in a `WeakMap` (or an optional `unit.br`), so the `Unit` shape doesn't change for classic.
   - HP and buff math, kill and comeback buffs with their labels, `checkEnd`.
   - `startMatch(withPlayer)`: 15 slots on radius `R − 3·baseRadius`. Use game-time timers and `game.rng` instead of `setTimeout`, so BR is deterministic.
   - The 15 s background restart; bot level and parameter tuning.
   - Shrink rate: keep 0.2 per update behind a fidelity flag, or use `12·dt/1000` (recommended: identical at 60 Hz, and fixes the refresh-rate bug).
5. **Bot AI**, new `src/ai/bot-states-br.ts` (~280 lines):
   - `BR_BOT_STATES = {...BOT_STATES, idle, prepare, exitCenter, zoneCapture, patrol, capture, back, exit}`.
   - Helpers: `wouldCrossOwnTrack`, `brNearPlayerTrack`, `brFeelsThreatened`.
   - `Bot` takes its states table from the mode. Compute `nearestEnemyDistance` only when `game.mode` is set.
6. **Renderer**: a BR overlay (new `src/render/br-overlay.ts` plus hooks in `game-renderer.ts`, ~200 lines) for zone, HP bars, Players Alive, stage text, minimap zone and radar. Skip the leaderboard at `:696` in BR.
7. **API, UI, network** (~120 lines):
   - `createApi` creates the mode and calls `startMatch(false)`; `api.start` calls `startMatch(true)` and then `spawnPlayer(pos)`.
   - Results screen: show time and kills, and compute a real finishing place (`alive + 1` at death) alongside the original `top`.
   - Optional: a results POST mirroring the XOR/base64 format (our local server swallows it).
   - Optional: BR achievements, with the per-tick win counter fixed or kept behind a flag.
8. **Tests** (~60 lines):
   - Keep `scripts/golden.ts` unchanged (must stay `11a98dae6745f942`).
   - Add `scripts/golden-br.ts`: seeded, 10k ticks, hash of positions, HP, zone radius and stage.
   - Add assertions from the probes: radii 570 / 356.25 / 142.5 / 64.125; drain 33.3/s; regen 16.7/s; kill gives +50 maxHP and a 2 s buff.

**Order:** 1 → 2 → 3 (run golden here) → 4 → 5 → 6 → 7 → 8. About 1.2k lines in total.

**Teams overlap:** share steps 1-3 with the Teams port (mode interface, config widening, game hooks, explicit-position spawns). Only Teams needs `Team`, `Base.hosts`, base split/merge and `track.inject`.
