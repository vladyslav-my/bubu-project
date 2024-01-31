import {
	ChangeEvent, FC, InputHTMLAttributes, memo,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./Field.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface FieldProps extends HTMLInputProps {
	className?: string;
	value?: string;
	type?: string;
	placeholder?: string;
	readOnly?: boolean;
	onChange?: (value: string) => void;
	wrong?: boolean;
	wrongText?: string;
}

export const Field: FC<FieldProps> = memo(({
	className,
	value,
	placeholder,
	type = "text",
	readOnly,
	onChange,
	disabled,
	wrong,
	wrongText,
}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div
			className={cn(cls.Field, {
				[cls.Field_wrong]: wrong,
			}, [className])}
		>
			<input
				disabled={disabled}
				className={cn(cls.Field__input, {}, [className])}
				placeholder={placeholder}
				readOnly={readOnly}
				type={type}
				value={value}
				onChange={onChangeHandler}
			/>
			<p className={cls.Field__wrong}>{wrongText}</p>
		</div>
	);
});
