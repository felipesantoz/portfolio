<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	let container: HTMLDivElement;

	onMount(() => {
		new TypeIt(container, {
			strings: [
				'Full Stack Development',
				'Bespoke Web Design',
				'Data Driven SEO',
				'Hybrid Mobile Apps',
				'Accessible & Responsive Layouts'
			]
		});
	});
</script>

<div bind:this={container} class="w-full flex-1 text-white"></div>
