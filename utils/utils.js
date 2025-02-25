"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
export function isHome() {
	const pathname = usePathname();
	return pathname === "/";
}
