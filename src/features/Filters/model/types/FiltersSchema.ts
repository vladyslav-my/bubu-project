import { CompaniesOptionsValues } from "../options/companiesOptions";
import { sortOptions } from "../options/sortOptions";

export interface FiltersSchema {
	tempFilters: Filters;
	filters: Filters
	apply: boolean;
	isOpen: boolean;
}

interface Filters {
	sort: SortOptionValue,
	category: CategoryOptionValue[],
	available: boolean;
	discount: boolean;
	companies: CompaniesOptionsValues[];
	price: { min: number, max: number };
}

export type CategoryOptionValue = "strollers3in1" | "winterEnvelopes" | "accessoriesAndComponents" | "strollersForTwins" | "clutches";
export type SortOptionValue = "default" | "popular" | "cheaper" | "expensive";
