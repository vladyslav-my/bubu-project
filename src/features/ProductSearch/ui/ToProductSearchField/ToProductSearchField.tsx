import {
	FC, memo, useCallback, useEffect,
} from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@/shared/assets/common/search.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/Button";
import { productSearchActions, productSearchSelectors } from "../../model/slice/productSearchSlice";
import cls from "./ToProductSearchField.module.scss";

interface ToProductSearchFieldProps {
	className?: string;
}

export const ToProductSearchField: FC<ToProductSearchFieldProps> = memo(({ className }) => {
	const dispatch = useAppDispatch();
	const onClickHandler = useCallback(() => {
		dispatch(productSearchActions.setIsVisibleSearchField(true));
	}, []);

	return (
		<Button onClick={onClickHandler} className={cn(cls.ToProductSearchField, {}, [className])}>
			<SearchIcon className={cls.ToProductSearchField__icon} />
		</Button>
	);
});
