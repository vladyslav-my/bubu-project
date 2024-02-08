import { FC, useCallback, useMemo } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import { Button, ButtonModifier } from "../../Button";
import cls from "./GroupButtons.module.scss";

interface GroupButtonsProps {
	className?: string;
	options: ButtonOptions[];
	value?: string;
	onChange?: (value: string) => void;
	modifier?: ButtonModifier,
	modifierActive?: ButtonModifier,
	modifierNonActive?: ButtonModifier,
}

interface ButtonOptions {
	value: string;
	content: string;
}

export const GroupButtons: FC<GroupButtonsProps> = ({
	className,
	options,
	value,
	onChange,
	modifier,
	modifierActive,
	modifierNonActive,
}) => {
	const onButtonClickHandler = useCallback(
		(value: string) => () => {
			onChange?.(value);
		},
		[onChange],
	);

	const buttons = useMemo(
		() => options.map((option) => {
			const isActive = value === option.value;
			return (
				<li>
					<Button
						key={option.value}
						modifier={modifier}
						secondaryModifier={isActive ? modifierActive : modifierNonActive}
						onClick={onButtonClickHandler(option.value)}
					>
						{option.content}
					</Button>
				</li>

			);
		}),
		[value, onButtonClickHandler, options],
	);

	return <ul className={classNames(cls.GroupButtons, {}, [className])}>{buttons}</ul>;
};
