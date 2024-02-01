import { createSlice } from "@reduxjs/toolkit";
import { ComparitionSchema } from "../types/ComparitionSchema";


const initialState: ComparitionSchema = {
	
};

export const comparitionSlice = createSlice({
	name: "comparition",
	initialState,
	reducers: {

	},
});

export const { actions: comparitionActions } = comparitionSlice;
export const { reducer: comparitionReducer } = comparitionSlice;