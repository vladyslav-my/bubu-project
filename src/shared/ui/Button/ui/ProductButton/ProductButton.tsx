import { FC, ReactNode } from "react";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import CartIcon from "../../assets/cart.svg";
import { Button } from "../Button";
import cls from "./ProductButton.module.scss";

interface ProductButtonProps {
	className?: string;
	modifier?: ProductButtonModifier;
	isCart?: boolean;
	children: ReactNode;
}

export enum ProductButtonModifier {
	FILL = "ProductButton_fill",
	OUTLINE = "ProductButton_outline",
	FEEDBACK = "ProductButton_feedback",
}

export const ProductButton: FC<ProductButtonProps> = ({
	className,
	isCart,
	children,
	modifier = ProductButtonModifier.FILL,
}) => {
	return (
		<Button className={cn(cls.ProductButton, {}, [cls[modifier], className])}>
			{isCart && <CartIcon className={cls.ProductButton__icon} />}
			{children}
		</Button>
	);
};
