import { FC, ReactNode } from "react";
import { getRegisterRoutePath } from "@/shared/config/routes/path";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier, NavLinkButton } from "@/shared/ui/Button";
import { AuthField } from "@/shared/ui/Field";
import cls from "./Form.module.scss";

interface FormProps {
	className?: string;
	title: string;
	children?: ReactNode;
	submitButtonName: string;
	onSubmit: (e: any) => void;
}

export const Form: FC<FormProps> = ({
	className, title, children, submitButtonName, onSubmit,
}) => {
	return (
		<form className={cn(cls.Form, {}, [className])} onSubmit={onSubmit} action="post">
			<h2 className={cls.Form__title}>{title}</h2>
			{children}
			<NavLinkButton to={getRegisterRoutePath()} modifier={ButtonModifier.ACCENT}>
				Забули пароль?
			</NavLinkButton>
			<Button
				type="submit"
				className={cn("", {}, [])}
				modifier={ButtonModifier.AUTH}
				secondaryModifier={ButtonModifier.AUTHFILL}
			>
				{submitButtonName}
			</Button>
			<NavLinkButton
				className={cn("", {}, [])}
				modifier={ButtonModifier.AUTH}
				secondaryModifier={ButtonModifier.AUTHOUTLINE}
				to={getRegisterRoutePath()}
			>
				У мене немає акаунта
			</NavLinkButton>
		</form>
	);
};
