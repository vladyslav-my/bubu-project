import { FC } from "react";
import { useSelector } from "react-redux";
import { catalogSpoilerSelectors } from "@/features/Catalog";
import { MainCarrousel } from "@/entities/MainCarrousel";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Container } from "@/shared/ui/Container";
import cls from "./WelcomeCarrouselSection.module.scss";

interface WelcomeCarrouselSectionProps {
	className?: string
}

export const WelcomeCarrouselSection: FC<WelcomeCarrouselSectionProps> = ({ className }) => {
	const isOpenSpoilerCatalog = useSelector(catalogSpoilerSelectors.isOpen);

	return (
		<section className={cn(cls.WelcomeCarrouselSection, {}, [className])}>
			<Container>
				<MainCarrousel className={
					cn(cls.WelcomeCarrouselSection__carrousel, {
						[cls.WelcomeCarrouselSection__carrousel_ml]: isOpenSpoilerCatalog,
					}, [className])
				}
				/>
			</Container>
		</section>
	);
};
