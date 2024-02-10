import {
	FC, ReactNode, memo, useCallback, useEffect, useRef, useState,
} from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import cls from "./CarrouselSection.module.scss";

interface CarrouselSectionProps {
	className?: string;
	title?: string;
	Carrousel?: any;
	isSale?: boolean;
	isProductCards?: boolean;
	children: ReactNode;
}

export const CarrouselSection: FC<CarrouselSectionProps> = memo(({
	className, title, isSale, isProductCards, children,
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

	const preventDefaultHandler = useCallback((e) => {
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

	return (
		<section className={cn(cls.CarrouselSection, {
			[cls.CarrouselSection_padding]: isProductCards,
		}, [className])}
		>
			<Container className={cls.CarrouselSection__container}>
				<div className={cls.CarrouselSection__top}>
					<Title className={cls.CarrouselSection__title}>{title}</Title>
					{isSale && <span className={cls.CarrouselSection__sale}>SALE</span>}
					<div className={cls.CarrouselSection__buttons}>
						{isShowLeftButton && <ArrowButton onClick={onClickHandlerLeft} left />}
						{isShowRightButton && <ArrowButton onClick={onClickHandlerRight} />}
					</div>
				</div>
				<ul ref={listRef} className={cls.CarrouselSection__list}>
					{children}
				</ul>
			</Container>
		</section>
	);
});
