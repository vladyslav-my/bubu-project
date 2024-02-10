import { FC, useCallback, useMemo } from "react";
import { InfoToggle } from "@/features/InfoToggle";
import { BabyCarriageData } from "@/entities/BabyCarriageProductDetails";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./DescList.module.scss";

interface DescListProps {
	className?: string;
	data?: BabyCarriageData;
}

export const DescList: FC<DescListProps> = ({ className, data }) => {
	const descList = useMemo(() => {
		return data?.productsDesc.list;
	}, [data?.productsDesc.list]);

	const descItems = useMemo(() => {
		return descList?.map(({
			id, text, src, alt,
		}) => {
			return (
				<li key={id} className={cls.DescList__item}>
					<p className={cls.DescList__parapraph}>{text}</p>
					<img className={cls.DescList__image} src={src} alt={alt} />
				</li>
			);
		}, {});
	}, [descList]);

	return (
		<InfoToggle
			minShowElements={2}
			tag="ul"
			className={{
				parent: cn(cls.DescList, {}, [className]),
				children: cls.DescList__item,
			}}
		>
			{descItems}
		</InfoToggle>
	);
};
