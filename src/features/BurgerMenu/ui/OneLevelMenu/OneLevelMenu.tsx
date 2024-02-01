import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { ToPersonalAccount } from "@/features/Auth";
import { LangSwitcher } from "@/features/LangSwitcher";
import { SocialNetworkList } from "@/features/SocialNetwork";
import { PhoneNumber } from "@/entities/PhoneNumber";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { burgerMenuActions, burgerMenuSelectors } from "../../model/slice/burgerMenuSlice";
import { CatalogButton } from "../CatalogButton/CatalogButton";
import { Nav } from "../Nav/Nav";
import cls from "./OneLevelMenu.module.scss";

interface OneLevelMenuProps {
	className?: string;
}

export const OneLevelMenu: FC<OneLevelMenuProps> = memo(({ className }) => {
	const isOpenedOneLevel = useSelector(burgerMenuSelectors.getIsOpenedOneLevel);

	const dispatch = useAppDispatch();

	const onClickCatalogHandler = useCallback(
		() => {
			dispatch(burgerMenuActions.setIsOpenedTwoLevel(true));
		},
		[],
	);

	return (
		<div
			className={cn(cls.OneLevelMenu, {
				[cls.OneLevelMenu_open]: isOpenedOneLevel,
				[cls.OneLevelMenu_closed]: !isOpenedOneLevel,
			}, [className])}
		>
			<CatalogButton className={cls.OneLevelMenu__catalogButton} onClick={onClickCatalogHandler} />
			<Nav />
			<div className={cls.OneLevelMenu__lineDecoration} />
			<div className={cls.OneLevelMenu__actions}>
				<PhoneNumber />
				<SocialNetworkList />
				<LangSwitcher />
				<ToPersonalAccount />
			</div>

		</div>
	);
});
