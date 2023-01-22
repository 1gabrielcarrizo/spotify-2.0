import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            beaseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '51e492bc33msh1d8d55623d76bbap1aafabjsn0e92e46bb519')

                return headers
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
            getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
            getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}`})

        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery
    } = shazamCoreApi