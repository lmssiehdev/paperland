import { ClassicMode } from "./classic";
import type { GameMode, ModeId } from "./mode";
import { TeamsMode } from "./teams";

export type { GameMode, ModeId } from "./mode";

/** Selectable modes, in menu order. */
export const MODES: { id: ModeId; label: string; create: () => GameMode }[] = [
  { id: "classic", label: "Classic", create: () => new ClassicMode() },
  // Teams is hidden from the menu until shared team territory is ported from the original teams
  // build (the current prototype lets teammate bases overlap, which crashes the engine).
];

/** Modes that exist but are not offered in the menu yet. */
const HIDDEN_MODES: typeof MODES = [
  { id: "teams", label: "Teams", create: () => new TeamsMode() },
];

export const createMode = (id: ModeId): GameMode => ([...MODES, ...HIDDEN_MODES].find(mode => mode.id === id) ?? MODES[0]!).create();
