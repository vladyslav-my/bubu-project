import { createSlice } from "@reduxjs/toolkit";
import { SendToEmailPromoSchema } from "../types/SendToEmailPromoSchema";


const initialState: SendToEmailPromoSchema = {
	
};

export const sendtoemailpromoSlice = createSlice({
	name: "sendtoemailpromo",
	initialState,
	reducers: {

	},
});

export const { actions: sendtoemailpromoActions } = sendtoemailpromoSlice;
export const { reducer: sendtoemailpromoReducer } = sendtoemailpromoSlice;