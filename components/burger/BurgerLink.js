"use client";
import { motion } from "framer-motion";

const BurgerLink = ({ text, link }) => {
	const navLinkVariants = {
		open: { x: 0 },
		closed: { x: 25 },
	};
	return (
		<motion.a
			className="inline-block z-10 text-slate-800 w-fit font-black text-7xl hover:text-indigo-500 transition-colors"
			variants={navLinkVariants}
			transition={{
				type: "spring",
				damping: 3,
			}}
			whileHover={{
				y: -15,
				rotate: "-7.5deg",
			}}
			rel="nofollow"
			href={link}
		>
			{text}
		</motion.a>
	);
};

export default BurgerLink;
