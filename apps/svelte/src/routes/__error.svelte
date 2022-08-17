<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	const isDev = import.meta.env.DEV;
	const load: Load = (ctx) => {
		let { error, status } = ctx;
		error = error || new Error('Unknown error has occurred');
		status = status || 500;
		return {
			props: {
				url: ctx.url,
				stack: error.stack,
				params: JSON.stringify(ctx.params),
				status,
				dev: isDev
			}
		};
	};
	export { load };
</script>

<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Exclamation from '$lib/icons/exclamation.svg';
	import Warning from '$lib/icons/warning.svg';

	const STATUS_MESSAGES = {
		400: 'Bad Form Request',
		401: 'User Not Authenticated',
		403: 'User Not Authorized',
		404: 'Page Not Found',
		405: 'Method Not Allowed',
		500: 'Server Error',
		503: 'Service Unavailable'
	};

	const STATUS_DESCRIPTION = {
		400: 'Sorry, that request could not be made.',
		401: "Whoops, looks like you're not authenticated.",
		403: 'Sorry, that resource is restricted.',
		404: 'Sorry, we couldn’t find the page you’re looking for.',
		405: 'Sorry, that method is not currently implemented.',
		500: 'Rut roh, the server has encountered an error.',
		503: 'Sorry, service is temporarily unavailable.'
	};

	const STATUS_COLOR = {
		400: 'text-rose-600 hover:text-rose-500',
		401: 'text-amber-600 hover:text-amber-500',
		403: 'text-rose-600 hover:text-rose-500',
		404: 'text-indigo-600 hover:text-indigo-500',
		405: 'text-rose-600 hover:text-rose-500',
		500: 'text-rose-600 hover:text-rose-500',
		503: 'text-rose-600 hover:text-rose-500'
	};

	// export let url: string;
	// export let params: Record<string, any>;
	export let dev: boolean;
	export let stack: string;
	export let status: number;
	const message = STATUS_MESSAGES[status as keyof typeof STATUS_MESSAGES] || STATUS_MESSAGES['500'];
	const description =
		STATUS_DESCRIPTION[status as keyof typeof STATUS_DESCRIPTION] || STATUS_DESCRIPTION['500'];
	let color = STATUS_COLOR[status as keyof typeof STATUS_COLOR] || STATUS_COLOR['500'];
	const colorNoHover = color.split(' ').shift();
	const warningIcon = status >= 500 || status === 403 ? false : true;
</script>

<div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
	<main
		class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
	>
		<div class="flex-shrink-0 flex justify-center">
			<Icon color={colorNoHover} size="xl">
				{#if warningIcon}
					<Warning />
				{:else}
					<Exclamation />
				{/if}
			</Icon>
			<!-- <a href="/" class="inline-flex">
				<span class="sr-only">Workflow</span>
				<img
					class="h-12 w-auto"
					src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
					alt=""
				/>
			</a> -->
		</div>

		<div class="pt-8 pb-16">
			<div class="text-center">
				<p class="text-md font-semibold uppercase tracking-wide {colorNoHover}">{status}</p>
				<h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
					{message}
				</h1>
				<p class="mt-2 text-base text-gray-500">
					{description}
				</p>
				<div class="mt-6">
					<a href="/" class="text-base font-medium {color}"
						>&larr; Go back home<span aria-hidden="true" /></a
					>
				</div>
			</div>
		</div>

		{#if dev}
			<div class="mx-auto">
				<pre class="border border-1 border-gray-100 overflow-auto max-w-3xl"><code>{stack}</code
					></pre>
			</div>
		{/if}
	</main>
	<footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
		<!-- <nav class="flex justify-center space-x-4">
      <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
      <span class="inline-block border-l border-gray-300" aria-hidden="true"></span>
      <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
      <span class="inline-block border-l border-gray-300" aria-hidden="true"></span>
      <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
    </nav> -->
	</footer>
</div>
