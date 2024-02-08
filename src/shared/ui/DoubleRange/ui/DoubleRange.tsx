import {
	ChangeEvent, FC, useCallback, useEffect, useRef, useState,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import { ArrowButton } from "../../Button";
import cls from "./DoubleRange.module.scss";

interface DoubleRangeProps {
	className?: string;
	maxValue: number;
	minValue: number;
	gap?: number;
	setMinPrice: (value: number) => void;
	setMaxPrice: (value: number) => void;
}

export const DoubleRange: FC<DoubleRangeProps> = ({
	className, maxValue, minValue, setMinPrice, setMaxPrice, gap = 0,
}) => {
	const [tempMaxValue, setTempMaxValue] = useState(maxValue);
	const [tempMinValue, setTempMinValue] = useState(minValue);
	const [maxFieldValue, setMaxFieldValue] = useState(maxValue);
	const [minFieldValue, setMinFieldValue] = useState(minValue);

	const maxFieldRef = useRef<HTMLInputElement>(null);
	const minFieldRef = useRef<HTMLInputElement>(null);

	const refTrack = useRef<any>(null);

	const onInputMinHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value > maxValue) {
			setMinPrice(maxValue + gap);
			setMinFieldValue(maxValue);
		} else {
			setMinPrice(+e.target.value);
			setMinFieldValue(+e.target.value);
		}
	}, [gap, maxValue, setMinPrice]);

	const onInputMaxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value < minValue) {
			setMaxPrice(minValue - gap);
			setMaxFieldValue(minValue);
		} else {
			setMaxPrice(+e.target.value);
			setMaxFieldValue(+e.target.value);
		}
	}, [gap, minValue, setMaxPrice]);

	const onChangeOneField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setMinFieldValue(+e.target.value);
	}, []);

	const onChangeTwoField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setMaxFieldValue(+e.target.value);
	}, []);

	const onClickButton = useCallback(() => {
		if (minFieldValue < maxValue) {
			setMinPrice(minFieldValue);
		} else {
			setMinPrice(maxValue - gap);
			setMinFieldValue(maxValue - gap);
		}

		if (maxFieldValue > minValue) {
			setMaxPrice(maxFieldValue);
		} else {
			setMaxPrice(minValue + gap);
			setMaxFieldValue(minValue + gap);
		}
	}, [gap, maxFieldValue, maxValue, minFieldValue, minValue, setMaxPrice, setMinPrice]);

	useEffect(() => {
		const percent1 = (minValue / tempMaxValue) * 100;
		const percent2 = (maxValue / tempMaxValue) * 100;
		if (refTrack.current) {
			refTrack.current.style.background = `
			linear-gradient(
				to right, 
				#E1E1E1 ${percent1}%, 
				#D03664 ${percent1}%, 
				#D03664 ${percent2}%,
				#E1E1E1 ${percent2}%)`;
		}
	}, [maxFieldValue, maxValue, minValue]);

	return (
		<div className={cn(cls.DoubleRange, {}, [className])}>
			<div className={cls.DoubleRange__range}>
				<span ref={refTrack} className={cls.DoubleRange__track} />
				<input
					className={cn(cls.DoubleRange__input, {
					}, [cls.DoubleRange__input_min])}
					type="range"
					min={tempMinValue}
					max={tempMaxValue}
					value={minValue}
					onInput={onInputMinHandler}
				/>
				<input
					className={cn(cls.DoubleRange__input, {}, [cls.DoubleRange__input_max])}
					type="range"
					min={tempMinValue}
					max={tempMaxValue}
					value={maxValue}
					onInput={onInputMaxHandler}
				/>
			</div>
			<div className={cls.DoubleRange__actions}>
				<input
					className={cls.DoubleRange__fieldInput}
					value={minFieldValue}
					onChange={onChangeOneField}
					type="text"
					ref={minFieldRef}

				/>
				<span className={cls.DoubleRange__dash}>-</span>
				<input
					className={cls.DoubleRange__fieldInput}
					value={maxFieldValue}
					onChange={onChangeTwoField}
					type="text"
					ref={maxFieldRef}
				/>
				<ArrowButton range onClick={onClickButton} className={cls.DoubleRange__button} />
			</div>
		</div>
	);
};
