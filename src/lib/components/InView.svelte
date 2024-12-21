<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let visible = $state(false);
	let { class: className, children } = $props();

	onMount(() => {
		const event = new EventTarget();
		const observer = new IntersectionObserver(
			(entries) => event.dispatchEvent(new CustomEvent('intersect', { detail: entries })),
			{ root: null, rootMargin: '0px', threshold: 0 }
		);

		observer.observe(container);
		event.addEventListener('intersect', (e) => {
			const entries = (e as CustomEvent).detail;
			const entry = entries.find((entry: IntersectionObserverEntry) => entry.target === container);

			if (entry) visible = entry.isIntersecting;
		});

		return () => {
			observer.unobserve(container);
			observer.disconnect();
		};
	});
</script>

<div bind:this={container} class={className}>
	{#if visible}
		{@render children()}
	{/if}
</div>
