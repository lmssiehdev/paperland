import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { GameSession } from "../session";

export const GameSessionContext = createContext<GameSession | null>(null);

/** The page's game session; use under GameSessionContext.Provider (main.ts). */
export const useGameSession = (): GameSession => {
  const session = useContext(GameSessionContext);
  if (!session) {
    throw new Error("useGameSession used outside GameSessionContext.Provider");
  }
  return session;
};
