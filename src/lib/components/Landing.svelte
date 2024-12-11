<script lang="ts">
	import ChevronDown from '$lib/assets/ChevronDown.svelte';
	import Highlights from './Highlights.svelte';
	import Scene from './Scene.svelte';

	let zoomScene = $state(false);
</script>

<div class="font-fira flex h-screen w-screen flex-col items-center gap-6 overflow-hidden bg-main">
	<h1 class="font-fira pt-16 text-2xl text-white lg:text-6xl">
		<span class="text-orange-500">&lt;</span>santos web solutions
		<span class="text-orange-500">/&gt;</span>
	</h1>
	<Scene {zoomScene} />
	<Highlights />
	<a
		href="/"
		class="flex transform flex-col items-center gap-0 pt-6 text-white transition duration-200 hover:scale-110"
		onmouseenter={() => (zoomScene = true)}
		onmouseleave={() => (zoomScene = false)}
	>
		<span>Enter</span>
		<ChevronDown class="size-4 text-orange-500" />
	</a>
</div>
