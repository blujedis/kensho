<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/icon.svelte';
	import Facebook from '$lib/icons/facebook.svg';
	import Github from '$lib/icons/facebook.svg';
	import Twitter from '$lib/icons/facebook.svg';
	import Dribble from '$lib/icons/facebook.svg';
	import Instagram from '$lib/icons/facebook.svg';
	import routing from '$lib/utils/routing';

	const routes = routing.getMenu('footer', true);

	const isActive = (path: string) => {
		return $page.url.pathname === path;
	};
</script>

<footer class="bg-gray-100 dark:bg-gray-900">
	<div class="mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 ">
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			{#each routes as route, i}
				<div class="px-5 py-2">
					<a class="text-base text-gray-500 hover:text-gray-900" href={route.href}>
						{route.label}
					</a>
				</div>
			{/each}
		</nav>

		<div class="mt-8 flex justify-center space-x-6">
			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Facebook</span>
				<Icon>
					<Facebook />
				</Icon>
			</a>

			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Instagram</span>
				<Icon>
					<Instagram />
				</Icon>
			</a>

			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Twitter</span>
				<Icon>
					<Twitter />
				</Icon>
			</a>

			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">GitHub</span>
				<Icon>
					<Github />
				</Icon>
			</a>

			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Dribbble</span>
				<Icon>
					<Dribble />
				</Icon>
			</a>
		</div>
		<p class="mt-8 text-center text-base text-gray-400">
			&copy; 2022 Blujedi LLC, All rights reserved.
		</p>
	</div>
</footer>
