import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import { filtersMenuActions } from "../../model/slice/filtersMenuSlice";
import { filtersActions } from "../../model/slice/filtersSlice";
import cls from "./ApplyFiltersButton.module.scss";

interface ApplyFiltersButtonProps {
	className?: string
}

export const ApplyFiltersButton: FC<ApplyFiltersButtonProps> = ({ className }) => {
	const dispatch = useDispatch();

	const onClickHandler = useCallback(() => {
		dispatch(filtersActions.applyFilters());
		dispatch(filtersActions.setApply(false));
	}, []);

	return (
		<Button
			className={classNames(cls.ApplyFiltersButton, {}, [className])}
			onClick={onClickHandler}
			modifier={ButtonModifier.AUTH}
			secondaryModifier={ButtonModifier.AUTHFILL}
		>
			ЗАСТОСУВАТИ
		</Button>
	);
};
