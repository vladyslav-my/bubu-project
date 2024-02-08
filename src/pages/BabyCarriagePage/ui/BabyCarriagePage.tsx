import { FC, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { Page } from "@/widgets/Page";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import {
	Filters, Pagination, SelectedFilters, SortButtons, SortDropDown,
} from "@/features/Filters";
import { mockOrderListModel } from "@/entities/MockOrderList";
import { OrderCard } from "@/entities/Order";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import cls from "./BabyCarriagePage.module.scss";

interface BabyCarriagePageProps {
	className?: string
}

export const BabyCarriagePage: FC<BabyCarriagePageProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });

	const productsItems = useMemo(() => {
		return mockOrderListModel.map(({
			id, price, src, title, discountPercent, discountPrice,
		}) => {
			return (
				<OrderCard
					key={id}
					title={title}
					src={src}
					price={price}
					discountPercent={discountPercent}
					discountPrice={discountPrice}
					alt={title}
				/>
			);
		}, []);
	}, []);

	return (
		<Page className={cn(cls.BabyCarriagePage, {}, [className])}>
			<Container className={cls.BabyCarriagePage__container}>
				<Breadcrumbs className={cls.BabyCarriagePage__breadcrumbs} />
				<div className={cls.BabyCarriagePage__titleRowBox}>
					<Title>Дитячі коляски</Title>
					{isMobile ? <SortDropDown /> : <SortButtons className={cls.BabyCarriagePage__sort} />}
				</div>
				{isTablet && <SelectedFilters className={cls.BabyCarriagePage__selectedFilters} />}
				<Filters className={cls.BabyCarriagePage__filters} />
				<ul className={cls.BabyCarriagePage__productsList}>
					{productsItems}
				</ul>
				<Pagination className={cls.BabyCarriagePage__pagination} />
			</Container>
		</Page>
	);
};
