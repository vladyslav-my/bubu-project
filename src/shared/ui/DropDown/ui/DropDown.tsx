import {
	FC, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import { Button } from "../../Button";
import ArrowIcon from "../assets/arrow.svg";
import cls from "./DropDown.module.scss";

interface DropDownProps {
	className?: string;
	value: string;
	open?: boolean;
	options: DropDowOptions[];
	onToggle: (value: string) => void;
}

interface DropDowOptions {
	value: string;
	content: string;
}

export const DropDown: FC<DropDownProps> = memo(({
	className, value, options, onToggle, open = false,
}) => {
	const contentRef = useRef<HTMLUListElement>(null);
	const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
	const [isOpen, setIsOpen] = useState(open);
	const [activeContent, setActiveContent] = useState("");

	const onButtonToggleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const onButtonClickHandler = useCallback((value: string) => () => {
		onToggle(value);
		onButtonToggleClick();
	}, []);

	const buttons = useMemo(
		() => options.map((option) => {
			if (option.value === value) {
				setActiveContent(option.content);
				return null;
			}

			return (
				<li>
					<Button
						key={option.value}
						onClick={onButtonClickHandler(option.value)}
					>
						{option.content}
					</Button>
				</li>
			);
		}),
		[onButtonClickHandler, value],
	);

	useEffect(() => {
		const element = contentRef.current;
		if (element) {
			const height = element.scrollHeight;
			setMaxHeight(isOpen ? height : 0);
		}
	}, [isOpen]);

	return (
		<div
			className={cn(cls.DropDown, {
				[cls.DropDown_opened]: isOpen,
				[cls.DropDown_closed]: !isOpen,
			}, [className])}
		>
			<button className={cls.DropDown__summary} onClick={onButtonToggleClick}>
				<h3 className={cls.DropDown__question}>{activeContent}</h3>
				<ArrowIcon className={cls.DropDown__icon} />
			</button>
			<ul style={{ maxHeight }} ref={contentRef} className={cls.DropDown__content}>
				{buttons}
			</ul>
		</div>
	);
});
