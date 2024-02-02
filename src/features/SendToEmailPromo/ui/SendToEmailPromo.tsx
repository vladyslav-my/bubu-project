import { FC, memo, useCallback } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Field } from "@/shared/ui/Field";
import ArrowButton from "../assets/arrow.svg";
import cls from "./SendToEmailPromo.module.scss";

interface SendToEmailPromoProps {
	className?: string
}

export const SendToEmailPromo: FC<SendToEmailPromoProps> = memo(({ className }) => {
	const onSubmitHandler = useCallback(() => {

	}, []);

	return (
		<form className={cn(cls.SendToEmailPromo, {}, [className])} onSubmit={onSubmitHandler}>
			<Field className={cls.SendToEmailPromo__field} placeholder="Ваш email" />
			<Button className={cls.SendToEmailPromo__button} type="submit">
				<ArrowButton className={cls.SendToEmailPromo__icon} />
			</Button>
		</form>
	);
});
