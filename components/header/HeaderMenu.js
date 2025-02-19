import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const HeaderMenu = () => {
	return (
		<nav className=" hidden md:flex items-center gap-4 text-accent font-semibold">
			<Link href="/">Accueil</Link>
			<Link href="/prestations">Prestations</Link>
			<Link href="/realisations">Réalisations</Link>
			<Link href="/contact">Contact</Link>
			<ThemeSwitcher />
		</nav>
	);
};

export default HeaderMenu;
