<script lang="ts">
	import { pageOffsets } from '$lib/state.svelte';
	import type { PageId } from '$lib/types';
	type Props = {
		id: PageId;
		children?: any;
		class?: string;
	};
	let { id, children, class: className }: Props = $props();
	let container: HTMLDivElement | undefined = $state();
	$effect(() => {
		pageOffsets[id] = container?.offsetTop ?? 0;
	});
</script>

<div {id} class={className} bind:this={container}>
	{@render children()}
</div>
