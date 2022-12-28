/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,svx,md}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
