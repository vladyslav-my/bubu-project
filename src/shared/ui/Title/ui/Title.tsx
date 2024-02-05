import { FC, ReactNode } from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./Title.module.scss";

interface TitleProps {
	className?: string;
	children: ReactNode;
}

export const Title: FC<TitleProps> = ({ className, children }) => {
	return (
		<h2 className={cn(cls.Title, {}, [className])}>{children}</h2>
	);
};
