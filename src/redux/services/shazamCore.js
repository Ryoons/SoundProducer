import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0a862a5abamsh33e81d71bb2c646p1a12eejsnd04202e459a4');

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
          getSongsBySearches: builder.query({ query: (searchTerm) => `/multi?search_type=SONGS_ARTISTS&query=${ searchTerm }`}),
        }),
    });

    export const {
      useGetTopChartsQuery,
      useGetSongDetailsQuery,
      useGetSongRelatedQuery,
      useGetArtistDetailsQuery,
      useGetSongsByCountryQuery,
      useGetSongsByGenreQuery,
      useLazyGetSongsBySearchesQuery,
    } = shazamCoreApi;