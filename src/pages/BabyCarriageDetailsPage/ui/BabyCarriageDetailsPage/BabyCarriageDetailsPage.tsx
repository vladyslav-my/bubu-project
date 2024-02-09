import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { CarrouselSection } from "@/widgets/CarrouselSection";
import { Page } from "@/widgets/Page";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { AddToCart } from "@/features/Cart";
import { AddToComparison } from "@/features/Comparison";
import { InfoToggle } from "@/features/InfoToggle";
import { PageDetailsCarrousel } from "@/features/PageDetailsCarrousel";
import { AddressItem, addressModel } from "@/entities/Address";
import { NavItem, navModel } from "@/entities/Nav";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import {
	Button, ButtonModifier, ProductButton, ProductButtonModifier,
} from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ColorRadioButton, SexRadioButton } from "@/shared/ui/RadioButtons";
import { Spoiler } from "@/shared/ui/Spoiler";
import { Title } from "@/shared/ui/Title";
import Image1 from "../../assets/image1.png";
import StarIcon from "../../assets/star.svg";
import { CharacterList } from "../CharacterList/CharacterList";
import { DescList } from "../DescList/DescList";
import { Feedbacks } from "../Feedbacks/Feedbacks";
import cls from "./BabyCarriageDetailsPage.module.scss";

interface BabyCarriageDetailsPageProps {
	className?: string
}

export const BabyCarriageDetailsPage: FC<BabyCarriageDetailsPageProps> = ({ className }) => {
	const isContainer = useMediaQuery({ maxWidth: 1350 });

	return (
		<Page className={cn(cls.BabyCarriageDetailsPage, {}, [className])}>
			<section className={cls.Welcome}>
				<Container className={cls.BabyCarriageDetailsPage__container}>
					<div className={`${cls.PageTop} ${cls.BabyCarriageDetailsPage__top}`}>
						<Breadcrumbs />
						<div className={cls.PageTop__twoLevel}>
							<Title>Коляска 2в1 Anex M/Type Dune mt-01Q</Title>
							<ul className={`${cls.PageTop__actionList} ${cls.ActionList}`}>
								<li className={cls.ActionList__item}>
									<AddToCart>У вибране</AddToCart>
								</li>
								<li className={cls.ActionList__item}>
									<AddToComparison>Порівняти</AddToComparison>
								</li>
							</ul>
						</div>
						<ul className={`${cls.PageTop__threeLevel} ${cls.ProductInfoList}`}>
							<li className={cls.Available}>
								В наявності
							</li>
							<li className={cls.Code}>Код: EP-01
							</li>
							<li className={cls.Feedbacks}>
								<span className={cls.Feedbacks__rating}>
									4.5
									<StarIcon className={cls.Feedbacks__ratingIcon} />
								</span>
								<span className={cls.Feedbacks__this}>
									9<span className={cls.Feedbacks__decorate}>&nbsp;відгуків</span>
								</span>
							</li>
						</ul>
					</div>
					<div className={cls.FirstLook}>
						<PageDetailsCarrousel className={cls.FirstLook__carrousel} />
						<div className={cls.FirstLook__actions}>
							<div className={cls.Selection}>
								<h3 className={cls.Selection__title}>Колір:</h3>
								<ul className={cls.Selection__list}>
									<li className={cls.Selection__item}>
										<ColorRadioButton color="#34CBFF" name="color" />
									</li>
									<li className={cls.Selection__item}>
										<ColorRadioButton color="#FF3636" name="color" />
									</li>
									<li className={cls.Selection__item}>
										<ColorRadioButton color="#4AFF3A" name="color" />
									</li>
								</ul>
							</div>
							<div className={cls.Selection}>
								<h3 className={cls.Selection__title}>Стать:</h3>
								<ul className={cls.Selection__list}>
									<li className={cls.Selection__item}>
										<SexRadioButton name="sex">
											Хлопчик
										</SexRadioButton>
									</li>
									<li className={cls.Selection__item}>
										<SexRadioButton name="sex">
											Дівчинка
										</SexRadioButton>
									</li>
								</ul>
							</div>
							<ul className={cls.PriceInfoList}>
								<li className={cls.Price}>
									<b className={cls.Price__bold}>6000</b> грн
								</li>
								<li className={cls.DiscountPrice}>
									<b className={cls.DiscountPrice__bold}>5000</b> грн
								</li>
								<li className={cls.DiscountPercent}>
									-15%
								</li>
							</ul>
							<ul className={cls.BuyActionsList}>
								<li className={cls.BuyActionsList__item}>
									<ProductButton className={cls.BuyActionsList__button} isCart>
										КУПИТИ
									</ProductButton>
								</li>
								<li className={cls.BuyActionsList__item}>
									<ProductButton className={cls.BuyActionsList__button} modifier={ProductButtonModifier.OUTLINE}>
										Купити в 1 клік
									</ProductButton>
								</li>
							</ul>
							<ol className={cls.PickUpProduct}>
								<li className={cls.PickUpProduct__item_city}>Ви з Одеси? Заберіть товар у магазині</li>
								<AddressItem
									content={addressModel[2].secondContent}
									href={addressModel[2].href}
									Icon={addressModel[2].Icon}
								/>
								<li>
									<Button modifier={ButtonModifier.UNDERLINE}>Забрати сьогодні</Button>
								</li>
							</ol>
							<ul className={cls.Nav}>
								<NavItem
									modifier={ButtonModifier.GRAYUNDERLINE}
									name={navModel[2].secondName!}
									to={navModel[3].to}
								/>
								<NavItem
									modifier={ButtonModifier.GRAYUNDERLINE}
									name={navModel[3].name}
									to={navModel[3].to}
								/>
								<NavItem
									modifier={ButtonModifier.GRAYUNDERLINE}
									name={navModel[3].name}
									to={navModel[3].to}
								/>
							</ul>
						</div>
					</div>
				</Container>
			</section>
			<CarrouselSection />
			<section className={cls.Purple}>
				<Container className={cls.Purple__container}>
					{!isContainer ? (
						<div className={`${cls.Desc} ${cls.Purple__desc}`}>
							<Title className={cls.Desc__title}>Опис</Title>
							<DescList />
						</div>
					) : (
						<Spoiler title="ОПИС">
							<DescList />
						</Spoiler>
					)}
					{!isContainer ? (
						<div className={`${cls.Character} ${cls.Purple__character}`}>
							<Title className={cls.Character__title}>Характеристики</Title>
							<CharacterList />
						</div>
					) : (
						<Spoiler title="ХАРАКТЕРИСТИКИ">
							<CharacterList />
						</Spoiler>
					)}
					<Feedbacks className={cls.Purple__feedbacks} />
				</Container>
			</section>
		</Page>
	);
};
