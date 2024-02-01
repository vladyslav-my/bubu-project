import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { NavLinkButton } from "@/shared/ui/Button";
import cls from "./CatalogItem.module.scss";

interface CatalogItemLinkProps {
	className?: string;
	name: string;
	Icon: FC<React.SVGProps<SVGSVGElement>>;
	to: string;
}

export const CatalogItemLink: FC<CatalogItemLinkProps> = ({
	className, Icon, name, to,
}) => {
	return (
		<li className={cn(cls.CatalogItem, {}, [className])}>
			<NavLinkButton className={cls.CatalogItem__button} to={to}>
				<Icon />
				{name}
			</NavLinkButton>
		</li>
	);
};
