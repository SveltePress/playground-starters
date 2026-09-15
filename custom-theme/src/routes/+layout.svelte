<script>
	/**
	 * The Hosted editor opens this file. Edit the header below — this is the
	 * project-authored layout, not Default Theme or Blog theme chrome.
	 *
	 * @typedef {object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	const { children } = $props()
</script>

<div class="sp-layer sp-layer-root">
	<p class="sp-layer-label">
		<span class="sp-layer-code">src/routes/+layout.svelte</span>
		<span class="sp-layer-badge">Root layout</span>
	</p>
	<header class="site-header">
		<a class="brand" href="/">Custom theme starter</a>
		<nav aria-label="Main">
			<a href="/">Home</a>
			<a href="/foo">Nested section</a>
		</nav>
	</header>
	{@render children?.()}
</div>

<style>
	.site-header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.75rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #d6d3d1;
	}
	.brand {
		font-weight: 700;
		color: inherit;
		text-decoration: none;
	}
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
