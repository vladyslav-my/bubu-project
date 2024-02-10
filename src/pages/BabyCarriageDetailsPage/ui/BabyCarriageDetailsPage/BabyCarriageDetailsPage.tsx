import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page";
import { YouViewSection } from "@/widgets/YouViewSection";
import { babyCarriageProductDetailsActions, babyCarriageProductDetailsSelectors } from "@/entities/BabyCarriageProductDetails";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "@/shared/ui/PageLoader";
import { PurpleSection } from "../Purple/PurpleSection";
import { WelcomeSection } from "../WelcomeSection/WelcomeSection";
import { WithThisBuySection } from "../WithThisBuySection/WithThisBuySection";
import cls from "./BabyCarriageDetailsPage.module.scss";

interface BabyCarriageDetailsPageProps {
	className?: string
}

export const BabyCarriageDetailsPage: FC<BabyCarriageDetailsPageProps> = ({ className }) => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const data = useSelector(babyCarriageProductDetailsSelectors.getData);
	const isLoading = useSelector(babyCarriageProductDetailsSelectors.getIsLoading);

	useEffect(() => {
		// @ts-ignore
		dispatch(babyCarriageProductDetailsActions.getProductDetails(id));
	}, [dispatch, id]);

	if (isLoading && !data) {
		return (
			<Page>
				<PageLoader />
			</Page>
		);
	}

	return (
		<Page className={cn(cls.BabyCarriageDetailsPage, {}, [className])}>
			<WelcomeSection data={data!} />
			<WithThisBuySection />
			<PurpleSection data={data!} />
			<YouViewSection />
		</Page>
	);
};
