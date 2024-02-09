import {
	FC, ReactNode, memo, useCallback,
} from "react";
import ComparisonIcon from "@/shared/assets/product/сomparison.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./AddToComparison.module.scss";

interface AddToComparisonProps {
	className?: string;
	id?: number;
	children?: ReactNode;
}

export const AddToComparison: FC<AddToComparisonProps> = memo(({ className, id, children }) => {
	const onClickHandler = useCallback(
		(id: number) => () => {
			// ? Дія, яка добавляє товар в корзину по id товара
		},
		[],
	);

	return (
		<Button
			className={cn(cls.AddToComparison, {}, [className])}
			onClick={onClickHandler(id!)}
		>
			<ComparisonIcon className={cls.AddToComparison__icon} />
			{children}
		</Button>
	);
});
