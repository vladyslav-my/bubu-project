import { FC, ReactElement, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { WriteFeedbackButton } from "@/features/Feedback";
import { Devices } from "@/shared/const/devices";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import Imagee from "../../assets/image1.png";
import StarIcon from "../../assets/star.svg";
import { Feedback } from "../Feedback/Feedback";
import cls from "./Feedbacks.module.scss";

interface FeedbacksProps {
	className?: string;
	amount?: number;
	rating?: string;
	data?: Data[]
}

interface Data {
	name: string;
	rating: number;
	images?: Image[];
	text: string;
	date: string;
}

interface Image {
	src: string;
	alt: string;
}

const _data = [
	{
		name: "Олег 1",
		date: "20.09.22",
		rating: 5,
		text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
		images: [
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
		],
	},
	{
		name: "Олег 2",
		date: "20.09.22",
		rating: 5,
		text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
		images: [
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
		],
	},
	{
		name: "Олег 3",
		date: "20.09.22",
		rating: 5,
		text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
		images: [
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
		],
	},
	{
		name: "Олег 4",
		date: "20.09.22",
		rating: 5,
		text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
		images: [
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
			{
				src: Imagee,
				alt: "1",
			},
		],
	},
];

export const Feedbacks: FC<FeedbacksProps> = ({
	className, amount = 9, rating = "4.5", data = _data,
}) => {
	const isContainer = useMediaQuery({ maxWidth: 1350 });
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	const feadbacksItems = useMemo(() => {
		const oneColumn: ReactElement[] = [];
		const twoColumn: ReactElement[] = [];
		const threeColumn: ReactElement[] = [];

		data.forEach((data, i) => { //! Цей код можна декомпозувати в функції
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
					Відгуки ({amount})
				</h2>
				<span className={cls.Rating}>
					Рейтинг:
					<span className={cls.Rating__this}>
						{rating}
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
