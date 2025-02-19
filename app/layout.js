import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
		<html
			lang="en"
			suppressHydrationWarning
			className="bg-bgbody bg-fixed bg-cover"
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="my-8">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
