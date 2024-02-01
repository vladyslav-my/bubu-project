import {
	FC, memo, useCallback, useMemo,
} from "react";
import { useSelector } from "react-redux";
import { CatalogItemButton, CatalogItemLink, catalogModel } from "@/entities/Catalog";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { burgerMenuActions, burgerMenuSelectors } from "../../model/slice/burgerMenuSlice";
import { BackToPrevLevel } from "../BackToPrevLevel/BackToPrevLevel";
import cls from "./TwoLevelCatalog.module.scss";

interface TwoLevelCatalogProps {
	className?: string;
}

export const TwoLevelCatalog: FC<TwoLevelCatalogProps> = memo(({ className }) => {
	const isOpenedThreeLevel = useSelector(burgerMenuSelectors.getIsOpenedTwoLevel);
	const dispatch = useAppDispatch();

	const onClickLIHandler = useCallback((i: number) => () => {
		dispatch(burgerMenuActions.setIndexCategory(i));
		dispatch(burgerMenuActions.setIsOpenedThreeLevel(true));
	}, []);

	const onClickBackHandler = useCallback(() => {
		dispatch(burgerMenuActions.setIsOpenedTwoLevel(false));
	}, []);

	const CatalogItems = useMemo(() => {
		return catalogModel.map(({
			id, Icon, name, to, category,
		}, i) => {
			if (!category.length) {
				return <CatalogItemLink key={id} Icon={Icon} name={name} to={to} />;
			}

			return <CatalogItemButton key={id} Icon={Icon} name={name} onClick={onClickLIHandler(i)} />;
		}, []);
	}, []);

	return (
		<div
			className={cn(cls.TwoLevelCatalog, {
				[cls.TwoLevelCatalog_opened]: isOpenedThreeLevel,
				[cls.TwoLevelCatalog_closed]: !isOpenedThreeLevel,
			}, [className])}
		>
			<BackToPrevLevel className={cls.TwoLevelCatalog__back} onClick={onClickBackHandler}>Меню</BackToPrevLevel>
			<ul className={cls.TwoLevelCatalog__list}>
				{CatalogItems}
			</ul>
		</div>
	);
});
