import {
	FC, useEffect, useRef, useState,
} from "react";
import { CarrouselSection } from "@/widgets/CarrouselSection";
import { Page } from "@/widgets/Page";
import { MainCarrousel } from "@/entities/MainCarrousel";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Container } from "@/shared/ui/Container";
import { AboutSection } from "./AboutSection/AboutSection";
import { CarrouselSaleSection } from "./CarrouselSaleSection/CarrouselSaleSection";
import cls from "./MainPage.module.scss";
import { PopularBrandsSection } from "./PopularBrandsSection/PopularBrandsSection";
import { PopularCategorySection } from "./PopularCategorySection/PopularCategorySection";
import { WelcomeCarrouselSection } from "./WelcomeCarrouselSection/WelcomeCarrouselSection";
import { YouViewSection } from "./YouViewSection/YouViewSection";

interface MainPageProps {
	className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
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
