import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { burgerMenuActions, burgerMenuSelectors } from "../../model/slice/burgerMenuSlice";
import cls from "./BurgerButton.module.scss";

interface BurgerButtonProps {
	className?: string
}

export const BurgerButton: FC<BurgerButtonProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const isOpenedOneLevel = useSelector(burgerMenuSelectors.getIsOpenedOneLevel);

	const onClickHandler = useCallback(() => {
		if (isOpenedOneLevel) {
			dispatch(burgerMenuActions.setIsOpenedOneLevel(false));
			dispatch(burgerMenuActions.setIsOpenedTwoLevel(false));
			dispatch(burgerMenuActions.setIsOpenedThreeLevel(false));
		} else {
			dispatch(burgerMenuActions.setIsOpenedOneLevel(true));
		}
	}, [isOpenedOneLevel]);

	useEffect(() => {
		if (isOpenedOneLevel) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpenedOneLevel]);

	return (
		<button
			onClick={onClickHandler}
			className={classNames(cls.BurgerButton, {
				[cls.BurgerButton_opened]: isOpenedOneLevel,
			}, [className])}
		>
			<span className={cls.BurgerButton__item} />
		</button>
	);
};
