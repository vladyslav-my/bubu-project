import { FC, useMemo } from "react";
import { ProductCardActions } from "@/features/Product";
import { ProductCard } from "@/entities/Product";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { CarrouselSection } from "../..";
import cls from "./ProductCarrouselSection.module.scss";

interface ProductCarrouselSectionProps {
	className?: string;
	data: any[];
	title: string;
	isSale: boolean;
}

export const ProductCarrouselSection: FC<ProductCarrouselSectionProps> = ({
	className, data, title, isSale,
}) => {
	const items = useMemo(() => {
		return data.map(({
			src, title, id, price, alt, discountPercent, discountPrice, isAvailable,
		}) => {
			return (
				<ProductCard
					key={id}
					id={id}
					src={src}
					price={price}
					title={title}
					alt={alt}
					discountPercent={discountPercent}
					discountPrice={discountPrice}
					isAvailable={isAvailable}
					SlotActions={ProductCardActions}
				/>
			);
		}, []);
	}, [data]);

	return (
		<CarrouselSection
			className={cn(cls.ProductCarrouselSection, {}, [className])}
			title={title}
			isProductCards
			isSale
		>
			{items}
		</CarrouselSection>
	);
};
