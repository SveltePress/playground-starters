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

<header class="site-header">
	<a class="brand" href="/">自定义主题 Starter</a>
	<nav aria-label="主导航">
		<a href="/">首页</a>
	</nav>
</header>

{@render children?.()}

<style>
	.site-header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.25rem 0 1rem;
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
	nav a {
		color: #0f766e;
	}
</style>
