import { Vec2 } from "../engine/vec2";
import type { Config } from "../config";
import type { Game } from "../game/game";
import { Team } from "../game/team";
import type { Player, Unit } from "../game/units";
import type { GameMode } from "./mode";

export interface TeamsOptions {
  teamsCount: number;
  teamSize: number;
  /** Share of the arena the player's team must cover to win. */
  winCoverage: number;
}

const DEFAULT_OPTIONS: TeamsOptions = { teamsCount: 5, teamSize: 6, winCoverage: 0.99 };
/** Coverage is estimated on a grid of SAMPLES x SAMPLES points, refreshed every COVERAGE_TICKS. */
const SAMPLES = 48;
const COVERAGE_TICKS = 30;

/**
 * Teams of bots (plus the player) share a colour, never kill each other and win together.
 * Prototype: each member still owns its own base; same-coloured bases read as one territory.
 */
export class TeamsMode implements GameMode {
  readonly id = "teams";
  readonly playerSkins = false;
  readonly config: Partial<Config>;
  readonly options: TeamsOptions;
  teams: Team[] = [];
  private coverageCache = new Map<Team, number>();
  private coverageCycle = -1;

  constructor(options: Partial<TeamsOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.config = { botsCount: this.options.teamsCount * this.options.teamSize - 1 };
  }

  spawnBots(game: Game) {
    this.teams = this.teams.filter(team => team.units.length > 0);
    if (this.teams.length < this.options.teamsCount) {
      const founder = game.spawnBot(game.rng() > 0.3 ? "bounds" : "random");
      if (founder) {
        const team = new Team(founder.skin);
        team.add(founder);
        this.teams.push(team);
      }
      return;
    }
    const team = this.smallestTeam(this.teams.filter(team => team.units.length < this.options.teamSize));
    if (team) {
      const anchor = team.units[Math.floor(game.rng() * team.units.length)];
      game.spawnBot("near", { team, near: anchor });
    }
  }

  /** The player joins the closest team that still has room (any team if all are full). */
  onPlayerSpawned(game: Game, player: Player) {
    const open = this.teams.filter(team => team.units.length < this.options.teamSize);
    const team = this.closestTeam(open.length ? open : this.teams, player);
    if (!team) {
      const own = new Team(player.skin);
      own.add(player);
      this.teams.push(own);
      return;
    }
    game.skinManager.release(player.skin);
    team.add(player);
  }

  hasWon(game: Game, player: Player) {
    return player.team !== null && this.coverage(game, player.team) >= this.options.winCoverage;
  }

  /** Share of the arena covered by any base of `team` (sampled, cached for COVERAGE_TICKS). */
  coverage(game: Game, team: Team): number {
    if (game.cycle - this.coverageCycle >= COVERAGE_TICKS) {
      this.coverageCache.clear();
      this.coverageCycle = game.cycle;
    }
    let value = this.coverageCache.get(team);
    if (value === undefined) {
      value = sampleCoverage(game, team.units);
      this.coverageCache.set(team, value);
    }
    return value;
  }

  private smallestTeam(teams: Team[]): Team | undefined {
    return teams.reduce<Team | undefined>((best, team) => (!best || team.units.length < best.units.length ? team : best), undefined);
  }

  private closestTeam(teams: Team[], unit: Unit): Team | undefined {
    let best: Team | undefined;
    let bestDistance = Infinity;
    for (const team of teams) {
      for (const member of team.units) {
        const distance = member.position.distance2(unit.position);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = team;
        }
      }
    }
    return best;
  }
}

/** Fraction of grid sample points inside the arena that lie in at least one of the units' bases. */
const sampleCoverage = (game: Game, units: Unit[]): number => {
  const { center } = game.grid;
  const { radius } = game.border;
  const step = (radius * 2) / SAMPLES;
  let inside = 0;
  let covered = 0;
  for (let i = 0; i < SAMPLES; i++) {
    for (let j = 0; j < SAMPLES; j++) {
      const point = new Vec2(center.x - radius + (i + 0.5) * step, center.y - radius + (j + 0.5) * step);
      if (point.distance(center) > radius) {
        continue;
      }
      inside++;
      if (units.some(unit => unit.base.polygon.inside(point))) {
        covered++;
      }
    }
  }
  return inside ? covered / inside : 0;
};
