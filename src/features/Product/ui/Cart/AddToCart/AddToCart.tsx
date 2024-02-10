import {
	FC, ReactNode, memo, useCallback,
} from "react";
import CartIcon from "@/shared/assets/product/cart.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import cls from "./AddToCart.module.scss";

interface AddToCartProps {
	className?: string;
	id?: number;
	children?: ReactNode;
	isIcon?: boolean;
}

export const AddToCart: FC<AddToCartProps> = memo(({
	className, id, children, isIcon,
}) => {
	const onClickHandler = useCallback(
		(id: number) => () => {
			// ? Дія, яка добавляє товар в корзину по id товара
		},
		[],
	);

	return (
		<Button
			className={cn(cls.AddToCart, {
				[cls.AddToCart_icon]: isIcon,
			}, [className])}
			modifier={!isIcon ? ButtonModifier.AUTH : undefined}
			secondaryModifier={!isIcon ? ButtonModifier.AUTHFILL : undefined}
			onClick={onClickHandler(id!)}
		>
			{isIcon && <CartIcon className={cls.AddToCart__icon} />}
			{children}
		</Button>
	);
});
