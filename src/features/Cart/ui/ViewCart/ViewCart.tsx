import { FC, memo, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import CartIcon from "@/shared/assets/order/cart.svg";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./ViewCart.module.scss";

interface ViewCartProps {
	className?: string
}

export const ViewCart: FC<ViewCartProps> = memo(({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });
	const onClickHandler = useCallback(
		() => {
			// ? Дія, яка відкриває модалку з добавленими товарами у кошик
		},
		[],
	);

	return (
		<Button
			className={cn(cls.ViewCart, {}, [className])}
			onClick={onClickHandler}
		>
			<CartIcon className={cls.ViewCart__icon} />
			<span className={cls.ViewCart__counter}>0</span>
		</Button>
	);
});
