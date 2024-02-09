import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ButtonModifier } from "@/shared/ui/Button";
import { GroupButtons } from "@/shared/ui/GroupButtons";
import { sortOptions } from "../../model/options/sortOptions";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import { SortOptionValue } from "../../model/types/FiltersSchema";
import cls from "./SortButtons.module.scss";

interface SortButtonsProps {
	className?: string;
}

export const SortButtons: FC<SortButtonsProps> = ({ className }) => {
	const dispatch = useDispatch();
	const sort = useSelector(filtersSelectors.getSort);

	const onChangeHandler = useCallback((value: string) => {
		dispatch(filtersActions.setSort(value as SortOptionValue));
	}, []);

	return (
		<GroupButtons
			className={cn(cls.SortButtons, {}, [className])}
			onChange={onChangeHandler}
			value={sort}
			options={sortOptions}
			modifier={ButtonModifier.SORT}
			modifierActive={ButtonModifier.SORTACTIVE}
			modifierNonActive={ButtonModifier.SORTNONACTIVE}
		/>
	);
};
