import { FC } from "react";
import { CarrouselSection, ProductCarrouselSection } from "@/features/Carrousel";
import { mockProductListModel } from "@/entities/MockProductList";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./WithThisBuySection.module.scss";

interface WithThisBuySectionProps {
	className?: string;
	data?: any[]
}

export const WithThisBuySection: FC<WithThisBuySectionProps> = ({ className, data = mockProductListModel }) => {
	return (
		<ProductCarrouselSection className={className} data={data} title="З ЦИМ ТАКОЖ КУПУЮТЬ" />
	);
};
