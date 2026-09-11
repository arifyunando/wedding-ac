<script lang="ts">
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight';
	import Markdown from 'reveal.js/plugin/markdown';
	import Notes from 'reveal.js/plugin/notes';
	import Presentation from './presentation.svelte';
	import 'reveal.js/reveal.css';
	import '$lib/assets/reveal-custom.css';

	let { medan = false, gereja = false, lee = false } = $props();

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			overview: false,
			scrollProgress: true,
			touch: false,
			disableLayout: true,
			center: false,
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		<Presentation {medan} {gereja} {lee} />
	</div>
</div>
