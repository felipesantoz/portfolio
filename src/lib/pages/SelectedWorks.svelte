<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
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

	<div
		class="flex h-full w-full max-w-2xl flex-col gap-10 rounded-lg border border-vulcan-800 px-4 py-3 md:px-10 md:py-8"
	>
		<div class="flex flex-col gap-4">
			<InView><h2 class="text-lg md:text-3xl"><Underlined>pawprint</Underlined></h2></InView>
			<div class="flex flex-wrap gap-2">
				<Badge>TypeScript</Badge>
				<Badge>React</Badge>
				<Badge>Tailwind</Badge>
				<Badge>Svelte</Badge>
				<Badge>Next.js</Badge>
			</div>
		</div>
		<Carousel slideSrcs={data.pawprintImageSrcs} alt="pawprint screenshots" />
	</div></PageTemplate
>
