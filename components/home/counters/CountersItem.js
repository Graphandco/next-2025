"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const CountersItem = ({ icon, number, suffix, decimals = 0, title }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const [hasAnimated, setHasAnimated] = useState(false); // ✅ Empêche de relancer l'animation

	useEffect(() => {
		if (!isInView || hasAnimated) return; // ✅ Si déjà animé, on sort

		setHasAnimated(true); // ✅ Marque comme animé une fois

		animate(0, number, {
			duration: 2.5,
			onUpdate(value) {
				if (!ref.current) return;

				ref.current.textContent = Intl.NumberFormat("fr-FR").format(
					value.toFixed(0)
				);
			},
		});
	}, [isInView, hasAnimated, number, decimals]);

	return (
		<div className="flex flex-col gap-4 items-center py-8 sm:py-0 font-bold">
			<div className="text-size-h1 text-primary">{icon}</div>
			<div className="text-center text-accent text-size-h1">
				<span ref={ref}></span>
				{suffix}
			</div>
			<div className="text-center leading-tight">{title}</div>
		</div>
	);
};

export default CountersItem;
