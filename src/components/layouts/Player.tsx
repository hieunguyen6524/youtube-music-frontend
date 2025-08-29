import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  PauseIcon,
  EllipsisVerticalIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipBackIcon,
  PlayIcon,
  SkipForwardIcon,
} from "lucide-react";

import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

type PlayerProps = {
  openPlayerPage: React.Dispatch<React.SetStateAction<boolean>>;
};

function Player({ openPlayerPage }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [showVolumControl, setShowVolumControl] = useState(false);
  const [isHoverFooter, setIsHoverFooter] = useState(false);

  return (
    <footer
      className="h-18 border-t border-zinc-800 bg-zinc-900 flex flex-col z-40"
      onMouseLeave={() => {
        setShowVolumControl(false);
        setIsHoverFooter(false);
      }}
      onMouseEnter={() => setIsHoverFooter(true)}
      onClick={() => {
        openPlayerPage((prev) => !prev);
      }}
    >
      {/* Progress bar */}
      <span
        onClick={(e) => {
          e.stopPropagation();
          // logic khác ở đây
        }}
      >
        <ProgressBar
          progress={progress}
          setProgress={setProgress}
          isHoverFooter={isHoverFooter}
        />
      </span>

      <div className="flex items-center justify-between flex-1 px-4">
        {/* Controls */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white">
              <SkipBackIcon size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full  text-black "
              onClick={() => {
                setIsPlaying((p) => !p);
              }}
            >
              {isPlaying ? (
                <PauseIcon fill="white" />
              ) : (
                <PlayIcon fill="white" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <SkipForwardIcon size={20} />
            </Button>
          </div>
        </div>

        {/* Song Info */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <div className="w-10 h-10 bg-gray-700 rounded overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj"
              alt=""
            />
          </div>
          <div className="text-white">
            <p
              className="text-sm font-semibold leading-tight capitalize"
              onClick={(e) => {
                e.stopPropagation();
                // logic khác ở đây
              }}
            >
              Đừng làm trái tim anh đau
            </p>
            <p className="text-s text-gray-400 capitalize">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  // logic khác ở đây
                }}
              >
                Sơn Tùng M-TP
              </span>{" "}
              •{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  // logic khác ở đây
                }}
              >
                Đừng làm trái tim anh đau
              </span>{" "}
              • 2024
            </p>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              // logic khác ở đây
            }}
          >
            <Button variant="ghost" size="icon">
              <ThumbsDownIcon size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <ThumbsUpIcon size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <EllipsisVerticalIcon size={18} />
            </Button>
          </div>
        </div>

        {/* Options */}
        <div
          className="flex items-center gap-3 min-w-[150px] justify-end text-white"
          onClick={(e) => {
            e.stopPropagation();
            // logic khác ở đây
          }}
        >
          <VolumeControl
            volume={volume}
            setVolume={setVolume}
            showVolumControl={showVolumControl}
            setShowVolumControl={setShowVolumControl}
          />
          <Button variant="ghost" size="icon">
            <RepeatIcon size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShuffleIcon size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Player;
