import { createSlice } from "@reduxjs/toolkit";

const initialState: FiltersMenuSchema = {
	isOpen: false,
};

export const filtersMenuSlice = createSlice({
	name: "filtersMenuSlice",
	initialState,
	reducers: {
		setIsOpen: (state, action) => {
			state.isOpen = action.payload;
		},
	},
	selectors: {
		isOpen: (state) => state.isOpen,
	},
});

export const { actions: filtersMenuActions } = filtersMenuSlice;
export const { selectors: filtersMenuSelectors } = filtersMenuSlice;
