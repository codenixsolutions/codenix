/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		fontFamily: {
			roboto: ["var(--font-roboto)"],
			prompt: ["var(--font-prompt)"],
		},
		extend: {},
	},
	plugins: [],
};
