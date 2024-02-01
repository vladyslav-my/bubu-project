import {
	FC, MouseEventHandler, memo, useCallback,
} from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { burgerMenuActions, burgerMenuSelectors } from "../../model/slice/burgerMenuSlice";
import { OneLevelMenu } from "../OneLevelMenu/OneLevelMenu";
import { ThreeLevelCategory } from "../ThreeLevelCategory/ThreeLevelCategory";
import { TwoLevelCatalog } from "../TwoLevelCatalog/TwoLevelCatalog";
import cls from "./OverlayBurgerMenu.module.scss";

interface OverlayBurgerMenuProps {
	className?: string
}

export const OverlayBurgerMenu: FC<OverlayBurgerMenuProps> = memo(({ className }) => {
	const isOpenedOneLevel = useSelector(burgerMenuSelectors.getIsOpenedOneLevel);
	const dispatch = useAppDispatch();

	const onClickHandlerOverlay = useCallback(() => {
		dispatch(burgerMenuActions.setIsOpenedOneLevel(false));
		dispatch(burgerMenuActions.setIsOpenedTwoLevel(false));
		dispatch(burgerMenuActions.setIsOpenedThreeLevel(false));
	}, []);

	const onClickDisableCaptureHandler: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
		e.stopPropagation();
	}, []);

	return (
		<div
			className={cn(cls.OverlayBurgerMenu, {
				[cls.OverlayBurgerMenu_opened]: isOpenedOneLevel,
				[cls.OverlayBurgerMenu_closed]: !isOpenedOneLevel,
			}, [className])}
			onClick={onClickHandlerOverlay}
		>
			<div onClick={onClickDisableCaptureHandler}>
				<OneLevelMenu />
				<TwoLevelCatalog />
				<ThreeLevelCategory />
			</div>
		</div>
	);
});
