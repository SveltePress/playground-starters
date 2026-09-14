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

<header class="site-header">
	<a class="brand" href="/">Custom theme starter</a>
	<nav aria-label="Main">
		<a href="/">Home</a>
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
