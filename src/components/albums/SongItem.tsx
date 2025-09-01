import type { Song } from "@/types/song";
import { EllipsisVerticalIcon, Play } from "lucide-react";
// components/SongItem.tsx
type SongItemProps = {
  song: Song;
};

// export function SongItem({ song }: SongItemProps) {
//   return (
//     <div className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-md cursor-pointer transition">
//       {/* Thumbnail */}
//       <img
//         src={song.image}
//         alt={song.title}
//         className="w-12 h-12 rounded object-cover"
//       />

//       {/* Info */}
//       <div className="flex flex-col overflow-hidden">
//         <span className="text-white font-medium truncate">{song.title}</span>
//         <span className="text-sm text-gray-400 truncate">
//           {song.artist}
//           {song.album ? ` • ${song.album}` : ""} • {song.duration} •{" "}
//           {song.plays} lượt phát
//         </span>
//       </div>
//     </div>
//   );
// }

export function SongItem({ song }: SongItemProps) {
  return (
    <div className="flex justify-between items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-md cursor-pointer transition group">
      {/* Thumbnail */}
      <div className="flex gap-3">
        <div className="relative w-12 h-12">
          <img
            src={song.image}
            alt={song.title}
            className="w-full h-full rounded object-cover"
          />

          {/* Play button */}
          <button
            className="
            absolute inset-0 flex items-center justify-center 
            bg-black/60 rounded opacity-0 group-hover:opacity-100 
            transition
          "
          >
            <Play fill="white" className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Info */}
        <div className="flex flex-col overflow-hidden">
          <span className="text-white font-medium truncate">{song.title}</span>
          <span className="text-sm text-gray-400 truncate">
            {song.artist}
            {song.album ? ` • ${song.album}` : ""} • {song.duration} •{" "}
            {song.plays} lượt phát
          </span>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100">
        <EllipsisVerticalIcon />
      </div>
    </div>
  );
}
