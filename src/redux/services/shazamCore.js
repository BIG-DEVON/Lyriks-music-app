import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



  
    export const shazamCoreApi =createApi ({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({ 
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key','d5bd53dda9msh8c18000aac164dep124706jsn1c18efd2c8da' );
                
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () =>  '/charts/world' }),
        }),
    });
    export const {
        useGetTopChartsQuery,
     } = shazamCoreApi;