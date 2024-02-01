import { FC } from "react";
import cls from "./Filters.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface FiltersProps {
	className?: string
}

export const Filters: FC<FiltersProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Filters, {}, [className])}>
			
		</div>
	)
}