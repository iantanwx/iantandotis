/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,svx,md}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'.dark a.heading': {
							'&:not(:hover)': {
								color: '#fff !important'
							}
						},
						'&:not(.dark) a.heading': {
							'&:not(:hover)': {
								color: `${theme('colors.gray.900')} !important`
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
