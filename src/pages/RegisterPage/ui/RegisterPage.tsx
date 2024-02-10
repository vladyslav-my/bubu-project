import { FC } from "react";
import { PageDecoration } from "@/widgets/PageDecoration";
import { LoginForm, RegisterForm } from "@/features/Auth";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Container, ContainerModifier } from "@/shared/ui/Container";
import { Logo, LogoModifier } from "@/shared/ui/Logo";
import FacebookIcon from "../assets/facebook.svg";
import GoogleIcon from "../assets/google.svg";
import cls from "./RegisterPage.module.scss";

interface RegisterPageProps {
	className?: string
}

export const RegisterPage: FC<RegisterPageProps> = ({ className }) => {
	return (
		<PageDecoration className={cn(cls.RegisterPage, {}, [className])}>
			<Container className={cls.RegisterPage__container} modifier={ContainerModifier.AUTH}>
				<Logo className={cls.RegisterPage__logo} modifier={LogoModifier.AUTH} />
				<RegisterForm />
				<p className={cls.RegisterPage__or}>Або</p>
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
