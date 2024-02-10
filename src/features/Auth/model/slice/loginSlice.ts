import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { createSliceWithThunk } from "@/shared/lib/createSliceWithThunk";
import { LoginSchema, LoginUserData } from "../types/LoginSchema";

const initialState: LoginSchema = {
	username: {
		field: "",
		wrong: false,
		textWrong: "",
	},
	password: {
		field: "",
		wrong: false,
		textWrong: "",
	},
	isLoading: false,
};

export const loginSlice = createSliceWithThunk({
	name: "login",
	initialState,
	reducers: (create) => ({
		setUsernameField: create.reducer((state, action: PayloadAction<string>) => {
			state.username.field = action.payload;
		}),
		setPasswordField: create.reducer((state, action: PayloadAction<string>) => {
			state.password.field = action.payload;
		}),

		submitForm: create.asyncThunk<any, LoginUserData, ThunkConfig<string>>(
			async (loginData, {
				extra, getState, dispatch,
			}) => {
				const response = await extra.api.post("/login", loginData);

				localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

				dispatch(userActions.setAuthData(response.data));

				return response;
			},
		),
	}),

	selectors: {
		getUsername: (state) => state.username,
		getPassword: (state) => state.password,
	},
});

export const { actions: loginActions } = loginSlice;
export const { selectors: loginSelectors } = loginSlice;
