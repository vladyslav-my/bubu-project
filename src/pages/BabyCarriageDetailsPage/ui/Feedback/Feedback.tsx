import { FC, useCallback, useMemo } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import Imagee from "../../assets/image1.png";
import StarIcon from "../../assets/star.svg";
import cls from "./Feedback.module.scss";

interface FeedbackProps {
	className?: string;
	data?: Data,
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

const _data: Data = {
	name: "Олег",
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
};

export const Feedback: FC<FeedbackProps> = ({ className, data = _data }) => {
	const starsItems = useMemo(() => {
		return new Array(5).fill(undefined).map((_, i) => {
			const isActive = data.rating >= ++i;
			return (
				<StarIcon
					key={i}
					className={cn(cls.Feedback__starIcon, {
						[cls.Feedback__starIcon_is]: isActive,
						[cls.Feedback__starIcon_isnt]: !isActive,
					})}
				/>
			);
		});
	}, [data.rating]);

	const ImagesButtonsItems = useMemo(() => {
		if (!data.images) {
			return null;
		}

		const slicedImages = data.images.slice(0, 3);
		return slicedImages.map(({ src, alt }, i) => {
			return (
				<li className={cls.ImagesButtonsList__item}>
					<button className={cls.ImagesButtonsList__button}>
						<img className={cls.ImagesButtonsList__image} src={src} alt={alt} />
						{i === 2 && (
							<span className={cls.ImagesButtonsList__buttonOverlay}>+{data.images?.length}</span>
						)}
					</button>
				</li>
			);
		});
	}, [data.images]);

	return (
		<li className={cn(cls.Feedback, {}, [className])}>
			<span className={cls.Feedback__date}>
				{data.date}
			</span>
			<div className={cls.Feedback__rater}>
				<span className={cls.Feedback__name}>{data.name}</span>
				<div className={cls.Feedback__stars}>
					{starsItems}
				</div>
			</div>
			<p className={cls.Feedback__text}>Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими </p>
			{data.images && (
				<ul className={cls.ImagesButtonsList}>
					{ImagesButtonsItems}
				</ul>
			)}
		</li>
	);
};
