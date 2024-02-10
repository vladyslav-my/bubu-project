import { FC } from "react";
import { ProductCarrouselSection } from "@/features/Carrousel";
import { mockProductListModel } from "@/entities/MockProductList";

interface CarrouselSaleSectionProps {
}

export const CarrouselSaleSection: FC<CarrouselSaleSectionProps> = () => {
	return (
		<ProductCarrouselSection data={mockProductListModel} isSale title="АКЦІЯ!" />
	);
};
