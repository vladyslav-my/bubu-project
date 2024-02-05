import { FC, memo } from "react";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import ArrowIcon from "../../assets/Arrow.svg";
import { Button, ButtonProps } from "../Button";
import cls from "./ArrowButton.module.scss";

interface ArrowButtonProps extends ButtonProps {
	className?: string;
	circle?: boolean;
	left?: boolean;
}

export const ArrowButton: FC<ArrowButtonProps> = memo(({
	className, circle, left, ...otherProps
}) => {
	return (
		<Button
			className={cn(cls.ArrowButton, {
				[cls.ArrowButton_circle]: circle,
				[cls.ArrowButton_left]: left,
			}, [className])}
			{...otherProps}
		>
			<ArrowIcon className={cls.ArrowButton__icon} />
		</Button>
	);
});
