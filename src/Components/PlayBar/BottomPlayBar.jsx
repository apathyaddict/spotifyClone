import { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import VolumeOptions from "./VolumeOptions";

const BottomPlayBar = () => {
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(true);

  return (
    <section className="flex flex-row justify-between p-2 h-full items-center">
      {isCurrentlyPlaying ? <>Display album</> : <div>display nothing</div>}
      <CurrentlyPlaying />
      <div className="hidden sm:block">
        <VolumeOptions />
      </div>
    </section>
  );
};

export default BottomPlayBar;
