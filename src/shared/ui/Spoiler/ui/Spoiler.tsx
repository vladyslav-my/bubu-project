import {
	FC, ReactNode, memo, useCallback, useEffect, useRef, useState,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import { Button } from "../../Button";
import ArrowIcon from "../assets/arrow.svg";
import cls from "./Spoiler.module.scss";

interface SpoilerProps {
	className?: string;
	children: ReactNode;
	title: string;
	isOpen?: boolean;
}

export const Spoiler: FC<SpoilerProps> = memo(({
	className, title, children, isOpen,
}) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(isOpen);
	const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

	useEffect(() => {
		const element = contentRef.current;
		if (element) {
			const height = element.scrollHeight;
			setMaxHeight(open ? height : 0);
		}
	}, [open]);

	const onClick = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	return (
		<div
			className={cn(cls.Spoiler, {
				[cls.Spoiler_opened]: open,
				[cls.Spoiler_closed]: !open,
			}, [className])}
		>
			<Button className={cls.Spoiler__summary} onClick={onClick}>
				<h3 className={cls.Spoiler__title}>{title}</h3>
				<ArrowIcon className={cls.Spoiler__icon} />
			</Button>
			<div style={{ maxHeight }} ref={contentRef} className={cls.Spoiler__content}>
				{children}
			</div>
		</div>
	);
});
