<script>
	import Highlights from './Highlights.svelte';
	import Scene from './Scene.svelte';
</script>

<div class="bg-main flex h-screen w-screen flex-col items-center gap-6 overflow-hidden">
	<h1 class="pt-20 font-mono text-2xl text-white lg:text-5xl">
		<span class="text-orange-500">&lt;</span>santos web solutions
		<span class="text-orange-500">/&gt;</span>
	</h1>
	<Scene />
	<Highlights />
</div>
