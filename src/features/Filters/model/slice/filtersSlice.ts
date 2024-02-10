import { stat } from "fs";
import { PayloadAction, asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createSliceWithThunk } from "@/shared/lib/createSliceWithThunk";
import { CompaniesOptionsValues } from "../options/companiesOptions";
import { CategoryOptionValue, FiltersSchema, SortOptionValue } from "../types/FiltersSchema";

const initialState: FiltersSchema = {
	filters: {
		sort: "default",
		category: [],
		available: false,
		discount: false,
		companies: [],
		price: {
			min: 1000,
			max: 9999,
		},
	},
	tempFilters: {
		sort: "default",
		category: [],
		available: false,
		discount: false,
		companies: [],
		price: {
			min: 1000,
			max: 9999,
		},
	},

	apply: false,
	isOpen: false,

	// _limit: undefined,
};

export const filtersSlice = createSliceWithThunk({
	name: "filters",
	initialState,
	reducers: (create) => ({
		setMinPrice: create.reducer((state, action: PayloadAction<number>) => {
			state.tempFilters.price.min = action.payload;

			if (!state.apply) {
				state.filters.price.min = action.payload;
			}
		}),
		setMaxPrice: create.reducer((state, action: PayloadAction<number>) => {
			state.tempFilters.price.max = action.payload;

			if (!state.apply) {
				state.filters.price.max = action.payload;
			}
		}),

		setDiscount: create.reducer((state, action: PayloadAction<boolean>) => {
			state.tempFilters.discount = action.payload;

			if (!state.apply) {
				state.filters.discount = action.payload;
			}
		}),
		setAvailable: create.reducer((state, action: PayloadAction<boolean>) => {
			state.tempFilters.available = action.payload;

			if (!state.apply) {
				state.filters.available = action.payload;
			}
		}),
		setSort: create.reducer((state, action: PayloadAction<SortOptionValue>) => {
			state.filters.sort = action.payload;
		}),
		setCategory: create.reducer((state, action: PayloadAction<CategoryOptionValue>) => {
			const index = state.tempFilters.category.indexOf(action.payload);

			if (index === -1) {
				state.tempFilters.category.push(action.payload);
			} else {
				state.tempFilters.category.splice(index, 1);
			}

			if (!state.apply) {
				if (index === -1) {
					state.filters.category.push(action.payload);
				} else {
					state.filters.category.splice(index, 1);
				}
			}
		}),
		setCompanies: create.reducer((state, action: PayloadAction<CompaniesOptionsValues>) => {
			const index = state.tempFilters.companies.indexOf(action.payload);

			if (index === -1) {
				state.tempFilters.companies.push(action.payload);
			} else {
				state.tempFilters.companies.splice(index, 1);
			}

			if (!state.apply) {
				if (index === -1 && !state.apply) {
					state.filters.companies.push(action.payload);
				} else {
					state.filters.companies.splice(index, 1);
				}
			}
		}),

		setApply: create.reducer((state, action: PayloadAction<boolean>) => {
			state.apply = action.payload;
		}),

		applyFilters: create.reducer((state) => {
			state.filters = { ...state.tempFilters };
		}),
		cancelFilters: create.reducer((state) => {
			state.tempFilters = { ...state.filters };
		}),

		getFilteringOrders: create.asyncThunk<any, any, ThunkConfig<string>>(
			async (endpoint, {
				extra,
			}) => {
				const response = extra.api.get(endpoint, {
					params: {

					},
				});

				return response;
			},
		),
	}),

	selectors: {
		getSort: (state) => state.filters.sort,
		getCategory: (state) => state.filters.category,
		getTempCategory: (state) => state.tempFilters.category,
		getAvailable: (state) => state.filters.available,
		getTempAvailable: (state) => state.tempFilters.available,
		getDiscount: (state) => state.filters.discount,
		getTempDiscount: (state) => state.tempFilters.discount,
		getCompanies: (state) => state.filters.companies,
		getTempCompanies: (state) => state.tempFilters.companies,
		getTempPrice: (state) => state.tempFilters.price,
		getPrice: (state) => state.filters.price,
		getApply: (state) => state.apply,
	},
});

export const { actions: filtersActions } = filtersSlice;
export const { selectors: filtersSelectors } = filtersSlice;
