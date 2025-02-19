"use client";
import { useState } from "react";
// import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { AlignJustify } from "lucide-react";

import { motion } from "framer-motion";
import BurgerNav from "./BurgerNav";

const Burger = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="items-center text-white flex md:hidden fixed top-8 right-8">
			<motion.button
				whileHover={{ rotate: "180deg" }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(true)}
				className="text-3xl bg-primary text-black hover:text-indigo-500 transition-colors p-3 rounded-full"
			>
				<AlignJustify />
			</motion.button>
			<BurgerNav isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

export default Burger;
