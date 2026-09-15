<script>
	const { fm = {}, children } = $props()
</script>

<article>
	{#if fm.title}
		<h1>{fm.title}</h1>
	{/if}
	{@render children?.()}
</article>

<style>
	article :global(pre) {
		padding: 0.75rem 1rem;
		overflow-x: auto;
		background: #f5f5f4;
		border-radius: 6px;
	}
</style>
