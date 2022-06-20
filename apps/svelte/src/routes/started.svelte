<script lang="ts">
	import useKensho from '@kensho/adapter-svelte';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import InputField from '$lib/components/InputField.svelte';

	const initialValues = {
		name: 'Christian Mesa',
		email: 'bob@google.com'
	};

	const { form, store } = useKensho({
		initialValues,
		onSubmit(values) {
			console.log(values);
		},
		onError(errors) {
			console.log(errors);
		}
	});
</script>

<Head title="Home" description="Kensho Form Controller" />
<div class="h-full">
	<Header />
	<main class="pt-24 overflow-x-hidden overflow-y-auto">
		<div class="px-4 container mx-auto text-gray-800 dark:text-gray-200">
			<h1 class="text-3xl font-semibold text-center capitalize lg:text-4xl mb-8">
				Kensho Form Controller & Validation
			</h1>

			<p class="mb-4">
				You can install <strong>Kensho</strong> using the following command (validator pkg optional)
			</p>

			<pre><code class="language-shell"
					>npm install @kensho/adapter-svelte @kensho/validator</code
				></pre>

			<p class="my-4">
				The below form is controlled by <a href="https://kit.svelte.dev">Kensho</a>. A fast and
				efficient form controller for use with <a href="https://kit.svelte.dev">SvelteKit</a>.
			</p>

			<form use:form class="mt-4">
				<InputField name="name" />
				<InputField name="email" />
			</form>
			<p class="my-4">{JSON.stringify($store.dirty, null, 2)}</p>
		</div>
	</main>
</div>
