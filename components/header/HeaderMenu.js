"use client";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { usePathname } from "next/navigation";
import MagnetElement from "../ui/MagnetElement";

const HeaderMenu = () => {
	const pathname = usePathname();
	const links = [
		{
			name: "Accueil",
			url: "/",
		},
		{
			name: "Prestations",
			url: "/prestations",
		},
		{
			name: "Réalisations",
			url: "/realisations",
		},
		{
			name: "Contact",
			url: "/contact",
		},
	];
	return (
		<nav className=" hidden md:flex items-center gap-4">
			{links.map((link, index) => (
				<MagnetElement key={index}>
					<Link
						className={`hover:text-accent font-semibold transition-colors ${
							pathname == link.url ? "text-accent" : ""
						}`}
						href={link.url}
					>
						{link.name}
					</Link>
				</MagnetElement>
			))}
			{/* <ThemeSwitcher /> */}
		</nav>
	);
};

export default HeaderMenu;
