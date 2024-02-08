import {
	FC, MouseEventHandler, useCallback, useEffect,
} from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { filtersMenuSelectors } from "../model/slice/filtersMenuSlice";
import { filtersActions, filtersSelectors } from "../model/slice/filtersSlice";
import { ApplyFiltersButton } from "./ApplyFiltersButton/ApplyFiltersButton";
import { AvailableCheckBox } from "./AvailableCheckBox/AvailableCheckBox";
import { DiscountCheckBox } from "./DiscountCheckBox/DiscountCheckBox";
import { FilterCategory } from "./FilterCategory/FilterCategory";
import { FilterCompanies } from "./FilterCompanies/FilterCompanies";
import { FilterPrice } from "./FilterPrice/FilterPrice";
import cls from "./Filters.module.scss";
import { Overlay } from "./Overlay/Overlay";

interface FiltersProps {
	className?: string
}

export const Filters: FC<FiltersProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	// const isOpen = useSelector(filtersMenuSelectors.isOpen);
	const apply = useSelector(filtersSelectors.getApply);

	// useEffect(() => {
	// 	if (isTablet) {
	// 		dispatch(filtersActions.setApply(true));
	// 	} else {
	// 		dispatch(filtersActions.setApply(false));
	// 	}
	// }, [isTablet]);

	useEffect(() => {
		if (apply) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [apply]);

	return (
		<aside className={cn(cls.Filters, {
			[cls.Filters_menu]: isTablet,
			[cls.Filters_menu_open]: apply,
		}, [className])}
		>
			<div className={cls.Filters__this}>
				<FilterCategory />
				<AvailableCheckBox />
				<DiscountCheckBox />
				<FilterPrice />
				<FilterCompanies />
			</div>
			{isTablet && (
				<div className={cls.Filters__wrapper}>
					<ApplyFiltersButton className={cls.Filters__applyFiltersButton} />
				</div>
			)}
			{apply && <Overlay />}
		</aside>
	);
};
