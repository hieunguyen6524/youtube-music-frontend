import { PlayIcon } from "lucide-react";

function PlaylistView() {
  return (
    <div className="flex-1 overflow-y-auto p-3 custom-scroll">
      <div className="flex items-center justify-between gap-4 px-3 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
        {/* Cover + play button */}
        <div className="relative w-8 h-8 group">
          <img
            src="https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj"
            alt="cover"
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <button className="w-6 h-6 flex items-center justify-center rounded-full text-white shadow-lg">
              <PlayIcon size={16} fill="white" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className="font-medium">Đừng Làm Trái Tim Anh Đau</p>
          <p className="text-xs text-zinc-400">Sơn Tùng M-TP</p>
        </div>

        {/* Duration */}
        <span className="text-xs text-zinc-400">4:20</span>
      </div>
    </div>
  );
}

export default PlaylistView;
