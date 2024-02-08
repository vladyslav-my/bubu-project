import { FC, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Spoiler } from "@/shared/ui/Spoiler";
import { CompaniesOptionsValues, companiesOptions } from "../../model/options/companiesOptions";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import cls from "./FilterCompanies.module.scss";

interface FilterCompaniesProps {
	className?: string
}

export const FilterCompanies: FC<FilterCompaniesProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const companies = useSelector(filtersSelectors.getTempCompanies);
	const onButtonClickHandler = useCallback(
		(value: string) => () => {
			dispatch(filtersActions.setCompanies(value));
		},
		[],
	);

	const checkboxItems = useMemo(
		() => companiesOptions.map((option) => {
			const checked = companies.includes(option.value as CompaniesOptionsValues);
			return (
				<li>
					<Checkbox
						checked={checked}
						label={option.content}
						key={option.value}
						onChange={onButtonClickHandler(option.value)}
					/>
				</li>

			);
		}),
		[companies],
	);

	return (
		<Spoiler title="Виробник" className={cn(cls.FilterCompanies, {}, [className])}>
			<ul className={cls.FilterCompanies__list}>
				{checkboxItems}
			</ul>
		</Spoiler>
	);
};
