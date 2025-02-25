/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			maxWidth: {
				sm: "540px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1540px",
			},
			padding: {
				DEFAULT: "25px",
				sm: "5vw",
			},
		},
		screens: {
			xs: "400px",
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			fontSize: {
				"size-h1": ["var(--size-h1)", "1"],
				"size-h2": ["var(--size-h2)", "1"],
				"size-h3": ["var(--size-h3)", "1"],
				"size-h4": ["var(--size-h4)", "1"],
				"size-h5": "var(--size-h5)",
				"size-h6": "var(--size-h6)",
				"size-small": "var(--size-small)",
			},
			fontFamily: {
				mostranuova: ["'mostranuova'", "sans-serif"],
				title: ["'mostranuova5'", "sans-serif"],
			},
			backgroundImage: {
				bgbody: "url('/bg.svg')",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					1: "var(--chart-1)",
					2: "var(--chart-2)",
					3: "var(--chart-3)",
					4: "var(--chart-4)",
					5: "var(--chart-5)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
