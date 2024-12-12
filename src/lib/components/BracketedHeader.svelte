<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<h1 class={`${className} font-fira text-white`}>
	<span class="text-orange-500">&lt;</span>{@render children()}
	<span class="text-orange-500">/&gt;</span>
</h1>
