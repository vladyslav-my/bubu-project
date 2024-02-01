import { createSlice } from "@reduxjs/toolkit";
import { OrderSchema } from "../types/OrderSchema";


const initialState: OrderSchema = {
	
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {

	},
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;