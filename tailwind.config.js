module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1400px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
		fontFamily: {
			sans: [
				"Poppins",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
		extend: {
			colors: {
				"primary-blue": "#304FFE",
			},
		},
	},
	plugins: [],
};
