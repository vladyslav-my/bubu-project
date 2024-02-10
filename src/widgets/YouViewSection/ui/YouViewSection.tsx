import { FC } from "react";
import { ProductCarrouselSection } from "@/features/Carrousel";
import { mockProductListModel } from "@/entities/MockProductList";

interface YouViewSectionProps {
}

export const YouViewSection: FC<YouViewSectionProps> = () => {
	return (
		<ProductCarrouselSection title="ВИ ПЕРЕГЛЯДАЛИ" data={mockProductListModel} />
	);
};
