import {
	FC, ForwardedRef, LegacyRef, forwardRef, memo,
} from "react";
import SearchIcon from "../../../assets/common/search.svg";
import { Field, FieldModifier, FieldProps } from "./Field";
import cls from "./Field.module.scss";

interface SearchFieldProps extends FieldProps {
}

export const SearchField: FC<SearchFieldProps> = memo(forwardRef(({
	className,
	value,
	placeholder,
	type = "text",
	readOnly,
	onChange,
	disabled,
	onBlur,
}, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<Field
			className={className}
			value={value}
			placeholder={placeholder}
			type={type}
			readOnly={readOnly}
			onChange={onChange}
			disabled={disabled}
			onBlur={onBlur}
			// @ts-ignore
			ref={ref}
			modifier={FieldModifier.SEARCH}
		>
			<SearchIcon className={cls.Field__searchIcon} />
		</Field>
	);
}));
