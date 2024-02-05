import {
	FC, MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState,
} from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./Carrousel.module.scss";

interface CarrouselProps {
	className?: string;
	children: ReactNode;
	setIsShowLeftButton?: any;
	setIsShowRightButton?: any;
	continueSlide: any;
}

export const Carrousel: FC<CarrouselProps> = ({
	className, children,
}) => {
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {

	}, []);

	return (
		<ul
			ref={listRef}
			className={cls.Сarrousel__list}
		>
			<li className={cls.Сarrousel__item} />
			<li className={cls.Сarrousel__item} />
			<li className={cls.Сarrousel__item} />
			<li className={cls.Сarrousel__item} />
			<li className={cls.Сarrousel__item} />
			<li className={cls.Сarrousel__item} />
		</ul>
	);
};
