import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_API_KEY
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/songs/list-recommendations?id=293401556&limit=10'}),
    getSongDetails: builder.query({query: ({songid})  => `/songs/get_details?id=${songid}`}),
    getSongsByGenre: builder.query({query: ({genre}) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=10`}),
    getSongsRelated: builder.query({query: ({songid})=> `/songs/list-recommendations?id=${songid}&limit=10`}),
    getArtistDetails: builder.query({query: ({artistId})=> `/artist/get-top-songs?id=${artistId}&limit=10`}),
    getSongsByCountry:  builder.query({query: ({country})=> `/charts/get-top-songs-in-country?country_code=${country}`}),
    getSongsBySearch: builder.query({query: ({searchTerm})=> `/search?term=${searchTerm}&limit=10`}),
  }),
  
});

export const {
    useGetTopChartsQuery, 
    useGetSongDetailsQuery, 
    useGetSongsRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;
