import {
	ButtonHTMLAttributes,
	FC, ReactNode, memo,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./style/Button.module.scss";
import { ButtonModifier } from "./style/ButtonModifier";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	modifier?: ButtonModifier;
	secondaryModifier?: ButtonModifier;
	onClick: any;
}

export const Button: FC<ButtonProps> = memo(({
	className,
	children,
	modifier = "",
	type,
	secondaryModifier = "",
	onClick,
	...otherProps
}) => {
	return (
		<button className={cn(cls.Button, {}, [className, cls[modifier], cls[secondaryModifier]])} type={type} onClick={onClick} {...otherProps}>
			{children}
		</button>
	);
});
