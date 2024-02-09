import { FC, useMemo } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./CharacterList.module.scss";

interface CharacterListProps {
	className?: string;
	data?: Data[];
}

interface Data {
	name: string;
	character: string;
}

const _data: Data[] = [
	{
		name: "Виробник",
		character: "Anex",
	},
	{
		name: "Виробник",
		character: "Anex",
	},
	{
		name: "Виробник",
		character: "Anex",
	},
	{
		name: "Виробник",
		character: "Anex",
	},
	{
		name: "Виробник",
		character: "Anex",
	},
];

export const CharacterList: FC<CharacterListProps> = ({ className, data = _data }) => {
	const characterItems = useMemo(() => {
		return data.map(({ name, character }) => {
			return (
				<li className={cn(cls.CharacterList__item, {}, [className])}>
					<span className={cls.CharacterList__left}>{name}</span>
					<span className={cls.CharacterList__right}>{character}</span>
				</li>
			);
		}, {});
	}, [className, data]);

	return (
		<ul className={cn(cls.CharacterList, {}, [className])}>
			{characterItems}
		</ul>
	);
};
