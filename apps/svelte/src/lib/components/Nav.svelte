<script lang="ts">
	import { page } from '$app/stores';
	import routing from '$lib/utils/routing';

	const routes = routing.getMenu('main', true);

	const common = `p-4 lg:p-0 border-b-2 transition-colors duration-200 transform`;

	const linkDefault =
		`border-transparent hover:border-indigo-500 text-gray-600 hover:text-gray-800 dark:text-gray-300/90 dark:hover:text-gray-100 ` +
		common;

	const linkActive = `text-gray-800 dark:text-gray-100 border-indigo-500 ` + common;

	const isActive = (path: string) => {
		return $page.url.pathname === path;
	};
</script>

{#each routes as route, i}
	<a class={isActive(route.href) ? linkActive : linkDefault} href={route.href}>
		{route.label}
	</a>
{/each}
