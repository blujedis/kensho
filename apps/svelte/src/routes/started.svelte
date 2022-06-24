<script lang="ts">
	import { fade } from 'svelte/transition';
	import useKensho from '@kensho/adapter-svelte';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import JavaScript from '$lib/icons/javascript.svg';
	import React from '$lib/icons/React.svg';
	import Svelte from '$lib/icons/svelte.svg';
	import Tabs from '$lib/components/Tabs.svelte';

	let TabInstance: Tabs;

	const isActive = (index: number) => TabInstance?.isActive(index);

	const initialValues = {
		name: 'Christian Mesa',
		email: 'bob@google.com'
	};

	const { register, store } = useKensho({
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
		<div class="px-4 container text-gray-800 dark:text-gray-200 mx-auto max-w-5xl">
			<h1 class="text-4xl font-semibold text-center capitalize lg:text-4xl mb-8">
				Kensho Form Controller
			</h1>

			<p class="mb-4">
				Kensho is platform agnostic, in that it can be used with nearly any platform. While there
				are limited official adapters currently, there are more to come. If familiar with the
				paltform you are using, creating an adapter consuming Kensho's core form library is fairly
				simple. For example both the <strong>React</strong> and <strong>Svelte</strong> adpaters are
				a 100 lines or less with roughly 1/4 or more of that being comments/examples!
			</p>

			<p class="mb-4">The following official adapters are available:</p>

			<p class="mb-4">
				<a class="link" href="https://www.npmjs.com/package/@kensho/adapter-react">React</a><br />
				<a class="link" href="https://www.npmjs.com/package/@kensho/adapter-svelte">Svelte</a>
			</p>

			<h3 class="text-3xl font-semibold text-gray-400 dark:text-gray-400 my-6">
				Installing Kensho
			</h3>

			<p class="mb-4">
				Using your perferred package manager (npm, yarn, etc) you can install Kensho in the
				following manner:
			</p>

			<pre class="mb-4"><code class="language-shell">npm install @kensho/adapter-svelte</code></pre>

			<p class="my-4">
				For <a href="https://yarnpkg.com/" class="link">Yarn</a> or
				<a href="https://pnpm.io/" class="link">Pnpm</a>
			</p>

			<pre class="mb-4"><code class="language-shell"
					>{`{yarn|pnpm}`} add @kensho/adapter-svelte</code
				></pre>

			<Tabs
				bind:this={TabInstance}
				active={1}
				items={[
					{ name: 'React', Component: null, Icon: React },
					{ name: 'Svelte', Component: null, Icon: Svelte },
					{ name: 'JavaScript', Component: null, Icon: JavaScript }
				]}
			>
				<div slot="panels">
					<p>{isActive(1) + ''}</p>
					<div in:fade={{ delay: 200 }} class={isActive(0) ? 'block' : 'hidden'}>React</div>
					<div in:fade={{ delay: 200 }} class={isActive(0) ? 'block' : 'hidden'}>Svelte</div>
					<div in:fade={{ delay: 200 }} class={isActive(0) ? 'block' : 'hidden'}>JavaScript</div>
				</div>
			</Tabs>

			<form use:register class="mt-4">
				<InputField name="name" />
				<InputField name="email" />
			</form>
		</div>
	</main>
</div>
