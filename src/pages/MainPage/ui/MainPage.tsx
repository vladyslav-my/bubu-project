import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps {
	className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
	return (
		<div className={cn(cls.MainPage, {}, [className])}>
			Main Page
		</div>
	);
};
