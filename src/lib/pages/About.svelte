<script lang="ts">
	import BracketedHeader from '$lib/components/BracketedHeader.svelte';
	import felipe from '$lib/assets/felipe.jpg';
	import { fly } from 'svelte/transition';
	import InView from '$lib/components/InView.svelte';
	import Underlined from '$lib/components/Underlined.svelte';
	import PageTemplate from '$lib/components/PageTemplate.svelte';
</script>

<PageTemplate
	id="about"
	class="m-auto flex min-h-screen max-w-5xl snap-start flex-col justify-between gap-12 px-6 py-8 md:py-16"
>
	<BracketedHeader class="text-2xl md:text-5xl">about</BracketedHeader>
	<InView>
		<h2 class="text-lg md:pl-12 md:pr-72 md:text-3xl">
			Delivering <Underlined>sleek</Underlined> interfaces,
			<Underlined>high-performance</Underlined> code, and
			<Underlined>tailored</Underlined> support, all at an
			<Underlined>agile</Underlined> pace
		</h2>
	</InView>
	<div class="flex w-full flex-wrap items-center gap-12 md:flex-nowrap">
		<InView class="h-[412px] w-full md:w-1/3">
			<img
				in:fly={{ x: -200, duration: 1000 }}
				class="max-h-full rounded shadow shadow-orange-900 shadow-blur-6 shadow-spread-1.5 shadow-opacity-40"
				alt="Portrait of Felipe smiling"
				src={felipe}
			/>
		</InView>
		<p class="w-full text-justify font-fira-code md:w-2/3">
			<em class="font-bold text-orange-400">santos-web-solutions</em> is the web development
			contracting enterprise founded by <em>Felipe Santos</em>, a passionate Nottingham-based web
			designer who thrives on creating high-quality websites for his clients. With a strong
			technical background and a keen eye for detail, we believe in delivering exceptional
			results—all while keeping our rates affordable. Indeed, by being based where the cost of
			living is lower, we are able to offer clients great value without compromising on quality.
			Felipe is also Cambridge-educated and is currently pursuing a part-time PhD in theoretical
			computer science, providing technical soundness scarcely found elsewhere. Therefore, by
			working with <em>sws</em>, clients can expect world-class quality at a competitive price. We
			invite visitors to explore the website and see the results for themselves. If our work
			resonates with you, we are eager to help bring your vision to life—so don't hesitate to get in
			touch!
		</p>
	</div>
</PageTemplate>
