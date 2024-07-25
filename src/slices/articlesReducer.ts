import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  title: string;
  content: string;
}

export interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
    },
  },
});

export const { addArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
