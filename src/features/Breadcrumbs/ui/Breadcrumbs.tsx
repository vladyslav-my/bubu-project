import { FC, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { breadcrumbsModel } from "@/entities/Breadcrums";
import { getMainRoutePath } from "@/shared/config/routes/path";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
	className?: string
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
	const location = useLocation();
	const breadcrumbsItems = useMemo(() => {
		const paths = location.pathname.split("/").slice(1).slice(0, -1);
		return paths.map((path) => {
			const obj = breadcrumbsModel.find((obj) => obj.path === path);
			return (
				<li className={cls.Breadcrumbs__item}>
					<NavLink className={cls.Breadcrumbs__link} to={path}>
						{obj?.name}
					</NavLink>
				</li>
			);
		});
	}, [location]);

	return (
		<ul className={classNames(cls.Breadcrumbs, {}, [className])}>
			<li className={cls.Breadcrumbs__item}>
				<NavLink className={cls.Breadcrumbs__link} to={breadcrumbsModel[0].path}>
					{breadcrumbsModel[0].name}
				</NavLink>
			</li>
			{breadcrumbsItems}
		</ul>
	);
};
