import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "@/entities/User";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import UserIcon from "../../assets/user.svg";
import cls from "./Logout.module.scss";

interface LogoutProps {
	className?: string
}

export const Logout: FC<LogoutProps> = ({ className }) => {
	const dispatch = useDispatch();
	const onClick = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	return (
		<Button onClick={onClick} className={cn(cls.Logout, {}, [className])}>
			<UserIcon className={cls.Logout__icon} />
			<span className={cls.Logout__content}>Вийти</span>
		</Button>
	);
};
