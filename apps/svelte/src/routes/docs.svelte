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

<Head title="Validation" description="Kensho Form Validation" />

<div class="h-full">
	<Header />
	<main class="pt-24 overflow-x-hidden overflow-y-auto">
		<div class="px-4 container mx-auto text-gray-800 dark:text-gray-200">
			<h1 class="text-3xl font-semibold text-center capitalize lg:text-4xl mb-8">Docs</h1>
		</div>
	</main>
</div>
