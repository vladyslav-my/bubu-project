import { FC, ReactNode } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import cls from "./OrderCard.module.scss";

interface OrderCardProps {
	className?: string;
	src?: string;
	alt?: string;
	title: string;
	price: number;
	discountPrice?: number;
	discountPercent?: number;
	slotActions?: ReactNode;
}

export const OrderCard: FC<OrderCardProps> = ({
	className, src, alt, title, slotActions, price, discountPrice, discountPercent,
}) => {
	return (
		<li className={cn(cls.OrderCard, {
			[cls.OrderCard_priceThrought]: !!discountPrice,
		}, [className])}
		>
			<div className={cls.OrderCard__imageWrapper}>
				{discountPercent && <span className={cls.OrderCard__discoutPercent}>-{discountPercent}%</span>}
				<img className={cls.OrderCard__image} src={src} alt={alt} />
			</div>
			<h2 className={cls.OrderCard__title}>{title}</h2>
			<span className={cls.OrderCard__price}>
				<b className={cls.Bold}>{price}</b> грн
			</span>
			{discountPrice && (
				<span className={cls.OrderCard__discountPrice}>
					<b className={cls.Bold}>{discountPrice}</b> грн
				</span>
			)}
			<div className={cls.OrderCard__actions}>
				{slotActions}
				<Button modifier={ButtonModifier.AUTH} secondaryModifier={ButtonModifier.AUTHFILL}>test</Button>
			</div>
		</li>
	);
};
