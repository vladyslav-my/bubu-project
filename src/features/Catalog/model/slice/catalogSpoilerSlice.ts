import { createSlice } from "@reduxjs/toolkit";
import { CatalogSpoilerSchema } from "../types/CatalogSpoilerSchema";

const initialState: CatalogSpoilerSchema = {
	isOpen: true,
};

export const catalogSpoilerSlice = createSlice({
	name: "catalogSpoilerSlice",
	initialState,
	reducers: {},
	selectors: {
		isOpen: (state) => state.isOpen,
	},
});

export const { actions: catalogSpoilerAction } = catalogSpoilerSlice;
export const { selectors: catalogSpoilerSelectors } = catalogSpoilerSlice;
