<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Kensho Form Controller & Validation" />
</svelte:head>

<div class="content">
	<h1>Kensho Form Controller & Validation</h1>
	<p>
		You can install <strong>Kensho</strong> using the following command.
	</p>

	<pre>npm install @kensho/form</pre>

	<p>
		The below form is controlled by <a href="https://kit.svelte.dev">Kensho</a> app. A fast and
		efficient form controller for use with <a href="https://kit.svelte.dev">SvelteKit</a>.
	</p>

	<form />
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
