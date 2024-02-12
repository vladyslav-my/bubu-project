import {
	ChangeEvent, FC, ForwardedRef, InputHTMLAttributes, LegacyRef, forwardRef, memo,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./Field.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export interface FieldProps extends HTMLInputProps {
	className?: string;
	value?: string;
	type?: string;
	placeholder?: string;
	readOnly?: boolean;
	onChange?: (value: string) => void;
	modifier?: FieldModifier;
}

export enum FieldModifier {
	DEFAULT = "Field_default",
	AUTH = "Field_auth",
	SEARCH = "Field_search",
	MODAL = "Field_modal",
}

export const Field: FC<FieldProps> = memo(forwardRef(({
	className,
	value,
	placeholder,
	type = "text",
	readOnly,
	onChange,
	disabled,
	onBlur,
	children,
	modifier = FieldModifier.DEFAULT,
}, ref: ForwardedRef<HTMLInputElement>) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div
			className={cn(cls.Field, {
			}, [className, cls[modifier]])}
		>
			<input
				disabled={disabled}
				className={cn(cls.Field__input, {}, [])}
				placeholder={placeholder}
				readOnly={readOnly}
				type={type}
				value={value}
				onBlur={onBlur}
				ref={ref}
				onChange={onChangeHandler}
			/>
			{children}
		</div>
	);
}));
