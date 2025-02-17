"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<Toggle
			variant="outline"
			aria-label="Toggle italic"
			onPressedChange={() =>
				setTheme(theme === "dark" ? "light" : "dark")
			}
		>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Toggle>
	);
}
