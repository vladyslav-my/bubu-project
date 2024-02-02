import {
	FC, ReactNode, useCallback, useMemo,
} from "react";
import { AddressItem, addressModel } from "@/entities/Address";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./Address.module.scss";

interface AddressProps {
	className?: string;
	slotForFeature?: ReactNode;
	modifier?: AddressModifier
}

export enum AddressModifier {
	SHELL = "Address_shell",
}

export const Address: FC<AddressProps> = ({ className, modifier = "", slotForFeature }) => {
	const AddressItems = useMemo(
		() => {
			return addressModel.map(({ content, href, modifier }) => {
				return <AddressItem content={content} href={href} modifier={modifier} />;
			});
		},
		[],
	);

	return (
		<address className={cn(cls.Address, {}, [className, cls[modifier]])}>
			<ul className={cls.Address__list}>
				{AddressItems}
				{slotForFeature}
			</ul>
		</address>
	);
};
