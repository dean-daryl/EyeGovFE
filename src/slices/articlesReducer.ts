import { createSlice } from '@reduxjs/toolkit';
import { Operation } from 'slate';

export interface Article {
  id: string;
  title: string;
  description: string;
  cover: string;
  content: string;
  categories: string[];
  createdAt: string;
}

export interface State {
  value: string;
  operation?: Operation;
  previousValue?: string;
}

export interface Articles {
  articles: Article[];
}

const slice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
  } as Articles,
  reducers: {
    setArticles(state: Articles, action) {
      state.articles = action.payload;
    },
    addArticle(state: Articles, action) {
      state.articles.push(action.payload);
    },
    removeArticle(state: Articles, action) {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload,
      );
    },
  },
});

export const articlesReducer = slice.reducer;
export const { setArticles, addArticle, removeArticle } = slice.actions;

