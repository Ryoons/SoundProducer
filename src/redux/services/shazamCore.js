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
          getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        }),
    });

    export const {
      useGetTopChartsQuery,
    } = shazamCoreApi;