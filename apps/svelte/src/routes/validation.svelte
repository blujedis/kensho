<script lang="ts">
	import useKensho from '@kensho/form';
	import kenshoAdapter from '@kensho/adapter-svelte';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import { onMount } from 'svelte';

	const initialValues = {
		name: 'Bob Jones',
		email: 'bob@google.com'
	};

	const { form, subscribe } = useKensho({
		initialValues,
		onSubmit(values) {
			console.log(values);
		},
		onError(errors) {
			console.log(errors);
		}
	});
	const store = kenshoAdapter(subscribe);

	onMount(() => {
		window.hljs.highlightAll();
	});
</script>

<Head title="Home" description="Kensho Form Controller" />

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github-dark-dimmed.min.css"
	/>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
</svelte:head>

<main class="h-full">
	<Header />
  <div class="container mx-auto relative text-gray-800 dark:text-gray-200">
		<h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mb-8">
			Validating Forms with Kensho
		</h1>
  </div>
</main>