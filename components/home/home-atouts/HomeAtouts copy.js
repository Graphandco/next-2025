"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Brush, UserRound, LockKeyhole, Smartphone } from "lucide-react";

import HomeAtoutsText from "./HomeAtoutsText";
import HomeAtoutsItem from "./HomeAtoutsItem";

const HomeAtouts = () => {
	return (
		<section className="relative bg-primary home-atouts" id="home-atouts">
			<div className="wrapper grid h-full w-full grid-cols-1 gap-8 px-4 md:grid-cols-2">
				<HomeAtoutsText />
				<Carousel />
			</div>
			{/* <div className="h-[50vh] bg-white" /> */}
		</section>
	);
};

const atouts = [
	{
		title: "Interface Utilisateur",
		description: "Un site internet unique, au design innovant et moderne",
		icon: <Brush size={40} />,
	},
	{
		title: "Expérience Utilisateur",
		description: "Un site fonctionnel et accessible, une navigation claire",
		icon: <UserRound size={40} />,
	},
	{
		title: "Sécurité",
		description:
			"Votre site est protégé, les données de vos visiteurs sont sécurisées",
		icon: <LockKeyhole size={40} />,
	},
	{
		title: "Accessibilité",
		description:
			"Un site accessible et intuitif sur tous les types de supports et tailles d'écrans",
		icon: <Smartphone size={40} />,
	},
];
const Carousel = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	return (
		<div className="relative w-full">
			<div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-primary to-primary-50/0 md:block" />
			<div
				ref={ref}
				className="relative z-0 flex flex-col gap-6 md:gap-12"
			>
				{atouts.map((atout, id) => (
					<HomeAtoutsItem
						key={id}
						title={atout.title}
						description={atout.description}
						icon={atout.icon}
						id={id}
						ref={ref}
						numItems="4"
						scrollYProgress={scrollYProgress}
					/>
				))}
			</div>

			<div className="h-24 w-full md:h-48" />
		</div>
	);
};

export default HomeAtouts;
