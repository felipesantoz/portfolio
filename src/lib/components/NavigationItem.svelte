<script lang="ts">
	import ChevronRight from '$lib/assets/ChevronRight.svelte';
	import { Spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	type Props = {
		pageName: string;
		isSelected: boolean;
		href: string;
	};
	let { pageName, isSelected, href }: Props = $props();
	let isHovering = $state(false);
	const bubbleDiameter = new Spring(4);
</script>

<a
	onmouseenter={() => {
		bubbleDiameter.target = 12;
		isHovering = true;
	}}
	onmouseleave={() => {
		bubbleDiameter.target = 4;
		isHovering = false;
	}}
	{href}
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
	{#if isSelected || isHovering}
		<div transition:fade={{ duration: 200 }} class="text-2xs">
			{pageName}
		</div>
	{/if}
</a>
