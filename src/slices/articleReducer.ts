import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Operation } from 'slate';

export interface Article {
  id: string;
  title: string;
  description: string;
  cover: string;
  content: string;
  categories: string[];
  createdAt: string;
  applause: number;
}

export interface State {
  value: string;
  operation?: Operation;
  previousValue?: string;
}

const slice = createSlice({
  name: 'article',
  initialState: {
    id: '',
    title: '',
    description: '',
    cover: '',
    content: '',
    categories: [],
    createdAt: '',
    applause: 0,
  } as Article,
  reducers: {
    setTitle(state: Article, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDescription(state: Article, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setCover(state: Article, action: PayloadAction<string>) {
      state.cover = action.payload;
    },
    setContent(state: Article, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    applaudArticle(state: Article) {
    state.applause += 1;
    },
    addCategory(state: Article, action: PayloadAction<string>) {
      state.categories.push(action.payload);
    },
    removeCategory(state: Article, action: PayloadAction<string>) {
      state.categories = state.categories.filter(
        (category) => category !== action.payload,
      );
    },
    resetForm(state: Article) {
      state.title = '';
      state.description = '';
      state.cover = '';
      state.content = '';
      state.categories = [];
    },
  },
});
export const articleReducer = slice.reducer;
export const {
  setTitle,
  setDescription,
  setCover,
  setContent,
  applaudArticle,
  addCategory,
  removeCategory,
  resetForm,
} = slice.actions;
