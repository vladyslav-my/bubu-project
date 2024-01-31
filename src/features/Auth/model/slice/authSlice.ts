import { createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "../types/AuthSchema";


const initialState: AuthSchema = {
	
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {

	},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;