import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "@/widgets/Header";
import { CatalogSpoiler, catalogSpoilerSelectors } from "@/features/Catalog";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps {
	className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
	return (
		<>
			<Header />
			1
		</>
	);
};
