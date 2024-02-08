import {
	FC, memo, useCallback,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./BurgerButton.module.scss";

interface BurgerButtonProps {
	className?: string;
	setIsOpen: any;
	isOpen: boolean;
	onClick: () => void;
}

export const BurgerButton: FC<BurgerButtonProps> = memo(({ className, onClick, isOpen }) => {
	return (
		<button
			onClick={onClick}
			className={classNames(cls.BurgerButton, {
				[cls.BurgerButton_opened]: isOpen,
			}, [className])}
		>
			<span className={cls.BurgerButton__item} />
		</button>
	);
});
