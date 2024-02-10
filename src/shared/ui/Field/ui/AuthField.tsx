import {
	FC, InputHTMLAttributes, memo, useState,
} from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import { Field, FieldProps } from "./Field";
import cls from "./Field.module.scss";

interface AuthFieldProps extends FieldProps {
	wrong?: boolean;
	wrongText?: string;
}

enum FieldModifier {
	AUTH = "Field_auth",
	SEARCH = "Field_search",
	DEFAULT = "Field_default",
}

export const AuthField: FC<AuthFieldProps> = memo(({
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
	return (
		<Field
			className={cn(cls.Field, {
				[cls.Field_wrong]: wrong,
			}, [className])}
			value={value}
			placeholder={placeholder}
			type={type}
			readOnly={readOnly}
			onChange={onChange}
			disabled={disabled}
			modifier={FieldModifier.AUTH}
		>
			<p className={cls.Field__wrong}>{wrongText}</p>
		</Field>
	);
});
