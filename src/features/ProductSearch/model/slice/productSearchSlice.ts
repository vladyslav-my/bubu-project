import { createSlice } from "@reduxjs/toolkit";
import { SearchSchema } from "../types/SearchSchema";

const initialState: SearchSchema = {
	isVisibleSearchField: false,
};

export const productSearchSlice = createSlice({
	name: "productSearch",
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

export const { actions: productSearchActions } = productSearchSlice;
export const { selectors: productSearchSelectors } = productSearchSlice;
