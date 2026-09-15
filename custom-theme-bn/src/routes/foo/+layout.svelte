<script>
	/**
	 * ঐচ্ছিক সেকশন লেআউট। এটি `/foo/*`-এর সব পেজকে ঘিরে রাখে।
	 *
	 * @typedef {object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	const { children } = $props()
</script>

<div class="sp-layer sp-layer-section">
	<p class="sp-layer-label">
		<span class="sp-layer-code">src/routes/foo/+layout.svelte</span>
		<span class="sp-layer-badge">সাব-লেআউট</span>
	</p>
	<p class="section-note"><code>/foo/*</code> পাথে সীমাবদ্ধ</p>
	{@render children?.()}
</div>

<style>
	.section-note {
		margin: 0 0 0.65rem;
		font-size: 0.8125rem;
		color: #57534e;
	}
	code {
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.85em;
	}
</style>
