import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { BabyCarriageData } from "@/entities/BabyCarriageProductDetails";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Container } from "@/shared/ui/Container";
import { Spoiler } from "@/shared/ui/Spoiler";
import { Title } from "@/shared/ui/Title";
import { CharacterList } from "../CharacterList/CharacterList";
import { DescList } from "../DescList/DescList";
import { Feedbacks } from "../Feedbacks/Feedbacks";
import cls from "./PurpleSection.module.scss";

interface PurpleSectionProps {
	className?: string;
	data:	BabyCarriageData;
}

export const PurpleSection: FC<PurpleSectionProps> = ({ className, data }) => {
	const isContainer = useMediaQuery({ maxWidth: 1350 });

	return (
		<section className={cn(cls.PurpleSection, {}, [className])}>
			<Container className={cls.PurpleSection__container}>
				{!isContainer ? (
					<div className={`${cls.Desc} ${cls.PurpleSection__desc}`}>
						<Title className={cls.Desc__title}>Опис</Title>
						<DescList data={data} />
					</div>
				) : (
					<Spoiler title="ОПИС">
						<DescList data={data} />
					</Spoiler>
				)}
				{!isContainer ? (
					<div className={`${cls.Character} ${cls.PurpleSection__character}`}>
						<Title className={cls.Character__title}>Характеристики</Title>
						<CharacterList data={data} />
					</div>
				) : (
					<Spoiler title="ХАРАКТЕРИСТИКИ">
						<CharacterList data={data} />
					</Spoiler>
				)}
				<Feedbacks data={data} className={cls.PurpleSection__feedbacks} />
			</Container>
		</section>
	);
};
