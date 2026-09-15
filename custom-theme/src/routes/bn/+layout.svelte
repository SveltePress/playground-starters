<script>
	/**
	 * বাংলা প্লেগ্রাউন্ড এই ফাইল খোলে। নিচের হেডার সম্পাদনা করুন — এটি প্রকল্পে
	 * লেখা লেআউট, Default Theme বা Blog theme নয়।
	 *
	 * @typedef {object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	const { children } = $props()
</script>

<header class="site-header">
	<a class="brand" href="/bn/">কাস্টম থিম Starter</a>
	<nav aria-label="প্রধান নেভিগেশন">
		<a href="/bn/">হোম</a>
		<a href="/">English</a>
		<a href="/zh/">中文</a>
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
