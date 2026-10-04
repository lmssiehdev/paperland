import { ClassicMode } from "./classic";
import type { GameMode, ModeId } from "./mode";
import { TeamsMode } from "./teams";

export type { GameMode, ModeId } from "./mode";

/** Selectable modes, in menu order. */
export const MODES: { id: ModeId; label: string; create: () => GameMode }[] = [
  { id: "classic", label: "Classic", create: () => new ClassicMode() },
  { id: "teams", label: "Teams", create: () => new TeamsMode() },
];

export const createMode = (id: ModeId): GameMode => (MODES.find(mode => mode.id === id) ?? MODES[0]!).create();
