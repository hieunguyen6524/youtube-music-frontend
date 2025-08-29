"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const playlists = [
  {
    id: 1,
    title: "Nỗi đau giữa hòa bình",
    artist: "Hòa Minzy",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/QJtcEQWHoUzY73CrMQkqncrCMcA0E3jHtGw32Ll6m-rcty2VQTF2JGIPtAcfvsVQMPk1bsY2lc1GgRs=w544-h544-l90-rj",
  },
  {
    id: 2,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 3,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 4,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 5,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 6,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 7,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    plays: "17 Tr lượt phát",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
];

export default function QuickPlaySection() {
  return (
    <div className="px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-5xl font-bold">Chọn nhanh đài phát</h2>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-full bg-zinc-800 text-sm font-medium hover:bg-zinc-700">
            Phát tất cả
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
            <ChevronLeft />
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Danh sách */}
      {/* <div className="grid grid-flow-col grid-rows-4 gap-4 overflow-x-auto overflow-y-hidden pr-4"> */}
      <div className="group grid grid-flow-col grid-rows-4 gap-4 overflow-x-auto pr-4">
        {playlists.map((song) => (
          <motion.div
            key={song.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/60 cursor-pointer w-64"
          >
            <div className="relative w-14 h-14 rounded-md overflow-hidden">
              <img
                src={song.cover}
                alt={song.title}
                className="w-full h-full object-cover"
              />
              <motion.button
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40"
              >
                <Play size={20} className="text-white" />
              </motion.button>
            </div>
            <div className="flex flex-col truncate">
              <span className="font-semibold truncate">{song.title}</span>
              <span className="text-sm text-zinc-400 truncate">
                {song.artist} • {song.plays}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
