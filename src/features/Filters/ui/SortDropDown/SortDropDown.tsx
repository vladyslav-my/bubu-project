import {
	FC, useCallback,
} from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { DropDown } from "@/shared/ui/DropDown";
import { sortOptions } from "../../model/options/sortOptions";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import { SortOptionValue } from "../../model/types/FiltersSchema";
import cls from "./SortDropDown.module.scss";

interface SortDropDownProps {
	className?: string
}

export const SortDropDown: FC<SortDropDownProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const sort = useSelector(filtersSelectors.getSort);

	const onToggleClickHandler = useCallback((value: string) => {
		dispatch(filtersActions.setSort(value as SortOptionValue));
	}, []);

	return (
		<DropDown
			className={cn(cls.SortDropDown, {}, [className])}
			options={sortOptions}
			onToggle={onToggleClickHandler}
			value={sort}
		/>
	);
};
