import  SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId
}) => {

  console.log(data);
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {
      data?.tracks?(
        data?.tracks.map((song, i)=>{
          return(
            <SongBar 
            key={i}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
          )
        })
      ):
      (
        data?.map((song, i)=>{
          return(
            <SongBar 
            key={i}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
          )
        })
      )
}
    </div>
    
    </div>

  )
};

export default RelatedSongs;
