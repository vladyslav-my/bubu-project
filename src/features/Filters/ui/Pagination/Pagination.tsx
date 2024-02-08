import { FC, useCallback, useMemo } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton, Button, ButtonModifier } from "@/shared/ui/Button";
import { GroupButtons } from "@/shared/ui/GroupButtons";
import cls from "./Pagination.module.scss";

interface PaginationProps {
	className?: string
}

export const Pagination: FC<PaginationProps> = ({ className }) => {
	const paginationItems = useMemo(() => {
		return new Array(5).fill(undefined).map((_, i) => {
			return (
				<li>
					<Button modifier={ButtonModifier.CIRCLE}>{i + 1}</Button>
				</li>
			);
		});
	}, []);

	return (
		<div className={cn(cls.Pagination, {}, [className])}>
			<Button modifier={ButtonModifier.FILTER} secondaryModifier={ButtonModifier.FILTEROUTLINE}>Показати ще</Button>
			<ul className={cls.Pagination__list}>
				{paginationItems}
				<ArrowButton />
			</ul>
		</div>
	);
};
