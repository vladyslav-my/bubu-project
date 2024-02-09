import { ChangeEvent, FC, ReactNode } from "react";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import cls from "./SexRadioButton.module.scss";

interface SexRadioButtonProps {
	className?: string;
	children?: ReactNode;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	name: string;
	color?: string;
}

export const SexRadioButton: FC<SexRadioButtonProps> = ({
	className, children, onChange, checked, name, color,
}) => {
	return (
		<label style={{ color }} className={cn(cls.SexRadioButton, {}, [className])}>
			<input name={name} onChange={onChange} checked={checked} className={cls.SexRadioButton__real} type="radio" />
			<span className={cls.SexRadioButton__label}>
				{children}
			</span>
		</label>
	);
};
