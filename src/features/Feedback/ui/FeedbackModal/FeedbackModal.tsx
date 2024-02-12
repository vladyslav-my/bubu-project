import {
	ChangeEvent, FC, useCallback, useMemo, useState,
} from "react";
import { useSelector } from "react-redux";
import RemoveIcon from "@/shared/assets/common/remove.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonModifier } from "@/shared/ui/Button";
import { Field } from "@/shared/ui/Field";
import { FieldModifier } from "@/shared/ui/Field/ui/Field";
import { Modal } from "@/shared/ui/Modal";
import ImageIcon from "../../assets/image.svg";
import { feedbackActions, feedbackSelectors } from "../../model/slice/feedbackSlice";
import { Rating } from "../Rating/Rating";
import cls from "./FeedbackModal.module.scss";

interface FeedbackModalProps {
	className?: string
}

export const FeedbackModal: FC<FeedbackModalProps> = ({ className }) => {
	const isOpenModal = useSelector(feedbackSelectors.getIsOpenModal);
	const dispatch = useAppDispatch();
	const [selectedImages, setSelectedImages] = useState([]);

	const onToggle = useCallback(() => {
		dispatch(feedbackActions.setIsOpenModal(!isOpenModal));
	}, [dispatch, isOpenModal]);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		console.log(files);
		if (files) {
			const imagesArray = Array.from(files).map((file) => {
				const reader = new FileReader();
				reader.onloadend = () => {
					// @ts-ignore
					setSelectedImages((prevImages) => [...prevImages, reader.result]);
				};
				reader.readAsDataURL(file);
				return reader.result;
			});
		}
	};

	const onClickCloseModal = useCallback(() => {
		dispatch(feedbackActions.setIsOpenModal(false));
	}, [dispatch]);

	const onClickRemoveImage = useCallback((index: number) => () => {
		setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
	}, []);

	const selectedItems = useMemo(() => {
		return selectedImages.map((image, index) => (
			<li className={`${cls.ImageList__item} ${cls.Image}`} key={index}>
				<img className={cls.Image__this} src={image} alt={`Selected ${index}`} />
				<button className={cls.Image__button} onClick={onClickRemoveImage(index)}>
					<RemoveIcon className={cls.Image__icon} />
				</button>
			</li>
		));
	}, [onClickRemoveImage, selectedImages]);

	return (
		<Modal
			className={cn(cls.FeedbackModal, {}, [className])}
			oppened={isOpenModal}
			onToggle={onToggle}
			lazy
		>
			<div className={cls.FeedbackModal__titleBox}>
				<h4 className={cls.FeedbackModal__title}>
					Ваш відгук
				</h4>
				<Button onClick={onClickCloseModal}>
					<RemoveIcon />
				</Button>
			</div>
			<div className={cls.FeedbackModal__actions}>
				<div className={cls.FeedbackModal__rating}>
					<span className={cls.FeedbackModal__score}>Оцінка:</span>
					<Rating />
				</div>
				<Field placeholder="Ім’я" modifier={FieldModifier.MODAL} />
				<Field placeholder="E-mail" modifier={FieldModifier.MODAL} />
				<textarea className={cls.FeedbackModal__textarea} placeholder="Ваш коментар" />
			</div>
			{selectedImages.length !== 0 && (
				<ul className={`${cls.FeedbackModal__imageList} ${cls.imageList}`}>
					{selectedItems}
				</ul>
			)}
			<label className={`${cls.FeedbackModal__fileLoader} ${cls.FileLoader}`}>
				<div className={cls.FileLoader__wrapper}>
					<ImageIcon className={cls.FileLoader__icon} />
					<span className={cls.FileLoader__add}>Додати фото</span>
				</div>
				<input className={cls.FileLoader__input} type="file" onChange={handleImageChange} />
			</label>
			<Button
				className={cls.FeedbackModal__send}
				modifier={ButtonModifier.AUTH}
				secondaryModifier={ButtonModifier.AUTHFILL}
			>Залишити
			</Button>
		</Modal>
	);
};
