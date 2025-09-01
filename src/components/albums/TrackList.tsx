import { usePlayer } from "@/hooks/usePlayer";
import { Button } from "../ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";

function TrackList() {
  const { isPlaying, setIsPlaying } = usePlayer();

  return (
    <div className="w-full space-y-2">
      {/* Track item */}
      <div className="flex justify-between items-center group rounded-lg px-3 py-2 hover:bg-white/5 transition">
        {/* Left: Number + Title */}
        <div className="flex items-center gap-4">
          {/* Number / Play button */}
          <div className="relative w-6 text-gray-400 flex justify-center items-center">
            <span className="group-hover:opacity-0">1</span>
            <Button
              variant="ghost"
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute h-full inset-0 -left-0.5 opacity-0 group-hover:opacity-100 transition flex items-center justify-center hover:bg-transparent"
            >
              {isPlaying ? (
                <PauseIcon size={16} fill="white" />
              ) : (
                <PlayIcon size={16} fill="white" />
              )}
            </Button>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="font-medium text-white group-hover:text-red-400 transition">
              Nỗi Đau Giữa Hòa Bình
            </span>
            <span className="text-sm text-gray-400">10 Tr lượt phát</span>
          </div>
        </div>

        {/* Right: Duration */}
        <span className="text-sm text-gray-400 pr-3">5:20</span>
      </div>
    </div>
  );
}

export default TrackList;
