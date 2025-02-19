"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const MagnetButton = ({ title, link }) => {
	const ref = useRef(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x, {
		mass: 3,
		stiffness: 400,
		damping: 50,
	});
	const ySpring = useSpring(y, {
		mass: 3,
		stiffness: 400,
		damping: 50,
	});

	const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

	const handleMouseMove = (e) => {
		if (!ref.current) return;

		const { height, width, left, top } =
			ref.current.getBoundingClientRect();

		x.set(e.clientX - (left + width / 2));
		y.set(e.clientY - (top + height / 2));
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.button
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform }}
			transition={{ type: "spring", stiffness: 200, damping: 50 }}
			className="group py-2 px-6 relative grid place-content-center rounded-full transition-colors duration-700 ease-out border border-primary overflow-hidden"
		>
			<div className="font-bold relative z-10 text-accent">
				{link?.length ? (
					<Link href={link}>{title}</Link>
				) : (
					<span>{title}</span>
				)}
			</div>

			<div className="pointer-events-none absolute inset-0 z-0 scale-x-0 scale rounded-full bg-primary transition-transform duration-700 ease-out group-hover:scale-x-100 origin-left" />

			<motion.div
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{
					duration: 25,
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear",
				}}
				style={{
					top: "50%",
					left: "50%",
					x: "-50%",
					y: "-50%",
				}}
				width="200"
				height="200"
				className="pointer-events-none absolute z-10"
			>
				{/* <text>
					<textPath
						href="#circlePath"
						fill="black"
						className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
					>
						You can write whatever text you want around this circle
					</textPath>
				</text> */}
			</motion.div>
		</motion.button>
	);
};

export default MagnetButton;
