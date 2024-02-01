import { FC, memo, useCallback } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./CatalogButton.module.scss";

interface CatalogButtonProps {
	className?: string;
	onClick?: () => void;
}

export const CatalogButton: FC<CatalogButtonProps> = memo(({ className, onClick }) => {
	return (
		<Button onClick={onClick} className={cn(cls.CatalogButton, {}, [className])}>
			<div className={cls.CatalogButton__burger}>
				<span />
			</div>
			<span className={cls.CatalogButton__content}>Каталог</span>

		</Button>
	);
});
