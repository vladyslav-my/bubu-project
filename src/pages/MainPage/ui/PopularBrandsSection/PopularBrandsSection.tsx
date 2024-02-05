import { FC, useMemo } from "react";
import { CarrouselSection } from "@/widgets/CarrouselSection";
import { PopularBrandsItem, popularBrandsModel } from "@/entities/PopularBrands";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./PopularBrandsSection.module.scss";

interface PopularBrandsSectionProps {
	className?: string
}

export const PopularBrandsSection: FC<PopularBrandsSectionProps> = ({ className }) => {
	const popularBrandsItems = useMemo(() => {
		return popularBrandsModel.map(({
			id, src, alt,
		}) => {
			return (
				<PopularBrandsItem key={id} src={src} alt={alt} />
			);
		}, []);
	}, []);

	return (
		<CarrouselSection title="Популярні бренди" className={cn(cls.PopularBrandsSection, {}, [className])}>
			{popularBrandsItems}
		</CarrouselSection>
	);
};
