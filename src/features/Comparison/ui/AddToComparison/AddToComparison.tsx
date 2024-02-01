import { FC, memo, useCallback } from "react";
import CartIcon from "@/shared/assets/order/cart.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./AddToComparison.module.scss";

interface AddToComparisonProps {
	className?: string;
	id: number;
}

export const AddToComparison: FC<AddToComparisonProps> = memo(({ className, id }) => {
	const onClickHandler = useCallback(
		(id: number) => () => {
			// ? Дія, яка добавляє товар в корзину по id товара
		},
		[],
	);

	return (
		<Button
			className={cn(cls.AddToComparison, {}, [className])}
			onClick={onClickHandler(id)}
		>
			<CartIcon className={cls.AddToComparison__icon} />
		</Button>
	);
});
