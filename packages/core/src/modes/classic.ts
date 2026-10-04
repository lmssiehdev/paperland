import type { Game } from "../game/game";
import { ClassicScoreScheme } from "../game/scoring";
import type { Player } from "../game/units";
import type { GameMode } from "./mode";

/** The original single-player rules: every unit for itself, win by owning the whole arena. */
export class ClassicMode implements GameMode {
  readonly id = "classic";
  readonly config = {};
  readonly playerSkins = true;
  readonly scoreScheme = ClassicScoreScheme;

  spawnBots(game: Game) {
    for (let i = 0; i < game.config.nearPlayerBotSpawnCount; i++) {
      game.spawnBot("near");
    }
    game.spawnBot("center");
    game.spawnBot(game.rng() > 0.3 ? "bounds" : "random");
  }

  onPlayerSpawned() {}

  hasWon(_game: Game, player: Player) {
    return player.percent > 0.9999;
  }
}
