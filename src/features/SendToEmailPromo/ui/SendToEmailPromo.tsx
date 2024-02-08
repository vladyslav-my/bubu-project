import { FC, memo, useCallback } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { ArrowButton, Button } from "@/shared/ui/Button";
import { Field } from "@/shared/ui/Field";
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
			<ArrowButton outline type="submit" />
		</form>
	);
});
