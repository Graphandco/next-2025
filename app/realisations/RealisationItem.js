"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const RealisationItem = ({ item }) => {
	const { title, slug, description } = item;
	return (
		<motion.li
			whileHover="hover"
			className={`min-h-60 overflow-hidden relative realisations__item realisations__${slug}`}
		>
			<div className="h-1/2 p-6 flex flex-col justify-center bg-primary">
				<h3 className="text-size-h4 mb-2 font-semibold text-black">
					{title}
				</h3>
				<p className="text text-black">{description}</p>
			</div>
			<motion.div
				initial={{
					top: "0%",
					right: "0%",
				}}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 20,
				}}
				variants={{
					hover: {
						top: "50%",
						right: "50%",
					},
				}}
				className="absolute inset-0  z-10"
				style={{
					backgroundImage: `url(/projects/cover-${slug}.webp)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<Link
				href={`realisations/${slug}`}
				rel="nofollow"
				className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center text-accent bg-black/80 hover:bg-black transition-colors"
			>
				<div className="flex items-center">
					<span className="">En savoir plus</span>
					<FiArrowUpRight className="text-lg" />
				</div>
			</Link>
		</motion.li>
	);
};

export default RealisationItem;
