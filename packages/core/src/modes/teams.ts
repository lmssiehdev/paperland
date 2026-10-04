import { lerp } from "../engine/math";
import type { Config } from "../config";
import type { Base } from "../game/base";
import { DEATH_REMOVED } from "../game/constants";
import type { DeathReason } from "../game/constants";
import type { Game, SpawnZone } from "../game/game";
import { TeamScoreScheme } from "../game/scoring";
import { Team } from "../game/team";
import type { Player, Unit } from "../game/units";
import type { GameMode, PlayerPlacement } from "./mode";

export interface TeamsOptions {
  teamsCount: number;
  teamSize: number;
  /** Respawn delay (ms) of the last-placed team after a member dies or spawns. */
  bottomTeamSuspendSpawn: number;
  /** Respawn delay (ms) of the leading team. */
  topTeamSuspendSpawn: number;
}

/** The original teams build: CONFIG `teamsCount: 5, teamSize: 6`, suspend 5 s (last team) to 20 s (top team). */
const DEFAULT_OPTIONS: TeamsOptions = {
  teamsCount: 5,
  teamSize: 6,
  bottomTeamSuspendSpawn: 5000,
  topTeamSuspendSpawn: 20000
};
/** The original's founder base: round(2π · baseRadius · baseDensity) vertices, baseDensity 0.25. */
const BASE_DENSITY = 0.25;
/** Cap on the original's unbounded search for a spot behind a unit's trail start (player fallback). */
const PLAYER_FALLBACK_ATTEMPTS = 100;

/**
 * Teams (port of the original teams build): teammates share one territory (`Base` with several hosts), never
 * kill each other, and win together when the team owns the arena. A founder spawns with a new base and team;
 * members spawn on a teammate standing in the base and join it.
 */
export class TeamsMode implements GameMode {
  readonly id = "teams";
  readonly playerSkins = false;
  readonly scoreScheme = TeamScoreScheme;
  readonly config: Partial<Config>;
  readonly options: TeamsOptions;
  teams: Team[] = [];
  /** ms since a team was created or removed (the original's lastTeamSOD); founders wait spawnTimeout. */
  private sinceTeamChange = 0;
  /** The teammate the player was placed on (removed if the player overfills its team). */
  private playerLeader: Unit | null = null;

  constructor(options: Partial<TeamsOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    const { teamsCount, teamSize } = this.options;
    // botsCount only caps Game.spawnBot; team sizes are what limit the population here.
    this.config = { botsCount: teamsCount * teamSize, baseCount: Math.round(Math.PI * 2 * 30 * BASE_DENSITY) };
  }

  spawnBots(game: Game, dt: number) {
    const { teamsCount, teamSize } = this.options;
    this.sinceTeamChange += dt;
    const alive = this.teams.filter(team => team.units.length > 0);
    if (alive.length !== this.teams.length) {
      this.teams = alive;
      this.sinceTeamChange = 0;
    }
    this.updateTeams(game, dt);
    for (let i = 0; this.teams.length < teamsCount && i < game.config.nearPlayerBotSpawnCount; i++) {
      this.spawnFounder(game, "near");
    }
    if (this.teams.length < teamsCount && !this.spawnFounder(game, "center")) {
      this.spawnFounder(game, game.rng() > 0.3 ? "bounds" : "random");
    }
    this.teams.forEach(team => {
      if (team.suspendSpawn < 0 && team.units.length < teamSize) {
        const leader = team.units.find(unit => unit.insideBase === unit.base);
        if (leader && game.spawnBot("near", { leader })) {
          team.suspendSpawn = this.suspendFor(team);
        }
      }
    });
  }

  /** A dead member holds its team's respawns back, longer for a leading team (the original's Game.kill). */
  onUnitKilled(game: Game, unit: Unit, reason: DeathReason) {
    if (unit.team && reason !== DEATH_REMOVED) {
      unit.team.suspendSpawn = this.suspendFor(unit.team);
    }
  }

  /** The player joins a random teammate standing in its base, preferring teams that are not full. */
  placePlayer(game: Game): PlayerPlacement | undefined {
    const { teamSize } = this.options;
    const open = this.teams.filter(team => team.units.length < teamSize);
    const pool = open.length ? open : this.teams;
    const candidates = pool.flatMap(team => team.units.filter(unit => unit.insideBase === unit.base));
    if (candidates.length) {
      const leader = candidates[Math.floor(game.rng() * candidates.length)];
      this.playerLeader = leader;
      return { leader, position: leader.position.clone() };
    }
    // Nobody is home: spawn just behind some unit's trail start, inside its base.
    const units = game.units.filter(unit => unit.team);
    for (let attempt = 0; units.length && attempt < PLAYER_FALLBACK_ATTEMPTS; attempt++) {
      const host = units[Math.floor(game.rng() * units.length)];
      const first = host.track.polyline.segments[0];
      if (first) {
        const position = first.start.clone().sub(first.vector);
        if (host.base.polygon.inside(position)) {
          this.playerLeader = host;
          return { leader: host, position };
        }
      }
    }
    this.playerLeader = null;
    return undefined;
  }

  onPlayerSpawned(game: Game, player: Player) {
    const leader = this.playerLeader;
    this.playerLeader = null;
    if (!player.team) {
      // No teammate to join (placePlayer found nobody): the player founds a team on its own base.
      const team = new Team(player.skin);
      team.add(player);
      this.teams.push(team);
      this.sinceTeamChange = 0;
      return;
    }
    if (leader && player.team.units.length > this.options.teamSize) {
      game.kill(leader, undefined, DEATH_REMOVED);
    }
  }

  hasWon(game: Game, player: Player) {
    return player.team !== null && player.team.area / game.arenaArea > 0.9999;
  }

  private spawnFounder(game: Game, zone: SpawnZone) {
    if (game.visible && this.sinceTeamChange <= game.config.spawnTimeout) {
      return;
    }
    const founder = game.spawnBot(zone);
    if (founder) {
      const team = new Team(founder.skin);
      team.add(founder);
      this.teams.push(team);
      this.sinceTeamChange = 0;
    }
    return founder;
  }

  /** Respawn delay after a spawn or death, from the team's rank by area. */
  private suspendFor(team: Team) {
    const { teamsCount, bottomTeamSuspendSpawn, topTeamSuspendSpawn } = this.options;
    return lerp(bottomTeamSuspendSpawn, topTeamSuspendSpawn, 1 - ((team.rank || teamsCount) - 1) / (teamsCount - 1));
  }

  /** Counts down respawn delays and refreshes each team's area (sum of its distinct bases) and rank. */
  private updateTeams(game: Game, dt: number) {
    this.teams.forEach(team => {
      team.suspendSpawn -= dt;
      const bases = new Set<Base>(team.units.map(unit => unit.base));
      team.area = 0;
      bases.forEach(base => {
        team.area += base.area;
      });
    });
    this.teams
      .slice()
      .sort((a, b) => b.area - a.area)
      .forEach((team, index) => {
        team.rank = index + 1;
      });
  }
}
