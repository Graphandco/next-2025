"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Toggle } from "@/components/ui/toggle";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Évite les problèmes d'hydratation
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null; // Placeholder pour éviter les différences de rendu
	}

	return (
		<nav
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="cursor-pointer"
		>
			{theme === "dark" ? <Sun /> : <Moon />}
		</nav>
	);
}
