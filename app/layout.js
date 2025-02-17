import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ThemeSwitcher />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
