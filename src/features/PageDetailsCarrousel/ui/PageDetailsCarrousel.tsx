import {
	FC, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import DiscountImage from "../assets/discount.png";
import cls from "./PageDetailsCarrousel.module.scss";

interface PageDetailsCarrouselProps {
	className?: string;
	title?: string;
	Carrousel?: any;
	isSale?: boolean;
	children?: ReactNode;
}

export const PageDetailsCarrousel: FC<PageDetailsCarrouselProps> = memo(({
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
					className={cn(cls.PageDetailsCarrousel__dotItem, {
						[cls.PageDetailsCarrousel__dotItem_active]: i === currentIndexItem,
					})}
					onClick={onClickDotHandler(i)}
				>
					<img className={cls.PageDetailsCarrousel__dotImage} src={DiscountImage} alt="" />
				</li>
			);
		}, []);
	}, [currentIndexItem, maxIndexItem]);

	return (
		<div className={cn(cls.PageDetailsCarrousel, {
		}, [className])}
		>
			<div>
				<ul className={cls.PageDetailsCarrousel__dotsList}>
					{dotsItems}
				</ul>
			</div>
			<div className={cls.PageDetailsCarrousel__wrapper}>
				{isShowRightButton && <ArrowButton outline className={cls.PageDetailsCarrousel__buttonRight} onClick={onClickHandlerRight} />}
				{isShowLeftButton && <ArrowButton outline className={cls.PageDetailsCarrousel__buttonLeft} onClick={onClickHandlerLeft} left />}
				<ul ref={listRef} className={cls.PageDetailsCarrousel__carrouselList} onScroll={onScrollHandler}>
					{/* {children} */}
					<li className={cls.PageDetailsCarrousel__carrouselItem}>
						<img className={cls.PageDetailsCarrousel__image} src={DiscountImage} alt="" />
					</li>
					<li className={cls.PageDetailsCarrousel__carrouselItem}>
						<img className={cls.PageDetailsCarrousel__image} src={DiscountImage} alt="" />
					</li>
					<li className={cls.PageDetailsCarrousel__carrouselItem}>
						<img className={cls.PageDetailsCarrousel__image} src={DiscountImage} alt="" />
					</li>
				</ul>
			</div>
		</div>
	);
});
