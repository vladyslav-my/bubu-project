import {
	FC, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./InfoToggle.module.scss";

interface InfoToggleProps {
	className?: string;
	children: ReactNode;
	minShowElements?: number;
	modifier: InfoToggleModifier;
}

export enum InfoToggleModifier {
	TEXT = "InfoToggle_text",
}

export const InfoToggle: FC<InfoToggleProps> = ({
	className, minShowElements = 3, modifier, children,
}) => {
	const blocksRef = useRef<HTMLDivElement>(null);
	const [previewHeight, setPreviewHeight] = useState(0);
	const [isPreview, setIsPreview] = useState(true);
	const [fullHeight, setFullHeight] = useState<string | number>(0);

	useLayoutEffect(() => {
		if (blocksRef.current) {
			const { children } = blocksRef.current;

			let height = 0;

			for (let i = 0; i < minShowElements; i++) {
				// console.log(children[i].clientHeight, children[i]);
				// console.log(children[i].offsetHeight, children[i]);
				height += children[i].clientHeight;
			}

			children[minShowElements - 1].classList.add(cls.gradient);

			setFullHeight(blocksRef.current.scrollHeight);
			setPreviewHeight(height);
		}
	}, []);

	const onClickButtonHandler = useCallback(() => {
		setIsPreview((prev) => !prev);
	}, []);

	const calculateStyle = useCallback(() => {
		if (isPreview) {
			return { height: previewHeight };
		}

		return { height: fullHeight };
	}, [isPreview, previewHeight, fullHeight]);

	return (
		<div className={classNames(cls.InfoToggle, {}, [className, cls[modifier]])}>
			<div className={cls.InfoToggle__blocks} style={calculateStyle()} ref={blocksRef}>
				{children}
			</div>
			<Button onClick={onClickButtonHandler} className={cls.InfoToggle__button}>{isPreview ? "Докладніше" : "Сховати"}</Button>
		</div>
	);
};
