import { ChangeEvent, FC } from "react";
import { classNames as cn } from "../../../lib/classNames/classNames";
import cls from "./Checkbox.module.scss";

interface CheckboxProps {
	className?: string;
	label?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
	className, label, onChange, checked,
}) => {
	return (
		<label className={cn(cls.Checkbox, {}, [className])}>
			<input onChange={onChange} checked={checked} className={cls.Checkbox__real} type="checkbox" />
			<span className={cls.Checkbox__custom} />
			{label}
		</label>
	);
};
