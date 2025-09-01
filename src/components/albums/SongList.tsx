// components/SongList.tsx
import type { Song } from "@/types/song";
import { SongItem } from "./SongItem";

type SongListProps = {
  title?: string;
  songs: Song[];
  onShowAll?: () => void;
};

export function SongList({
  title = "Bài hát",
  songs,
  onShowAll,
}: SongListProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>

      <div className="space-y-1">
        {songs.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>

      {onShowAll && (
        <button
          onClick={onShowAll}
          className="mt-2 px-4 py-1 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-full transition"
        >
          Hiển thị tất cả
          {/* nó sẽ gọi api get all song for artist */}
        </button>
      )}
    </div>
  );
}
