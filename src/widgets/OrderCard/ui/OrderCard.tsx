import { FC } from "react";
import cls from "./OrderCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface OrderCardProps {
	className?: string
}

export const OrderCard: FC<OrderCardProps> = ({ className }) => {
	return (
		<div className={classNames(cls.OrderCard, {}, [className])}>
			
		</div>
	)
}