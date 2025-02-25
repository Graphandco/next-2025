"use client";
import MagnetButton from "@/components/ui/MagnetButton";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const HomeRealisations = ({ data }) => {
	const [featureInView, setFeatureInView] = useState(features[0]);
	const homeDataMdx = data.filter((mdx) => mdx.homepage === true);
	return (
		<section className="relative home-realisations bg-black/20">
			<div className="wrapper">
				<SlidingFeatureDisplay featureInView={featureInView} />

				{/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
				<div className="-mt-[100vh] hidden md:block" />

				{homeDataMdx.map((s, index) => (
					<Content
						key={index}
						featureInView={s}
						setFeatureInView={setFeatureInView}
						{...s}
					/>
				))}
			</div>
		</section>
	);
};

const SlidingFeatureDisplay = ({ featureInView }) => {
	return (
		<div
			style={{
				justifyContent:
					featureInView.contentPosition === "l"
						? "flex-end"
						: "flex-start",
			}}
			className=" sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex pointer-events-none"
		>
			<motion.div
				layout
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 25,
				}}
				className="h-fit w-3/5 rounded-xl p-8"
			>
				<ExampleFeature featureInView={featureInView} />
			</motion.div>
		</div>
	);
};

const Content = ({ setFeatureInView, featureInView }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "-150px",
	});

	useEffect(() => {
		if (isInView) {
			setFeatureInView(featureInView);
		}
	}, [isInView]);

	return (
		<section
			ref={ref}
			className="relative z-0 flex h-fit md:h-screen"
			style={{
				justifyContent:
					featureInView.contentPosition === "l"
						? "flex-start"
						: "flex-end",
			}}
		>
			<div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8 relative z-20">
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					{/* <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
						{featureInView.callout}
					</span> */}
					<p className="my-3 text-size-h2 font-bold text-accent">
						{featureInView.title}
					</p>
					<p className="mb-4">{featureInView.description}</p>
					<MagnetButton
						title="Voir le site"
						link={featureInView.slug}
						blank
						outline
					/>
					<br />
					<MagnetButton
						title="En savoir plus"
						link={featureInView.link}
						small
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="mt-8 block md:hidden pointer-events-none"
				>
					<ExampleFeature featureInView={featureInView} />
				</motion.div>
			</div>
		</section>
	);
};

const ExampleFeature = ({ featureInView }) => {
	return (
		// <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
		// 	<featureInView.Icon />
		// </span>
		<div className="home-realisations__featured inline-block">
			<Image
				src={`/projects/cover-${featureInView.slug}.webp`}
				width={500}
				height={300}
				style={{ width: "500px", height: "300px", objectFit: "cover" }}
				alt={featureInView.title}
				className="rounded-xl"
				quality={75}
			/>
		</div>
	);
};

export default HomeRealisations;

const features = [
	{
		id: 1,
		callout: "Get noticed",
		title: "Bomot",
		link: "#",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
		image: "bomot",
		contentPosition: "r",
		Icon: FiEye,
	},
	{
		id: 2,
		callout: "Find people",
		title: "They're all here",
		link: "#",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
		image: "loide-guitare",
		contentPosition: "l",
		Icon: FiSearch,
	},
	{
		id: 3,
		callout: "Have fun",
		title: "Let's party",
		link: "#",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
		image: "willow-tarot",
		contentPosition: "r",
		Icon: FiPlay,
	},
	{
		id: 4,
		callout: "Get paid",
		title: "Cha-ching!",
		link: "#",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
		image: "hola-mate",
		contentPosition: "l",
		Icon: FiDollarSign,
	},
];
