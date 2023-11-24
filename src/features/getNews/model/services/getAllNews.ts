import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery(
        { baseUrl: `https://hacker-news.firebaseio.com/v0/` }),
    endpoints: (builder) => ({
        getTopNews: builder.query({
            query: () => `topstories.json`,
        }),
        getAskNews: builder.query({
            query: () => `askstories.json`,
        }),
        getShowNews: builder.query({
            query: () => `showstories.json`,
        }),
        getJobsNews: builder.query({
            query: () => `jobstories.json`,
        }),
        getNewNews: builder.query({
            query: () => `newstories.json`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAskNewsQuery, useGetJobsNewsQuery, useGetShowNewsQuery, useGetNewNewsQuery, useGetTopNewsQuery } = newsApi;