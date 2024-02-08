import { RouteProps } from "react-router-dom";
import { BabyCarriagePage } from "@/pages/BabyCarriagePage";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { getBabyCarriageRoutePath, getLoginRoutePath, getMainRoutePath } from "@/shared/config/routes/path";

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	name?: string;
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
	{
		path: getBabyCarriageRoutePath(),
		element: <BabyCarriagePage />,
	},
];
