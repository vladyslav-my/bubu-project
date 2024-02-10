import {
	FC, ReactNode, createElement, useCallback, useLayoutEffect, useRef, useState,
} from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import cls from "./InfoToggle.module.scss";

interface InfoToggleProps {
	className?: { parent: string, children: string };
	children: ReactNode;
	minShowElements?: number;
	isGradient?: boolean;
	tag?: string;
}

export const InfoToggle: FC<InfoToggleProps> = ({
	className, minShowElements = 3, children, isGradient, tag = "div",
}) => {
	const [isPreview, setIsPreview] = useState(true);
	const [amountChildren, setAmountChildren] = useState(0);
	const blocksRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (blocksRef.current) {
			const { children } = blocksRef.current;
			setAmountChildren(children.length);
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
		<div className={cn(cls.InfoToggle, {
			[cls.InfoToggle_show]: isPreview,
			[cls.InfoToggle_hidden]: !isPreview,
			[cls.InfoToggle_text]: isGradient && isPreview,
		}, [className?.parent])}
		>
			{createElement(tag, { ref: blocksRef, className: cn(cls.InfoToggle__blocks, {}, [className?.children]) }, children)}
			{
				!(amountChildren <= minShowElements) && (
					<Button
						onClick={onClickButtonHandler}
						className={cls.InfoToggle__button}
						modifier={ButtonModifier.UNDERLINE}
					>{isPreview ? "Докладніше" : "Сховати"}
					</Button>
				)
			}
		</div>
	);
};
