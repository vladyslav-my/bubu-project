import {
	FC, useEffect, useRef, useState,
} from "react";
import { CarrouselSection } from "@/widgets/CarrouselSection";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { MainCarrousel } from "@/entities/MainCarrousel";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Container } from "@/shared/ui/Container";
import { AboutSection } from "./AboutSection/AboutSection";
import { CarrouselSaleSection } from "./CarrouselSaleSection/CarrouselSaleSection";
import cls from "./MainPage.module.scss";
import { PopularBrandsSection } from "./PopularBrandsSection/PopularBrandsSection";
import { PopularCategorySection } from "./PopularCategorySection/PopularCategorySection";

interface MainPageProps {
	className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
	return (
		<div className={cn(cls.MainPage, {}, [className])}>
			<Header className={cls.MainPage__header} />
			<main className={cls.MainPage__main}>
				<Container>
					<MainCarrousel className={cls.MainPage__welcomeCarrousel} />
				</Container>

				<CarrouselSaleSection />
				<PopularCategorySection />
				<PopularBrandsSection />
				<AboutSection />
			</main>
			<Footer className={cls.MainPage__footer} />
		</div>
	);
};
