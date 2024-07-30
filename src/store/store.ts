import { configureStore } from '@reduxjs/toolkit';
import { articleReducer } from '../slices/articleReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { articlesReducer } from '../slices/articlesReducer';
import { reviewReducer } from '../slices/reviewReducer';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    articles: articlesReducer,
    reviews: reviewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
