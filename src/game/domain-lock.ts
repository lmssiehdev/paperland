import { Player } from "./units";

var fromCharCode = String.fromCharCode;
export var _0x24884b = Object.assign;
const _0x42e000 = [46, [0, 51, 4, 4, 6, 1, 2, 1, 1], [5, 1, 5, 2, 6, 3, 4, 0, 7, 3, 8, 2]];
const _0x5b62ba = [45, [0, 1, 51, 2, 2, 4, 4, 2, 1, 2], [8, 2, 8, 4, 9, 0, 5, 7, 1, 3, 7, 6]] || _0x42e000;
// ORIGINAL: domain lock. Decodes "paperio.site" / "paper-io.com"; on any other host it
// redirects to http://paper-io.com/?bc=<host> after ~3-4 min, and only on the real host does it set
// Player.prototype.moveTo (needed by Game.recoverTail). Disabled for local builds; original kept in
// deob/game.js.
Player.prototype.moveTo = true;
