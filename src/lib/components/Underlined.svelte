<script lang="ts">
	let { children } = $props();
</script>

<span
	class="strike bg-gradient-to-r from-orange-400 to-orange-400 bg-[length:100%_2px] bg-left-bottom bg-no-repeat"
	>{@render children()}</span
>

<style>
	@keyframes drawFromLeft {
		0% {
			background-size: 0 2px;
		}
		100% {
			background-size: 100% 2px;
		}
	}
	.strike {
		animation: 1s ease-out 0s 1 drawFromLeft;
		animation-fill-mode: both;
	}
</style>
