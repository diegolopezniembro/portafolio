import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'pC1': '#000957',
				'pC2': '#3E47A3',
				'pC3': '#577BC1',
				'pC4': '#FFEB00',
			},
			fontFamily: {
				pixelify: ['Pixelify Sans Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		'flowbite/plugin',
	],
}
