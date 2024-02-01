import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ViewCart } from "@/features/Cart";
import { ViewComparison } from "@/features/Comparison";
import { ViewFavorite } from "@/features/Favorite";
import { OrderSearchField, ToOrderSearchField } from "@/features/OrderSearch";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./OrdersActionsGroup.module.scss";

interface OrdersActionsGroupProps {
	className?: string
}

export const OrdersActionsGroup: FC<OrdersActionsGroupProps> = ({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });
	return (
		<div className={cn(cls.OrdersActionsGroup, {}, [className])}>
			{isMobile ? <ToOrderSearchField /> : <OrderSearchField className={cls.OrdersActionsGroup__search} />}
			<ViewComparison className={cls.OrdersActionsGroup__comparison} />
			<ViewFavorite className={cls.OrdersActionsGroup__favorite} />
			<ViewCart className={cls.OrdersActionsGroup__cart} />
		</div>
	);
};
