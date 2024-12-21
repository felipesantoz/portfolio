<script lang="ts">
	let { children } = $props();
</script>

<span
	class="inline-flex h-fit items-center rounded-md bg-orange-900 bg-opacity-10 px-2 py-1 text-xs font-medium text-orange-500 ring-1 ring-inset ring-orange-500/30"
	>{@render children()}</span
>
