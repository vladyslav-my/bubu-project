import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AuthField } from "@/shared/ui/Field";
import { loginActions, loginSelectors } from "../../model/slice/loginSlice";
import { Form } from "../Form/Form";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const username = useSelector(loginSelectors.getUsername);
	const password = useSelector(loginSelectors.getPassword);
	const onSubmit = useCallback((e: any) => {
		e.preventDefault();

		// @ts-ignore
		dispatch(loginActions.submitForm({
			username: username.field,
			password: password.field,
		}));
	}, [dispatch, password.field, username.field]);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsernameField(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPasswordField(value));
	}, [dispatch]);

	return (
		<Form
			className={cn(cls.LoginForm, {}, [className])}
			title="Вхід"
			submitButtonName="Увійти"
			onSubmit={onSubmit}
			toRegister
		>
			<AuthField
				value={username.field}
				placeholder="Телефон або e-mail"
				onChange={onChangeUsername}
			/>
			<AuthField
				value={password.field}
				placeholder="Пароль"
				onChange={onChangePassword}
			/>
		</Form>
	);
};
