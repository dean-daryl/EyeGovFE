import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../slices/articlesReducer';

const store = configureStore({
  reducer: {
    article: articlesReducer,
  },
});

export default store;
