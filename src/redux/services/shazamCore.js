import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam.p.rapidapi.com',
          // 'https://shazam-core.p.rapidapi.com/v1', trying new api
          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e42f463663mshb0d5b86d2dec2d0p1ece16jsn4d9e50b8b0bb');

            return headers;
          },
        }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ query: () => '/charts/world' }),
          getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
          getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
          getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${ songid }` }),
          getArtistDetails: builder.query({ query: (artistid) => `/artists/details?artist_id=${ artistid }` }),
          getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${ countryCode }` }),
          getSongsBySearches: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${ searchTerm }`}),
        }),
    });

    export const {
      useGetTopChartsQuery,
      useGetSongDetailsQuery,
      useGetSongRelatedQuery,
      useGetArtistDetailsQuery,
      useGetSongsByCountryQuery,
      useGetSongsByGenreQuery,
      useGetSongsBySearchesQuery,
    } = shazamCoreApi;