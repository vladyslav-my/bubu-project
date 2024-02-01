import { FC } from "react";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import UserIcon from "../../assets/user.svg";
import cls from "./ToPersonalAccount.module.scss";

interface ToPersonalAccountProps {
	className?: string
}

export const ToPersonalAccount: FC<ToPersonalAccountProps> = ({ className }) => {
	return (
		<Button className={cn(cls.ToPersonalAccount, {}, [className])}>
			<UserIcon className={cls.ToPersonalAccount__icon} />
			<span className={cls.ToPersonalAccount__content}>Вхід</span>
		</Button>
	);
};
