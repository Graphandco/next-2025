"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { useRef } from "react";

const MagnetElement = ({ title, link, blank, children, ...props }) => {
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
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className=""
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default MagnetElement;
