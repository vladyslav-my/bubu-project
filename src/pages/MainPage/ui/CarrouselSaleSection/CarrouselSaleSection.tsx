import { FC } from "react";
import { CarrouselSection, CarrouselSectionItem } from "@/widgets/CarrouselSection";
import { OrderCard } from "@/entities/Order";
import Image from "@/shared/assets/Rectangle 14.png";
import cls from "./CarrouselSaleSection.module.scss";

interface CarrouselSaleSectionProps {
}

export const CarrouselSaleSection: FC<CarrouselSaleSectionProps> = () => {
	return (
		<CarrouselSection title="Акція!" isSale isOrderCards>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={6000} discountPrice={5000} discountPercent={15} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={131} discountPrice={30} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={131} discountPrice={30} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={131} discountPrice={30} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={131} discountPrice={30} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={131} discountPrice={30} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
			<CarrouselSectionItem>
				<OrderCard src={Image} price={131} discountPrice={30} title="Коляска 2в1 Anex M/Type Dune mt-01Q" />
			</CarrouselSectionItem>
		</CarrouselSection>
	);
};
