<script lang="ts">
	import { fade } from 'svelte/transition';
	import useKensho from '@kensho/adapter-svelte';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import JavaScript from '$lib/icons/javascript.svg';
	import React from '$lib/icons/React.svg';
	import Svelte from '$lib/icons/svelte.svg';
	import Solid from '$lib/icons/solid.svg';
	import Tabs from '$lib/components/Tabs.svelte';
	import { JS_BLOCK, REACT_BLOCK, SVELTE_BLOCK } from '$lib/constants';
	import Code from '$lib/components/Code.svelte';

	let activeTab = 0;

	const initialValues = {
		name: 'Milton Waddams',
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
	<main class="pt-24 pb-72 overflow-x-hidden overflow-y-auto">
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
				<a class="link" href="https://www.npmjs.com/package/@kensho/adapter-svelte">Svelte</a><span
					class="px-2">|</span
				>
				<a class="link" href="https://www.npmjs.com/package/@kensho/adapter-react">React</a><span
					class="px-2">|</span
				>
				<a class="link" href="https://www.npmjs.com/package/@kensho/adapter-react">JavaScript</a>
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

			<h3 class="text-3xl font-semibold text-gray-400 dark:text-gray-400 my-6">Basic Usage</h3>

			<Tabs
				bind:active={activeTab}
				items={[
					{ name: 'Svelte', Icon: Svelte },
					{ name: 'React', Icon: React },
					{ name: 'Solid', Icon: Solid },
					{ name: 'JavaScript', Icon: JavaScript }
				]}
			>
				<div slot="panels">
					{#if activeTab === 0}
						<div class="mb-4">
							<Code language="typescript" code={SVELTE_BLOCK} />
						</div>
					{/if}

					{#if activeTab === 1}
						<div class="mb-4">
							<Code language="typescript" code={REACT_BLOCK} />
						</div>
					{/if}
					{#if activeTab === 2}
						<div class="mb-4">
							<Code language="typescript" code={REACT_BLOCK} />
						</div>
					{/if}
					{#if activeTab === 3}
						<div class="mb-4">
							<Code language="javascript" code={JS_BLOCK} />
						</div>
					{/if}
				</div>
			</Tabs>

			<!-- <form use:register class="mt-4">
				<InputField name="name" />
				<InputField name="email" />
			</form> -->
		</div>
	</main>
	<Footer />
</div>
