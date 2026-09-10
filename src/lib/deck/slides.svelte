<script lang="ts">
	import { onMount } from 'svelte'

	import Reveal from 'reveal.js'
	import Highlight from 'reveal.js/plugin/highlight'
	import Markdown from 'reveal.js/plugin/markdown'
	import Notes from 'reveal.js/plugin/notes'

	import 'reveal.js/reveal.css'
	// import 'reveal.js/theme/white.css'
	// import 'reveal.js/plugin/highlight/monokai.css'

	import Presentation from './presentation.svelte'

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
      overview: false,
			view: 'scroll',
			scrollProgress: true,
		})

		deck.initialize()
	})
</script>

<div class="reveal">
	<div class="slides max-sm:text-4xl">
		<Presentation />
	</div>
</div>