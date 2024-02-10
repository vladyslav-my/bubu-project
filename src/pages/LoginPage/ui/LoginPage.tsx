import { FC } from "react";
import { NavLink } from "react-router-dom";
import { PageDecoration } from "@/widgets/PageDecoration";
import { LoginForm } from "@/features/Auth";
import { getRegisterRoutePath } from "@/shared/config/routes/path";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button, NavLinkButton, ButtonModifier } from "@/shared/ui/Button";
import { Container, ContainerModifier } from "@/shared/ui/Container";
import { AuthField, Field } from "@/shared/ui/Field";
import { Logo, LogoModifier } from "@/shared/ui/Logo";
import FacebookIcon from "../assets/facebook.svg";
import GoogleIcon from "../assets/google.svg";
import cls from "./LoginPage.module.scss";

interface LoginPageProps {
	className?: string
}

export const LoginPage: FC<LoginPageProps> = ({ className }) => {
	return (
		<PageDecoration className={cn(cls.LoginPage, {}, [className])}>
			<Container className={cls.LoginPage__container} modifier={ContainerModifier.AUTH}>
				<Logo className={cls.LoginPage__logo} modifier={LogoModifier.AUTH} />
				<LoginForm />
				<p className={cls.LoginPage__or}>Або</p>
				<div className={cls.SocialAuth}>
					<h3 className={cls.SocialAuth__title}>Увійти за допомогою:</h3>
					<ul className={cls.SocialAuth__list}>
						<li className={cls.SocialAuth__item}>
							<Button className={cls.SocialAuth__button}>
								<FacebookIcon className={cn(cls.SocialAuth__icon, {}, [cls.SocialAuth__icon_facebook])} />
							</Button>
						</li>
						<li className={cls.SocialAuth__item}>
							<Button className={cls.SocialAuth__button}>
								<GoogleIcon className={cn(cls.SocialAuth__icon, {}, [cls.SocialAuth__icon_google])} />
							</Button>
						</li>
					</ul>
				</div>
			</Container>
		</PageDecoration>
	);
};
