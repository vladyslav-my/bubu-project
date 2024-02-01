import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ButtonModifier, NavLinkButton } from "@/shared/ui/Button";
import cls from "./NavItem.module.scss";

interface NavItemProps {
	className?: string;
	name: string;
	to: string;
}

export const NavItem: FC<NavItemProps> = ({ className, to, name }) => {
	return (
		<li className={cn(cls.NavItem, {}, [className])}>
			<NavLinkButton className={cls.NavItem__link} modifier={ButtonModifier.CLEAR} to={to}>
				{name}
			</NavLinkButton>
		</li>
	);
};
