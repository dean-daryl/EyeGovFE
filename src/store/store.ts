import { configureStore } from '@reduxjs/toolkit';
import singleArticleReducer from '../slices/singleArticleReducer';

const store = configureStore({
  reducer: {
    singleArticle: singleArticleReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
