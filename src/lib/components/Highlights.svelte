<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	let container: HTMLDivElement;

	onMount(() => {
		const strings = [
			'Full Stack Development',
			'Bespoke Web Design',
			'Data Driven SEO',
			'Hybrid Mobile Apps',
			'Accessible & Responsive Layouts'
		];
		strings
			.reduce(
				(acc, curr) => acc.type(curr).pause(2000).delete(curr.length).pause(500),
				new TypeIt(container, { loop: true })
			)
			.go();
	});
</script>

<div bind:this={container} class="h-fit font-fira text-white lg:text-3xl"></div>

<style>
	:root {
		--ti-cursor-color: theme('colors.orange.500');
	}
</style>
