import { TAU } from "@paperio/core/engine/math";
import { atan2 } from "@paperio/core/engine/trig";
import { Vec2 } from "@paperio/core/engine/vec2";
import type { InputSource } from "@paperio/core/game/game";

/** Mouse/keyboard steering of the player (moved from Game.readInput, which now delegates to game.input). */
export const readControllerInput: InputSource = (game, dt) => {
  if (!game.controller) {
    return;
  }
  if (game.controller.pressed()) {
    game.keyboard = { ...game.controller.mouse };
    const maxTurn = (TAU * dt) / 1000;
    if (game.controller.keyboardModeSwitch.relativeSteering) {
      let turn = 0;
      if (game.controller.left) {
        turn = -1;
      }
      if (game.controller.right) {
        turn = 1;
      }
      if (turn) {
        game.direction.rotate(turn * maxTurn);
      }
    } else {
      const keyDirection = new Vec2();
      if (game.controller.up) {
        keyDirection.add(new Vec2(0, -1));
      }
      if (game.controller.down) {
        keyDirection.add(new Vec2(0, 1));
      }
      if (game.controller.left) {
        keyDirection.add(new Vec2(-1, 0));
      }
      if (game.controller.right) {
        keyDirection.add(new Vec2(1, 0));
      }
      if (keyDirection.magnitude()) {
        // Core's atan2, not Math.atan2: this steers game.direction (simulation state), which must not depend on
        // the browser's JS engine.
        let angle = atan2(
          game.direction.x * keyDirection.y - keyDirection.x * game.direction.y,
          game.direction.x * keyDirection.x + game.direction.y * keyDirection.y
        );
        if (Math.abs(angle) > maxTurn) {
          angle = Math.sign(angle) * maxTurn;
        }
        game.direction.rotate(angle);
      }
    }
  } else if (game.controller.mouse) {
    if (
      !game.keyboard ||
      (game.keyboard.x !== game.controller.mouse.x && game.keyboard.y !== game.controller.mouse.y)
    ) {
      game.keyboard = null;
      // A controller (and so mouse input) only exists for a game with a view (see GameSession in session.ts).
      game.direction = new Vec2(game.controller.mouse.x, game.controller.mouse.y)
        .sub(new Vec2(game.view!.clientWidth / 2, game.view!.clientHeight / 2))
        .normalize();
    }
  } else if (!game.keyboard && game.controller.lastMouse) {
    game.direction = new Vec2(game.controller.lastMouse.x, game.controller.lastMouse.y)
      .sub(new Vec2(game.view!.clientWidth / 2, game.view!.clientHeight / 2))
      .normalize();
  }
};
