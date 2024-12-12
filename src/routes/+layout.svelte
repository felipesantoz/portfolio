<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="font-fira-mono min-w-screen min-h-screen bg-main text-white">
	{@render children()}
</div>
