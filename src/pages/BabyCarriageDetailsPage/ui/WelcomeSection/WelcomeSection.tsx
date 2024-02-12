import { FC, useMemo } from "react";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { PageDetailsCarrousel } from "@/features/Carrousel";
import { AddToComparison, AddToFavorite } from "@/features/Product";
import { AddressItem, addressModel } from "@/entities/Address";
import { BabyCarriageData } from "@/entities/BabyCarriageProductDetails";
import { NavItem, navModel } from "@/entities/Nav";
import StarIcon from "@/shared/assets/common/star.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import {
	Button, ButtonModifier, ProductButton, ProductButtonModifier,
} from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ColorRadioButton, GenderRadioButton } from "@/shared/ui/RadioButtons";
import { Title } from "@/shared/ui/Title";
import cls from "./WelcomeSection.module.scss";

interface WelcomeSectionProps {
	className?: string;
	data: BabyCarriageData;
}

export const WelcomeSection: FC<WelcomeSectionProps> = ({ className, data }) => {
	const colorsItems = useMemo(() => {
		return data.productsColor.list.map(({ id, color }) => {
			return (
				<li className={cls.Selection__item}>
					<ColorRadioButton key={id} color={color} name="color" />
				</li>
			);
		});
	}, [data.productsColor.list]);

	const averageRating = useMemo(() => {
		const total = data.productsFeedback.list.reduce((a, b) => {
			return a + b.rating;
		}, 0);

		return total / data.productsFeedback.list.length;
	}, [data.productsFeedback.list]);

	const gendersItems = useMemo(() => {
		return data.productsGender.list.map(({ gender, id }) => {
			return (
				<li key={id} className={cls.Selection__item}>
					<GenderRadioButton name="gender">
						{gender}
					</GenderRadioButton>
				</li>
			);
		}, []);
	}, [data.productsGender.list]);

	return (
		<section className={cn(cls.WelcomeSection, {}, [className])}>
			<Container className={cls.WelcomeSection__container}>
				<div className={`${cls.PageTop} ${cls.WelcomeSection__top}`}>
					<Breadcrumbs />
					<div className={cls.PageTop__twoLevel}>
						<Title>{data.title}</Title>
						<ul className={`${cls.PageTop__actionList} ${cls.ActionList}`}>
							<li className={cls.ActionList__item}>
								<AddToFavorite>У вибране</AddToFavorite>
							</li>
							<li className={cls.ActionList__item}>
								<AddToComparison className={cls.ActionList__comparison}>Порівняти</AddToComparison>
							</li>
						</ul>
					</div>
					<ul className={`${cls.PageTop__threeLevel} ${cls.ProductInfoList}`}>
						{data.available && (
							<li className={cls.Available}>
								В наявності
							</li>
						)}
						{data.code && (
							<li className={cls.Code}>
								Код: {data.code}
							</li>
						)}
						<li className={cls.Feedbacks}>
							<span className={cls.Feedbacks__rating}>
								{averageRating}
								<StarIcon className={cls.Feedbacks__ratingIcon} />
							</span>
							{data.productsFeedback.list.length && (
								<span className={cls.Feedbacks__this}>
									{data.productsFeedback.list.length}
									<span className={cls.Feedbacks__decorate}>&nbsp;відгуків</span>
								</span>
							)}
						</li>
					</ul>
				</div>
				<div className={cls.FirstLook}>
					<PageDetailsCarrousel className={cls.FirstLook__carrousel} images={data.productsImage.list} />
					<div className={cls.FirstLook__actions}>
						<div className={cls.Selection}>
							<h3 className={cls.Selection__title}>Колір:</h3>
							<ul className={cls.Selection__list}>
								{colorsItems}
							</ul>
						</div>
						<div className={cls.Selection}>
							<h3 className={cls.Selection__title}>Стать:</h3>
							<ul className={cls.Selection__list}>
								{gendersItems}
							</ul>
						</div>
						<ul className={cls.PriceInfoList}>
							<li className={cls.Price}>
								<b className={cls.Price__bold}>{data.price}</b> грн
							</li>
							<li className={cls.DiscountPrice}>
								<b className={cls.DiscountPrice__bold}>{data.discountPrice}</b> грн
							</li>
							<li className={cls.DiscountPercent}>
								-{data.discountPercent}%
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
								name={navModel[1].name}
								to={navModel[1].to}
							/>
						</ul>
					</div>
				</div>
			</Container>
		</section>

	);
};
