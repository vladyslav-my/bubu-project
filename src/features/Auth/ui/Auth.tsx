import { FC } from "react";
import cls from "./Auth.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface AuthProps {
	className?: string
}

export const Auth: FC<AuthProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Auth, {}, [className])}>
			
		</div>
	)
}