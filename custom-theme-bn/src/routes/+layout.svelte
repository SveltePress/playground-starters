<script>
	/**
	 * প্লেগ্রাউন্ড এই ফাইল খোলে। নিচের হেডার সম্পাদনা করুন — এটি প্রকল্পে
	 * লেখা লেআউট, Default Theme বা Blog theme নয়।
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
		<span class="sp-layer-badge">রুট লেআউট</span>
	</p>
	<header class="site-header">
		<a class="brand" href="/">কাস্টম থিম Starter</a>
		<nav aria-label="প্রধান নেভিগেশন">
			<a href="/">হোম</a>
			<a href="/foo">নেস্টেড সেকশন</a>
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
