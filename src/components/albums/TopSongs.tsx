import { Play } from "lucide-react";
import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "Nơi Này Có Anh",
    artist: "Sơn Tùng M-TP",
    plays: "427 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/guPkUMfq6XoStEBVJwwWMD5dttVFgi0OXpzHZ0hvPD0kWxdVkrMbMCBNRDZlUy_N953vMI_r-6x1X_IEWQ=w544-h544-l90-rj",
  },
  {
    id: 2,
    title: "Buông Đôi Tay Nhau Ra",
    artist: "Sơn Tùng M-TP",
    plays: "163 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/blW3DNOg0hNm6zVmKj5u2E7Vd_VHmOx19mz46m2_46zrC1q1_-XA_9cdXnIJNZupZ85MPUzkB73_0ArfEA=w544-h544-l90-rj",
  },
  {
    id: 3,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "176 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 4,
    title: "Chúng Ta Không Thuộc Về Nhau",
    artist: "Sơn Tùng M-TP",
    plays: "245 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/WyzaRYap78pVb2_5rJDGiYv9t3bfKVFCl6fXCPpTRvigGgHdZLKuOnhX6MvFDgv82AsCFCITLdyinS8=w544-h544-l90-rj",
  },
  {
    id: 5,
    title: "Nắng Ấm Xa Dần",
    artist: "Sơn Tùng M-TP",
    plays: "89 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/WyzaRYap78pVb2_5rJDGiYv9t3bfKVFCl6fXCPpTRvigGgHdZLKuOnhX6MvFDgv82AsCFCITLdyinS8=w544-h544-l90-rj",
  },
  {
    id: 5,
    title: "Nắng Ấm Xa Dần",
    artist: "Sơn Tùng M-TP",
    plays: "89 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/WyzaRYap78pVb2_5rJDGiYv9t3bfKVFCl6fXCPpTRvigGgHdZLKuOnhX6MvFDgv82AsCFCITLdyinS8=w544-h544-l90-rj",
  },
  {
    id: 5,
    title: "Nắng Ấm Xa Dần",
    artist: "Sơn Tùng M-TP",
    plays: "89 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/WyzaRYap78pVb2_5rJDGiYv9t3bfKVFCl6fXCPpTRvigGgHdZLKuOnhX6MvFDgv82AsCFCITLdyinS8=w544-h544-l90-rj",
  },
  {
    id: 5,
    title: "Nắng Ấm Xa Dần",
    artist: "Sơn Tùng M-TP",
    plays: "89 Tr lượt phát",
    cover:
      "https://lh3.googleusercontent.com/WyzaRYap78pVb2_5rJDGiYv9t3bfKVFCl6fXCPpTRvigGgHdZLKuOnhX6MvFDgv82AsCFCITLdyinS8=w544-h544-l90-rj",
  },
];

export default function TopSongs() {
  const [showAll, setShowAll] = useState(false);

  const visibleSongs = showAll ? songs : songs.slice(0, 5);
  return (
    <div className="text-white space-y-4">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Bài hát hàng đầu</h2>

      {/* Song list */}
      <div className="space-y-3">
        {visibleSongs.map((song) => (
          <div
            key={song.id}
            className="grid grid-cols-12 items-center gap-4 group hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            {/* Cover */}
            <div className="col-span-1">
              <img
                src={song.cover}
                alt={song.title}
                className="w-12 h-12 rounded object-cover"
              />
            </div>

            {/* Title + Artist */}
            <div className="col-span-4">
              <p className="font-medium group-hover:text-green-400 cursor-pointer">
                {song.title}
              </p>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>

            {/* Artist again (giống hình bạn gửi) */}
            <div className="col-span-3 text-gray-300">{song.artist}</div>

            {/* Plays */}
            <div className="col-span-2 text-gray-400">{song.plays}</div>

            {/* Extra column (icon play hoặc tên) */}
            <div className="col-span-2 flex items-center justify-end gap-2">
              <Play className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
              <span className="hidden md:block">{song.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show all button */}
      {songs.length > 5 && (
        <div className="mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 rounded-full border border-zinc-500 hover:bg-zinc-800 text-sm"
          >
            {showAll ? "Thu gọn" : "Hiển thị tất cả"}
          </button>
        </div>
      )}
    </div>
  );
}
