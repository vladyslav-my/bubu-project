import {
	useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { Button } from "@/shared/ui/Button";

export const useCarrousel = () => {
	const carrouselRef = useRef<HTMLDivElement>(null);
	const [widthCarrousel, setWidthCarrousel] = useState(0);
	const [widthCarrouselGap, setWidthCarrouselGap] = useState(0);
	const [widthChildren, setWidthСhildren] = useState(0);
	const [translateCarrousel, setTranslateCarrousel] = useState(0);
	const [isShowLeftButton, setIsShowLeftButton] = useState(true);
	const [isShowRightButton, setIsShowRightButton] = useState(true);

	const onClickLeft = () => { // 264
		setTranslateCarrousel((prev) => prev - 264);
	};

	const onClickRight = () => {
		setTranslateCarrousel((prev) => prev + 264);
	};

	useEffect(() => {
		if (carrouselRef.current) {
			const { scrollWidth, style, children } = carrouselRef.current;
			setWidthCarrousel(scrollWidth);
			// setWidthCarrouselGap(children[0].style.columnGap);
			// setWidthСhildren(+children[0].style);
		}

		return () => {

		};
	}, []);

	useEffect(() => {
		if (translateCarrousel === 0) {
			setIsShowLeftButton(false);
		} else {
			setIsShowLeftButton(true);
		}

		if ((widthCarrousel - translateCarrousel) === 1290) {
			setIsShowRightButton(false);
		} else {
			setIsShowRightButton(true);
		}
	}, [translateCarrousel]);

	// const CarrouselWrapper = useCallback(({ className, children }) => {
	// 	return (
	// 		<div ref={carrouselRef} style={{ overflow: "hidden" }}>
	// 			<ul style={{ transform: `translateX(-${translateCarrousel}px)` }} className={className}>
	// 				{children}
	// 			</ul>
	// 		</div>
	// 	);
	// }, [translateCarrousel]);

	const CarrouselWrapper = useMemo(() => (
		({ className, children, translateCarrousel }) => (
			<div style={{ overflow: "hidden" }}>
				<ul style={{ transform: `translateX(-${translateCarrousel}px)` }} className={className}>
					{children}
				</ul>
			</div>
		)
	 ), []);

	// const CarrouselItem = useCallback(({ className, children }) => {
	// 	return (
	// 		<li className={className}>
	// 			{children}
	// 		</li>
	// 	);
	// }, []);

	const CarrouselItem = useMemo(() => (
		({ className, children }) => (
			<li className={className}>
				{children}
			</li>
		)
	 ), []);

	const LeftButton = useCallback(({ className, children }) => {
		if (!isShowLeftButton) {
			return null;
		}

		return (
			<Button className={className} onClick={onClickLeft}>{children}</Button>
		);
	}, [isShowLeftButton]);

	const RightButton = useCallback(({ className, children }) => {
		if (!isShowRightButton) {
			return null;
		}

		return (
			<Button className={className} onClick={onClickRight}>{children}</Button>
		);
	}, [isShowRightButton]);

	return {
		CarrouselWrapper, CarrouselItem, LeftButton, RightButton,
	};
};
