<script lang="ts">
	import Email from '$lib/assets/contact/Email.svelte';
	import Github from '$lib/assets/contact/Github.svelte';
	import Linkedin from '$lib/assets/contact/Linkedin.svelte';
	import BracketedHeader from '$lib/components/BracketedHeader.svelte';
</script>

<div
	id="contact"
	class="m-auto flex min-h-screen max-w-5xl snap-start flex-col items-center gap-12 px-6 py-8 md:py-16"
>
	<BracketedHeader class="text-2xl md:text-5xl">contact</BracketedHeader>
	<h2 class="text-lg md:text-3xl">hire us</h2>
	<p>Interested in hiring us? Let us know!</p>

	<div class="flex items-center justify-center gap-12">
		<Linkedin class="size-12 drop-shadow-[0_5px_5px_theme('colors.orange.900')]" />
		<Github class="drop-shadow-[0_5px_5px_theme('colors.orange.900')]" />
		<Email class="drop-shadow-[0_5px_5px_theme('colors.orange.900')]" />
	</div>
</div>
