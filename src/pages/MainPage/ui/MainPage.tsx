import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { CatalogSpoiler, catalogSpoilerSelectors } from "@/features/Catalog";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps {
	className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
	return (
		<div className={cn(cls.MainPage, {}, [className])}>
			<Header className={cls.MainPage__header} />
			<main className={cls.MainPage__main}>
				1
			</main>
			<Footer className={cls.MainPage__footer} />
		</div>
	);
};
