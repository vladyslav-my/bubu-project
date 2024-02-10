import {
	FC, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton } from "@/shared/ui/Button";
import DiscountImage from "../assets/discount.png";
import cls from "./MainCarrousel.module.scss";

interface MainCarrouselProps {
	className?: string;
	title?: string;
	Carrousel?: any;
	isSale?: boolean;
	children?: ReactNode;
}

export const MainCarrousel: FC<MainCarrouselProps> = memo(({
	className,
}) => {
	const listRef = useRef<HTMLUListElement>(null);
	const [maxIndexItem, setMaxIndexItem] = useState(0);
	const [currentIndexItem, setCurrentIndexItem] = useState(0);
	const [isShowLeftButton, setIsShowLeftButton] = useState(true);
	const [isShowRightButton, setIsShowRightButton] = useState(true);

	useEffect(() => {
		if (listRef.current) {
			setMaxIndexItem(listRef.current.children.length - 1);
		}
	}, []);

	useEffect(() => {
		if (listRef.current) {
			// @ts-ignore
			const itemWidth = listRef.current.children[currentIndexItem].offsetLeft - listRef.current.offsetLeft;
			listRef.current.scrollTo({
				left: itemWidth,
				behavior: "smooth",
			});

			const { clientWidth, scrollWidth } = listRef.current;
			const scrollWidthPassed = itemWidth + clientWidth;
			if (scrollWidthPassed >= scrollWidth) {
				setIsShowRightButton(false);
			} else {
				setIsShowRightButton(true);
			}
		}

		if (currentIndexItem === 0) {
			setIsShowLeftButton(false);
		} else {
			setIsShowLeftButton(true);
		}
	}, [currentIndexItem]);

	const preventDefaultHandler = useCallback((e: any) => {
		if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
			e.preventDefault();
		}
	}, []);

	useEffect(() => {
		if (listRef.current) {
			listRef.current.addEventListener("wheel", preventDefaultHandler, { passive: false });
			listRef.current.addEventListener("touchmove", preventDefaultHandler, { passive: false });
		}
	}, [preventDefaultHandler]);

	const onClickHandlerLeft = useCallback(() => {
		setCurrentIndexItem((prev) => prev - 1);
	}, []);

	const onClickHandlerRight = useCallback(() => {
		setCurrentIndexItem((prev) => prev + 1);
	}, []);

	const onClickDotHandler = useCallback((index: number) => () => {
		setCurrentIndexItem(index);
	}, []);

	const dotsItems = useMemo(() => {
		return new Array(maxIndexItem + 1).fill(undefined).map((_, i) => {
			return (
				<li
					key={i}
					className={cn(cls.MainCarrousel__dotItem, {
						[cls.MainCarrousel__dotItem_active]: i === currentIndexItem,
					})}
					onClick={onClickDotHandler(i)}
				/>
			);
		}, []);
	}, [currentIndexItem, maxIndexItem, onClickDotHandler]);

	return (
		<div className={cn(cls.MainCarrousel, {
		}, [className])}
		>
			{isShowLeftButton && <ArrowButton outline className={cls.MainCarrousel__buttonLeft} onClick={onClickHandlerLeft} left />}
			{isShowRightButton && <ArrowButton outline className={cls.MainCarrousel__buttonRight} onClick={onClickHandlerRight} />}
			<ul ref={listRef} className={cls.MainCarrousel__carrouselList}>
				<li className={cls.MainCarrousel__carrouselItem}>
					<img className={cls.MainCarrousel__image} src={DiscountImage} alt="" />
				</li>
				<li className={cls.MainCarrousel__carrouselItem}>
					<img className={cls.MainCarrousel__image} src={DiscountImage} alt="" />
				</li>
				<li className={cls.MainCarrousel__carrouselItem}>
					<img className={cls.MainCarrousel__image} src={DiscountImage} alt="" />
				</li>
			</ul>
			<ul className={cls.MainCarrousel__dotsList}>
				{dotsItems}
			</ul>
		</div>
	);
});
