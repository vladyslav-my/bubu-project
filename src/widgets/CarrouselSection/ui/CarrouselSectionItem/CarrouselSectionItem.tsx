import { FC, ReactNode } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./CarrouselSectionItem.module.scss";

interface CarrouselSectionItemProps {
	className?: string;
	children: ReactNode;
}

export const CarrouselSectionItem: FC<CarrouselSectionItemProps> = ({ className, children }) => {
	return (
		<li className={cn(cls.CarrouselSectionItem, {}, [className])}>
			{children}
		</li>
	);
};
