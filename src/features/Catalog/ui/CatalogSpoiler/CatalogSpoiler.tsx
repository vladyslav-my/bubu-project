import {
	FC, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { useSelector } from "react-redux";
import { CatalogItemLink } from "@/entities/Catalog";
import { catalogModel } from "@/entities/Catalog/model/catalogModel";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { catalogSpoilerSelectors } from "../..";
import { catalogSpoilerAction } from "../../model/slice/catalogSpoilerSlice";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import cls from "./CatalogSpoiler.module.scss";

interface CatalogSpoilerProps {
	className?: string
}

export const CatalogSpoiler: FC<CatalogSpoilerProps> = ({ className }) => {
	// const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();
	const isOpen = useSelector(catalogSpoilerSelectors.isOpen);
	// const [height, setHeight] = useState(0);
	// const listRef = useRef<HTMLUListElement>(null);

	const onClickBurgerHandler = useCallback(() => {
		dispatch(catalogSpoilerAction.setIsOpen(!isOpen));
	}, [isOpen]);

	const CatalogItems = useMemo(() => {
		return catalogModel.map(({
			id, Icon, name, to,
		}) => {
			return <CatalogItemLink key={id} Icon={Icon} name={name} to={to} />;
		}, []);
	}, []);

	// useEffect(() => {
	// 	if (listRef.current) {
	// 		const { scrollHeight } = listRef.current;
	// 		console.log(listRef.current.scrollHeight);
	// 		setHeight(scrollHeight);
	// 	}
	// }, [isOpen]);

	// const calculateHeight = useCallback(() => {
	// 	return isOpen ? height : 0;
	// }, [isOpen]);

	return (
		<div
			className={cn(cls.CatalogSpoiler, {
				[cls.CatalogSpoiler_opened]: isOpen,
				[cls.CatalogSpoiler_closed]: !isOpen,
			}, [className])}
		>
			<div className={cls.CatalogSpoiler__this}>
				<div className={cls.CatalogSpoiler__shell}>
					<BurgerButton className={cls.Spoiler__burgerButton} isOpen={isOpen} onClick={onClickBurgerHandler} />
					<h3 className={cls.CatalogSpoiler__title}>КАТАЛОГ</h3>
				</div>
				<ul className={cls.CatalogSpoiler__list}>
					{CatalogItems}
				</ul>
			</div>
		</div>
	);
};
