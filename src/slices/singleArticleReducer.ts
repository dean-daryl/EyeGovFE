// src/features/articleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SingleArticleState {
  title: string;
  description: string;
  categories: string[];
  cover: string;
  content: string;
}

const initialState: SingleArticleState = {
  title: '',
  description: '',
  categories: [],
  cover: '',
  content: '',
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    addCategory(state, action: PayloadAction<string>) {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    removeCategory(state, action: PayloadAction<string>) {
      state.categories = state.categories.filter(
        (category) => category !== action.payload,
      );
    },
    setCover(state, action: PayloadAction<string>) {
      state.cover = action.payload;
    },
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    resetForm(state) {
      return initialState;
    },
  },
});

export const {
  setTitle,
  setDescription,
  addCategory,
  removeCategory,
  setCover,
  setContent,
  resetForm,
} = articleSlice.actions;

export default articleSlice.reducer;
