<script lang="ts">
	import Bars from '$lib/assets/Bars.svelte';
	import { pageIds } from '$lib/consts';
	import { pageOffsets } from '$lib/state.svelte';
	import { slide } from 'svelte/transition';
	import NavigationItem from './NavigationItem.svelte';
	import { isOpen } from './state.svelte';
	import { modalActions } from '$lib/actions.svelte';

	type Props = {
		scrollTop: number;
	};
	let { scrollTop }: Props = $props();
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let selectedPageId = $state();
	$effect(() => {
		selectedPageId = pageIds.toReversed().find((id) => pageOffsets[id] <= scrollTop + 200);
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#snippet navItems(forceDisplay = false)}
	<nav class="flex flex-col">
		{#each pageIds as pageId}
			<NavigationItem
				href={`#${pageId}`}
				pageName={pageId}
				isSelected={pageId == selectedPageId}
				{forceDisplay}
			/>
		{/each}
	</nav>
{/snippet}

{#if innerWidth >= 768}
	<div class="fixed inset-y-0 left-4 my-auto flex max-h-max flex-col justify-center">
		{@render navItems()}
	</div>
{:else}
	<button
		class="fixed right-3 top-3 z-20 h-fit rounded border border-orange-800 bg-vulcan-950"
		onclick={() => (isOpen.current = !isOpen.current)}
	>
		<Bars class="size-6 text-orange-500" />
	</button>
	{#if isOpen.current}
		<div
			transition:slide={{ axis: 'x', duration: 500 }}
			class="fixed right-0 top-0 z-10 h-screen w-56 max-w-full bg-vulcan-950 px-4 py-8 shadow-2xl shadow-vulcan-800"
			use:modalActions
			onclickoutside={() => (isOpen.current = false)}
		>
			{@render navItems(true)}
		</div>
	{/if}
{/if}
