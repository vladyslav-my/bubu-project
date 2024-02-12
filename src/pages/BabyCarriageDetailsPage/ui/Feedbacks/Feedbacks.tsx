import { FC, ReactElement, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { WriteFeedbackButton } from "@/features/Feedback";
import { BabyCarriageData } from "@/entities/BabyCarriageProductDetails";
import StarIcon from "@/shared/assets/common/star.svg";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Feedback } from "../Feedback/Feedback";
import cls from "./Feedbacks.module.scss";

interface FeedbacksProps {
	className?: string;
	data: BabyCarriageData;
}

export const Feedbacks: FC<FeedbacksProps> = ({
	className, data,
}) => {
	const isContainer = useMediaQuery({ maxWidth: 1350 });
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });
	const averageRating = useMemo(() => {
		const total = data.productsFeedback.list.reduce((a, b) => {
			return a + b.rating;
		}, 0);

		return total / data.productsFeedback.list.length;
	}, [data.productsFeedback.list]);

	const feadbacksItems = useMemo(() => {
		const oneColumn: ReactElement[] = [];
		const twoColumn: ReactElement[] = [];
		const threeColumn: ReactElement[] = [];

		data?.productsFeedback.list.forEach((data, i) => { //! Цей код можна декомпозувати в функції
			const value = ++i;
			if (!isContainer) {
				if (value % 3 === 1) {
					oneColumn.push(<Feedback data={data} />);
				} else if (value % 3 === 2) {
					twoColumn.push(<Feedback data={data} />);
				} else if (value % 3 === 0) {
					threeColumn.push(<Feedback data={data} />);
				}
			}

			if (isContainer && !isMobile) {
				if (value % 2 === 1) {
					oneColumn.push(<Feedback data={data} />);
				} else if (value % 2 === 0) {
					twoColumn.push(<Feedback data={data} />);
				}
			}

			if (isMobile) {
				oneColumn.push(<Feedback data={data} />);
			}
		});

		const oneUL = (
			<ul className={cls.FeedbacksLists__list}>
				{oneColumn}
			</ul>
		);

		const twoUL = !isMobile && (
			<ul className={cls.FeedbacksLists__list}>
				{twoColumn}
			</ul>
		);

		const threeUL = !isContainer && (
			<ul className={cls.FeedbacksLists__list}>
				{threeColumn}
			</ul>
		);

		return { oneUL, twoUL, threeUL };
	}, [data, isContainer, isMobile]);

	return (
		<div className={cn(cls.Feedbacks, {}, [className])}>
			<div className={cls.Feedbacks__stat}>
				<h2 className={cls.Feedbacks__amount}>
					ВІДГУКИ ({data?.productsFeedback.list.length})
				</h2>
				<span className={cls.Rating}>
					Рейтинг:
					<span className={cls.Rating__this}>
						{averageRating}
						<StarIcon className={cls.Rating__icon} />
					</span>
				</span>
			</div>
			<WriteFeedbackButton className={cls.Feedbacks__write} />
			<div className={cls.FeedbacksLists}>
				{feadbacksItems.oneUL}
				{feadbacksItems.twoUL}
				{feadbacksItems.threeUL}
			</div>
		</div>
	);
};
