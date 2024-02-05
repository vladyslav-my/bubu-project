import {
	FC, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
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
	className, title, isSale, children,
}) => {
	const listRef = useRef<HTMLUListElement>(null);
	const timeoutRef = useRef<any>(null);
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
			console.log(itemWidth);
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

	const onScrollHandler = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			if (listRef.current) {
				// @ts-ignore
				const itemWidth = listRef.current.scrollLeft;
				const { scrollWidth } = listRef.current;
			}
		}, 100);
	}, [currentIndexItem]);

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
					className={cn(cls.MainCarrousel__dotItem, {
						[cls.MainCarrousel__dotItem_active]: i === currentIndexItem,
					})}
					onClick={onClickDotHandler(i)}
				/>
			);
		}, []);
	}, [currentIndexItem, maxIndexItem]);

	return (
		<div className={cn(cls.MainCarrousel, {
		}, [className])}
		>
			{isShowLeftButton && <ArrowButton circle className={cls.MainCarrousel__buttonLeft} onClick={onClickHandlerLeft} left />}
			{isShowRightButton && <ArrowButton circle className={cls.MainCarrousel__buttonRight} onClick={onClickHandlerRight} />}
			<ul ref={listRef} className={cls.MainCarrousel__carrouselList} onScroll={onScrollHandler}>
				{/* {children} */}
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
