<script lang="ts">
	let { name = 'example.md', external = false, children = null } = $props();
</script>

{#if external}
	<section data-markdown={name}></section>
{:else}
	<section data-markdown>
		<div data-template>
			{#if children}
				{@render children()}
			{:else}
				<p>fallback content</p>
			{/if}
		</div>
	</section>
{/if}
