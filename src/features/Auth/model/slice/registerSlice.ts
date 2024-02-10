import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { createSliceWithThunk } from "@/shared/lib/createSliceWithThunk";
import { RegisterSchema, RegisterUserData } from "../types/RegisterSchema";

const initialState: RegisterSchema = {
	name: {
		field: "",
		wrong: false,
		textWrong: "",
	},
	phone: {
		field: "",
		wrong: false,
		textWrong: "",
	},
	email: {
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

export const registerSlice = createSliceWithThunk({
	name: "register",
	initialState,
	reducers: (create) => ({
		setNameField: create.reducer((state, action: PayloadAction<string>) => {
			state.name.field = action.payload;
		}),
		setPhoneField: create.reducer((state, action: PayloadAction<string>) => {
			state.phone.field = action.payload;
		}),
		setEmailField: create.reducer((state, action: PayloadAction<string>) => {
			state.email.field = action.payload;
		}),
		setPasswordField: create.reducer((state, action: PayloadAction<string>) => {
			state.password.field = action.payload;
		}),

		submitForm: create.asyncThunk<any, RegisterUserData, ThunkConfig<string>>(
			async (registerData, {
				extra, getState, dispatch,
			}) => {
				const response = await extra.api.post("/register", registerData);

				localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

				dispatch(userActions.setAuthData(response.data));
				return response;
			},
			{
				pending: (state, action) => {
					state.isLoading = true;
				},
				rejected: (state, action) => {
				},
				fulfilled: (state, action) => {
					state.isLoading = false;
				},
				settled: (state, action) => {

				},
			},
		),
	}),

	selectors: {
		getName: (state) => state.name,
		getPhone: (state) => state.phone,
		getEmail: (state) => state.email,
		getPassword: (state) => state.password,
	},
});

export const { actions: registerActions } = registerSlice;
export const { selectors: registerSelectors } = registerSlice;
