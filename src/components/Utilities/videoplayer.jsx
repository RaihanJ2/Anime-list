"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeid }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleButton}
          className="bg-color-white my-2 px-2 text-color-primary float-right rounded"
        >
          X
        </button>
        <Youtube
          videoId={youtubeid}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("videos is broken")}
          className="rounded-md"
        />
      </div>
    );
  };
  const OpenPlayer = () => {
    return (
      <div className="">
        <button
          className="fixed bottom-5 right-5 bg-color-primary w-32 text-color-dark rounded hover:bg-color-accent transition-all shadow-xl"
          onClick={handleButton}
        >
          trailer
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <OpenPlayer />;
};
export default VideoPlayer;
