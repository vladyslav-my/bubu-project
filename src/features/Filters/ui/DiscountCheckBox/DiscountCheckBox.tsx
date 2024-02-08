import { ChangeEvent, FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Checkbox } from "@/shared/ui/Checkbox";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import cls from "./DiscountCheckBox.module.scss";

interface DiscountCheckBoxProps {
	className?: string
}

export const DiscountCheckBox: FC<DiscountCheckBoxProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const discount = useSelector(filtersSelectors.getTempDiscount);

	const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(filtersActions.setDiscount(e.target.checked));
	}, []);

	return (
		<Checkbox
			className={cn(cls.DiscountCheckBox, {}, [className])}
			label="Зі знижкою"
			checked={discount}
			onChange={onChangeHandler}
		/>
	);
};
