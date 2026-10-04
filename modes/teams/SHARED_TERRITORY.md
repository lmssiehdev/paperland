# Teams: how shared territory works (and how to port it)

Source: `modes/teams/readable/teams.js`. All `Lnnnn` refs below point to that file. It is the teams build
(676) after `unbabel-classes` → `rename-map` (names.json) → `rename-map` (locals.json) → `rename-locals --teams`.
Rebuild it with `sh modes/teams/readable/build.sh`.

**teams.js is behaviourally identical to the webcrack output.** `modes/teams/probes/compare-builds.ts` runs
both builds with a seeded `Math.random`, a frozen clock and a stubbed rAF, and steps `game.update` by hand.
Seeds 1, 2 and 3 over 120 s gave 121/121 matching per-second digests of every unit, base and team. The
rule-path counters (inject, handleCross, kill reasons) were also identical.

Names in this doc: "host" means a unit listed in `base.hosts`. "Mate" means a unit on the same team.
`unit.in` is the base a unit is currently standing in (our `insideBase`). `square` means area.

---

## 1. Data model

| Object | Shared-territory fields |
|---|---|
| `Team` (L4002) | `units[]`, `bases[]`, `skin`, `suspendSpawn`; `percent` and `top` are added by `Game.update` |
| `Base` (L2511) | `hosts[]`, `team`, `polygon`, `square`, `lastSquare`. **No owning unit.** `base.unit` is a debug getter for `hosts[0]` (L2782-2790) |
| `Unit` (L3560) | `base` (the base it is a host of), `in` (the base it stands in, or `null`), `team`, `track` |
| `Game` (L4258) | `bases[]` (every live base), `teams[]`, `lastTeamSOD` |

Every live base has at least one host. A team usually has one base, but can temporarily have several after
an enemy splits it (§5.3). Several units point at the same `Base` object, so they share one polygon, one
area and one outline in the spatial grid.

**Vertices are shared objects.** That is the key to the whole design. A `Vec2` keeps the list of committed
segments that use it (`point.segments`). When two shapes use the *same* `Vec2` object, each one can find
the other. Teams depends on that in three places:

1. When you cross a mate's trail, the crossing point is put into both trails (§3).
2. When you capture, your trail's points become vertices of the shared polygon (`left`/`right`, L2223-2250).
3. So, after the capture, a mate's trail point that you crossed is now **on the base outline**. That is how
   `handleCross` finds the mate's loops (§6).

## 2. `Base.hosts`, `join`, `leave`, `hasHost`

```js
// L2524-2538
join(unit)    { this.hosts.push(unit); unit.base = this; unit.in = this; }
leave(unit)   { var index = this.hosts.indexOf(unit); this.hosts.splice(index, 1); }
hasHost(unit) { return this.hosts.includes(unit); }
hasSomeHost() { return !!this.hosts.length; }
```

- `join` is the only way a unit gets a base. The spawner creates the base with `game.createBase(points)`
  (L4434, which pushes it to `game.bases`) and then calls `join(bot)`. Mates call `leader.base.join(bot)`
  (L6579-6588). The player goes through `Game.joinToTeam` (L4460-4466).
- `leave` is called only from `kill` (L4616). The base outlives the unit while other hosts remain (§7).
- `hasHost` is the "is this my territory?" test. It replaces classic's `unit === this.unit`:

```js
// L2566-2574  (the plural handler is the live one; the singular handleIntersect L2557 and
//              handleSelfIntersect/handleEnemyIntersect L2693-2778 are dead code: they read
//              `intersection.overlay`, a getter that throws (L2134-2136))
handleIntersects(intersections, unit, movement, game) {
  if (intersections.length) {
    if (this.hasHost(unit)) this.handleSelfIntersects(intersections, unit, movement, game);
    else                    this.handleEnemyIntersects(intersections, unit, movement, game);
  }
}
```

So **any host touching the outline of the shared base is "at home"**, including the parts a mate just
captured. A mate whose base is a *different* friendly `Base` (after a split) gets enemy handling: it
enters with `in = thatBase` and its trail keeps growing.

### Entering and leaving (zn tests)

`handleSelfIntersects` (L2654-2692) inserts the crossing point into the polygon. It then sums the `zn`
crossing signs of the movement against the two new half-segments, and decides with
`checkSelfLeave` / `checkSelfEntry` (L2636-2653):

```js
// L2666-2691
if (unit.in === this) {
  if (this.checkSelfLeave(movement, point, znSum)) {      // leaving home: trail starts at a base vertex
    unit.track.add(point); unit.in = null; game.scheme.out(unit); ...
  }
} else if (this.checkSelfEntry(movement, point, znSum)) { // coming home
  unit.track.add(point);
  if (unit.track.polyline.end) {
    var points = unit.track.polyline.points();
    var segments = unit.track.polyline.segments.slice();
    var crossedMates = unit.track.crossedUnits();          // collected BEFORE the trail is removed
    unit.track.remove();
    unit.in = this;                                        // set BEFORE handleReturn (classic: after)
    game.handleReturn(unit, points, segments);
    crossedMates.forEach(function (crossedMate) { return game.handleCross(crossedMate, unit); });
  } else { unit.track.remove(); unit.in = this; }
}
```

`checkEnemyEntry` / `checkEnemyLeave` (L2575-2613) are the same tests for foreign outlines. They are also
reused inside `handleReturn` to find where a trail entered and left other bases (§5.3).

## 3. Crossing a mate's trail: `Track.inject`, `Polyline.insert`

```js
// L3504-3515  Track.handleIntersect(intersection, unit, movement, game): `unit` crossed `this` trail
if (unit === this.unit) { ... game.kill(this.unit, undefined, nearWall ? 2 : 1); }   // own trail / wall
else if (this.unit.team && this.unit.team === unit.team) this.inject(intersection, unit); // MATE: no death
else game.kill(this.unit, unit, 3);                                                   // enemy cut it

// L3487-3491
inject(intersection) { this.polyline.insert(intersection.segment, intersection.point); }

// L3353-3361  Polyline.insert: split the crossed segment at `point`
insert(segment, point) {
  if (!segment.has(point) && !segment.hasEqual(point)) {
    var index = this.segments.indexOf(segment);
    var head = new Segment(segment.start, point).commit(this);
    var tail = new Segment(point, segment.end).commit(this);
    segment.remove();
    this.segments.splice(index, 1, head, tail);
  }
}
```

The mover gets the **same `Vec2`**. In `updateState`, all hits at one spot are merged into one point object
(L4737-4768). After every shape's handler runs, the mover adds that point to its own trail:

```js
// L4818-4821  (inside the per-shape loop of updateState)
if (unit.in !== unit.base) unit.track.add(group2[0].point);
unit.position = group2[0].point;
```

After the crossing, both trails pass through one shared vertex. `Segment.intersect` returns the existing
endpoint object when the hit lands on a vertex (L2131), so a hit on a vertex is also shared even though
`insert` does nothing in that case.

### `Track.crossedUnits` (L3416-3438)

This walks every point of my trail and collects the trail owners found in `point.segments`. It keeps those
that are not me and are **hosts of my base**. It returns `[]` unless `this.unit.base.hosts.length > 1`, so a
solo base never pays for it. Because the vertex is shared, this finds mates in both cases: mates whose trail
I crossed (inject into theirs, add to mine), and mates who crossed my trail (inject into mine, add to theirs).

### `Track.truncate` (L3439-3462) and `Polyline.truncate` / `rebuild` (L3286-3318)

```js
// Track.truncate: cut the trail back to its LAST point that lies on my base outline
var polygon = this.unit.base.polygon;
var lastBaseContact = this.polyline.segments.reduce(function (acc, segment, index) {
  return segment.start.segments.some(function (s) { return s.shape === polygon; }) ? index : acc;
}, -1);
this.polyline.truncate(lastBaseContact);  // drops segments[0 .. i-1]; no-op for i <= 0
// then rebuilds simplyline and length from the remaining segments
```

`Polyline.truncate(count)` removes and uncommits the first `count` segments, fixes `start`/`end`, and
`rebuild()`s bounds and the Path2D.

## 4. Movement order (why the above is consistent)

`updateState` (L4717-4861) has the same structure as our `handleUnitMovements`. It cuts each step at the
nearest group of hits and orders the hit shapes: the shape you are `in` first, then **trails before bases**
(L4787-4802). It then calls `shape.owner.handleIntersects(hits, unit, segment, game)` once per shape. So
at a spot where a mate's trail lies on the base outline, the inject runs before the home-entry check.

## 5. `Game.handleReturn(unit, points, segments)` (L5417-5847)

The trail comes in as explicit arrays, so `handleCross` can replay sub-trails of a mate (§6).

### 5.1 Splice the loop into the shared polygon (L5421-5460)

This is the same shoelace split as classic. It finds the polygon indexes of the first and last trail
points. It then builds `candidate` = removed arc + trail. If `candidate` is clockwise, the base keeps the
other side (`right`); otherwise it keeps this side (`left`). `rise` is the newly enclosed polygon. Two
differences from classic:

- If either end is not a vertex of `unit.base` (`index === -1`), **nothing happens**. The trail is simply
  dropped, with no capture.
- If both ends are the same vertex (`index === index2`), the unit is killed with reason 1 (L5841-5842).

### 5.2 Kills, enemies only (L5461-5471)

```js
this.units.filter(function (unit2) { return unit2.team !== unit.team && !unit2.death; }).forEach(function (enemy) {
  if (enemy.in === enemy.base && rise.inside(enemy.position)) game.kill(enemy, unit, 5);           // surrounded
  else if (enemy.track.polyline.start && rise.inside(enemy.track.polyline.start)) game.kill(enemy, unit, 4); // exit captured
  else if (rise.inside(enemy.position)) enemy.in = unit.base;                                      // now on our land
});
```

Then `scheme.comeback(unit, {increment, rise, game})` runs (L5472-5477).

### 5.3 Walk the trail through other bases: cut, split, merge (L5478-5827)

For each trail point (`visitPoint`, L5481-5688), the code collects the segments of *other* bases that pass
through that point (`isBase && owner !== unit.base`, L5487-5489). It opens a visit on an entry, using
`checkEnemyEntry`-style zn logic (L5633-5681), and closes it on a leave via `checkEnemyLeave` (L5510).

- **Enemy base** (`visit.shape.owner.team !== unit.team`, L5514-5617): the chord through the base splits it
  into `cutPoly` (removed arc + chord) and `keptPoly`. Hosts are assigned to a side by their position (if
  `in` their base) or by their trail start (L5544-5553).
  - All hosts on one side: that side survives through `polygon.right/left`, as in classic. `lostPart` gets
    destruct particles via `scheme.decrease`, and non-hosts standing in it get `in = null` (L5599-5616).
  - **Hosts on both sides: split.** Two new `Base`s (`baseA` = cutPoly, `baseB` = keptPoly) are created.
    Each takes its hosts (`base`, and `in` if they stood in the old base). Enemies standing in the old base
    are re-pointed. The old base is removed from `game.bases` and `team.bases`, and both new ones are added
    (L5554-5598). **Nothing is lost in a split**: no area is subtracted and `decrease` is not called.
- **Friendly base that is not mine** (same team, different `Base`, which only exists after a split): the
  visit is stored as a merge candidate (L5618-5630). After the walk, each friendly base is **merged into
  mine** (L5689-5827). The code stitches the friendly outline between the entry and leave marks with my
  trail pieces into `mergedSegments` and splices them into my polygon. It then moves all the friendly base's
  hosts into `base.hosts`, re-points `in`, deletes the friendly base, and for every host of the merged base
  (except the returner): if it now stands inside, it is home (`in = base`, trail removed), and in any case
  its trail is truncated to the new outline.

### 5.4 Mates inside the new area (L5828-5840)

```js
if (unit2.team === unit.team && rise.inside(unit2.position)) {
  unit2.in = unit.base;
  if (unit.base.hasHost(unit2)) { game.handleCross(unit2); unit2.track.remove(); }   // swallowed mate is home
}
```

## 6. `Game.handleCross(mate, by)` (L5355-5416): capture a mate's loops for them

This runs for every mate in `crossedMates` after a host comes home (L2684-2686), recursively (L5413-5415),
and for mates swallowed by a capture (§5.4).

1. Find the mate's trail points that now lie on the base outline (`point.segments` has a segment of
   `mate.base`, L5358-5375). These are the shared crossing points that the capture turned into vertices,
   plus the mate's original exit vertex.
2. Walk them in order and pair a **leave** (`checkSelfLeave`) with the next **entry** (`checkSelfEntry`),
   using the trail segment at each contact (L5376-5403). Each pair is a loop of the mate's trail that
   leaves and re-enters the base: `loop.track` / `loop.segments` (L5404-5407).
3. If there are loops: `crossedMates = mate.track.crossedUnits()`, then `mate.track.truncate()` cuts the
   trail back to its last base contact (L5408-5409).
4. `handleReturn(mate, loop.track, loop.segments)` for each loop (L5410-5412). The capture is made **in
   the mate's name**, so `scheme.comeback` credits the mate's `personalPercent`, and kills by it count for
   the mate.
5. Recurse into the mates that the mate had crossed, except `by` (L5413-5415).

Net effect: when you get home, every mate whose trail you tangled with gets its enclosed loops filled in.
Its trail is shortened to start at the new outline, and it keeps running from there. Nobody dies.

## 7. Death (`Game.kill`, L4602-4648): the base stays while a host remains

```js
unit.track.remove();
unit.base.leave(unit);
if (!unit.base.hasSomeHost()) {                 // last host gone: destroy the base
  genDestructParticles(...); unit.base.remove();
  game.bases.splice(...); unit.team.bases.splice(...);
  this.units.forEach(function (u) { if (u !== unit && u.in === unit.base) u.in = null; });
}
unit.team.units.splice(...); if (!unit.team.units.length) this.removeTeam(unit.team);  // frees the skin
```

- A dead member's territory **stays** with the team. Only its trail goes (with particles from
  `scheme.death`). Vertices it inserted into the outline stay.
- Unless the reason is 6 ("removed"), the dead unit's team gets `suspendSpawn = lerp(5000, 20000,
  1 - (team.top-1)/(teamsCount-1))` (L4607-4614). The leading team waits 20 s, the last-placed one 5 s.
- The killer gets `scheme.kill` (a label), `achievements.onKill`, and `statistics.kills++`.

## 8. Spawner (`spawner`, L6504-6650)

- **`respawn(game)`** runs every tick, first thing in `update` (L4924):
  1. While `teams.length < teamsCount`: spawn one founder `{place: "player"}` (near the player), then
     `"center"`, falling back to `"bounds"` (70%) or `"random"` (L6507-6523). A founder needs
     `!game.visible` (warm-up) or `checkTeamSpawn()`, i.e. 3 s since the last team was created/removed.
  2. For each team with `suspendSpawn < 0` and fewer than `teamSize` units, the **leader** is the first
     member standing in its base (`u.in === u.base`). A bot spawns on it, and the team waits again
     (L6529-6541).
- **`spawnBot(game, {leader, place, ...})`** (L6543-6605):
  - With a leader: `position = leader.position.clone()` and `leader.base.join(bot)`. The bot starts inside
    the shared base, standing on the leader.
  - Without one: `game.getspawnPosition(place, r)` (L4382-4433) picks a point that is not inside any unit's
    base, at least `r+2R` from every base's simplified vertex, and at least `r+2R·k` from every trail point
    (`k = lerp(3, 1, player.percent)`). The bot then gets a circular base of `round(2π·r·0.25)` vertices, a
    new `Team`, and a palette skin.
- **`spawnPlayer(game, {name})`** (L6606-6649): candidates are members of non-full teams (or of all teams
  if every team is full) that stand in their base. The player is placed **on a random one** and joins its
  team and base. If nobody is in base, the code loops over random units until the point just behind one's
  trail start is inside that unit's base (an unbounded `do…while`). If the team now exceeds `teamSize`, the
  unit you spawned on is killed with reason 6. The player's chosen skin and extra-life `percent` are ignored.

## 9. Allies: kills and crossings

| Situation | Outcome | Ref |
|---|---|---|
| I cross a mate's trail | point injected into its trail and mine; no death | L3511-3512, L4818-4820 |
| I cross my own trail / hit the wall | death 1 / 2 | L3505-3510 |
| I come home with crossed mates | `handleCross` captures their loops for them and truncates their trails | L2680-2686, L5355 |
| My capture encloses a mate standing on our base's land | `in = base`; it is "home" (`handleCross`, trail removed) | L5828-5840 |
| My capture encloses a mate's trail start or position | **never** a kill: the kill loop filters `team !==` | L5461-5463 |
| My trail goes through a mate's separate base | merged into my base, hosts moved | L5618-5630, L5689-5827 |
| I enter a mate's separate base | enemy-style entry (`in = thatBase`), trail continues | L2566-2572, L2614-2635 |
| An enemy captures part of a base we share | cut; **split** into two bases if hosts end up on both sides | L5544-5598 |

The AI also ignores mates (`unitDanger`/`nearestEnemyDistance` skip `team ===`, L3618, L3634; the
long-trail attacker is never a mate, L5032). See ANALYSIS.md §4.

## 10. Score and win

- `TeamScoreScheme` (L6368-6503). `assign` gives each unit `scheme = {personalPercent: 0}`. `comeback` does
  `personalPercent += rise.square() / arena` (L6464-6470), including captures credited through
  `handleCross`. It never decreases. `scores = personalPercent*100` sorts `game.units`, and `unit.top` is
  that rank.
- `unit.percent = unit.base.square / arena` (L4944-4945) is the share of *its base*, so all hosts of one
  base show the same number. `team.percent = Σ team.bases square / arena` (L4970-4977), and `team.top`
  ranks teams (L4978-4982).
- **Win:** `checkEnd` returns the player as winner when `player.team.percent > 0.9999` (L6382-6393). Then
  `gameOver(0)` runs, and after `winDelay` every unit is killed with reason 6 (L4572-4582). The round
  otherwise ends only when the player dies. There is no timer, and the player never respawns.

## 11. What the original keeps true (measured)

`modes/teams/probes/invariants.ts` runs the original (readable) build deterministically. It checks
bookkeeping every simulated second, plus overlap: base vertices strictly inside another base, and a 10 px
grid sample of the arena. Bots keep playing after the player dies.

Six seeds, 400 s each, checked once per simulated second:

| Seed | Splits | Bases removed in a return (merge or wipe) | Overlap cells | Violations |
|---|---|---|---|---|
| 1 | 5 | 3 | 0 | 1× trail start not a base vertex (t=390 s, see §12) |
| 2 | 1 | 3 | 0 | none |
| 3 | 1 | 2 | 0 | none |
| 4 | 4 | 2 | 0 | none |
| 5 | 3 | 4 | 0 | none |
| 6 | 6 | 5 | 0 | none |

The original kept every other invariant in all six runs:

- No overlap between any two bases, of the same team or of different teams.
- A unit with no trail was always in its own base.
- Hosts and bases always agreed, and no base was left without hosts.
- No ally ever killed an ally.
- The team percents never summed past 1.

So the port can **assert** these strictly. The probe's
"merge or wipe" counter cannot tell a friendly merge from a base whose last host died during the return.

## 12. Uncertainties

- **The split branch might create overlap.** When hosts sit on both sides of a chord, both pieces survive
  whole and nothing is subtracted (L5554-5598). That is only safe if the attacker's `rise` never covers
  either piece. It holds whenever surviving hosts are outside `rise` (hosts inside it were already killed
  with reason 4/5). I could not prove it for trails that pass through one enemy base several times. The
  probe has not seen an overlap (§11), but splits are uncommon (1-6 per 400 s run).
- **A capture can be dropped silently (a bug in the original, traced).** `handleReturn` does nothing when
  the trail start is no longer a polygon vertex (`index === -1`, L5428). The probe hit this once (seed 1,
  t≈390 s), and I traced it:
  - A mate came home, and `handleCross(MMER, by)` found two loops (49 and 119 points).
  - `handleCross` truncates the trail **before** replaying the loops (L5409, then L5410-5412). The second
    loop's `left/right` splice then removed the vertex where the truncated trail started.
  - MMER's position also ended up inside the base, but §5.4 skips the returner itself (`unit2 !== unit`).
  - So MMER stayed `in = null` with a 13-segment trail that started *inside* its own base. Its next return
    (32 ticks later) had `firstOnBase = false`, and the trail was discarded with no capture.
  - Port fix, team-only: after the loop returns in `handleCross`, if the mate stands inside its base, make
    it home (`insideBase = base`, `track.remove()`). Otherwise `truncateToBase()` again. Count both cases
    in the stress test.
- The friendly-merge stitch (L5733-5791) is long, index-based ring logic. I understand its intent (§5.3)
  but have not verified every orientation case. It is the riskiest piece to port.
- `unit.in = this` is set **before** `handleReturn` in teams but after it in classic. I believe this only
  matters to code that reads the returner's `in` during the return, and I found none that does, but I have
  not checked every branch.

---

# Port plan

## Constraints

- **Classic must not change behaviour at all.** `bun scripts/golden.ts` must stay `11a98dae6745f942` and
  `bun run parity` must stay unchanged after every step. Classic has exactly one host per base, so every
  generalisation below must reduce to today's code when `hosts.length === 1` and `team === null`. No new
  `rng()` draws may run on classic paths, and no new iteration order may affect classic either.
- Keep our data model: `insideBase`, `area`, `simplifiedPoints`, and the recorded `track.intersections`.
  Port the *rules*, not the 676 idioms (`in`, `square`, the zn re-tests).
- Gate team-only work on `unit.team !== null` / `areAllies` / `base.hosts.length > 1`. Those are always
  false or trivially true in classic.

## Function-by-function

Ordered by dependency. Each item lists the original code, what ours does today, and the change.

1. **`Base` gets hosts** (`src/game/base.ts`; teams L2511-2538)
   - Today: `unit: Unit`, and every unit owns a base built in `Unit` constructor (`units.ts:96`).
   - Change: add `hosts: Unit[] = [unit]` and `team`. Add `join(u)` (push, `u.base = this`,
     `u.insideBase = this`), `leave(u)` and `hasHost(u)`. Keep `unit` as the primary host (`hosts[0]`) so
     classic reads keep working. Let `Unit`'s constructor accept `basePoints = null` (no own base) so mates
     can `join` an existing base.
   - Classic: unchanged (the ctor still builds the same polygon; `hosts` is additive).
2. **Dispatch on hosts** (`Base.handleIntersect`; teams L2566-2574)
   - Change: `unit === this.unit` becomes `this.hosts.includes(unit)`. In `handleSelfIntersect`, use the
     crossing `unit` instead of `this.unit` for `onScoreChanged()` and `game.handleReturn(...)`. In the
     self branch they are the same unit for classic.
3. **`Game.kill` leaves the base instead of removing it** (`game.ts:625-671`; teams L4602-4648)
   - Change: `unit.base.leave(unit)`. Only when `hosts.length === 0`: base particles, `base.remove()`, the
     `insideBase = null` reset, and dropping it from `team.bases`/the game base list. Trail particles stay
     unconditional.
   - Team-only: `team.suspendSpawn` from rank (not for `DEATH_REMOVED`).
   - Classic: same statements in the same order, because the last host always leaves.
4. **`Polyline.insert`, `truncate`, `rebuild`** (`src/engine/polyline.ts`; teams L3286-3318, L3353-3361)
   - New methods, never called in classic. `rebuild` must re-create `path` with `moveTo(start)`.
5. **Ally branch in `Track.handleIntersect`** (`track.ts`; teams L3511-3512 + L4818-4820)
   - Today: `!areAllies` → kill, otherwise nothing.
   - Change, in the ally branch only: `this.polyline.insert(intersection.segment, intersection.point)`,
     then `if (unit.insideBase !== unit.base) unit.track.add(intersection.point)`. Our movement loop does
     not add mid-step hit points to the mover's trail, so the ally branch has to do it, or no vertex is
     shared.
   - Our `Segment.intersect` already returns the existing endpoint object for a hit on a vertex
     (`src/engine/segment.ts:116`), as teams does at L2131. Hits on a vertex are therefore shared too.
6. **`Track.crossedTeammates()` and `Track.truncateToBase()`** (teams L3416-3462)
   - Return `[]` unless `base.hosts.length > 1`.
   - `truncateToBase` must also rebuild `simplifiedPoints` and `length`, and drop `track.intersections`
     records whose point is no longer on the trail.
7. **Home entry collects crossed mates** (`Base.handleSelfIntersect` self-entry; teams L2675-2687)
   - Before `unit.track.remove()`, take `crossed = unit.track.crossedTeammates()`. After `handleReturn`,
     run `crossed.forEach(m => game.handleCross(m, unit))`. Empty in classic.
8. **`handleReturn(unit, trail = unit.track)`** (`game.ts:1197-1376`; teams L5417)
   - Refactor so it can take a sub-trail: a polyline (or points + segments) plus its slice of recorded
     `intersections`. The classic call passes the default, so the code path is identical.
9. **Base-only contacts in the walk** (`game.ts:1251`; teams L5487-5489)
   - Today the filter keeps any owner that is not my track or base. With injected points, a **mate's Track**
     shows up as a contact and hits `throw new Error("Это не база")`.
   - Change: add `segment.shape.owner instanceof Base`. Classic never has shared trail vertices, so the
     filter is a no-op there.
10. **Kill filter, then mates inside `captured`** (`game.ts:1231-1243`, `1362-1366`; teams L5461-5471, L5828-5840)
    - The kill filter already skips allies.
    - Add a team-only branch to the final loop: an ally inside `captured` gets `insideBase = base`. If it
      is a host of my base: `handleCross(mate)`, then `mate.track.remove()`.
11. **`Game.handleCross(mate, by)`** (new; teams L5355-5416)
    - Find base-contact points on the mate's trail, pair leave/entry, slice the sub-trails, then
      `truncateToBase`, `handleReturn(mate, sub)` for each, and recurse into crossed mates except `by`.
    - Truncate/re-check **after** the loop returns, not before (see §12, the original drops captures here).
    - Leave/entry can come from our recorded `intersections` (enter flags) for the exit vertex, but
      injected points have **no record**. Port `checkSelfLeave/checkSelfEntry` (zn sums, L2636-2653) as
      helpers for this one use, to stay faithful.
12. **Enemy cut by all hosts, with split** (`cutBase`, `game.ts:1279-1335`; teams L5544-5598)
    - Replace the single `owner.unit` side test with `hostsCut` / `hostsKept` over `owner.hosts`. One
      host means one side is empty, so classic is unchanged.
    - When both sides are non-empty: build two `Base`s, move hosts and their `insideBase`, re-point enemies
      standing in the old base, and replace it in team and game lists. No `lost` area and no victims entry.
13. **Friendly merge** (`game.ts:1339-1350` currently just skips allied bases; teams L5618-5630, L5689-5827)
    - Collect allied-base visits as merge candidates, then stitch them into `base.polygon` after the walk.
      Move hosts, delete the friendly base, and for each moved host: home if inside, `truncateToBase()`
      either way. This is the largest and riskiest item; port it last, behind the invariant suite.
14. **Area bookkeeping** (`game.ts:858` `unit.lastArea`; teams `base.lastSquare`)
    - The `increment` passed to `comeback` is `base.area - unit.lastArea`. With shared bases and chained
      `handleCross` returns in one tick, that double-counts. The team scheme must score `rise.area()` (as
      teams does). Leave `lastArea` alone for classic.
15. **Spawner** (`modes/teams.ts spawnBots`, `game.spawnBot`, `game.spawnPlayer`; teams L6504-6650)
    - Replace the prototype, where each mate had its own base. A founder spawns via `getSpawnPosition`
      with a circular base and a new `Team`. A member spawns **on a leader standing in base** and calls
      `leader.base.join(bot)`, with no own base. The player joins a random in-base member of a non-full
      team, and the extra bot is removed (`DEATH_REMOVED`).
    - Add rank-scaled `suspendSpawn` and the 3 s founder throttle. Use `game.rng()` everywhere. Cap the
      original's unbounded `do…while`.
    - Classic `spawnBot`/`spawnPlayer` stay untouched: put teams paths behind the mode.
16. **Team score and win** (`modes/teams.ts hasWon`, `scoring.ts`; teams L6368-6503, L4969-4982)
    - `team.area = Σ bases area`, using exact areas instead of the prototype's grid sampling. Win when
      `team.area / arena > 0.9999`. `TeamScoreScheme` uses personal `Σ rise.area()`. Ranks: units by
      personal score, teams by area.
17. **Rendering** (`render/game-renderer.ts`)
    - Draw each base **once** from a deduplicated set (`new Set(units.map(u => u.base))` or a game-level
      list), not once per unit. Colour bases by `team.skin`.

## Stress-test invariants

Check these every N ticks over many seeds × long runs, in teams mode. Assert the classic ones on classic
too.

1. **Bases of different teams never overlap.** No base vertex strictly inside (> 1 px) another team's
   base, and a 10 px grid sample has no point inside two bases.
2. **A unit with no trail is in its own base:** `!track.polyline.start ⇒ insideBase === base &&
   base.polygon.inside(position)`.
3. Conversely, a unit with a trail is not in its own base: `track.polyline.start ⇒ insideBase !== base`.
4. Same-team bases do not overlap either. The original never showed it.
5. Hosts and bases agree. Every live base has ≥ 1 host. For each host, `host.base === base` and
   `host.team === base.team`. Every `unit.base` is a live base and `unit ∈ unit.base.hosts`. `team.bases`
   ⊆ the game's bases, and each base is in its team's list. `unit ∈ unit.team.units`.
6. `insideBase` is `null` or a live base, never a removed one.
7. **No allied kills:** no `kill(victim, killer)` with `areAllies(killer, victim)`.
8. All hosts of a base report the same `percent`. `Σ team.area ≤ arena area` (+ε). Every base has area > 0.
9. Outline integrity: every segment of every polygon/polyline is committed on both endpoints (the existing
   `checkBaseCommits`, extended to trails and the shared vertices from `insert`).
10. While outside its base, a unit's trail start is a vertex of its base. The original breaks this rarely
    (§11, §12), and each break is a silently lost capture. Assert it in the port, which should apply the
    §12 fix; use it as a soft count only when replaying the original.
11. Classic guards: `hosts.length === 1` for every base, `crossedTeammates()` always `[]`,
    golden = `11a98dae6745f942`, `bun run parity` unchanged.
12. Teams determinism: one seed gives one hash. Add a teams golden. Rule-path counts (inject,
    handleCross, split, merge, kill reasons) should be in the same range as the original's
    (`probes/compare-builds.ts` prints them).
