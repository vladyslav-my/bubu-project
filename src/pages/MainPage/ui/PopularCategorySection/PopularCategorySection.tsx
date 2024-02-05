import { FC, useMemo } from "react";
import { popularCategoryModel, PopularCategoryItem } from "@/entities/PopularCategory";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Container } from "@/shared/ui/Container";
import cls from "./PopularCategorySection.module.scss";

interface PopularCategorySectionProps {
	className?: string;
}

export const PopularCategorySection: FC<PopularCategorySectionProps> = ({ className }) => {
	const popularCategoryItems = useMemo(() => {
		return popularCategoryModel.map(({
			id, src, title, to, modifier,
		}) => {
			return (
				<PopularCategoryItem
					className={
						cn(cls.PopularCategorySection__item, {

						}, [cls[`PopularCategorySection__item_${id}`]])
					}
					key={id}
					src={src}
					to={to}
					title={title}
					modifier={modifier}
				/>
			);
		}, []);
	}, []);

	return (
		<section className={cn(cls.PopularCategorySection, {}, [className])}>
			<Container>
				<ul className={cls.PopularCategorySection__list}>
					{popularCategoryItems}
				</ul>
			</Container>
		</section>
	);
};
