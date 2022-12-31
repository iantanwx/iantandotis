/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,svx,md}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography')]
};
