<script>
	const { children } = $props()
</script>

<div class="shell">
	{@render children?.()}
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: system-ui, sans-serif;
		line-height: 1.6;
		color: #1c1917;
		background: #fafaf9;
	}
	.shell {
		max-width: 44rem;
		margin: 0 auto;
		padding: 0 1.25rem 2.5rem;
	}
</style>
