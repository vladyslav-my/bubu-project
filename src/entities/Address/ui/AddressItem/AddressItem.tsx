import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AddressItem.module.scss";

interface AddressItemProps {
	className?: string;
	href: string;
	content: string;
	modifier?: AddressModifier;
}

export enum AddressModifier {
	BOLD = "AddressItem_bold",
	UNDERLINE = "AddressItem_underline",
}

export const AddressItem: FC<AddressItemProps> = ({
	className, href, content, modifier = "",
}) => {
	return (
		<li className={classNames(cls.AddressItem, {}, [className, cls[modifier]])}>
			<a className={cls.AddressItem__link} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
		</li>
	);
};
