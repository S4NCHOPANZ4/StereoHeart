import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";

import {
  useGetSongDetailsQuery,
  useGetSongsRelatedQuery,
  useGetArtistDetailsQuery
} from "../redux/services/shazamCore";


const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPLaying } = useSelector((state) => state.player);


  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ artistId });
  




  if (isFetchingArtistDetails)
    return <Loader title="Loading artist details" />;
  if (error) return <Error />;


  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} songData={artistData} />

      <div className="mb-5">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
      </div>

      <RelatedSongs data={artistData.data} isPlaying={isPLaying} activeSong={activeSong} 
      artistId={artistId}
      />
    </div>
  );
};

export default ArtistDetails;
