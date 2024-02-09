import { FC, useMemo } from "react";
import { InfoToggle } from "@/features/InfoToggle";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import Image from "../../assets/image1.png";
import cls from "./DescList.module.scss";

interface DescListProps {
	className?: string;
	data?: Data[];
}

interface Data {
	text: string;
	src: string;
}

const _data: Data[] = [
	{
		src: Image,
		text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
	},
	{
		src: Image,
		text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
	},
	{
		src: Image,
		text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
	},
	{
		src: Image,
		text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
	},
	{
		src: Image,
		text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
	},
];

export const DescList: FC<DescListProps> = ({ className, data = _data }) => {
	const descItems = useMemo(() => {
		return data.map(({ text, src }) => {
			return (
				<li className={cls.DescList__item}>
					<p className={cls.DescList__parapraph}>{text}</p>
					<img className={cls.DescList__image} src={src} alt="" />
				</li>
			);
		}, {});
	}, [data]);

	return (
		<InfoToggle minShowElements={2} className={cn(cls.DescList, {}, [className])}>
			{descItems}
		</InfoToggle>
	);
};
