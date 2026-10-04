import type { Config } from "../config";
import type { Game } from "../game/game";
import type { DeathReason } from "../game/constants";
import type { Player, Unit } from "../game/units";

export type ModeId = "classic" | "teams";

/**
 * Rules that differ between game modes. Game calls these hooks at the points where modes diverge;
 * everything else (movement, capture, rendering) is shared. Who is on whose side is data on the
 * units (`Unit.team`, see game/team.ts), not a hook.
 */
export interface GameMode {
  readonly id: ModeId;
  /** Overrides applied on top of the base config when a game is created in this mode. */
  readonly config: Partial<Config>;
  /** Whether the player's chosen skin is used. Team modes colour units by team instead. */
  readonly playerSkins: boolean;
  /** Spawns bots; called once per tick. */
  spawnBots(game: Game): void;
  /** Called right after the player has been added to the game. */
  onPlayerSpawned(game: Game, player: Player): void;
  /** Called at the start of Game.kill, while the unit is still on its team. */
  onUnitKilled?(game: Game, unit: Unit, reason: DeathReason): void;
  /** True when the player has won the round. */
  hasWon(game: Game, player: Player): boolean;
}
