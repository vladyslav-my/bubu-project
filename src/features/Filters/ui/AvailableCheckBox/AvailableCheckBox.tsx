import { ChangeEvent, FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Checkbox } from "@/shared/ui/Checkbox";
import { filtersActions, filtersSelectors } from "../../model/slice/filtersSlice";
import cls from "./AvailableCheckBox.module.scss";

interface AvailableCheckBoxProps {
	className?: string
}

export const AvailableCheckBox: FC<AvailableCheckBoxProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const available = useSelector(filtersSelectors.getTempAvailable);

	const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(filtersActions.setAvailable(e.target.checked));
	}, []);

	return (
		<Checkbox
			className={cn(cls.AvailableCheckBox, {}, [className])}
			label="В наявності"
			checked={available}
			onChange={onChangeHandler}
		/>
	);
};
