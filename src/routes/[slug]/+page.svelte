<script lang="ts">
	import '../layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Slides from '$lib/deck/slides.svelte';
	let { data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if data.isValid}
	<Slides medan={data.medan} gereja={data.gereja} lee={data.leePalace}/>
{:else}
  Error 404: Page not Found! Invalid Link
{/if}
