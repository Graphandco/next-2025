"use client";
import { useTransform, motion } from "framer-motion";

const HomeAtoutsItem = ({
	title,
	description,
	numItems,
	icon,
	ref,
	id,
	scrollYProgress,
}) => {
	const position = id + 1;

	const stepSize = 1 / numItems;
	const end = stepSize * position;
	const start = end - stepSize;

	const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
	const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

	return (
		<motion.div
			style={{
				opacity,
				scale,
			}}
			className="grid gap-4 p-16 place-content-center rounded-2xl bg-card home-atouts__item"
		>
			<div className="text-primary text-4xl">{icon}</div>
			<div className="text-2xl text-accent font-bold">{title}</div>
			<div className="leading-6">{description}</div>
		</motion.div>
	);
};

export default HomeAtoutsItem;
