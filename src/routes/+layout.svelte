<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
	let { children } = $props();
	let selectedPageName = $state('Home');
	let container: HTMLDivElement | undefined = $state();
	let scrollTop = $state(0);
</script>

<div
	class="h-screen w-screen snap-y snap-proximity overflow-y-auto overflow-x-hidden scroll-smooth bg-main font-fira-mono text-white md:snap-mandatory"
	bind:this={container}
	onscroll={() => (scrollTop = container?.scrollTop ?? 0)}
>
	<Navigation
		{scrollTop}
		pages={[
			{ name: 'home', href: '#home' },
			{ name: 'about', href: '#about' },
			{ name: 'selected-works', href: '#selected-works' },
			{ name: 'contact', href: '#contact' }
		]}
		bind:selectedPageName
	/>
	{@render children()}
</div>
