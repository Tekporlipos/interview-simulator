"use client";
import { useRef, useState } from "react";

export default function VideoPlayerComponent(props: { url: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function clickPlay() {
    if (video.current) {
      if (isPlaying) {
        video.current.pause();
      } else {
        video.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className="relative bg-gray-700/30 rounded-xl">
      <video
        onClick={clickPlay}
        ref={video}
        muted={true}
        autoPlay={true}
        loop={true}
        className="w-full rounded-xl h-full object-fill"
        src={props.url}
      />
      {!isPlaying ? (
        <div onClick={clickPlay} className="absolute -ms-10 top-1/3 left-1/2">
          <svg className="h-24 w-24 fill-red-400" viewBox="0 0 24 24">
            <title>play</title>
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
