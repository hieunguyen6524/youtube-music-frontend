import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";
import type { AppStateContextType } from "../types/appStateTypes";

export function useAppState(): AppStateContextType {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}
