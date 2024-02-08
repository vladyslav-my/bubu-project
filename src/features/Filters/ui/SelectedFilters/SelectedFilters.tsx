import { FC, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonModifier, RemoveButton } from "@/shared/ui/Button";
import FilterIcon from "../../assets/filter.svg";
import { categoryOptions } from "../../model/options/categoryOptions";
import { CompaniesOptionsValues, companiesOptions } from "../../model/options/companiesOptions";
import { filtersMenuActions, filtersMenuSelectors } from "../../model/slice/filtersMenuSlice";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import { CategoryOptionValue } from "../../model/types/FiltersSchema";
import cls from "./SelectedFilters.module.scss";

interface SelectedFiltersProps {
	className?: string
}

export const SelectedFilters: FC<SelectedFiltersProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const category = useSelector(filtersSelectors.getCategory);
	const available = useSelector(filtersSelectors.getAvailable);
	const discount = useSelector(filtersSelectors.getDiscount);
	const companies = useSelector(filtersSelectors.getCompanies);

	const isOpen = useSelector(filtersMenuSelectors.isOpen);

	const onClickCategoryClickHandler = useCallback(
		(value: string) => () => {
			dispatch(filtersActions.setCategory(value as CategoryOptionValue));
		},
		[],
	);

	const onClickCompaniesClickHandler = useCallback(
		(value: string) => () => {
			dispatch(filtersActions.setCompanies(value));
		},
		[],
	);

	const onClickAvailableClickHandler = useCallback(
		() => {
			dispatch(filtersActions.setAvailable(false));
		},
		[],
	);

	const onClickDiscountClickHandler = useCallback(
		() => {
			dispatch(filtersActions.setDiscount(false));
		},
		[],
	);

	const categoryItems = useMemo(
		() => categoryOptions.map((option) => {
			const isActive = category.includes(option.value as CategoryOptionValue);

			if (!isActive) {
				return null;
			}

			return (
				<li>
					<RemoveButton
						key={option.value}
						onClick={onClickCategoryClickHandler(option.value)}
					>
						Категорія: {option.content}
					</RemoveButton>
				</li>
			);
		}),
		[category, onClickCategoryClickHandler],
	);

	const availableCheckbox = useMemo(() => {
		if (!available) {
			return null;
		}

		return (
			<li>
				<RemoveButton
					onClick={onClickAvailableClickHandler}
				>
					В наявності
				</RemoveButton>
			</li>
		);
	}, [available, onClickAvailableClickHandler]);

	const discountCheckbox = useMemo(() => {
		if (!discount) {
			return null;
		}

		return (
			<li>
				<RemoveButton
					onClick={onClickDiscountClickHandler}
				>
					Зі знижкою
				</RemoveButton>
			</li>
		);
	}, [discount, onClickDiscountClickHandler]);

	const companiesItems = useMemo(

		() => companiesOptions.map((option) => {
			const isActive = companies.includes(option.value);

			if (!isActive) {
				return null;
			}

			return (
				<li>
					<RemoveButton
						key={option.value}
						onClick={onClickCompaniesClickHandler(option.value)}
					>
						Виробник: {option.content}
					</RemoveButton>
				</li>
			);
		}),
		[companies, onClickCompaniesClickHandler],
	);

	const onClickOpenFilterMenu = useCallback(() => {
		dispatch(filtersMenuActions.setIsOpen(true));
		dispatch(filtersActions.setApply(true));
	}, [dispatch, isOpen]);

	return (
		<div className={cn(cls.SelectedFilters, {}, [className])}>
			<ul className={cls.SelectedFilters__list}>
				<li>
					<Button
						className={cn(cls.SelectedFilters__filtersButton, {}, [className])}
						onClick={onClickOpenFilterMenu}
						modifier={ButtonModifier.AUTH}
						secondaryModifier={ButtonModifier.AUTHFILL}
						Icon={FilterIcon}
					>
						Фільтр
					</Button>
				</li>
				{categoryItems}
				{availableCheckbox}
				{discountCheckbox}
				{companiesItems}
			</ul>

		</div>
	);
};
