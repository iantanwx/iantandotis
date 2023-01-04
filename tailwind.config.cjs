/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,svx,md}'],
	theme: {
		extend: {
			typography: (_) => ({
				DEFAULT: {
					css: {
						'a.heading': {
							'&:not(:hover)': {
								color: '#fff !important'
							}
						}
					}
				}
			})
		}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography')]
};
