import { FC, memo, useCallback } from "react";
import SearchIcon from "@/shared/assets/common/SearchButton.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { searchActions } from "../../model/slice/orderSearchSlice";
import cls from "./SearchButton.module.scss";

interface SearchButtonProps {
	className?: string;
	SearchFieldRef: any;
}

export const SearchButton: FC<SearchButtonProps> = memo(({ className, SearchFieldRef }) => {
	const onClickHandler = useCallback(() => {
		searchActions.setIsVisibleSearchField(true);
		SearchFieldRef.focus();
	}, []);

	return (
		<Button onClick={onClickHandler} className={cn(cls.SearchButton, {}, [className])}>
			<SearchIcon className={cls.SearchButton__icon} />
		</Button>
	);
});
