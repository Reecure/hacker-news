import { configureStore } from '@reduxjs/toolkit';
import {newsApi} from "@/features/getNews/model/services/getAllNews.ts";
import {itemApi} from "@/features/getNews/model/services/getNewsItem.ts";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        [itemApi.reducerPath]: itemApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware, itemApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch