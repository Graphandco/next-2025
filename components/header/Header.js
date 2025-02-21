"use client";
import Link from "next/link";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import Burger from "../burger/Burger";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
	const { scrollY } = useScroll();
	const opacityValue = useTransform(scrollY, [0, 150], [0, 1]);
	const scaleValue = useTransform(scrollY, [0, 150], [1, 0.9]);
	const paddingValue = useTransform(scrollY, [0, 150], ["1rem", "0.5rem"]);

	return (
		<header className="header sticky top-0 z-50">
			<motion.div
				className="header__overlay"
				style={{ opacity: opacityValue }}
			/>
			<div className="wrapper flex justify-between items-center">
				<motion.div
					style={{ scale: scaleValue, paddingBlock: paddingValue }}
				>
					<Link
						href="/"
						className="flex items-end gap-3"
						style={{ scale: scaleValue }}
					>
						<Image
							aria-hidden
							src="/logo.svg"
							alt="Logo Graph and Co"
							width={40}
							height={40}
						/>
						<motion.div
							className="text-accent font-title font-bold text-size-h5"
							style={{ scale: scaleValue }}
						>
							Graph & Co
						</motion.div>
					</Link>
				</motion.div>
				<motion.div
					className="header-menu"
					style={{ scale: scaleValue, paddingBlock: paddingValue }}
				>
					<HeaderMenu />
					<Burger />
				</motion.div>
			</div>
		</header>
	);
};

export default Header;
