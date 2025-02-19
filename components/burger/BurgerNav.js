"use client";
import { motion } from "framer-motion";
import BurgerLink from "./BurgerLink";
import { X } from "lucide-react";

const BurgerNav = ({ isOpen, setIsOpen }) => {
	const navVariants = {
		open: {
			x: "0%",
			borderTopLeftRadius: "0vw",
			borderBottomLeftRadius: "0vw",
			opacity: 1,
		},
		closed: {
			x: "100%",
			borderTopLeftRadius: "50vw",
			borderBottomLeftRadius: "50vw",
			opacity: 0,
		},
	};
	const linkWrapperVariants = {
		open: {
			transition: {
				staggerChildren: 0.1,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<motion.nav
			className="fixed top-0 bottom-0 left-0 right-0 w-screen bg-white"
			animate={isOpen ? "open" : "closed"}
			variants={navVariants}
			initial="closed"
		>
			<motion.button
				className="text-3xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8 flex items-center justify-center"
				whileHover={{ rotate: "180deg" }}
				onClick={() => setIsOpen(false)}
				whileTap={{ scale: 0.9 }}
			>
				<X />
			</motion.button>
			<motion.div
				variants={linkWrapperVariants}
				className="flex flex-col gap-4 justify-center "
			>
				<BurgerLink text="Accueil" link="/" />
				<BurgerLink text="Prestations" link="/prestations" />
				<BurgerLink text="Réalisations" link="realisations" />
				<BurgerLink text="Contact" link="contact" />
			</motion.div>
		</motion.nav>
	);
};
export default BurgerNav;
