<script lang="ts">
	import About from '$lib/pages/About.svelte';
	import Contact from '$lib/pages/Contact.svelte';
	import Landing from '$lib/pages/Landing.svelte';
	import SelectedWorks from '$lib/pages/SelectedWorks.svelte';
	import { type PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Landing />
<About />
<SelectedWorks {data} />
<Contact />
