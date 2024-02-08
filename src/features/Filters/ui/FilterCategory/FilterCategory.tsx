import { FC, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import { Spoiler } from "@/shared/ui/Spoiler";
import { categoryOptions } from "../../model/options/categoryOptions";
import { sortOptions } from "../../model/options/sortOptions";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import { CategoryOptionValue } from "../../model/types/FiltersSchema";
import cls from "./FilterCategory.module.scss";

interface FilterCategoryProps {
	className?: string
}

export const FilterCategory: FC<FilterCategoryProps> = ({ className }) => {
	const dispatch = useDispatch();
	const values = useSelector(filtersSelectors.getTempCategory);
	const onButtonClickHandler = useCallback(
		(value: string) => () => {
			dispatch(filtersActions.setCategory(value as CategoryOptionValue));
		},
		[],
	);

	const buttons = useMemo(
		() => categoryOptions.map((option) => {
			const isActive = values.includes(option.value as CategoryOptionValue);
			return (
				<li>
					<Button
						key={option.value}
						modifier={ButtonModifier.CATEGORY}
						secondaryModifier={isActive ? ButtonModifier.CATEGORYACTIVE : ButtonModifier.CATEGORTNONACTIVE}
						onClick={onButtonClickHandler(option.value)}
					>
						{option.content}
					</Button>
				</li>

			);
		}),
		[values, onButtonClickHandler],
	);

	return (
		<Spoiler isOpen className={cn(cls.FilterCategory, {}, [className])} title="Категорія">
			<ul className={cls.FilterCategory__list}>
				{buttons}
			</ul>
		</Spoiler>
	);
};
