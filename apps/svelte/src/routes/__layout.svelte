<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	let showExperimental = false;

	const closeExperimental = () => {
		localStorage.setItem('accepted_experimental', '1');
		showExperimental = false;
	};

	onMount(() => {
		const accepted_experimental = localStorage.getItem('accepted_experimental');
		showExperimental = accepted_experimental === '1' ? false : true;
		window.hljs.highlightAll();
	});
	afterNavigate(() => {
		window.hljs.highlightAll();
	});
</script>

<slot />
{#if showExperimental}
	<Alert
		theme="danger"
		position="bottom"
		message="Highly experimental libray...expect changes."
		on:alert_close={closeExperimental}
	/>
{/if}
