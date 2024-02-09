import {
	FC, ReactNode, memo, useCallback,
} from "react";
import CartIcon from "@/shared/assets/product/cart.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./AddToCart.module.scss";

interface AddToCartProps {
	className?: string;
	id?: number;
	children?: ReactNode;
}

export const AddToCart: FC<AddToCartProps> = memo(({ className, id, children }) => {
	const onClickHandler = useCallback(
		(id: number) => () => {
			// ? Дія, яка добавляє товар в корзину по id товара
		},
		[],
	);

	return (
		<Button
			className={cn(cls.AddToCart, {}, [className])}
			onClick={onClickHandler(id!)}
		>
			<CartIcon className={cls.AddToCart__icon} />
			{children}
		</Button>
	);
});
