<script>
	const { children } = $props()
</script>

<div class="sp-shell">
	<div class="sp-layer sp-layer-global">
		<p class="sp-layer-label">
			<span class="sp-layer-code">theme.globalLayout</span>
			<span class="sp-layer-badge">থিম · GlobalLayout.svelte</span>
		</p>
		{@render children?.()}
	</div>
</div>

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}
	:global(body) {
		margin: 0;
		font-family: system-ui, sans-serif;
		line-height: 1.6;
		color: #1c1917;
		background: #f5f5f4;
	}
	:global(a) {
		color: #0f766e;
	}
	:global(.sp-shell) {
		max-width: 52rem;
		margin: 0 auto;
		padding: 1rem 1rem 2.5rem;
	}
	:global(.sp-layer) {
		border: 1.5px solid;
		border-radius: 12px;
		padding: 0.7rem 0.8rem 0.85rem;
	}
	:global(.sp-layer .sp-layer) {
		margin-top: 0.15rem;
	}
	:global(.sp-layer-label) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem 0.6rem;
		margin: 0 0 0.65rem;
		font-size: 11px;
		line-height: 1.3;
	}
	:global(.sp-layer-code) {
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-weight: 700;
		letter-spacing: -0.015em;
	}
	:global(.sp-layer-badge) {
		border-radius: 999px;
		padding: 0.1rem 0.5rem;
		font-weight: 600;
	}
	:global(.sp-layer-global) {
		border-color: rgba(244, 63, 94, 0.5);
		background: rgba(244, 63, 94, 0.045);
	}
	:global(.sp-layer-global > .sp-layer-label .sp-layer-code) {
		color: #e11d48;
	}
	:global(.sp-layer-global > .sp-layer-label .sp-layer-badge) {
		background: rgba(244, 63, 94, 0.12);
		color: #be123c;
	}
	:global(.sp-layer-root) {
		border-color: rgba(14, 165, 233, 0.5);
		background: rgba(14, 165, 233, 0.045);
	}
	:global(.sp-layer-root > .sp-layer-label .sp-layer-code) {
		color: #0284c7;
	}
	:global(.sp-layer-root > .sp-layer-label .sp-layer-badge) {
		background: rgba(14, 165, 233, 0.12);
		color: #0369a1;
	}
	:global(.sp-layer-page-shell) {
		border-color: rgba(245, 158, 11, 0.55);
		background: rgba(245, 158, 11, 0.05);
	}
	:global(.sp-layer-page-shell > .sp-layer-label .sp-layer-code) {
		color: #d97706;
	}
	:global(.sp-layer-page-shell > .sp-layer-label .sp-layer-badge) {
		background: rgba(245, 158, 11, 0.16);
		color: #b45309;
	}
	:global(.sp-layer-section) {
		border-color: rgba(99, 102, 241, 0.5);
		background: rgba(99, 102, 241, 0.05);
	}
	:global(.sp-layer-section > .sp-layer-label .sp-layer-code) {
		color: #4f46e5;
	}
	:global(.sp-layer-section > .sp-layer-label .sp-layer-badge) {
		background: rgba(99, 102, 241, 0.14);
		color: #4338ca;
	}
	:global(.sp-layer-page) {
		border-color: rgba(16, 185, 129, 0.55);
		background: rgba(16, 185, 129, 0.06);
	}
	:global(.sp-layer-page > .sp-layer-label .sp-layer-code) {
		color: #059669;
	}
	:global(.sp-layer-page > .sp-layer-label .sp-layer-badge) {
		background: rgba(16, 185, 129, 0.14);
		color: #047857;
	}
</style>
