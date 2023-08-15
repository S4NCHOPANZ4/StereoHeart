import React, { useEffect, useState } from "react";
import noImgHolder from "../../assets/music_note.svg";

const Track = ({ isPlaying, isActive, activeSong }) => {
  const [noImg, setNoImg] = useState(false);

  useEffect(() => {
    if (activeSong.photo_url === null) {
      setNoImg(true);
    }
  }, []);

  return (
    <div className="flex-1 flex items-center justify-start">
      <div
        className={`${
          isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
        } hidden sm:block h-16 w-16 mr-4`}
      >
        {noImg ? (
          <div
            style={{
              background:
                "linear-gradient(218deg, rgba(15,206,226,.1) 5%, rgba(182,67,209,0.1) 100%)",
            }}
            className="flex items-center justify-center h-[100%] rounded-[50%]"
          >
            <img className="h-[50%]" src={noImgHolder} alt="noImg" />
          </div>
        ) : (
          <img
            src={activeSong?.images?.coverart}
            alt="cover art"
            className="rounded-full"
          />
        )}
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {activeSong?.title ? activeSong?.title : "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
