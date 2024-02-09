import {
	FC, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import cls from "./InfoToggle.module.scss";

interface InfoToggleProps {
	className?: string;
	children: ReactNode;
	minShowElements?: number;
	isGradient?: boolean
}

export const InfoToggle: FC<InfoToggleProps> = ({
	className, minShowElements = 3, children, isGradient,
}) => {
	const [isPreview, setIsPreview] = useState(true);
	const blocksRef = useRef<HTMLDivElement>(null);
	// const [previewHeight, setPreviewHeight] = useState(0);
	// const [fullHeight, setFullHeight] = useState<string | number>(0);

	// useLayoutEffect(() => {
	// 	if (blocksRef.current) {
	// 		const { children } = blocksRef.current;

	// 		let height = 0;

	// 		for (let i = 0; i < minShowElements; i++) {
	// 			console.log(children[i].clientHeight, children[i]);
	// 			// console.log(children[i].offsetHeight, children[i]);
	// 			height += children[i].clientHeight;
	// 		}

	// 		children[minShowElements - 1].classList.add(cls.gradient);

	// 		setFullHeight(blocksRef.current.scrollHeight);
	// 		setPreviewHeight(height);
	// 	}
	// }, []);
	// const calculateStyle = useCallback(() => {
	// 	if (isPreview) {
	// 		return { height: previewHeight };
	// 	}

	// 	return { height: fullHeight };
	// }, [isPreview, previewHeight, fullHeight]);

	useLayoutEffect(() => {
		if (blocksRef.current) {
			const { children } = blocksRef.current;
			for (let i = minShowElements; i < children.length; i++) {
				if (isPreview) {
					children[i].classList.add(cls._hidden);
				} else {
					children[i].classList.remove(cls._hidden);
				}
			}
		}
	}, [isPreview, minShowElements]);

	const onClickButtonHandler = useCallback(() => {
		setIsPreview((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.InfoToggle, {
			[cls.InfoToggle_show]: isPreview,
			[cls.InfoToggle_hidden]: !isPreview,
			[cls.InfoToggle_text]: isGradient && isPreview,
		}, [className])}
		>
			<div ref={blocksRef} className={cls.InfoToggle__blocks}>
				{children}
			</div>
			<Button
				onClick={onClickButtonHandler}
				className={cls.InfoToggle__button}
				modifier={ButtonModifier.UNDERLINE}
			>{isPreview ? "Докладніше" : "Сховати"}
			</Button>
		</div>
	);
};
