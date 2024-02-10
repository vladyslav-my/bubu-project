import {
	FC, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { Image } from "@/entities/BabyCarriageProductDetails";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton, Button } from "@/shared/ui/Button";
import cls from "./PageDetailsCarrousel.module.scss";

interface PageDetailsCarrouselProps {
	className?: string;
	images: Image[];
}

export const PageDetailsCarrousel: FC<PageDetailsCarrouselProps> = memo(({
	className,
	images,
}) => {
	const listRef = useRef<HTMLUListElement>(null);
	const [currentIndexItem, setCurrentIndexItem] = useState(0);
	const [isShowLeftButton, setIsShowLeftButton] = useState(true);
	const [isShowRightButton, setIsShowRightButton] = useState(true);

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

	const slidesItems = useMemo(() => {
		return images.map(({ id, src, alt }) => {
			return (
				<li key={id} className={cls.PageDetailsCarrousel__carrouselItem}>
					<img className={cls.PageDetailsCarrousel__image} src={src} alt={alt} />
				</li>
			);
		});
	}, [images]);

	const dotsItems = useMemo(() => {
		return images.map(({ id, src, alt }, i) => {
			return (
				<li key={id}>
					<Button
						onClick={onClickDotHandler(i)}
						className={cn(cls.PageDetailsCarrousel__dotButton, {
							[cls.PageDetailsCarrousel__dotButton_active]: i === currentIndexItem,
						})}
					>
						<img className={cls.PageDetailsCarrousel__dotImage} src={src} alt={alt} />
					</Button>
				</li>
			);
		}, []);
	}, [currentIndexItem, images, onClickDotHandler]);

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
				<ul ref={listRef} className={cls.PageDetailsCarrousel__carrouselList}>
					{slidesItems}
				</ul>
			</div>
		</div>
	);
});
