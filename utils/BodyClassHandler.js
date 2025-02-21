"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClassHandler() {
	const pathname = usePathname(); // Récupère le pathname actuel

	useEffect(() => {
		// Détermine la classe à appliquer au <body>
		const className =
			pathname === "/" ? "home" : `${pathname.replace(/\//g, "")}`;

		// Applique la nouvelle classe au <body>
		document.body.className = className;
	}, [pathname]);

	return null; // Ce composant n'affiche rien, il modifie juste le body
}
