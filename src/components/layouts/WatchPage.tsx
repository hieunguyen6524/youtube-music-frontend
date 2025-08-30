import { useState } from "react";
import { Button } from "../ui/button";

import TabButton from "../watch/TabButton";
import PlaylistView from "../watch/PlaylistView";
import LyricView from "../watch/LyricView";

function PlayerPage() {
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
    <div className="flex h-full flex-1 overflow-hidden">
      {/* Left: Content (ảnh + info) */}
      <div className="flex-1 h-full flex items-center justify-center overflow-y-auto p-6">
        <div className="h-full w-full gap-24 flex flex-col justify-between items-center px-24">
          {/* Toggle Music/Video */}
          <nav className="flex gap-2 ">
            <Button
              variant="secondary"
              onClick={() => setViewMode("music")}
              className={`rounded-2xl font-bold text-white ${
                viewMode === "music" ? "bg-zinc-700" : "bg-black"
              }`}
            >
              Bài hát
            </Button>
            <Button
              variant="secondary"
              onClick={() => setViewMode("video")}
              className={`rounded-2xl font-bold text-white ${
                viewMode === "video" ? "bg-zinc-700" : "bg-black"
              }`}
            >
              Video
            </Button>
          </nav>

          {/* Cover */}
          <div className="w-full h-auto flex flex-1 justify-center">
            <img
              src="https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj"
              alt="Album cover"
              className="rounded-xl shadow-lg cursor-pointer block object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right: Playlist / Lyric */}
      <div className="w-[500px] border-l border-zinc-800 flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-zinc-800">
          <TabButton
            label="Tiếp theo"
            active={activeTab === "playlist"}
            onClick={() => setActiveTab("playlist")}
          />
          <TabButton
            label="Lời nhạc"
            active={activeTab === "lyric"}
            onClick={() => setActiveTab("lyric")}
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
