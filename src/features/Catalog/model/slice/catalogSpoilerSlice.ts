import { createSlice } from "@reduxjs/toolkit";
import { CatalogSpoilerSchema } from "../types/CatalogSpoilerSchema";

const initialState: CatalogSpoilerSchema = {
	isOpen: false,
};

export const catalogSpoilerSlice = createSlice({
	name: "catalogSpoilerSlice",
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

export const { actions: catalogSpoilerAction } = catalogSpoilerSlice;
export const { selectors: catalogSpoilerSelectors } = catalogSpoilerSlice;
