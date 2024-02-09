import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, ProductButton, ProductButtonModifier } from "@/shared/ui/Button";
import cls from "./WriteFeedback.module.scss";

interface WriteFeedbackProps {
	className?: string
}

export const WriteFeedbackButton: FC<WriteFeedbackProps> = ({ className }) => {
	return (
		<ProductButton
			className={cn(cls.WriteFeedback, {}, [className])}
			modifier={ProductButtonModifier.FEEDBACK}
		>
			+ Написати відгук
		</ProductButton>
	);
};
