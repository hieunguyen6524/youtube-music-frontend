import { useState } from "react";
import { Button } from "../ui/button";

import { TabButton } from "../watch/TabButton";
import PlaylistView from "../watch/PlaylistView";
import LyricView from "../watch/LyricView";
import { usePlayer } from "@/hooks/usePlayer";
import { PauseIcon, PlayIcon } from "lucide-react";

function PlayerPage() {
  const { isPlaying, setIsPlaying } = usePlayer();
  const [viewMode, setViewMode] = useState<"music" | "video">("music");
  const [activeTab, setActiveTab] = useState<"playlist" | "lyric">("playlist");

  const lyricString = `Hình như trong lòng anh đã không còn hình bóng ai ngoài em đâu (đâu)
  Hằng đêm anh nằm thao thức suy tư chẳng nhớ ai ngoài em đâu (đâu)
  Vậy nên không cần nói nữa yêu mà đòi nói trong vài ba câu
  Cứ cố quá đâm ra lại hâm uhm đau hết cả đầu

  Đợi chờ em trước nhà từ sáng đến trưa chiều tối mắc màn đây luôn (á a a à)
  Ngược nắng hay là ngược gió miễn anh thấy em tươi vui không buồn
  Chỉ cần có thấy thế thôi mây xanh chan hoà
  Thấy thế thôi vui hơn có quà
  Và bước kế tiếp anh lại gần hơn chút đó nha`;

  const lyricLines = lyricString.split("\n");

  return (
    <div className="flex h-full flex-1 overflow-hidden pt-16">
      {/* Left: Content (ảnh + info) */}
      <div className="flex-1 h-full flex items-center justify-center overflow-y-auto p-6">
        <div className="h-full w-full gap-24 flex flex-col justify-between items-center px-24">
          {/* Toggle Music/Video */}
          <nav className="flex w-1/4 gap-2 ">
            <TabButton
              label="Bài hát"
              onClick={() => setViewMode("music")}
              active={viewMode === "music"}
              variant="pill"
              rounded="rounded-full"
            />
            <TabButton
              label="Video"
              onClick={() => setViewMode("video")}
              active={viewMode === "video"}
              variant="pill"
              rounded="rounded-full"
            />
          </nav>

          {/* Cover */}
          <div className="relative w-full h-auto flex flex-1 justify-center">
            <img
              src="https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj"
              alt="Album cover"
              className="rounded-xl shadow-lg cursor-pointer block object-contain"
            />
            <Button
              variant="ghost"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full h-full absolute inset-0 flex items-center justify-center  opacity-0 hover:bg-black/20 hover:opacity-100"
            >
              {!isPlaying ? (
                <PlayIcon size={32} fill="white" />
              ) : (
                <PauseIcon size={32} fill="white" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Playlist / Lyric */}
      <div className="w-[500px] border-l border-zinc-800 flex flex-col ">
        {/* Tabs */}
        <div className="flex border-b border-zinc-800 ">
          <TabButton
            label="TIẾP THEO"
            onClick={() => setActiveTab("playlist")}
            active={activeTab === "playlist"}
            variant="underline"
          />
          <TabButton
            label="LỜI NHẠC"
            onClick={() => setActiveTab("lyric")}
            active={activeTab === "lyric"}
            variant="underline"
          />
        </div>

        {/* Content */}
        {activeTab === "playlist" ? (
          <PlaylistView />
        ) : (
          <LyricView lyrics={lyricLines} />
        )}
      </div>
    </div>
  );
}

/* ------------------- Sub Components ------------------- */

export default PlayerPage;
