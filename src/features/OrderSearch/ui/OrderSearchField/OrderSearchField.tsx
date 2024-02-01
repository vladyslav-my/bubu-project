import {
	FC, memo, useCallback, useEffect, useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { SearchField } from "@/shared/ui/Field";
import { orderSearchActions, orderSearchSelectors } from "../../model/slice/orderSearchSlice";
import cls from "./OrderSearchField.module.scss";

interface OrderSearchFieldProps {
	className?: string
}

export const OrderSearchField: FC<OrderSearchFieldProps> = memo(({ className }) => {
	const searchFieldRef = useRef<HTMLInputElement>(null);
	const isVisibleSearchField = useSelector(orderSearchSelectors.getIsVisibleSearchField);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (searchFieldRef.current && isVisibleSearchField) {
			searchFieldRef.current.focus();
		}
	}, [searchFieldRef]);

	const onBlurHandler = useCallback(() => {
		dispatch(orderSearchActions.setIsVisibleSearchField(false));
	}, []);

	useEffect(() => {

	}, []);
	return (
		// @ts-ignore
		<SearchField ref={searchFieldRef} onBlur={onBlurHandler} className={cn(cls.OrderSearchField, {}, [className])} />
	);
});
