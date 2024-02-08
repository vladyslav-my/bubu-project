import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { DoubleRange } from "@/shared/ui/DoubleRange";
import { Spoiler } from "@/shared/ui/Spoiler";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import cls from "./FilterPrice.module.scss";

interface FilterPriceProps {
	className?: string
}

export const FilterPrice: FC<FilterPriceProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const price = useSelector(filtersSelectors.getTempPrice);

	const onChangeMax = useCallback((value: number) => {
		dispatch(filtersActions.setMaxPrice(value));
	}, []);

	const onChangeMin = useCallback((value: number) => {
		dispatch(filtersActions.setMinPrice(value));
	}, []);

	return (
		<Spoiler title="Ціна" className={classNames(cls.FilterPrice, {}, [className])}>
			<DoubleRange
				setMaxPrice={onChangeMax}
				setMinPrice={onChangeMin}
				maxValue={price.max}
				minValue={price.min}
				gap={1}
			/>
		</Spoiler>
	);
};
