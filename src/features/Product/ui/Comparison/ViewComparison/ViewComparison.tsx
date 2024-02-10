import { FC, memo, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import СomparisonIcon from "@/shared/assets/product/сomparison.svg";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./ViewComparison.module.scss";

interface ViewComparisonProps {
	className?: string
}

export const ViewComparison: FC<ViewComparisonProps> = memo(({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	const onClickHandler = useCallback(
		() => {
			// ? Дія, яка відкриває модалку порівняння цін з добавленими товарами у кошик
		},
		[],
	);

	return (
		<Button
			className={cn(cls.ViewComparison, {}, [className])}
			onClick={onClickHandler}
		>
			<СomparisonIcon className={cls.ViewComparison__icon} />
			{!isMobile && <span className={cls.ViewComparison__counter}>0</span>}
		</Button>
	);
});
