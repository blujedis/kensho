<script lang="ts">
	export let name = '';
	export let type = '' as HTMLInputElement['type'];
</script>

<input
	id={name}
	{name}
	{type}
	class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-100 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-900/70 focus:border-indigo-400 focus:ring-indigo-300 dark:focus:border-indigo-500 dark:focus:ring-indigo-600 focus:ring-opacity-40 focus:outline-none focus:ring shadow-sm rounded-sm"
/>
