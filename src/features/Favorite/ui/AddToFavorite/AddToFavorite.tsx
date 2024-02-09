import { FC, memo, useCallback } from "react";
import FavoriteIcon from "@/shared/assets/product/favorite.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./AddToFavorite.module.scss";

interface AddToFavoriteProps {
	className?: string;
	id: number;
}

export const AddToFavorite: FC<AddToFavoriteProps> = memo(({ className, id }) => {
	const onClickHandler = useCallback(
		(id: number) => () => {
			// ? Дія, яка добавляє товар в улюблені по id товара
		},
		[],
	);

	return (
		<Button
			className={cn(cls.AddToFavorite, {}, [className])}
			onClick={onClickHandler(id)}
		>
			<FavoriteIcon className={cls.AddToFavorite__icon} />
		</Button>
	);
});
