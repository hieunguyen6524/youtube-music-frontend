import { createContext, useState } from "react";
import type { PlayerContextType } from "../types/playerTypes";

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [volume, setVolume] = useState(50);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        volume,
        setVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export { PlayerContext, PlayerProvider };
