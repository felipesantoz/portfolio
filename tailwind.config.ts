import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				main: '#151520'
			},
			fontFamily: {
				fira: ['"Fira Mono"', 'monospace']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
