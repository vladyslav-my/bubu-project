import { createSlice } from "@reduxjs/toolkit";
import { BurgerMenuSchema } from "../types/BurgerMenuSchema";

const initialState: BurgerMenuSchema = {
	iCategory: undefined,
	isOpenedOneLevel: false,
	isOpenedTwoLevel: false,
	isOpenedThreeLevel: false,
};

export const burgerMenuSlice = createSlice({
	name: "burgerMenu",
	initialState,
	reducers: {
		setIndexCategory: (state, action) => {
			state.iCategory = action.payload;
		},
		setIsOpenedOneLevel: (state, action) => {
			state.isOpenedOneLevel = action.payload;
		},
		setIsOpenedTwoLevel: (state, action) => {
			state.isOpenedTwoLevel = action.payload;
		},
		setIsOpenedThreeLevel: (state, action) => {
			state.isOpenedThreeLevel = action.payload;
		},
	},
	selectors: {
		getICategory: (state) => state.iCategory,
		getIsOpenedOneLevel: (state) => state.isOpenedOneLevel,
		getIsOpenedTwoLevel: (state) => state.isOpenedTwoLevel,
		getIsOpenedThreeLevel: (state) => state.isOpenedThreeLevel,
	},
});

export const { actions: burgerMenuActions } = burgerMenuSlice;
export const { selectors: burgerMenuSelectors } = burgerMenuSlice;
