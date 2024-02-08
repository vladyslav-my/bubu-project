import {
	FC, useCallback, useEffect, useRef, useState,
} from "react";
import { InfoToggle } from "@/features/InfoToggle";
import { InfoToggleModifier } from "@/features/InfoToggle/ui/InfoToggle";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Container, ContainerModifier } from "@/shared/ui/Container";
import cls from "./AboutSection.module.scss";

interface AboutSectionProps {
	className?: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ className }) => {
	return (
		<section className={cn(cls.AboutSection, {}, [className])}>
			<Container modifier={ContainerModifier.ABOUT}>
				<InfoToggle isGradient>
					{/* <p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusantium non sapiente necessitatibus, nemo, odio atque est et reiciendis totam vero provident distinctio culpa! Debitis, neque nemo. Obcaecati, voluptatibus voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, a cum officia molestias, ducimus praesentium itaque dignissimos nemo quae dolorem ut! Quia dolor doloribus sit aspernatur nihil distinctio sint odio?
					</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
					<p>5</p> */}
					<p className={cls.p} />
					<p className={cls.p}>
						Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки перевіреним виробникам та брендам, які давно і успішно представлені на світовому ринку. Магазин Бу-Бу є дистриб'ютором таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon, Huffy, Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako.

					</p>
					<p className={cls.p}>
						На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій, в залежності від потреб:
						дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд, автокрісла, дитячий транспорт, іграшки, дитячий одяг.
					</p>
					<p className={cls.p}>
						На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій, в залежності від потреб:
						дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд, автокрісла, дитячий транспорт, іграшки, дитячий одяг.
					</p>
				</InfoToggle>
			</Container>
		</section>
	);
};
