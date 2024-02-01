import {
	FC, memo, useCallback, useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { langSwitcherModel } from "../model/langSwitcherModel";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
	const { t, i18n } = useTranslation("translation");

	const langSwitcherItems = useMemo(() => {
		return langSwitcherModel.map(({ lang, content }) => {
			return (
				<span className={cn(cls.LangSwitcher__item, {
					[cls.LangSwitcher__item_active]: i18n.language === lang,
					[cls.LangSwitcher__item_noActive]: i18n.language !== lang,
				}, [])}
				>
					{content}
				</span>
			);
		}, []);
	}, [i18n.language]);

	const onClickHandler = useCallback(async () => {
		i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
	}, []);

	return (
		<Button
			className={cn(cls.LangSwitcher, {}, [className])}
			onClick={onClickHandler}
		>
			{langSwitcherItems}
		</Button>
	);
});
