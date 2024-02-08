import { FC, ReactNode, memo } from "react";
import { ButtonModifier } from "../..";
import { classNames as cn } from "../../../../lib/classNames/classNames";
import RemoveIcon from "../../assets/remove.svg";
import { Button } from "../Button";
import cls from "./RemoveButton.module.scss";

interface RemoveButtonProps {
	className?: string;
	children: ReactNode;
	onClick: () => void;
}

export const RemoveButton: FC<RemoveButtonProps> = memo(({ className, onClick, children }) => {
	return (
		<Button
			className={cn(cls.RemoveButton, {}, [className])}
			modifier={ButtonModifier.FILTER}
			secondaryModifier={ButtonModifier.FILTERREMOVE}
			onClick={onClick}
			Icon={RemoveIcon}
		>
			{children}
		</Button>
	);
});
