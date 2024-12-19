<script lang="ts">
	import BracketedHeader from '$lib/components/BracketedHeader.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import InView from '$lib/components/InView.svelte';
	import PageTemplate from '$lib/components/PageTemplate.svelte';
	import Underlined from '$lib/components/Underlined.svelte';
	import type { PageData } from '../../routes/$types';

	let { data }: { data: PageData } = $props();
</script>

<PageTemplate
	id="selected-works"
	class="m-auto flex h-screen max-w-5xl snap-start flex-col items-center gap-12 px-6 py-8 md:py-16"
>
	<BracketedHeader class="w-full text-2xl md:text-5xl">selected-works</BracketedHeader>

	<div class="flex h-full w-full max-w-xl flex-col gap-8">
		<InView><h2 class="text-lg md:pl-12 md:text-3xl"><Underlined>pawprint</Underlined></h2></InView>
		<Carousel slideSrcs={data.pawprintImageSrcs} alt="pawprint screenshots" />
	</div></PageTemplate
>
