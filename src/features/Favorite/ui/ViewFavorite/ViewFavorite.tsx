import { FC, memo, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import FavoriteIcon from "@/shared/assets/order/favorite.svg";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./ViewFavorite.module.scss";

interface ViewFavoriteProps {
	className?: string
}

export const ViewFavorite: FC<ViewFavoriteProps> = memo(({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	const onClickHandler = useCallback(
		() => {
			// ? Дія, яка відкриває модалку з добавленими товарами в улюленні
		},
		[],
	);

	return (
		<Button
			className={cn(cls.ViewFavorite, {}, [className])}
			onClick={onClickHandler}
		>
			<FavoriteIcon className={cls.ViewFavorite__icon} />
			{!isMobile && <span className={cls.ViewFavorite__counter}>0</span>}
		</Button>
	);
});
