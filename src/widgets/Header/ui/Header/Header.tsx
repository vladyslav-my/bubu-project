import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
	BurgerButton, OneLevelMenu, OverlayBurgerMenu, ThreeLevelCategory, TwoLevelCatalog,
} from "@/features/BurgerMenu";
import { CatalogSpoiler } from "@/features/Catalog";
import { LangSwitcher } from "@/features/LangSwitcher";
import { OrderSearchField, orderSearchSelectors } from "@/features/OrderSearch";
import { SocialNetworkList } from "@/features/SocialNetwork";
import { PhoneNumber } from "@/entities/PhoneNumber";
import { getLoginRoutePath } from "@/shared/config/routes/path";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { NavLinkButton } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { SearchField } from "@/shared/ui/Field";
import { Logo, LogoModifier } from "@/shared/ui/Logo";
import { Nav } from "../Nav/Nav";
import { OrdersActionsGroup } from "../OrdersActionsGroup/OrdersActionsGroup";
import cls from "./Header.module.scss";

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = memo(({ className }) => {
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	const isVisibleSearchField = useSelector(orderSearchSelectors.getIsVisibleSearchField);

	const HeaderTop = useCallback(() => {
		if (!isTablet) {
			return (
				<div className={cls.Header__top}>
					<Logo className={cls.Header__logo} modifier={LogoModifier.HEADER} />
					<Nav className={cls.Header__nav} />
					<PhoneNumber className={cls.Header__phoneNumber} />
					<SocialNetworkList className={cls.Header__socialNetworkList} />
					<LangSwitcher className={cls.Header__langSwitcher} />

				</div>
			);
		}

		return null;
	}, [isTablet]);

	return (
		<>
			<header className={cn(cls.Header, {}, [className])}>
				<Container className={cls.Header__container}>
					<HeaderTop />
					<div className={cls.Header__main}>
						{!isTablet && <CatalogSpoiler className={cls.Header__catalogSpoiler} />}
						{isTablet && <BurgerButton />}
						{isTablet && <Logo className={cls.Header__logo} />}
						<OrdersActionsGroup className={cls.Header__ordersActionsGroup} />
					</div>
					{isVisibleSearchField && <OrderSearchField />}
				</Container>
			</header>
			<OverlayBurgerMenu />
		</>

	);
});
