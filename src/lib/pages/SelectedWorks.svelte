<script lang="ts">
	import BracketedHeader from '$lib/components/BracketedHeader.svelte';
	import PageTemplate from '$lib/components/PageTemplate.svelte';
</script>

<PageTemplate
	id="selected-works"
	class="m-auto flex min-h-screen max-w-5xl snap-start flex-col gap-12 px-6 py-8 md:py-16"
>
	<BracketedHeader class="text-2xl md:text-5xl">selected-works</BracketedHeader>
	<div class="grid grid-cols-2">
		<div class="px-12">
			<h2>Pawprint App</h2>
		</div>
		<div class="px-12">
			<h2>Admin Dashboard</h2>
		</div>
	</div>
</PageTemplate>
