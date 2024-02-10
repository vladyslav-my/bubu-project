import { ChangeEvent, FC, ReactNode } from "react";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import cls from "./GenderRadioButton.module.scss";

interface GenderRadioButtonProps {
	className?: string;
	children?: ReactNode;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	name: string;
	color?: string;
}

export const GenderRadioButton: FC<GenderRadioButtonProps> = ({
	className, children, onChange, checked, name, color,
}) => {
	return (
		<label style={{ color }} className={cn(cls.GenderRadioButton, {}, [className])}>
			<input name={name} onChange={onChange} checked={checked} className={cls.GenderRadioButton__real} type="radio" />
			<span className={cls.GenderRadioButton__label}>
				{children}
			</span>
		</label>
	);
};
