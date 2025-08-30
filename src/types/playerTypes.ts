export type PlayerContextType = {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  currentSong: string | null;
  setCurrentSong: (song: string | null) => void;
  volume: number;
  setVolume: (value: number) => void;
};
