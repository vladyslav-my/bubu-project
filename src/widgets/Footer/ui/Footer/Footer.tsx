import {
	FC, memo, useCallback, useMemo,
} from "react";
import { useMediaQuery } from "react-responsive";
import { Address, AddressModifier } from "@/features/Address";
import { SendToEmailPromo } from "@/features/SendToEmailPromo";
import { SocialNetworkList } from "@/features/SocialNetwork";
import { CatalogItemLink, catalogModel } from "@/entities/Catalog";
import { NavItem, navModel } from "@/entities/Nav";
import { paymentModel } from "@/entities/Payment";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import BabyImage from "../../assets/baby.png";
import cls from "./Footer.module.scss";

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = memo(({ className }) => {
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	const navItems = useMemo(() => {
		return navModel.map(({ name, to }) => {
			return <NavItem name={name} to={to} />;
		});
	}, []);

	const catalogItems = useMemo(() => {
		return catalogModel.map(({ name, to }) => {
			return <CatalogItemLink name={name} to={to} />;
		});
	}, []);

	const paymentItems = useMemo(() => {
		return paymentModel.map(({ url, id }) => {
			return (
				<li>
					<img src={url} alt="" />
				</li>
			);
		});
	}, []);

	const DisplayPromoSection = useCallback(() => {
		if (!isTablet) {
			return null;
		}

		return (
			<section className={cn(cls.ContactSection, {}, [cls.Footer__contactSection])}>
				<Container className={cls.ContactSection__container}>
					<Address className={cls.ContactSection__address} slotForFeature={<SocialNetworkList />} />
				</Container>
			</section>
		);
	}, []);

	return (
		<footer className={cn(cls.Footer, {}, [className])}>
			<section className={cn(cls.PromoSection, {}, [cls.Footer__promoSection])}>
				<Container className={cls.PromoSection__container}>
					<div className={cls.PromoSection__leftCol}>
						<Title className={cls.PromoSection__title}>
							Отримуйте ПРОМОКОДИ ТА
							ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ
						</Title>
						<SendToEmailPromo className={cls.PromoSection__send} />
					</div>
					{!isMobile && <img className={cls.PromoSection__image} src={BabyImage} alt="baby and mother" />}
				</Container>
			</section>
			<DisplayPromoSection />
			<section className={cn(cls.MainSection, {}, [cls.Footer__mainSection])}>
				<Container className={cls.MainSection__container}>
					<div className={cls.MainSection__main}>
						{!isTablet && (
							<Address
								className={cls.MainSection__address}
								slotForFeature={<SocialNetworkList />}
								modifier={AddressModifier.SHELL}
							/>
						)}
						<div className={cn(cls.Info, {}, [cls.MainSection__info])}>
							<Title className={cls.MainSection__title}>Інформація</Title>
							<ul className={cls.Info__list}>
								{navItems}
							</ul>
						</div>
						<div className={cn(cls.Catalog, {}, [cls.MainSection__catalog])}>
							<Title className={cls.Catalog__title}>Каталог</Title>
							<ul className={cls.Catalog__list}>
								{catalogItems}
							</ul>
						</div>
					</div>
					<div className={cn(cls.Copyright, {}, [cls.MainSection__catalog])}>
						<span className={cls.Copyright__protect}>© Bubu 2022. Всі права захищені.</span>
						<ul className={cls.Copyright__list}>
							{paymentItems}
						</ul>
					</div>
				</Container>
			</section>
		</footer>
	);
});
