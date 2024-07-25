import { createSlice } from '@reduxjs/toolkit';

interface Article {
  title: '';
  description: '';
  categories: [];
  author: {};
}
const initialState = {
  articles: [],
  article: {
    title: '',
    description: '',
    categories: [],
    cover: '',
    content: '',
  },
};

const shardeDataSlice = createSlice({
  name: 'sharedData',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});
export const { setArticles } = shardeDataSlice.actions;

export default shardeDataSlice.reducer;
