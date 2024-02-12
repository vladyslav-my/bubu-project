import { createSlice } from "@reduxjs/toolkit";
import { FeedbackSchema } from "../types/FeedbackSchema";

const initialState: FeedbackSchema = {
	isOpenModal: false,
};

export const feedbackSlice = createSlice({
	name: "feedback",
	initialState,
	reducers: {
		setIsOpenModal: (state, action) => {
			state.isOpenModal = action.payload;
		},
	},

	selectors: {
		getIsOpenModal: (state) => state.isOpenModal,
	},
});

export const { actions: feedbackActions } = feedbackSlice;
export const { selectors: feedbackSelectors } = feedbackSlice;
