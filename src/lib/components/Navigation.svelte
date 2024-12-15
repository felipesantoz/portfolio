<script lang="ts">
	import NavigationItem from './NavigationItem.svelte';

	type Props = {
		scrollTop: number;
		selectedPageName: string;
		pages: { name: string; href: string }[];
	};
	let { scrollTop, selectedPageName = $bindable(), pages }: Props = $props();
	let innerHeight = $state(0);
	$effect(() => {
		const index = Math.floor((scrollTop + innerHeight / 2) / innerHeight);
		selectedPageName = pages[index].name;
	});
</script>

<svelte:window bind:innerHeight />

<div class="fixed inset-y-0 left-4 my-auto flex max-h-max flex-col justify-center">
	<nav class="flex flex-col">
		{#each pages as page}
			<NavigationItem
				href={page.href}
				pageName={page.name}
				isSelected={page.name == selectedPageName}
			/>
		{/each}
	</nav>
</div>
