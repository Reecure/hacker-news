import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {AskItem, IComment, JobItem, Story} from "@/enteties";


type Item = JobItem | AskItem | Story

export const itemApi = createApi({
    reducerPath: 'newsItemById',
    baseQuery: fetchBaseQuery(
        { baseUrl: `https://hacker-news.firebaseio.com/v0/` }),
    endpoints: (builder) => ({
        getICommentItem: builder.query<IComment, string>({
            query: (id) => `item/${id}.json`,
        }),
        getItem: builder.query<Item, string>({
            query: (id) => `item/${id}.json`,
        }),
    }),
});

export const { useGetICommentItemQuery, useGetItemQuery } = itemApi;