import {
	ButtonHTMLAttributes,
	FC, ReactNode, memo,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./style/Button.module.scss";
import { ButtonModifier } from "./style/ButtonModifier";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	modifier?: ButtonModifier;
	secondaryModifier?: ButtonModifier;
	onClick?: any;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Button: FC<ButtonProps> = memo(({
	className,
	children,
	modifier = "",
	type,
	secondaryModifier = "",
	onClick,
	Icon,
	...otherProps
}) => {
	return (
		<button
			className={cn(cls.Button, {}, [className, cls[modifier], cls[secondaryModifier]])}
			type={type}
			onClick={onClick}
			{...otherProps}
		>
			{Icon && <Icon className={cls.Button__icon} />}
			{children}
		</button>
	);
});
