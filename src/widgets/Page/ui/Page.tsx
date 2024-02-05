import { FC } from "react";
import cls from "./Page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageProps {
	className?: string
}

export const Page: FC<PageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Page, {}, [className])}>
			
		</div>
	)
}