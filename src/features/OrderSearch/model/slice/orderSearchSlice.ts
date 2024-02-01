import { createSlice } from "@reduxjs/toolkit";
import { SearchSchema } from "../types/SearchSchema";

const initialState: SearchSchema = {
	isVisibleSearchField: false,
};

export const orderSearchSlice = createSlice({
	name: "orderSearch",
	initialState,
	reducers: {
		setIsVisibleSearchField: (state, action) => {
			state.isVisibleSearchField = action.payload;
		},
	},
	selectors: {
		getIsVisibleSearchField: (state) => state.isVisibleSearchField,
	},
});

export const { actions: orderSearchActions } = orderSearchSlice;
export const { selectors: orderSearchSelectors } = orderSearchSlice;
