import {
	ComponentProps,
	FC, ReactNode, memo,
} from "react";
import { NavLink } from "react-router-dom";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./style/Button.module.scss";
import { ButtonModifier } from "./style/ButtonModifier";

interface NavLinkButtonProps extends ComponentProps<typeof NavLink> {
	className?: string;
	children?: ReactNode;
	modifier?: ButtonModifier;
	secondaryModifier?: ButtonModifier;
}

export const NavLinkButton: FC<NavLinkButtonProps> = memo(({
	className,
	children,
	modifier = "",
	secondaryModifier = "",
	...otherProps
}) => {
	return (
		<NavLink className={cn(cls.Button, {}, [className, cls[modifier], cls[secondaryModifier]])} {...otherProps}>
			{children}
		</NavLink>
	);
});
