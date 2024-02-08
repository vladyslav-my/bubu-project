import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Portal } from "@/shared/ui/Portal";
import { filtersMenuActions, filtersMenuSelectors } from "../../model/slice/filtersMenuSlice";
import { filtersActions } from "../../model/slice/filtersSlice";
import cls from "./Overlay.module.scss";

interface OverlayProps {
	className?: string
}

export const Overlay: FC<OverlayProps> = ({ className }) => {
	const dispatch = useDispatch();
	const onClickOverlay = useCallback(() => {
		dispatch(filtersMenuActions.setIsOpen(false));
		dispatch(filtersActions.cancelFilters());
		dispatch(filtersActions.setApply(false));
	}, []);

	return (
		<Portal>
			<div onClick={onClickOverlay} className={cn(cls.Overlay, {}, [className])} />
		</Portal>
	);
};
