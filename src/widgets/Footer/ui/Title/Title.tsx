import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./Title.module.scss";

interface TitleProps {
	className?: string;
	children: string;
}

export const Title: FC<TitleProps> = ({ className, children }) => {
	return (
		<h2 className={cn(cls.Title, {}, [className])}>{children}</h2>
	);
};
