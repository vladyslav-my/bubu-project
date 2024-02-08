import { FC, memo } from "react";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import ArrowIcon from "../../assets/Arrow.svg";
import { Button, ButtonProps } from "../Button";
import cls from "./ArrowButton.module.scss";

interface ArrowButtonProps extends ButtonProps {
	className?: string;
	outline?: boolean;
	left?: boolean;
	range?: boolean;
}

export const ArrowButton: FC<ArrowButtonProps> = memo(({
	className, outline, left, range, ...otherProps
}) => {
	return (
		<Button
			className={cn(cls.ArrowButton, {
				[cls.ArrowButton_outline]: outline,
				[cls.ArrowButton_left]: left,
				[cls.ArrowButton_range]: range,
			}, [className])}
			{...otherProps}
		>
			<ArrowIcon className={cls.ArrowButton__icon} />
		</Button>
	);
});
