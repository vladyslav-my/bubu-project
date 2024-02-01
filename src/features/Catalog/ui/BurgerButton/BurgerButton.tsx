import {
	FC, memo, useCallback,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./BurgerButton.module.scss";

interface BurgerButtonProps {
	className?: string;
	setIsOpen: any;
	isOpen: boolean;
}

export const BurgerButton: FC<BurgerButtonProps> = memo(({ className, setIsOpen, isOpen }) => {
	const onClickHandler = useCallback(() => {
		setIsOpen((prev: boolean) => !prev);
	}, []);

	return (
		<button
			onClick={onClickHandler}
			className={classNames(cls.BurgerButton, {
				[cls.BurgerButton_opened]: isOpen,
			}, [className])}
		>
			<span className={cls.BurgerButton__item} />
		</button>
	);
});
