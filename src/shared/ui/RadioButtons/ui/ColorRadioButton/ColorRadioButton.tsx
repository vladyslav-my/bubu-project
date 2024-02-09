import { ChangeEvent, FC } from "react";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import cls from "./ColorRadioButton.module.scss";

interface ColorRadioButtonProps {
	className?: string;
	label?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	name: string;
	color?: string;
}

export const ColorRadioButton: FC<ColorRadioButtonProps> = ({
	className, label, onChange, checked, name, color,
}) => {
	return (
		<label style={{ color }} className={cn(cls.ColorRadioButton, {}, [className])}>
			<input name={name} onChange={onChange} checked={checked} className={cls.ColorRadioButton__real} type="radio" />
			<span className={cls.ColorRadioButton__custom} />
			{label}
		</label>
	);
};
