import { FC, memo, useMemo } from "react";
import { SocialNetworkItem, socialNetworkModel } from "@/entities/SocialNetwork";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import cls from "./SocialNetworkList.module.scss";

interface SocialNetworkListProps {
	className?: string;
	modifier?: SocialNetworkListModifier;
}

export enum SocialNetworkListModifier {
	HEADER = "SocialNetworkList_header",
	FOOTER = "SocialNetworkList_footer",
}

export const SocialNetworkList: FC<SocialNetworkListProps> = memo(({
	className,
	modifier = SocialNetworkListModifier.HEADER,
}) => {
	const socialNetworkItems = useMemo(() => {
		return socialNetworkModel.map(({ Icon, href }) => {
			return (
				<SocialNetworkItem className={cls.SocialNetworkList__item} Icon={Icon} href={href} />
			);
		});
	}, []);

	return (
		<ul className={cn(cls.SocialNetworkList, {}, [className, cls[modifier]])}>
			{socialNetworkItems}
		</ul>
	);
});
