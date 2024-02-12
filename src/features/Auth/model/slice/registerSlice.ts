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

const validateRegister = (registerData: { email: string, name: string, password: string, phone: string }) => {
	const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
	const phoneRegex = /^(\+38)?(0\d{9})$/;
	// @ts-ignore
	const {
		email, name, password, phone,
	} = registerData;

	const obj: { email?: string, name?: string, password?: string, phone?: string } = {};

	if (name.length <= 2) {
		obj.name = "Ім'я не повино бути меньше 2 символів";
	} else if (name.length > 10) {
		obj.name = "Ім'я не повино бути більше 10 символів";
	}

	if (!phoneRegex.test(phone)) {
		obj.phone = "Введений номер телефону не коректний";
	}

	if (email.length <= 7) {
		obj.email = "Email не повинен бути менше 7 символів";
	} else if (!emailRegex.test(email)) {
		obj.email = "Введена електрона пошта не коректна";
	}

	if (password.length <= 6) {
		obj.password = "Пароль не повинен бути меньше 6 символів";
	} else if (password.length > 20) {
		obj.password = "Пароль не повинен бути більше 20 символів";
	}

	if (Object.keys(obj).length > 0) {
		return obj;
	}
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

		submitForm: create.asyncThunk<any, RegisterUserData, ThunkConfig<any>>(
			async (registerData, {
				extra, getState, dispatch, rejectWithValue,
			}) => {
				try {
					const errors = validateRegister(registerData);

					if (errors) {
						return rejectWithValue(errors);
					}

					const response = await extra.api.post("/register", registerData);

					localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

					dispatch(userActions.setAuthData(response.data));
					return response;
				} catch (error) {

				}
			},
			{
				pending: (state, action) => {
					state.isLoading = true;
				},
				rejected: (state, action) => {
					state.name.textWrong = action.payload.name;
					state.phone.textWrong = action.payload.phone;
					state.password.textWrong = action.payload.password;
					state.email.textWrong = action.payload.email;
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
