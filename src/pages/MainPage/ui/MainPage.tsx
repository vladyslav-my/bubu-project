import {
	FC, useEffect, useLayoutEffect,
} from "react";
import { Page } from "@/widgets/Page";
import { YouViewSection } from "@/widgets/YouViewSection";
import { catalogSpoilerAction } from "@/features/Catalog/model/slice/catalogSpoilerSlice";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AboutSection } from "./AboutSection/AboutSection";
import { CarrouselSaleSection } from "./CarrouselSaleSection/CarrouselSaleSection";
import cls from "./MainPage.module.scss";
import { PopularBrandsSection } from "./PopularBrandsSection/PopularBrandsSection";
import { PopularCategorySection } from "./PopularCategorySection/PopularCategorySection";
import { WelcomeCarrouselSection } from "./WelcomeCarrouselSection/WelcomeCarrouselSection";

interface MainPageProps {
	className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(catalogSpoilerAction.setIsOpen(true));
	}, [dispatch]);

	return (
		<Page className={cn(cls.MainPage, {}, [className])}>
			<WelcomeCarrouselSection />
			<CarrouselSaleSection />
			<PopularCategorySection />
			<PopularBrandsSection />
			<AboutSection />
			<YouViewSection />
		</Page>
	);
};
