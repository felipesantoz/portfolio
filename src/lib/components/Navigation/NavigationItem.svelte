<script lang="ts">
	import ChevronRight from '$lib/assets/ChevronRight.svelte';
	import { Spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { isOpen } from './state.svelte';

	type Props = {
		pageName: string;
		isSelected: boolean;
		href: string;
		forceDisplay?: boolean;
	};
	let { pageName, isSelected, href, forceDisplay = false }: Props = $props();
	let isHovering = $state(false);
	const bubbleDiameter = new Spring(4);
	const handleEnter = () => {
		bubbleDiameter.target = 12;
		isHovering = true;
	};
	const handleLeave = () => {
		bubbleDiameter.target = 4;
		isHovering = false;
	};
</script>

<a
	onmouseenter={handleEnter}
	onmouseleave={handleLeave}
	onfocus={handleEnter}
	onblur={handleLeave}
	{href}
	onclick={() => (isOpen.current = false)}
	class={`flex items-center gap-2`}
>
	<div class="flex w-4 justify-center py-3">
		{#if isSelected}
			<ChevronRight class="h-3 text-orange-500" />
		{:else}
			<div
				style={`width: ${bubbleDiameter.current}px; height: ${bubbleDiameter.current}px;`}
				class={`rounded-full bg-orange-500`}
			></div>
		{/if}
	</div>
	{#if isSelected || isHovering || forceDisplay}
		<div transition:fade={{ duration: 200 }} class="whitespace-nowrap text-2xs">
			{pageName}
		</div>
	{/if}
</a>
