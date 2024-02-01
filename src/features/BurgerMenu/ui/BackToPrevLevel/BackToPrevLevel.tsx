import { FC, memo, useCallback } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import ArrowIcon from "../../assets/arrow.svg";
import cls from "./BackToPrevLevel.module.scss";

interface BackToPrevLevelProps {
	className?: string;
	onClick: () => void;
	children: string;
}

export const BackToPrevLevel: FC<BackToPrevLevelProps> = memo(({ className, onClick, children }) => {
	const onClickHandler = useCallback(() => {
		onClick();
	}, [onClick]);

	return (
		<Button onClick={onClickHandler} className={cn(cls.BackToPrevLevel, {}, [className])}>
			<ArrowIcon className={cls.BackToPrevLevel__icon} />
			<span className={cls.BackToPrevLevel__content}>{children}</span>
		</Button>
	);
});
