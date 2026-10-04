# Teams mode: reverse-engineering analysis

Source: `modes/teams/deob/deobfuscated.js` (webcrack output of `original/app.js`, build **676**).
All `L1234` references point to that file. Classic references point to our typed port in `src/`
(build 704). Probe scripts are in `modes/teams/probes/`.

## TL;DR

- **5 teams × up to 6 units** (`teamsCount: 5, teamSize: 6`, L9026-9027). Everyone except you is a local bot. No networking for gameplay.
- **Territory is shared per team.** Teammates are *hosts* of the same `Base` object (`Base.hosts[]`, L2694). Each unit's `percent` is the share of its own base, and the team's `percent` is the sum of `team.bases` (L5428-5436).
- **No friendly fire.** Crossing a teammate's trail inserts a point into that trail; nobody dies (`Track.handleIntersect`, L3829-3830). Captures only kill units of **other** teams (L5936-5946).
- **Trails get merged.** When you get home, every teammate whose trail you crossed has its trail re-processed against the enlarged base (`handleCross`, L5827-5889). Their loops are captured for them, and their trails are cut back.
- **The engine can split and merge bases.** An enemy base cut with hosts on both sides becomes two bases (L6019-6073). Cutting through a *friendly* second base merges it into yours (L6093-6105, L6164-6302).
- **The score is personal; winning is a team goal.** The HUD and results show `personalPercent`, the sum of the areas *you* captured (L6916, L7029). You win when your team owns more than 99.99% of the arena (L6934). The round ends only when you die or win. There is no timer.
- **Respawn:** a dead unit's team is throttled for 5-20 s depending on its rank, and the leading team waits longest (L5058-5065, L7094-7106). New bots spawn *on a teammate standing in the team base* and join that base (L7099-7101, L7144-7164).
- **Bot AI** is the same FSM, but threat sensing and attack targeting ignore teammates (L3954, L3970, L5491, L8031). It also has extra states: `slide`, `slideOut`, `back_old`, and a self-crossing-aware `back`.
- **HUD:** no leaderboard. A crown sits on every member of the top team (L1193-1235). The minimap shows only your team's bases and teammates, inside a donut ring of team shares (L1236-1334).

## 1. Team model

### `Team` class (`_0x36fc49`, L4376-4426). New, with no classic counterpart

    { id, units: [], bases: [], skin: null, suspendSpawn: -1 }   // L4377-4384
    update(dt) { this.suspendSpawn -= dt }                         // L4387
    has(u), setSkin(s), add(u) /*push + u.team=this*/, remove(u), get isTeam, get name -> skin.getName()

Fields that `Game` adds at runtime: `team.percent` (L5430) and `team.top` (rank, L5437-5441).

### Game-level team state (`_0x6e0fe2`, Game)

- `this.bases = []`, `this.teams = []`, `this.lastTeamSOD = 0` (L4707-4714). It is reset on `createTeam`/`removeTeam`, and `update` adds `dt` to it (L5377).
- `checkTeamSpawn()`: `lastTeamSOD > config.spawnTimeout` (3000 ms) (L4869-4872). At most one new team every 3 s while the game is visible.
- `createTeam()` (L4874-4880) and `removeTeam(team)` (L4882-4890). `removeTeam` releases the **team** skin. Skins are per team, not per unit.
- `joinToTeam(unit, mate, pos?)` (L4898-4905): places the unit at the mate's position (or `pos`), calls `mate.base.join(unit)`, sets `unit.team = mate.team` and pushes the unit into `team.units`.

### How a unit gets a team (spawner object `_0x5b6e56`, L7069-7215)

The spawner is injected into `Game` as `game.spawner`. `Game.spawnBot`/`spawnPlayer` just delegate to it (L4892-4914).

- **`spawnBot(game, {leader, place, name, skin})`** (L7108-7170)
  - It may spawn only if there is a `leader`, or `!game.visible` (warm-up), or `checkTeamSpawn()`. A name and a free team colour must also be available (L7118).
  - Without a leader it calls `getspawnPosition(place)` and creates a **new circular base** with `round(2π·r·baseDensity)` points: 47 points with r=30 and density 0.25 (L7144-7152). Classic uses a fixed `baseCount` of 50. It then creates a **new team** with a random colour skin (L7157-7162).
  - With a leader, the bot spawns at `leader.position` and joins `leader.base` (L7120, L7144, L7153-7155).
- **`respawn(game)`** (called every tick, L5383 → L7071-7107)
  1. While `teams.length < teamsCount`, it spawns new-team bots: `nearPlayerBotSpawnCount` times near the player, then "center" with a fallback to "bounds"/"random" (L7072-7088).
  2. For every team with `suspendSpawn < 0` and fewer than `teamSize` units, it picks a member that is inside its base (`u.in === u.base`) as the leader and spawns a bot on it. It then sets `team.suspendSpawn = lerp(bottomTeamSuspendSpawn=5000, topTeamSuspendSpawn=20000, 1 - (top-1)/(teamsCount-1))` (L7094-7106). **Rank 1 waits 20 s and rank 5 waits 5 s**, a catch-up mechanic.
- **`spawnPlayer(game, {name})`** (L7171-7214). Your `skin` and extra-life `percent` are **ignored**.
  - Candidate teams are those with fewer than `teamSize` units, or all teams if every team is full. From them it takes the units currently inside their base (L7176-7190).
  - If any exist, the player is placed **on a random one of them** and joins that unit's team and base (L7192-7194).
  - Otherwise it loops over random units (from *any* team) until one's trail start, offset back by the first trail segment, lies inside that unit's base. The player joins there (L7196-7207). This `do…while` would loop forever if no unit had a trail.
  - If the joined team now exceeds `teamSize`, the unit you spawned on is killed with reason 6, "removed" (L7210-7212). So you **replace that bot**.
- Probe (`probes/probe-spawn.ts`, 4 runs): there were 17-25 units at start, team sizes like `[4,6,4,5,6]`. The player always joined a non-full team, shared its base with every teammate, started inside the base, and no reason-6 kills happened.

### Colours and skins

- The team palette has 10 plain colours (`_0x307b0f`, L8119): `#f77f00 #ffe066 #ac3232 #ff3377 #ff99cc #99e550 #4b692f #1a936f #8a6f30 #3b7dd8`.
- `SkinManager` (`_0x206e5a`, L8530-8576) only has a `ColoredPool` (`_0x30913f`, L8376-8529). Each colour becomes a flat square avatar: `nick`-coloured background with a `main`/`back` square on top (L8486-8509).
- `available()` returns the number of unused colours, so at most 10 concurrent teams. The cap is 5 in practice.
- Every render call uses `unit.team.skin` (renderer L1426-1494, `scheme.death` L7005). `Unit.skin`'s getter and setter **throw** (L4300-4306), so per-unit skins are gone.
- There is no skin picker screen. The player always gets the team colour.

## 2. Territory, intersections, friendly fire

### Shared `Base` (`_0x572862`, L2689-3016) vs classic `src/game/base.ts`

| Teams | Classic |
|---|---|
| `hosts: Unit[]`, `team`, `id`, `square`, `lastSquare` (L2692-2700) | `unit`, `area` |
| `join(u)`: `hosts.push(u); u.base = this; u.in = this` (L2704-2709) | none (each unit owns its base) |
| `leave(u)`, `hasHost(u)`, `hasSomeHost()` (L2711-2725) | none |
| `handleIntersects(list, unit, move, game)` dispatches **`hasHost(unit)`** to self or enemy handling (L2766-2775) | `handleIntersect`: `unit === this.unit` (base.ts:53-59) |
| `handleSelfIntersects` (L2866-2905): on re-entry, collects `track.crossedUnits()`, calls `game.handleReturn(unit, points, segments)`, then `handleCross(mate, unit)` for each crossed teammate | `handleSelfIntersect` → `game.handleReturn(unit)` |
| `checkSelfEntry/Leave`, `checkEnemyEntry/Leave` (L2777-2864): zn-sum based entry/exit tests, reused by `handleCross` and `handleReturn` | none (classic records crossings via `track.intersect`) |
| `handleSelfIntersect`/`handleEnemyIntersect`, singular (L2907-2995) | **dead code**: never called (`updateState` only calls the plural form, L5268). They call `track.addIntersection`, which doesn't exist on the teams `Track` |

So **any teammate entering the team base is "home"**, and that triggers a capture for that teammate.

### Track (`_0x436d46`, L3710-3842) vs `src/game/track.ts`

`Track.handleIntersect(inter, crosser, move, game)` (L3821-3834):

    if (crosser === this.unit)            kill(this.unit, undefined, nearWall ? 2 : 1)   // self / wall
    else if (this.unit.team && this.unit.team === crosser.team)  this.inject(inter)        // TEAMMATE: no death
    else                                   kill(this.unit, crosser, 3)                     // enemy cut your tail

- `inject` (L3798-3803) splits the crossed polyline segment at the intersection point, using the new method `Polyline.insert` (L3641-3650). The point is now shared by both trails.
- `crossedUnits()` (L3719-3742): only runs if the base has more than one host. It walks every point of my trail and collects **teammates on my base** whose trail segments share that point. These are the injected points.
- `truncate()` (L3744-3768): drops everything up to the last trail point that lies on the own base polygon, then rebuilds `length` and `simplyline`.

### `Game.handleCross(mate, by)` (L5827-5889). New

This re-evaluates a teammate's trail after the base changed shape.

1. Find the mate's trail points that are now on the base outline (L5834-5848).
2. Walk them, pairing a "leave" (`checkSelfLeave`) with the next "entry" (`checkSelfEntry`) (L5849-5876).
3. For each pair, run `handleReturn(mate, subTrack, subSegments)`. This captures the loop **in the mate's name**, so `scheme.comeback` credits the mate's personal score (L5877-5885).
4. Truncate the mate's trail to its last base contact (L5882), then recurse into the teammates the mate had crossed, skipping `by` (L5886-5888).

Probe (120 s, seed 1): `trackHit:teammate->inject` happened 387 times and `handleCross:teammateTrackAbsorbed` 96 times, with **0** kills where killer and victim shared a team.

### `Game.handleReturn(unit, points, segments)` (L5891-6322) vs `game.ts:1280-1452`

The signature differs: teams passes the trail points and segments explicitly so `handleCross` can feed sub-trails. The steps:

1. **Splice the trail into the shared base** (L5896-5935). This is the same shoelace left/right logic as classic. If the start and end vertex are the same, the unit is killed with reason 1 (L6316-6318); classic has no such branch.
2. **Enemy kills, other teams only** (L5936-5946). The filter is `u.team !== unit.team && !u.death`:
   - `in === base` and position inside the captured region → **5, surrounded**
   - trail start inside the captured region → **4, exit captured**
   - otherwise, position inside the captured region → `u.in = unit.base` (it is now in enemy land)

   There is no capital rule (7).
3. `scheme.comeback(unit, {increment, rise, game})` (L5947-5952).
4. **Walk the trail through other bases** (L5953-6163), using zn tests instead of classic's recorded `track.intersections`:
   - **Enemy base** (`owner.team !== unit.team`, L5989-6092): cut out the traversed part. Which side is kept depends on where the base's hosts are. A host counts as "in" a side if its position (when inside the base) or its trail start is there (L6019-6028).
     - All hosts on one side: keep that side, using `polygon.right/left` like classic.
     - **Hosts on both sides: split the base into two new `Base` objects**. Hosts are distributed (`base`, `in` reassigned), the old base is removed, and both new bases are pushed to `team.bases` (L6031-6073).
     - Then `scheme.decrease(...)` spawns destruct particles (L6081-6085), and enemies that were `in` the lost part get `in = null` (L6086-6090).
   - **Friendly base that is not mine** (same team, different `Base` object, which only happens after a split): the visit is recorded as a merge candidate (L6093-6105). Later the trail and the friendly polygon are stitched into my base polygon, all its hosts move to my base, units `in` it now point to mine, the friendly base is deleted, and its hosts inside the result are marked home and truncated (L6164-6302).
5. **Teammates inside the new area** (L6303-6315): set `in = my base`. If they are hosts of my base, call `handleCross(mate)` and then `mate.track.remove()`. A teammate enclosed by your capture is "home".

Probe: 2 enemy splits and 1 friendly merge in 120 s. Up to 2 bases per team were observed.

### Friendly-fire matrix

| Event | Enemy | Teammate | Code |
|---|---|---|---|
| X crosses Y's trail | Y dies (3, killer X) | no death, point injected; Y's loop is later captured when X gets home | L3821-3833 |
| Own trail / wall | 1 / 2 | n/a | L3823-3828 |
| Capture encloses Y standing in its own base | Y dies (5) | Y becomes "home"; trail converted | L5939-5940, L6306-6311 |
| Capture encloses Y's trail start | Y dies (4) | no kill (same as above if Y's position is inside) | L5941-5942 |
| Trail passes through Y's base | the base is cut, or split if hosts are on both sides | bases merge | L5989-6105 |
| Entering Y's base | becomes `in = thatBase` (enemy land, trail continues) | same base object → home and capture; separate friendly base → enemy-style entry, merged on return | L2766-2842 |
| Win cleanup | all units killed with reason 6 after `winDelay` | | L5019-5029 |

### Death bookkeeping (`Game.kill`, L5052-5099) vs `game.ts:655-699`

- `scheme.death` spawns trail and flash particles (L7003-7007).
- Unless the reason is 6, `team.suspendSpawn = lerp(5000, 20000, 1-(team.top-1)/(teamsCount-1))` (L5058-5065).
- `base.leave(unit)`. The base is **only destroyed when it has no hosts left**: particles, removal from `game.bases` and `team.bases`, and anyone `in` it is reset (L5067-5080).
- The unit is removed from `team.units`. If the team is now empty, `removeTeam` runs: the skin is freed and `lastTeamSOD` resets (L5081-5085).
- The killer gets `scheme.kill`, `achievements.onKill`, `statistics.kills++`. There is no `scores.kills` overwrite bug, because the teams build has no accumulator scores.

## 3. Scoring, win/lose, timers

- The scheme is `_0x99bd68`, named **"TF"** (L6906-7068). It is the only scheme. Its base class `_0x5d5341` (L6787-6884) is an abstract mode hook: `init, completed, checkEnd, assign, scores, print, result, results, updateSensors, update, kill, death, out, comeback, decrease`. A single `game.scheme` replaces classic's per-unit `SchemeSet` / `SchemesManager`.
  - `assign(u)`: `u.scheme = {personalPercent: 0}` (L6944-6949). It is called from `addUnit` (L4804).
  - `scores(u) = personalPercent*100` and `result` is rounded to 2 dp (L6914-6922). `print` → `"12.34%"`.
  - `comeback`: `personalPercent += rise.square()/arenaSquare`. It shows a `+x.xx%` label for the player (L7022-7053).
  - `update()` holds the **bot difficulty** logic that classic keeps in `Game.update` (L6951-7001). It is the same formula: `level = lerp(startBotLevel, 1, player.percent)`, and `player.percent` is the **shared base share**. Per-type multipliers are unchanged.
  - `checkEnd()`: if `player.team.percent > 0.9999`, it returns `{winner: player}` (L6930-6942). `Game.update` then calls `gameOver(0)` (L5511-5522).
- Ranks:
  - `game.units` is sorted by personal score, and `unit.top` is that index + 1 (L5425-5444).
  - `team.percent` is the sum of `bases[].square/arena`, and `team.top` comes from sorting teams by percent (L5428-5441).
  - `game.fullPercent` is the total owned share, used by the minimap ring.
- Round end:
  - Only the player's death (any reason other than 0, L5095-5097) or the win.
  - No timer and no elimination of the player's team. If your team is wiped but you are alive, your team still exists because you are in it.
  - After you die, the round keeps simulating behind the results screen.
- `gameOver` (L4962-5031):
  - Renders a 500×500 PNG of `player.base` in team colours.
  - Builds results with `score = scheme.result(player)` (personal %), `percent` = base share, `top` = personal rank, `kills`, `time`, and `reason`.
  - Calls `deathCallback` (a no-op) and `gameOverCallback` after a delay: `enemyKillDelay` (2000) for reasons 3/4/5, `winDelay` (2000) for a win, otherwise `selfKillDelay` (1000).
- The results screen (L7624-7715) shows "YOUR SCORE" (the personal %), best score, time, and kills. Best score is stored in the cookie `paper.io.teams` (L7841-7846).
- Respawn: **the player never respawns**. Bots respawn per team as described in §1.

## 4. Bot AI (`_0x5ecd29`, L8578-8963) vs `src/ai/bot-states.ts`

Sensors moved into `Unit.updateSensors(dt, game)`, which runs for every unit including the player (L3932-3999, called at L5387-5390):

- `nearestEnemyDistance`, `unitToTrackDistances`, `unitDanger`, and `maxDanger` **skip teammates** (`u.team !== this.team`, L3954, L3970).
- They also include the player at any distance. Classic skips a player farther than `viewRange` (`units.ts` Bot.update `isFarPlayer`).
- `baseNearestPoint`, `baseNearestPointNormal`, and prev/next simplify indexes come from `polygon.findNearestPoint` (L3935-3950).
- `updateEnvironment2` and `updateExtendedSensors` (prediction polygons) are defined but **never called**.

| State | Teams | Classic |
|---|---|---|
| idle | same (25% `cut`, else `exit`) | same |
| capital | dead, same | dead |
| cut | exit = first base edge on a ray to the **nearest border point**, kept only if more than 15 px from the border. It re-finds the exit if it leaves the base outline (L8604-8636) | ray from the arena centre outward |
| exit | same + `attack` check (L8637-8686) | same |
| capture | adds `botFeelsThreatened` → `back` (L8695) and **self-crossing prediction** `_0x55fbaf` → `back` (L8698). Near the border it switches to the new **`slide`** state instead of classic's in-place rotation (L8796-8798) | rotation tweak near the border |
| slide / slideOut | **new**: hug the border at an angle that depends on border distance; bail out on danger, greed limits, or a predicted self-cross (L8826-8881) | none |
| back | steers along its own trail when a straight return would cross it (`_0x55fbaf`). It keeps that "safe" mode for 200 ms (L8882-8934). `back_old` = classic `back` (L8869-8881) | straight to `baseNearestPoint` |
| attack | **player only**, same logic. Exit uses `_0x216c74(bot, true)` (L8935-8962) | same |

Helpers:

- `botNearPlayerTrack` (`_0x151979`, L8030-8039) returns false when the bot is on the player's team.
- `botFeelsThreatened` (`_0x216c74`, L8040-8048) is new. Let `d = 0.5·unitSpeed·def` and `r = baseDistance/maxDanger`, where `r` is the distance from the most dangerous enemy to my trail. It is true when `r < d || r - baseDistance < d`, meaning an enemy can reach my trail before I get home. Classic: `maxDanger > defense*0.8`.
- `predictSelfCross` (`_0x55fbaf`, L8049-8064): intersects the 1-second heading ray with the bot's simplified trail.
- The long-trail punishment in `Game.update` (L5487-5508) only picks **non-teammates**.
- **Bots never hunt other bots, and never defend teammates.** Teams only changes behaviour through the team filters above.
- Turn rate: `maxAnglePerSecond(0.0698) · unitSpeed · dt/1000` (L5133, L5335). At speed 90 that is 6.282 rad/s, while classic uses `TAU` (6.2832). In "Fast speed" the turn rate doubles.

## 5. Config (`_0x2e4777`, L8964-9028) vs `DEFAULT_CONFIG` (`src/config.ts`)

The base object is spread and then overridden with `{teamsCount: 5, teamSize: 6}`. Sub-modes (`_0x57eb52`, L8101-8118) merge their config on top of it:

- "Classic mode": `{}`
- "Small map": `{arenaSize: 1000, botAttackTrackLength: 750}`
- "Fast speed": `{unitSpeed: 180}`

The dev config screen (`_0x3888a8`) can edit every key.

| Key | Teams | Classic | Note |
|---|---|---|---|
| `ellipticity` | 1 | n/a | Border is an ellipse `r × r*ellipticity` (L4601-4606) |
| `prepareCounter` | **3000** | 6000 | warm-up updates (each 50 ms, so about 150 s simulated) |
| `prepareMaxTime` | 500 | `maxPreparingTime` 500 | renamed |
| `prepareAcceleration` | n/a | 30 | classic only |
| `baseDensity` | 0.25 | n/a | spawn base vertices = `round(2π·r·0.25)` |
| `baseCount` | 50 (unused) | 50 | |
| `maxAnglePerSecond` | 0.0698 | n/a (uses TAU) | turn = this × unitSpeed |
| `botsCount` | 15 (unused) | 15 | |
| `teamsCount` | 15 → **5** | n/a | |
| `teamSize` | 1 → **6** | n/a | |
| `teamSuspendSpawn` | 10000 (unused) | n/a | |
| `bottomTeamSuspendSpawn` | 5000 | n/a | respawn delay of the last-ranked team |
| `topTeamSuspendSpawn` | 20000 | n/a | respawn delay of the first-ranked team |
| `winDelay` | 2000 | n/a | game-over delay on a win |
| `lightTheme` / `darkTheme` | colour sets | n/a | applied in `StartGame` from the cookie `darkTheme` (L7899-7903) |

Everything else matches classic exactly: `arenaSize 2000, quadSize 20, borderPoints 300, prepareMult 3, prepareBatchCount 5, baseRadius 30, minScale 3, maxScale 4.5, observerScale 2.5, trackWidth 8, unitSpeed 90, spawnTimeout 3000, baseHeight 2, botLevel -1, startBotLevel 0.1, noPlayerBotLevel 0.5, nearPlayerBotSpawnCount 1, followKiller, selfKillDelay 1000, enemyKillDelay 2000`, the colours, `platesStrokeWidth 0`, all `bot*Min/Max` values, `botAttackTrackLength 1500`, and `font`.

## 6. Rendering and UI

The renderer is `_0x3e52ba` (L1366-1645). Compare `renderGame`, `src/render/game-renderer.ts:652`.

- The world draw order matches classic, but every colour comes from `unit.team.skin` / `base.team.skin`. Bases are drawn from `game.bases`, not per unit (L1423-1429, L1480-1485).
- Trail cut-outs clip against the unit's own (shared) base (L1438-1448).
- **Crown** (`_0x392cca`, L1193-1235): drawn on *every unit of the team with `top === 1`*. Classic draws it on `units[0]` only.
- **No leaderboard.** Classic's `drawLeaderboard` doesn't exist here. The screenshot `probes/ingame.png` confirms it.
- **Minimap** (`_0x3b4aea`, L1236-1334):
  - Only **your team's bases** are filled. You get a 2/3-size dot and teammates 1/2-size dots in team colours. Your trail is drawn.
  - A **donut ring** around the arena shows each team's share of the owned area (`team.percent / fullPercent`), in team colours, slowly rotating (`performance.now()/10000`), with black dividers.
  - There is no red "enemy inside your base" border, unlike classic.
- Score bar: the personal % (`scheme.print`), with width relative to `best` (L1557-1581). Then "BEST x%" (L1582-1595), the kill counter (`_0x1b33c8`, L1335-1365), and notifications.
- Names: the fill colour comes from a team skin "shields" asset, if present, otherwise `#dddddd` (L1503-1535).
- Floating labels (`_0x58ceba`, L3018-3186) are a transformer-based system (`mover`/`fader`). They replace classic's simple `FloatingLabel`.
- UI (Preact):
  - `MainMenu` (`_0x431853`, L7507-7590): nick input, Play, a mode dropdown "Teams - Classic/Small map/Fast speed" (`_0x5dc747`), and a **"TOP 10 KILLERS"** panel (`_0x56ffb5`, L7445-7461).
  - `Results` (`_0x426836`, L7624-7715) has the same panel plus "CHANGE GAME MODE", which navigates to `//paperio.site`.
  - There is no skins screen. The language footer and config screen match classic.
- Host page `original/index.html`: a "Create Party" link to `/teams/p/`, plus `StartGame`/`ShowPreroll` hooks.

## 7. Network and external calls

| Call | Where | When |
|---|---|---|
| `GET https://leaderboard.paper-io.com/json/paperteams_kills_1.json` | L7534 (menu), L7643 (results) | every menu/results mount; top 10 entries `{leaderboardPosition, userName, leaderboardValue, userId}` |
| `POST https://leaderboard.paper-io.com/save` (`no-cors`, text/plain) body `{userId: cookie player_id, gameCode: "PAPERTEAMS", userName, results: [{leaderboardType: "KILLS", leaderboardValue: "<kills>"}]}` | L9053-9075 | game over, only if the `player_id` cookie exists and kills > 0. **Unauthenticated, trivially forgeable** |
| `POST /newpaperio/ajax/results.php` (XOR-42) | `Game.post` L5683-5717 | **never called** in this build (dead) |
| `new Image().src = "https://gameads.io/adspixel.png"` | L4795 | 2-3 min after spawn |
| `window.ga("send","event","teams", start_play / win / play_again / <mode.ga>)`, `fps qN` | L7575, L7641, L7668, L7922, L5671 | analytics |
| `ShowAds/HideAds/ShowPreroll`, `window.ads.hideAds` | L7531, L7612-7617, L7910 | host page hooks |
| **Domain lock (NOT patched in the deob build)** | L4536-4574 | Allowed: `paperio.site;paper-io.com;kevin.games;dravk.ru`. On any other host it calls `location.replace("http://paperio.site/?bc=" + host)` after (π+rand)·60 s. On localhost the served deob build redirects after about 3-4 min. Probes finish sooner, and they block non-localhost requests anyway |
| `assets/languages.json?v2` | L9029 | boot. There is no `skins.json` fetch, because skins are colour-only |

## 8. Other differences (engine fork)

This is an **older fork of the engine**: build 676, while classic is 704. These differences are not team logic, but they matter when porting:

- **No seeded RNG, recording, or replay.** Everything uses `Math.random`, and there is no `game.cycle` or `rng`. `update` does not add `rng()*0.01` jitter to `dt`.
- `unit.in` vs classic `unit.insideBase`. `unit.scheme` (`{personalPercent}`) vs `unit.schemes`. `unit.top` vs `unit.rank`. `unit.vrange` vs `unit.viewRange`. `base.square/lastSquare` vs `base.area/unit.lastArea`. `polygon.square()` vs `area()`. `track.simplyline` vs `simplifiedPoints`. `polygon.simplify` vs `simplifiedPoints`.
- `Game.update` order: input → `lastTeamSOD` → `teams.update` → **spawner.respawn first** → sensors (+`scheme.updateSensors`) → `unit.update` → `updateState` (movement and intersections, same algorithm as classic `handleUnitMovements`, L5173-5318) → `scheme.update` → percents → sort → team percent/rank → labels/notifications/particles → achievements → long-trail attack → camera → `scheme.checkEnd`. Classic spawns bots last and calls `recoverTail` first. Teams has no `recoverTail`, so there is no `moveTo` domain-lock coupling.
- `getMovement`: turn rate scales with `unitSpeed` (see §4).
- The particle sweep is inline (L5458-5483). Classic uses a `setInterval` filter.
- Bundled but **unused**: a Greiner-Hormann polygon clipping lib (`union/intersection/diff`, L6503-6786). Teams does all merging with its own splice code.
- `NamePool` (`_0x13ba7e`, L6478-6501) picks a random name from a ~2000-line list (L6502) and never removes it, so duplicate names are possible. `nameManager.aviable()` (sic) is always true.
- `AchievementStore` is instantiated as `_0x39e656`, whose `save()` is a no-op. The achievements list is empty, so achievements are effectively off.
- `Player.update` checks `this.respawn`, which is never set.
- `Unit.out()` and the `skin` accessor throw. `Base.getSkin()` returns the team skin.
- Debug shortcuts are the same: Shift+Alt+Q+B+M toggles `debug` and G toggles the graph. The name `dratest` turns on debug, as in classic.
- `kill` with `reason 0` on win: after `winDelay`, every unit is killed with reason 6 (L5020-5024).

## Class map

| Teams `_0x` | Line | Classic (`src/`) | Notes |
|---|---|---|---|
| `_0x1aa65a` | 1781 | `Vec2` | pooled, same API |
| `_0x53f573` | 1984 | `GridCell` | |
| `_0x5cc12f` | 2017 | `SpatialGrid` | |
| `_0x1b9fb2` | 2121 | `Segment` | |
| `_0x5ce52c` | 2274 | `Polygon` | `left/right/insert/findNearestPoint/square`; no `splice/unsplice` |
| `_0x61b37f` | 2567 | `Border` | elliptical (`radiusByAngle/radiusByPoint/nearPoint/distance`) |
| `_0x572862` | 2689 | `Base` | **shared, `hosts[]`, `team`** |
| `_0x58ceba` | 3018 | `FloatingLabel` | transformer-based |
| `_0x5adbda` | 3187 | `Particle` | pooled |
| `_0x19646a` | 3322 | `Controller` | |
| `_0x2fcb5d` | 3534 | `Polyline` | adds `insert`, `truncate`, `rebuild`, `rawSquare` |
| `_0x436d46` | 3710 | `Track` | adds `crossedUnits`, `truncate`, `inject`; teammate rule |
| `_0x34b689` | 3843 | `StateMachine` | |
| `_0x3aa17e` | 3889 | `Unit` | sensors moved here, `team`, `scheme`, `in` |
| `_0xab57cb` | 4310 | `Player` | |
| `_0xaa7f1a` | 4335 | `Bot` | |
| `_0x36fc49` | 4376 | — | **Team (new)** |
| `_0x55c4d9` / `_0x39e656` | 4430 / 4471 | `AchievementStore` | subclass with no-op `save` |
| `_0x2702b7` | 4484 | `AchievementsProfile` | |
| `_0x5c97cd` | 4582 | `createApi` | extra `spawner`, `renderer`, scheme class args |
| `_0x6e0fe2` | 4674 | `Game` | `updateState` = `handleUnitMovements`; new `handleCross`, `createTeam/removeTeam/joinToTeam/checkTeamSpawn` |
| `_0x27cfdc` | 6462 | keyboard mode switch | |
| `_0x13ba7e` | 6478 | `NamePool` | |
| `_0x11280e` | 6503 | — | Greiner-Hormann lib (unused) |
| `_0x5d5341` | 6787 | `ScoreScheme` (abstract) | game-level mode hook |
| `_0x37e56b` | 6885 | part of `Game.spawnBot` | bot type rotation + `new Bot` + `addUnit` |
| `_0x99bd68` | 6906 | `ClassicScoreScheme` | **"TF" team scheme** (personalPercent, checkEnd) |
| `_0x5b6e56` | 7069 | `Game.spawnBot/spawnPlayer` + spawn calls in `update` | **spawner object** (`createBot/respawn/spawnBot/spawnPlayer`) |
| `_0x51cd56` | 7795 | `App` | `mode: "teams"`, sub-mode state |
| `_0x431853` / `_0x2b6756` / `_0x426836` | 7507 / 7591 / 7624 | `MainMenu` / `GameScreen` / `Results` | + top-10 killers panel |
| `_0x56ffb5`, `_0x1a8b93` | 7445, 7430 | — | leaderboard list/row (new) |
| `_0x5dc747` | 7462 | — | sub-mode dropdown (new) |
| `_0x5aedcd` / `_0x3888a8` / `_0x864be9` / `_0x5bea76` | 7716 / 7745 / 7778 / 7408 | `ConfigForm` / `ConfigScreen` / `LanguageFooter` / `Tips` | |
| `_0x341ce4` | 7994 | skin display (skins/display.ts) | |
| `_0x329826` / `_0xbd1d81` | 8120 / 8186 | skin layer / display container | |
| `_0x46eadc` / `_0x4eea72` / `_0x13bcbe` | 8247 / 8312 / 8337 | `Skin` / `Asset` / `AssetPool` | |
| `_0x30913f` / `_0x206e5a` | 8376 / 8530 | `ColoredPool` / `SkinManager` | colour-only; skin per team |
| `_0x5ecd29` | 8578 | `BOT_STATES` | + `slide`, `slideOut`, `back_old` |
| `_0x151979` / `_0x216c74` / `_0x55fbaf` | 8030 / 8040 / 8049 | `botNearPlayerTrack` / `botFeelsThreatened` / — | team filter / new formula / new self-cross predictor |
| `_0x2e4777` | 8964 | `DEFAULT_CONFIG` + main.ts overrides | |
| `_0x3e52ba` | 1366 | `renderGame` | |
| `_0x392cca` / `_0x3b4aea` / `_0x1b33c8` / `_0x671416` | 1193 / 1236 / 1335 / 1163 | `drawLeaderCrown` / `drawMinimap` / `drawKillCounter` / `drawArena` | team versions |
| `_0x10566a` / `_0x423805` / `_0x1fef0e` | 952 / 4575 / 975 | `lerp` / `vecFromAngle` / id counter | |

## Probe results (`modes/teams/probes/`)

- `probe-teams.ts [seconds] [seed]` steps `game.update(1000/60)` manually after `StartGame`, with `game.stopped = true`. It instruments `Track.handleIntersect`, `kill`, `handleCross`, and `handleReturn`.
  - Seed 1, 120 s: 24 units at start (6/4/3/6/5) and at most 26 units at any time.
  - Teammate trail hits: 387, all `inject`. Enemy trail hits: 11, giving 10 kills with reason 3. Exit-captured (4): 7. Surrounded (5): 3. Wall: 9. Self-cross: 2.
  - **No kill had a teammate as killer.** 96 teammate-trail absorptions. 2 enemy base splits and 1 friendly merge.
  - At the end, every unit of a team reported the same `percent` (e.g. `[47.93, 47.93, 47.93]`). The exception was a team with 2 bases, which showed `[9.72, 0.93, 0.93]`: `unit.percent` is per *base*, not per team.
- `probe-spawn.ts [runs]`: the player joins a non-full team, shares that team's base, and starts inside it. No bot was removed in 4 runs.
- `shot.ts` writes `probes/ingame.png`. The HUD has the personal score bar, best, kills, and the minimap with the team ring. There is no leaderboard.

---

## Porting plan

Goal: add a Teams mode to `src/` with **zero behaviour change for classic**. `bun run golden` must stay `11a98dae6745f942`. Guiding rules:

- **R1. Classic units have `team === null`.** Never compare teams with `a.team === b.team` or `!==` directly, because `null === null`. Always use `sameTeam(a, b) = a.team !== null && a.team === b.team`.
- **R2. No new `rng()` / `Math.random()` calls on any classic code path.** Every new random draw sits behind `if (game.teams)`. Teams code should use `game.rng()` so Teams is deterministic too. That is an improvement over the original.
- **R3. Keep the classic data model** (`insideBase`, `schemes`, `area`, `simplifiedPoints`, recorded `track.intersections`). Re-implement the team rules on top of it rather than importing the 676-engine idioms (`in`, `scheme`, `square`).
- **R4. Mode switch.** `game.teams: TeamManager | null`, created only when `config.teamSize > 1`. Classic never constructs it.

### Step 1: Types and config (S, ~60 lines)

- `src/config.ts`: add `teamsCount: 15, teamSize: 1, topTeamSuspendSpawn: 20000, bottomTeamSuspendSpawn: 5000, winDelay: 2000` to `DEFAULT_CONFIG` (inert for classic). Add `TEAMS_CONFIG = {teamsCount: 5, teamSize: 6}`, plus the sub-mode overrides `SmallMap {arenaSize: 1000, botAttackTrackLength: 750}` and `FastSpeed {unitSpeed: 180}`. Add `TEAM_PALETTE` (the 10 colours).
- New `src/game/team.ts`: `class Team { id; units: Unit[]; bases: Base[]; skin: Skin; suspendSpawn = -1; percent = 0; rank = 0; }` and `export const sameTeam = (a, b) => a.team !== null && a.team === b.team`.
- `src/game/units.ts`: `Unit.team: Team | null = null`. `Unit.personalArea = 0`, used by the team scheme.

### Step 2: Shared bases (M, ~80 lines)

- `src/game/base.ts`:
  - Add `hosts: Unit[]` (constructor: `[unit]`) and `team: Team | null`.
  - Add `join(u)` (push, `u.base = this`, `u.insideBase = this`), `leave(u)`, `hasHost(u)`.
  - Change `handleIntersect` from `unit === this.unit` to `this.hosts.includes(unit)`. Classic is identical because `hosts = [unit]`.
  - Keep `base.unit` as "primary host", `hosts[0]`, so existing `owner.unit.*` reads keep working. Review each one (`handleReturn` cut: `owner.unit.insideBase`).
- `src/game/game.ts kill()`:
  - Replace `unit.base.remove()` with `unit.base.leave(unit); if (!unit.base.hosts.length) { remove base; remove from team.bases }`. This is a no-op change for classic.
  - Release the skin only when `unit.team === null`, or when the team became empty (`removeTeam`).
  - Particles for the base only when it was removed.
  - Teams also sets `team.suspendSpawn` (gated).
- Also update `Base.handleSelfIntersect`: it calls `this.unit.onScoreChanged()`. Point it at the intersecting unit.

### Step 3: Trail rules (M, ~90 lines)

- `src/engine/polyline.ts`: add `insert(segment, point)` (L3641-3650 in the teams file) and `truncateAt(index)`, which rebuilds bounds and path.
- `src/game/track.ts`:
  - `handleIntersect`: insert a branch `else if (sameTeam(unit, this.unit)) { this.polyline.insert(intersection.segment, intersection.point); return; }` before the enemy kill. Classic never takes it.
  - Add `crossedTeammates()` (L3719-3742, filter `sameTeam && base.hasHost`) and `truncateToBase()` (L3744-3768).
  - Rebuild `simplifiedPoints`/`length` after truncation, and drop `intersections` records whose point was removed.

### Step 4: Capture logic in `Game.handleReturn` (L, ~250 lines). The main work

Refactor `handleReturn(unit)` into `handleReturn(unit, points?, segments?)`. Default to the unit's trail, as classic does.

1. **Kill filter** (`game.ts:1314-1326`): skip `sameTeam(item, returningUnit)`. Instead, teammates inside `captured` get `insideBase = base`. If they are hosts, call `handleCross(teammate)` and then `track.remove()` (L6303-6315).
2. **Victim cut** (`cutBase`, `game.ts:1360-1415`):
   - If `sameTeam(owner, returningUnit)` and `owner !== base`, **merge** instead of cut (L6164-6302): stitch the trail and the friendly outline into `base.polygon`, move hosts, delete the friendly base.
   - Otherwise decide the kept side from **all** hosts (`owner.hosts`), not just `owner.unit`. If hosts are on both sides, **split** into two `Base`s (L6019-6073).

   The classic single-host path stays byte-identical, because with one host "all hosts on one side" always holds.
3. After `comeback`, if `game.teams`, run `for (mate of crossed) handleCross(mate, unit)`. Collect `crossed` *before* `track.remove()` in `Base.handleSelfIntersect`, as L2893-2899 does.
4. New `Game.handleCross(mate, by)` (L5827-5889). It needs zn-based `Base.checkSelfLeave/checkSelfEntry` (L2844-2864). As an alternative, reuse the recorded `track.intersections` enter/leave flags. They are more robust here, but the injected points have no records, so the zn tests are the faithful choice.
5. Keep classic's `DEATH_CAPITAL_SURROUNDED` branch. It is harmless in Teams because `cities` is empty.

Test this step with a new deterministic teams golden (Step 9) and the "no teammate killer" invariant.

### Step 5: Team scheme, ranks, win (S, ~70 lines)

- `src/game/scoring.ts`:
  - `TeamScoreScheme extends ScoreScheme`. `scores() = unit.personalArea / arena * 100`. `comeback` adds `rise.area()` and shows the `+x%` label. `kill` shows the label in the victim's team colour.
  - `main`/`api` chooses `new SchemesManager(TeamScoreScheme)` for Teams.
- `Game.update`, gated by `if (this.teams)`:
  - Compute `team.percent = Σ base.area / arenaArea` and `team.rank`.
  - **Replace** the win check: `player.team.percent > 0.9999 → gameOver(DEATH_WIN)` instead of `player.percent`.
  - `gameOver` delay: `winDelay` for reason 0.

### Step 6: Spawning (M, ~150 lines)

- New `src/game/team-spawner.ts`, or `Game.spawnTeamBot` / `spawnTeamPlayer`, behind `if (this.teams)` in `update` (`game.ts:1014-1019`) and `spawnPlayer`:
  - `respawn()` as at L7071-7107. Track `lastTeamChange` against `spawnTimeout`. A new team gets a new circular base (keep classic `circlePoints(pos, baseCount, baseRadius)` rather than `baseDensity`) and a palette colour.
  - Members spawn on a leader inside its base and `base.join(bot)`. Apply rank-scaled `suspendSpawn`, also on death.
  - `spawnPlayer` joins a random in-base member of a non-full team and removes a bot (reason 6) if the team overflows. Skin = team skin. Ignore `extraLife`.
  - Guard the `do…while` fallback with an attempt cap.
- Classic `spawnBot` and `spawnPlayer` stay untouched.

### Step 7: Bot AI filters (S, ~30 lines)

- `units.ts Bot.update`: the danger loop skips `sameTeam(unit, this)`.
- `bot-states.ts botNearPlayerTrack`: return early when `sameTeam(bot, player)`.
- `game.ts` long-trail attack (`game.ts:984-1006`): skip `sameTeam(unit, player)`.
- Optional, separate flag: port the teams-only `slide`/`slideOut`/self-cross-aware `back` and the new `botFeelsThreatened`. They change bot behaviour, so they must not be enabled for classic. Recommend deferring them.

### Step 8: Rendering and UI (M, ~150 lines)

- `game-renderer.ts`:
  - Iterate bases via `game.teams ? allBases : units.map(u => u.base)`. Do not draw a shared base once per host. Today `drawBases` loops units, so a 6-host base would be painted 6 times.
  - Skins: give every member `skin = team.skin`, so the existing `unit.skin` reads work unchanged.
  - `drawLeaderCrown`: when teams are on, draw on all units of the rank-1 team.
  - `drawMinimap`: when teams are on, draw own-team bases, teammate dots, and the team ring (L1279-1319).
  - Skip `drawLeaderboard` in Teams.
- `components.ts`: a mode dropdown (Classic/Small map/Fast speed), the results label "personal %", and storage key `paper.io.teams`.
- **Do not port** the leaderboard.paper-io.com fetch/save calls, the gameads pixel, GA calls, or the domain lock.

### Step 9: Verification (S)

- `bun run golden` must still give `11a98dae6745f942` after every step. Steps 1-3 and 7 are designed to be no-ops for classic.
- Add `scripts/golden-teams.ts`, which seeds and runs Teams for 4000 ticks, and record its hash.
- Add an invariant check: no kill where `sameTeam(killer, victim)`, and all hosts of a base report equal `percent`.
- Port `modes/teams/probes/probe-teams.ts` to the new build to compare rule-path counts (inject, cross, split, merge) against the original.

Rough total: about 900-1000 lines, about 40% of it in `handleReturn`/`handleCross`.
