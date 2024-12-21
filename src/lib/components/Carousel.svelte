<script lang="ts">
	import ChevronLeft from '$lib/assets/ChevronLeft.svelte';
	import ChevronRight from '$lib/assets/ChevronRight.svelte';
	import { mod } from '$lib/utils';
	import { fly } from 'svelte/transition';

	type Props = {
		slideSrcs: string[];
		alt: string;
	};
	let currentSlide = $state(0);
	let { slideSrcs, alt }: Props = $props();
	let direction = $state(1);
</script>

<div class=" flex w-full items-center justify-between gap-4">
	<button
		onclick={() => {
			direction = -1;
			currentSlide = mod(currentSlide - 1, slideSrcs.length);
		}}
	>
		<ChevronLeft class="size-6 text-orange-500" />
	</button>
	{#each slideSrcs as src, index}
		{#if index == currentSlide}
			<div class="flex h-[500px] w-full items-center justify-center p-2">
				<img
					in:fly={{ x: direction * 100, delay: 500, duration: 500 }}
					out:fly={{ x: -1 * direction * 100, duration: 500 }}
					{src}
					alt={`${alt} slide ${index}`}
					class="max-h-full min-h-0 min-w-0 max-w-full rounded shadow shadow-orange-900 transition shadow-blur-6 shadow-spread-1.5 shadow-opacity-40"
				/>
			</div>
		{/if}
	{/each}
	<button
		onclick={() => {
			direction = 1;
			currentSlide = mod(currentSlide + 1, slideSrcs.length);
		}}
	>
		<ChevronRight class="size-6 text-orange-500" />
	</button>
</div>
