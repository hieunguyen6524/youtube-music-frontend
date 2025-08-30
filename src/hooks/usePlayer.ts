import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import type { PlayerContextType } from "../types/playerTypes";

export function usePlayer(): PlayerContextType {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}
