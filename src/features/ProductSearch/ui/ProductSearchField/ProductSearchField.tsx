import {
	FC, memo, useCallback, useEffect, useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { SearchField } from "@/shared/ui/Field";
import { productSearchActions, productSearchSelectors } from "../../model/slice/productSearchSlice";
import cls from "./ProductSearchField.module.scss";

interface ProductSearchFieldProps {
	className?: string
}

export const ProductSearchField: FC<ProductSearchFieldProps> = memo(({ className }) => {
	const searchFieldRef = useRef<HTMLInputElement>(null);
	const isVisibleSearchField = useSelector(productSearchSelectors.getIsVisibleSearchField);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (searchFieldRef.current && isVisibleSearchField) {
			searchFieldRef.current.focus();
		}
	}, [searchFieldRef]);

	const onBlurHandler = useCallback(() => {
		dispatch(productSearchActions.setIsVisibleSearchField(false));
	}, []);

	useEffect(() => {

	}, []);
	return (
		// @ts-ignore
		<SearchField ref={searchFieldRef} placeholder="Я шукаю..." onBlur={onBlurHandler} className={cn(cls.ProductSearchField, {}, [className])} />
	);
});
