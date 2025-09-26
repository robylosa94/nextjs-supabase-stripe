"use client";

import { getVideoPath } from "@/utils/video-streaming";

interface VideoPlayerProps {
  videoId?: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  if (!videoId) {
    return <></>;
  }

  return (
    <div className="relative w-96 aspect-video">
      <iframe
        src={getVideoPath(videoId)}
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allowFullScreen={true}
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
      />
    </div>
  );
};

export default VideoPlayer;
