import {
	ReducersMapObject, combineSlices, configureStore,
} from "@reduxjs/toolkit";
import { burgerMenuSlice } from "@/features/BurgerMenu";
import { catalogSpoilerSlice } from "@/features/Catalog";
import { orderSearchSlice } from "@/features/OrderSearch";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";
import { ExtraArgumentType } from "./StateSchema";

export const createReduxStore = () => {
	const rootReducer = combineSlices(catalogSpoilerSlice, burgerMenuSlice, orderSearchSlice);

	// const extraArgument: ExtraArgumentType = {
	// 	api: $api,
	// };

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		// middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		// 	thunk: { extraArgument },
		// }).concat(rtkApi.middleware),
	});

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;
