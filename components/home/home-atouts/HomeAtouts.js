"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HomeAtouts = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	return (
		<>
			<section ref={targetRef} className="flex flex-col md:flex-row">
				<Content content={items} />
				<Images content={items} scrollYProgress={scrollYProgress} />
			</section>
		</>
	);
};

const Content = ({ content }) => {
	return (
		<div className="w-full">
			{content.map(({ id, title, description }, idx) => (
				<div
					key={id}
					className={`px-8 py-20 h-screen flex flex-col justify-between ${
						idx % 2 ? "bg-black/10" : "bg-primary text-black"
					}`}
				>
					<h3 className="text-3xl font-medium">{title}</h3>
					<p className="font-light w-full max-w-md">{description}</p>
				</div>
			))}
		</div>
	);
};

const Images = ({ content, scrollYProgress }) => {
	const top = useTransform(
		scrollYProgress,
		[0, 1],
		[`-${(content.length - 1) * 100}vh`, "0vh"]
	);

	return (
		<div className="h-screen overflow-hidden sticky top-0 w-full">
			<motion.div style={{ top }} className="absolute left-0 right-0">
				{[...content].reverse().map(({ img, id, title }) => (
					<img
						key={id}
						alt={title}
						className="h-screen w-full object-cover"
						src={img}
					/>
				))}
			</motion.div>
		</div>
	);
};

export default HomeAtouts;

const items = [
	{
		id: 1,
		title: "Black Nike w white check",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
		img: "atouts-responsive.webp",
	},
	{
		id: 2,
		title: "Bunch of black and white shoes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
		img: "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
	},
	{
		id: 3,
		title: "White shoes in the rain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
		img: "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
	},
	{
		id: 4,
		title: "White shoes with black heel",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
		img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80",
	},
];
