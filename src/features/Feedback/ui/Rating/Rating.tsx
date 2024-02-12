import {
	FC, useCallback, useEffect, useMemo, useState,
} from "react";
import { useSelector } from "react-redux";
import StarIcon from "@/shared/assets/common/star.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/Button";
import cls from "./Rating.module.scss";

// const ratingNumbers = [1, 2, 3, 4, 5];
interface RatingProps {
	className?: string;
}

export const Rating: FC<RatingProps> = ({ className }) => {
	const [hoverRating, setHoverRating] = useState(0);
	const [currentRating, setCurrentRating] = useState(0);
	const dispatch = useAppDispatch();

	const onMouseOverHandler = useCallback((number: number) => () => {
		setHoverRating(number);
	}, []);

	const onMouseOutHandler = useCallback(() => {
		setHoverRating(0);
	}, []);

	const onClickHandler = (number: number) => () => {
		setCurrentRating(number);
	};

	const onSendHandler = () => () => {
		// ? запит на відправлення відгуку
		// setIsOpennedModal(false);
	};

	const starsItems = useMemo(() => {
		return new Array(5).fill(undefined).map((_, i) => {
			const currentStar = ++i;
			return (
				<Button
					key={currentStar}
					onClick={onClickHandler(currentStar)}
					onMouseOut={onMouseOutHandler}
					onMouseOver={onMouseOverHandler(currentStar)}
				>
					<StarIcon className={cn(cls.Rating__item, {
						[cls.Rating__item_active]: currentRating >= currentStar,
						[cls.Rating__item_hover]: hoverRating >= currentStar,
					}, [])}
					/>
				</Button>

			);
		});
	}, [currentRating, hoverRating, onMouseOutHandler, onMouseOverHandler]);

	return (
		<div className={cn(cls.Rating, {}, [className])}>
			{starsItems}
		</div>
	);
};
