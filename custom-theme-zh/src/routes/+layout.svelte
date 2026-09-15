<script>
	/**
	 * 演练场打开这个文件。编辑下面的页头 — 这是项目自己写的布局，
	 * 不是默认主题，也不是博客主题。
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
		<span class="sp-layer-badge">根布局文件</span>
	</p>
	<header class="site-header">
		<a class="brand" href="/">自定义主题 Starter</a>
		<nav aria-label="主导航">
			<a href="/">首页</a>
			<a href="/foo">嵌套分区</a>
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
