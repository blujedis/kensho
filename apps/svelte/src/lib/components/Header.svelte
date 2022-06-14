<script lang="ts">
	import Nav from './Nav.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Kensho from '$lib/icons/kensho.svelte';
	import { prefersDarkMode } from '$lib/utils/helpers';
	import Switch from './Switch.svelte';
	import { onMount } from 'svelte';
	$: checked = false;

	const setMode = (mode: 'light' | 'dark') => {
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(mode);
		localStorage.setItem('theme', mode);
		checked = mode === 'dark';
	};

	const toggleMode = () => {
		const current = localStorage.getItem('theme');
		const mode = !current ? prefersDarkMode() : current === 'dark' ? 'light' : 'dark';
		setMode(mode);
	};
	onMount(() => {
		checked = localStorage.getItem('theme') === 'dark';
	});
</script>

<div
	class="mb-6 border border-b-1 border-gray-100 dark:border-gray-900/50 shadow-md shadow-slate-100/80 dark:shadow-slate-900/30 relative w-full"
>
	<nav class="bg-white dark:bg-gray-800">
		<div
			class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-200 relative"
		>
			<Icon
				color="text-gray-700 dark:text-gray-100"
				size="2xl"
				squared={false}
				class="mr-4 absolute left-2 top-0"
			>
				<Kensho />
			</Icon>
			<Nav />
			<div class="">
				<Switch {checked} on:click={toggleMode} />
			</div>
		</div>
	</nav>
</div>
