import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { AiFillCaretDown } from "react-icons/ai";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  const { data, isFetching, error } = useGetSongsByGenreQuery({
    genre: genreListId,
  });

  if (isFetching) return <Loader title="Loading songs... " />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between items-center 
        sm:flex-row flex-col mt-4 mb-10"
      >
        <h2
          className="font-bold text-3xl text-white
           text-left"
        >
          Discover {genreTitle === undefined ? "Hip-Hop" : genreTitle}
        </h2>

        <div
          className="
      cursor-pointer
      selector-container
      relative h-[40px]  px-3 flex items-center justify-evenly bg-black border-white rounded-md"
        >
          <p className="text-white font-bold w-[110px] text-left">
            {genreListId}
          </p>
          <AiFillCaretDown className="w-[20px] text-white" size={15} />
          <div
            className="
              selector-dropdown
              rounded-b-md
              absolute bg-black w-[154px] top-[100%]
              overflow-hidden
              z-30"
          >
            {genres.map((genre, index) => {
              return (
                <div 
                onClick={() => dispatch(selectGenreListId(genre.value))}
                className="h-[30px] flex items-center justify-center
                font-semibold hover:bg-[#3f3f3f92]
                bg-[#000]
                text-white
"
                value={genre.value} key={genre.value}>
                  {genre.title}
                </div>
              );
            })}
          </div>
        </div>


      </div>

      <div
        className="flex flex-wrap sm:justify-start
      justify-center gap-8"
      >
        {data?.tracks.map((song, index) => {
          return (
            <SongCard
              isPlaying={isPlaying}
              activeSong={activeSong}
              key={song.key}
              song={song}
              i={index}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
