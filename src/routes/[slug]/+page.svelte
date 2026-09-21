<script lang="ts">
	import '../layout.css';
	import Slides from '$lib/deck/slides.svelte';
	let { data } = $props();

	const title = "Undangan Pernikahan Arif &amp; Cindy"
	const description = "Minggu, 4 Oktober 2026. Tanpa Mengurangi Rasa Hormat. Kami Bermaksud Mengundang Bapak/Ibu/Saudara/i, Pada Acara Pertunangan Kami"
	const imageLink = "/assets/logo-full.png"
	const url = "https://weddingcard-cr.aysoen.com"
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<title>{title}</title>
	<meta name="title" content="{title}" />
	<meta
		name="description"
		content="{description}"
	/>
	<meta
		itemprop="image"
		content="{imageLink}"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{url}" />
	<meta property="og:title" content="{title}" />
	<meta
		property="og:description"
		content="{description}"
	/>
	<meta
		property="og:image"
		content="{imageLink}"
	/>
</svelte:head>

{#if data.isValid}
	<Slides medan={data.medan} gereja={data.gereja} lee={data.leePalace} />
{:else}
	Error 404: Page not Found! Invalid Link
{/if}
