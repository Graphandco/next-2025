"use client";
import { useEffect } from "react";

const useMeasureHeight = (elementRef, updateHeight) => {
	useEffect(() => {
		if (!elementRef.current) return;

		const measure = () => {
			if (elementRef.current) {
				updateHeight(elementRef.current.offsetHeight);
			}
		};

		// Observer les changements de taille
		// const observer = new ResizeObserver(() => measure());
		// observer.observe(elementRef.current);

		// Mesurer immédiatement
		measure();

		return () => observer.disconnect();
	}, [elementRef, updateHeight]);
};

export default useMeasureHeight;
