import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ProductButton, ProductButtonModifier } from "@/shared/ui/Button";
import { feedbackActions, feedbackSelectors } from "../../model/slice/feedbackSlice";
import { FeedbackModal } from "../FeedbackModal/FeedbackModal";
import cls from "./WriteFeedback.module.scss";

interface WriteFeedbackProps {
	className?: string
}

export const WriteFeedbackButton: FC<WriteFeedbackProps> = ({ className }) => {
	// const isOpenModal = useSelector(feedbackSelectors.getIsOpenModal);
	const dispatch = useAppDispatch();

	const onClick = useCallback((e: any) => {
		dispatch(feedbackActions.setIsOpenModal(true));
	}, [dispatch]);

	return (
		<>
			<ProductButton
				onClick={onClick}
				className={cn(cls.WriteFeedback, {}, [className])}
				modifier={ProductButtonModifier.FEEDBACK}
			>
				+ Написати відгук

			</ProductButton>
			<FeedbackModal />
		</>

	);
};
