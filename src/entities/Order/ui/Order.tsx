import { FC } from "react";
import cls from "./Order.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface OrderProps {
	className?: string
}

export const Order: FC<OrderProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Order, {}, [className])}>
			
		</div>
	)
}