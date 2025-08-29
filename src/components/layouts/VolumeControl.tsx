import * as Slider from "@radix-ui/react-slider";
import { Button } from "../ui/button";
import { Volume2Icon } from "lucide-react";

type VolumeControlProps = {
  volume: number;
  setVolume: (val: number) => void;
  showVolumControl: boolean;
  setShowVolumControl: React.Dispatch<React.SetStateAction<boolean>>;
};

function VolumeControl({
  volume,
  setVolume,
  showVolumControl,
  setShowVolumControl,
}: VolumeControlProps) {
  return (
    <div
      className="flex items-center gap-2 relative"
      onMouseEnter={() => setShowVolumControl(true)}
    >
      {showVolumControl && (
        <div className="absolute right-10">
          <Slider.Root
            value={[volume]}
            onValueChange={(val) => setVolume(val[0])}
            max={100}
            step={1}
            className="relative flex h-1 w-24 touch-none select-none items-center bg-gray-600 cursor-pointer rounded-full"
          >
            <Slider.Track className="relative h-1 w-full rounded-full bg-gray-600">
              <Slider.Range className="absolute h-full bg-white rounded-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-3 h-3 bg-white rounded-full focus:outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      )}
      <Button variant="ghost" size="icon" className="text-white">
        <Volume2Icon size={18} />
      </Button>
    </div>
  );
}

export default VolumeControl;
