import { RouteProps } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { getLoginRoutePath, getMainRoutePath } from "@/shared/config/routes/path";

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
};

export const routes: AppRouteProps[] = [
	{
		path: getLoginRoutePath(),
		element: <LoginPage />,
	},
	{
		path: getMainRoutePath(),
		element: <MainPage />,
	},
];
