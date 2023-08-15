import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import noImgHolder from "../assets/music_note.svg";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useState } from "react";
import { useEffect } from "react";
// setActiveSongs

const SongCard = ({ isPlaying, activeSong, song, i, data }) => {
  const dispatch = useDispatch();

  const [noImg, setNoImg] = useState(false);
  const backgroudColor =  Math.floor(Math.random() * 5) ;


  const backgrounds = [
    {
      background: "linear-gradient(218deg, rgba(15,206,226,.1) 5%, rgba(182,67,209,0.1) 100%)"   
    },
    {
      background: "linear-gradient(218deg, rgba(36,226,15,0.1) 45%, rgba(110,209,67,0.1) 100%)"
    },
    {
      background: "linear-gradient(218deg, rgba(203,15,226,0.1) 45%, rgba(209,67,67,0.1) 100%)"
    },
    {
      background: "linear-gradient(218deg, rgba(226,118,15,0.1) 45%, rgba(209,151,67,0.1) 100%)"
    },
    {
      background: "linear-gradient(218deg, rgba(15,217,226,0.1) 45%, rgba(67,117,209,0.1) 100%)"
    }
  ]

  const handlePauseClick = () =>{
    dispatch(playPause(false))
  }
  const handlePlayClick = () =>{
    if(song.heading){


      const fixedSongObj = {
        title: song.heading.title,
        subtitle: song.heading.subtitle,
        artists: song.artists,
        key: song.key,
        images: {
          coverart: song.images?.default
        },
        hub: {
          actions: [
            {},
            {
              uri: song.stores.apple.previewurl
            }
          ]
        }
      }
      const fixedData = {
        next: "https://cdn.shazam.com/shazam/v3/en-US/GB/web/-/tracks/genre-global-chart-2?pageSize=10&startFrom=10"
        ,
        properties: {},
        tracks: [
          fixedSongObj,
          fixedSongObj
        ]
      }
      dispatch(setActiveSong({ song: fixedSongObj, data: fixedData, i}))
        dispatch(playPause(true))

    }else{
      dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
    console.log(data);
    }
  }

  const fixedObj = () => {
    if(song.heading){

      const fixedSongObj =  {
        title: song.heading.title,
        subtitle: song.heading.subtitle,
        artists: song.artists,
        key: song.key,
        images: {
          coverart: song.images?.default
        },
        hub: {
          actions: [
            {},
            {
              uri: song.stores.previewurl
            }
          ]
        }
      }
      return fixedSongObj;
    }else{
      return song;
    }
  }

  useEffect(() => {
    if (!song.images || song.images.coverart === null) {
      setNoImg(true);
    }
  }, [song]);


  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5
  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg 
  cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0  justify-center
      items-center bg-black bg-opacity-50 group-hover:flex
      transition-all ease duration-300
      ${
        activeSong?.title === song.title
          ? "flex bg-black bg-opacity-70"
          : "hidden"
      } `}
        >
          <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={fixedObj()}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
        </div>
        {noImg ? (
          <div 
          style={backgrounds[backgroudColor]}
          className="flex items-center justify-center h-[100%]
          rounded-md
          ">
            <img className="h-[50%]" src={noImgHolder} alt="noImg" />
          </div>
        ) : (
          <img
            onError={(e) => {
              console.log("a");
            }}
            alt="song_img"
            src={
              song.images?.default?
              song.images?.default
              :
              song.images?.coverart
            }
          />
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>

          {
          song.heading?
          song.heading.title
          :
          song.title}
          </Link>
        </p>
        <p className="text-sm text-gray-300 mt-1 truncate">
          <Link to={song.artists ? `/artists/${song?.artists[0].adamid}` : `/top-artists`}>
            {
            song.heading?
            song.heading.subtitle
            :
            song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
