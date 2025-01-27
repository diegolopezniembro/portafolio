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
				'pC2': '#1d4ed8',
				'pC3': '#06b6d4',
				'pC4': '#FFEB00',
				'pC5': '#111827',	
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
