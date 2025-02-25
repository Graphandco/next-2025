"use client";

import { isHome } from "@/utils/utils";

export default function LayoutWrapper({ children }) {
	const homepage = isHome();
	return <main className={`${homepage ? "pb-6" : "py-6"}`}>{children}</main>;
}
