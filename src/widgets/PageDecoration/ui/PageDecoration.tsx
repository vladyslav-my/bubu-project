import { FC, ReactNode } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import PinkDecorationImage from "../assets/pink.png";
import YellowDecorationImage from "../assets/yellow.png";
import cls from "./PageDecoration.module.scss";

interface PageDecorationProps {
	className?: string;
	children: ReactNode;
}

export const PageDecoration: FC<PageDecorationProps> = ({ className, children }) => {
	return (
		<div className={cn(cls.PageDecoration, {}, [className])}>
			<img className={cls.PageDecoration__pdi} src={PinkDecorationImage} />
			<div className={cls.PageDecoration__wrapper}>
				{children}
			</div>
			<img className={cls.PageDecoration__ydi} src={YellowDecorationImage} />
		</div>
	);
};
