import {
	FC, memo, useCallback, useMemo,
} from "react";
import { useSelector } from "react-redux";
import { CategoryItemLink, catalogModel } from "@/entities/Catalog";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { burgerMenuActions, burgerMenuSelectors } from "../../model/slice/burgerMenuSlice";
import { BackToPrevLevel } from "../BackToPrevLevel/BackToPrevLevel";
import cls from "./ThreeLevelCategory.module.scss";

interface ThreeLevelCategoryProps {
	className?: string;
}

export const ThreeLevelCategory: FC<ThreeLevelCategoryProps> = memo(({ className }) => {
	const iCategory = useSelector(burgerMenuSelectors.getICategory);
	const isOpenedThreeLevel = useSelector(burgerMenuSelectors.getIsOpenedThreeLevel);

	const dispatch = useAppDispatch();

	const onClickHandler = useCallback(() => {
		dispatch(burgerMenuActions.setIsOpenedThreeLevel(false));
	}, []);

	const CategoryItems = useMemo(() => {
		if (iCategory === undefined) {
			return null;
		}

		return catalogModel[iCategory].category.map((name) => {
			return <CategoryItemLink name={name} to={catalogModel[iCategory].to} />;
		});
	}, [iCategory]);

	return (
		<div
			className={cn(cls.ThreeLevelCategory, {
				[cls.ThreeLevelCategory_opened]: isOpenedThreeLevel,
				[cls.ThreeLevelCategory_closed]: !isOpenedThreeLevel,
			}, [className])}
		>
			<BackToPrevLevel className={cls.ThreeLevelCategory__back} onClick={onClickHandler}>Каталог</BackToPrevLevel>
			<ul className={cls.ThreeLevelCategory__list}>
				{CategoryItems}
			</ul>
		</div>
	);
});
