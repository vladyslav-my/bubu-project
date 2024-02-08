import { createSlice } from "@reduxjs/toolkit";
import { BreadcrumbsSchema } from "../types/BreadcrumbsSchema";


const initialState: BreadcrumbsSchema = {
	
};

export const breadcrumbsSlice = createSlice({
	name: "breadcrumbs",
	initialState,
	reducers: {

	},
});

export const { actions: breadcrumbsActions } = breadcrumbsSlice;
export const { reducer: breadcrumbsReducer } = breadcrumbsSlice;