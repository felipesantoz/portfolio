<script lang="ts">
	import { pageIds } from '$lib/consts';
	import { pageOffsets } from '$lib/state.svelte';
	import NavigationItem from './NavigationItem.svelte';

	type Props = {
		scrollTop: number;
	};
	let { scrollTop }: Props = $props();
	let innerHeight = $state(0);
	let selectedPageId = $state();
	$effect(() => {
		console.log(scrollTop);
		console.log(pageOffsets);
		selectedPageId = pageIds.toReversed().find((id) => pageOffsets[id] <= scrollTop + 200);
	});
</script>

<svelte:window bind:innerHeight />

<div class="fixed inset-y-0 left-4 my-auto flex max-h-max flex-col justify-center">
	<nav class="flex flex-col">
		{#each pageIds as pageId}
			<NavigationItem href={`#${pageId}`} pageName={pageId} isSelected={pageId == selectedPageId} />
		{/each}
	</nav>
</div>
