import { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { getMainRoutePath } from "../../../config/routes/path";
import { classNames as cn } from "../../../lib/classNames/classNames";
import LogoIcon from "../assets/logoIcon.svg";
import cls from "./Logo.module.scss";

interface LogoProps {
	className?: string;
	modifier?: LogoModifier;
}

export enum LogoModifier {
	AUTH = "Logo_auth",
}

export const Logo: FC<LogoProps> = memo(({ className, modifier = "" }) => {
	return (
		<NavLink
			className={cn(cls.Logo, {}, [className, cls[modifier]])}
			to={getMainRoutePath()}
		>
			<LogoIcon className={cls.Logo__icon} />
		</NavLink>
	);
});
