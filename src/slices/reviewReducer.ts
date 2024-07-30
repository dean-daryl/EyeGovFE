import { createSlice } from "@reduxjs/toolkit";

interface Review {
    id: string;
    content: string;
    createdAt: string;
    author: {
        name: string;
        avatar: string;
    };
}
export interface Reviews {
    reviews : Review[];
}
const slice = createSlice({
    name: 'reviews',
    initialState:{
        reviews: [],
    }as Reviews,
    reducers: {
        setReviews(state:Reviews,action) {
            state.reviews = action.payload;
        },
        addReview(state:Reviews, action) {
            state.reviews.push(action.payload);
        },
        removeReview(state:Reviews, action) {
            state.reviews =state.reviews.filter((review) => review.id !== action.payload);
        },
    },
});
export const reviewReducer = slice.reducer;
export const {
    setReviews,
    addReview,
    removeReview,
} = slice.actions;
