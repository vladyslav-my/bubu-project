import {
	FC, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { CatalogItemLink } from "@/entities/Catalog";
import { catalogModel } from "@/entities/Catalog/model/catalogModel";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import cls from "./CatalogSpoiler.module.scss";

interface CatalogSpoilerProps {
	className?: string
}

export const CatalogSpoiler: FC<CatalogSpoilerProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState(0);
	const listRef = useRef<HTMLUListElement>(null);

	const CatalogItems = useMemo(() => {
		return catalogModel.map(({
			id, Icon, name, to,
		}) => {
			return <CatalogItemLink key={id} Icon={Icon} name={name} to={to} />;
		}, []);
	}, []);

	useEffect(() => {
		if (listRef.current) {
			const { scrollHeight } = listRef.current;
			setHeight(scrollHeight);
		}
	}, []);

	const calculateHeight = useCallback(() => {
		return isOpen ? height : 0;
	}, [isOpen]);

	return (
		<div
			className={cn(cls.CatalogSpoiler, {
				[cls.CatalogSpoiler_opened]: isOpen,
				[cls.CatalogSpoiler_closed]: !isOpen,
			}, [className])}
		>
			<div className={cls.CatalogSpoiler__this}>
				<div className={cls.CatalogSpoiler__shell}>
					<BurgerButton className={cls.Spoiler__burgerButton} isOpen={isOpen} setIsOpen={setIsOpen} />
					<h3 className={cls.Spoiler__title}>КАТАЛОГ</h3>
				</div>
				<ul style={{ height: calculateHeight() }} ref={listRef} className={cls.CatalogSpoiler__list}>
					{CatalogItems}
				</ul>
			</div>
		</div>
	);
};
