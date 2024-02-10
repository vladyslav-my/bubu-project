import { FC, useMemo } from "react";
import { BabyCarriageData } from "@/entities/BabyCarriageProductDetails";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./CharacterList.module.scss";

interface CharacterListProps {
	className?: string;
	data?: BabyCarriageData;
}

export const CharacterList: FC<CharacterListProps> = ({ className, data }) => {
	const characterList = useMemo(() => {
		return data?.productsCharacter.list;
	}, [data?.productsCharacter.list]);

	const characterItems = useMemo(() => {
		return characterList?.map(({ id, name, character }) => {
			return (
				<li key={id} className={cn(cls.CharacterList__item, {}, [className])}>
					<span className={cls.CharacterList__left}>{name}</span>
					<span className={cls.CharacterList__right}>{character}</span>
				</li>
			);
		}, {});
	}, [characterList, className]);

	return (
		<ul className={cn(cls.CharacterList, {}, [className])}>
			{characterItems}
		</ul>
	);
};
