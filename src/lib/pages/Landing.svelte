<script lang="ts">
	import ChevronDown from '$lib/assets/ChevronDown.svelte';
	import BracketedHeader from '$lib/components/BracketedHeader.svelte';
	import Highlights from '$lib/components/Highlights.svelte';
	import Scene from '$lib/components/Scene.svelte';

	let zoomScene = $state(false);
</script>

<div class="flex h-screen w-screen flex-col items-center gap-6 overflow-hidden">
	<BracketedHeader class="pt-8 text-xl lg:pt-16 lg:text-6xl">santos-web-solutions</BracketedHeader>
	<Scene {zoomScene} />
	<Highlights />
	<a
		href="/about"
		class="flex transform flex-col items-center gap-0 pt-6 text-xs text-white transition duration-200 hover:scale-110 lg:text-base"
		onmouseenter={() => (zoomScene = true)}
		onmouseleave={() => (zoomScene = false)}
	>
		<span>enter</span>
		<ChevronDown class="size-4 text-orange-500" />
	</a>
</div>
