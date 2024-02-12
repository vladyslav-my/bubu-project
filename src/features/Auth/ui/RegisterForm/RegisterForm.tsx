import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AuthField } from "@/shared/ui/Field";
import { registerActions, registerSelectors } from "../../model/slice/registerSlice";
import { Form } from "../Form/Form";
import cls from "./RegisterForm.module.scss";

interface RegisterFormProps {
	className?: string
}

export const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const name = useSelector(registerSelectors.getName);
	const phone = useSelector(registerSelectors.getPhone);
	const email = useSelector(registerSelectors.getEmail);
	const password = useSelector(registerSelectors.getPassword);

	const onSubmit = useCallback((e: any) => {
		e.preventDefault();

		// @ts-ignore
		dispatch(registerActions.submitForm({
			name: name.field,
			phone: phone.field,
			email: email.field,
			password: password.field,
		}));
	}, [dispatch, email.field, name.field, password.field, phone.field]);

	const onChangeName = useCallback((value: string) => {
		dispatch(registerActions.setNameField(value));
	}, [dispatch]);

	const onChangePhone = useCallback((value: string) => {
		dispatch(registerActions.setPhoneField(value));
	}, [dispatch]);

	const onChangeEmail = useCallback((value: string) => {
		dispatch(registerActions.setEmailField(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(registerActions.setPasswordField(value));
	}, [dispatch]);

	return (
		<Form
			className={cn(cls.RegisterForm, {}, [className])}
			title="Реєстрація"
			submitButtonName="Зареєструватись"
			onSubmit={onSubmit}
		>
			<AuthField
				value={name.field}
				wrongText={name.textWrong}
				placeholder="Ім'я"
				onChange={onChangeName}
			/>
			<AuthField
				value={phone.field}
				wrongText={phone.textWrong}
				placeholder="Телефон"
				onChange={onChangePhone}

			/>
			<AuthField
				value={email.field}
				wrongText={email.textWrong}
				placeholder="E-mail"
				onChange={onChangeEmail}
			/>
			<AuthField
				value={password.field}
				wrongText={password.textWrong}
				placeholder="Пароль"
				onChange={onChangePassword}
			/>
		</Form>
	);
};
