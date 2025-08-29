import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProgressBarProps = {
  progress: number;
  setProgress: (val: number) => void;
  isHoverFooter: boolean;
};

function ProgressBar({
  progress,
  setProgress,
  isHoverFooter,
}: ProgressBarProps) {
  const [isDragging, setIsDragging] = useState(false);
  const showThumb = isDragging || isHoverFooter;
  return (
    <Slider.Root
      value={[progress]}
      onValueChange={(val) => setProgress(val[0])}
      max={100}
      step={1}
      className="relative flex h-1 w-full touch-none select-none items-center bg-zinc-700 cursor-pointer"
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
    >
      <Slider.Track
        className={`relative w-full  rounded-full bg-zinc-700 ${
          !showThumb ? "h-0.5" : "h-2"
        }`}
      >
        <Slider.Range className="absolute h-full bg-red-600 rounded-full" />
      </Slider.Track>
      <AnimatePresence>
        {showThumb && (
          <Slider.Thumb asChild aria-label="Progress">
            <motion.div
              className="w-3 h-3 bg-red-600 rounded-full shadow"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </Slider.Thumb>
        )}
      </AnimatePresence>
    </Slider.Root>
  );
}

export default ProgressBar;
