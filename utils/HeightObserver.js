"use client"; // Indique que ce composant s'exécute côté client
import { useEffect, useRef } from "react";

export default function HeightObserver({ elementRef, onHeightChange }) {
	const observerRef = useRef(null); // Référence pour le ResizeObserver

	useEffect(() => {
		if (!elementRef.current) return; // Assurez-vous que la ref est définie

		const updateHeight = () => {
			if (elementRef.current) {
				const height = elementRef.current.offsetHeight; // Récupérer la hauteur
				onHeightChange(height); // Passer la hauteur au parent
			}
		};

		// Initialiser le ResizeObserver
		observerRef.current = new ResizeObserver(updateHeight);
		observerRef.current.observe(elementRef.current); // Observer la référence

		updateHeight(); // Mesurer la hauteur initiale

		return () => observerRef.current.disconnect(); // Nettoyer l'observateur lors du démontage
	}, [elementRef, onHeightChange]);

	return null; // Ce composant n'a pas besoin de rendre quoi que ce soit
}
