import {
  PlayIcon,
  Download,
  Bookmark,
  MoreHorizontal,
  PauseIcon,
  ShareIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { usePlayer } from "@/hooks/usePlayer";

function AlbumInfo() {
  const { isPlaying, setIsPlaying } = usePlayer();

  return (
    <div className="flex flex-col w-1/3 items-center ">
      <div className="w-64 h-64 mb-6">
        <img
          src="https://lh3.googleusercontent.com/QJtcEQWHoUzY73CrMQkqncrCMcA0E3jHtGw32Ll6m-rcty2VQTF2JGIPtAcfvsVQMPk1bsY2lc1GgRs=w544-h544-l90-rj"
          alt="Album cover"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Thông tin album */}
      <p className="text-sm text-gray-300 mb-2">
        <span className="font-semibold">Hoà Minzy</span> và{" "}
        <span className="font-semibold">Nguyen Van Chung</span>
      </p>

      <h1 className="text-2xl font-bold mb-2">Nỗi Đau Giữa Hòa Bình</h1>

      <p className="text-gray-400 mb-1">Đĩa đơn • 2025</p>
      <p className="text-gray-400 text-sm mb-6">1 bài hát • 5 phút, 20 giây</p>

      {/* Nút control */}
      <div className="flex items-center gap-6 mb-12">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-center transition-colors"
        >
          <Download className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-center transition-colors"
        >
          <Bookmark className="w-5 h-5" />
        </Button>

        <Button
          size="icon"
          className="w-12 h-12 rounded-full text-black bg-white"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? (
            <PauseIcon fill="black" size={28} />
          ) : (
            <PlayIcon fill="black" size={28} />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-center transition-colors"
        >
          <ShareIcon className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-center transition-colors"
        >
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default AlbumInfo;
