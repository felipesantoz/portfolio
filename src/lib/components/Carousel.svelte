<script lang="ts">
	import ChevronLeft from '$lib/assets/ChevronLeft.svelte';
	import ChevronRight from '$lib/assets/ChevronRight.svelte';

	type Props = {
		slideSrcs: string[];
		alt: string;
	};
	let currentSlide = $state(0);
	let { slideSrcs, alt }: Props = $props();
</script>

<div class=" flex h-1/2 w-full items-center justify-between gap-4">
	<button onclick={() => (currentSlide = (currentSlide - 1) % slideSrcs.length)}>
		<ChevronLeft class="size-6 text-orange-500" />
	</button>
	{#each slideSrcs as src, index}
		<img
			{src}
			hidden={index != currentSlide}
			alt={`${alt} slide ${index}`}
			class="m-auto h-full min-h-0 min-w-0 max-w-full"
		/>
	{/each}
	<button onclick={() => (currentSlide = (currentSlide + 1) % slideSrcs.length)}>
		<ChevronRight class="size-6 text-orange-500" />
	</button>
</div>
