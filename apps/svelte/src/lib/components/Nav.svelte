<script lang="ts">
	import { page } from '$app/stores';
	import routes from '$lib/utils/routes';

	const linkDefault = `border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6`;

	const linkActive = `text-gray-800 transition-colors duration-200 transform dark:text-gray-100 border-b-2 border-indigo-500 mx-1.5 sm:mx-6`;

	const isActive = (path: string) => $page.url.pathname === path;
</script>

{#each routes as route, i}
	<a class={isActive(route.href) ? linkActive : linkDefault} href={route.href}>{route.name}</a>
{/each}
