import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import extendedShadows from 'tailwind-extended-shadows';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				main: '#151520'
			},
			fontFamily: {
				'fira-mono': ['"Fira Mono"', 'monospace'],
				'fira-code': ['"Fira Code"', 'serif']
			}
		}
	},

	plugins: [typography, forms, containerQueries, extendedShadows]
} satisfies Config;
