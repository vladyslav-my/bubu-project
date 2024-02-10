import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { AddToCart, AddToComparison } from "../..";
import { AddToFavorite } from "../Favorite/AddToFavorite/AddToFavorite";
import cls from "./ProductCardActions.module.scss";

interface ProductCardActionsProps {
	className?: string;
	id: number;
}

export const ProductCardActions: FC<ProductCardActionsProps> = ({ className, id }) => {
	return (
		<div className={cn(cls.ProductCardActions, {}, [className])}>
			<AddToCart id={id}>КУПИТИ</AddToCart>
			<AddToFavorite id={id} />
			<AddToComparison id={id} />
		</div>
	);
};
