<script>
	const { fm = {}, children } = $props()
</script>

<div class="sp-layer sp-layer-page-shell">
	<p class="sp-layer-label">
		<span class="sp-layer-code">theme.pageLayout</span>
		<span class="sp-layer-badge">主题 · PageLayout.svelte</span>
	</p>
	<article>
		{#if fm.title}
			<h1>{fm.title}</h1>
		{/if}
		<div class="sp-layer sp-layer-page">
			<p class="sp-layer-label">
				<span class="sp-layer-code">+page.(md|svelte)</span>
				<span class="sp-layer-badge">页面内容</span>
			</p>
			{@render children?.()}
		</div>
	</article>
</div>

<style>
	h1 {
		margin: 0 0 0.75rem;
		font-size: 1.65rem;
		letter-spacing: -0.02em;
	}
	article :global(pre) {
		padding: 0.75rem 1rem;
		overflow-x: auto;
		background: #f5f5f4;
		border-radius: 6px;
	}
</style>
