import {
	FC, memo, useCallback, useEffect,
} from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@/shared/assets/common/search.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/Button";
import { orderSearchActions, orderSearchSelectors } from "../../model/slice/orderSearchSlice";
import cls from "./ToOrderSearchField.module.scss";

interface ToOrderSearchFieldProps {
	className?: string;
}

export const ToOrderSearchField: FC<ToOrderSearchFieldProps> = memo(({ className }) => {
	const dispatch = useAppDispatch();
	const onClickHandler = useCallback(() => {
		dispatch(orderSearchActions.setIsVisibleSearchField(true));
	}, []);

	return (
		<Button onClick={onClickHandler} className={cn(cls.ToOrderSearchField, {}, [className])}>
			<SearchIcon className={cls.ToOrderSearchField__icon} />
		</Button>
	);
});
