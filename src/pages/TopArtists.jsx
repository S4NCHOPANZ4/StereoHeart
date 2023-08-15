import axios from "axios";

import { ArtistCard ,Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useSelector } from "react-redux";

const TopArtists = () => {

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  console.log(data);

  if (isFetching) return <Loader title="Loading around you" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2
        className="font-bold text-3xl text-white text-left
            mt-4 mb-10"
      >
        Top Artists
      </h2>
      <div
        className="flex flex-wrap sm:justify-start
            justify-center gap-8"
      >
        {data?.tracks?.map((track, i) => {
          return (
            <ArtistCard
            key={i}
            track={track}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopArtists;
