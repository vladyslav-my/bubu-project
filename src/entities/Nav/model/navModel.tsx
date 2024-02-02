import { getMainRoutePath } from "@/shared/config/routes/path";

export const navModel = [
	{
		name: "Про нас",
		to: getMainRoutePath(),
	},
	{
		name: "Контакти",
		to: getMainRoutePath(),
	},
	{
		name: "Доставка і оплата",
		to: getMainRoutePath(),
	},
	{
		name: "Повернення і обмін",
		to: getMainRoutePath(),
	},
	{
		isFooter: true,
		name: "Політика конфеденційності",
		to: getMainRoutePath(),
	},
];
