import { createSlice } from "@reduxjs/toolkit";
import { FeedbackSchema } from "../types/FeedbackSchema";


const initialState: FeedbackSchema = {
	
};

export const feedbackSlice = createSlice({
	name: "feedback",
	initialState,
	reducers: {

	},
});

export const { actions: feedbackActions } = feedbackSlice;
export const { reducer: feedbackReducer } = feedbackSlice;