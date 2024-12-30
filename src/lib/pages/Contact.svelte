<script lang="ts">
	import Email from '$lib/assets/contact/Email.svelte';
	import Github from '$lib/assets/contact/Github.svelte';
	import Linkedin from '$lib/assets/contact/Linkedin.svelte';
	import BracketedHeader from '$lib/components/BracketedHeader.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import PageTemplate from '$lib/components/PageTemplate.svelte';
</script>

<PageTemplate
	id="contact"
	class="m-auto flex min-h-screen max-w-5xl snap-start flex-col items-center justify-around gap-12 px-6 py-8 md:py-16"
>
	<BracketedHeader class="w-full text-2xl md:text-5xl">contact</BracketedHeader>
	<div class="flex flex-col gap-6">
		<h2 class="text-lg md:text-3xl">hire us</h2>
		<p>Interested in hiring us to do your web design? Let us know using the form below!</p>

		<ContactForm />
	</div>

	<div class="flex h-16 items-center justify-center gap-12">
		<Linkedin class="text-vulcan-50 drop-shadow-[0_10px_8px_theme('colors.vulcan.800')]" />
		<Github class="text-vulcan-50 drop-shadow-[0_10px_8px_theme('colors.vulcan.800')]" />
		<Email class="text-vulcan-50 drop-shadow-[0_10px_8px_theme('colors.vulcan.800')]" />
	</div>
</PageTemplate>
