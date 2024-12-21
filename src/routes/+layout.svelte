<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();
	let selectedPageName = $state('Home');
	let container: HTMLDivElement | undefined = $state();
	let scrollTop = $state(0);
	onMount(() => {
		scrollTop = container?.scrollTop ?? 0;
	});
</script>

<div
	class="bg-vulcan-950 h-screen w-screen snap-y snap-proximity overflow-y-auto overflow-x-hidden scroll-smooth font-fira-mono text-white md:snap-mandatory"
	bind:this={container}
	onscroll={() => (scrollTop = container?.scrollTop ?? 0)}
>
	<Navigation {scrollTop} />
	{@render children()}
</div>
