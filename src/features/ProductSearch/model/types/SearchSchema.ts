import { RefObject } from "react";

export interface SearchSchema {
	isVisibleSearchField: boolean;
	isFocusSearchField?: RefObject<HTMLInputElement>;
}
