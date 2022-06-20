<script lang="ts">
	import Nav from './Nav.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Kensho from '$lib/icons/kensho.svelte';
	import Menu from '$lib/icons/menu.svg';
	import Close from '$lib/icons/close.svg';
	import { prefersDarkMode } from '$lib/utils/helpers';
	import Switch from './Switch.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';

	$: checked = false;

	let menuOpen = false;

	const setMode = (mode: 'light' | 'dark') => {
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(mode);
		localStorage.setItem('theme', mode);
		checked = mode === 'dark';
		menuOpen = false;
	};

	const toggleMode = () => {
		const current = localStorage.getItem('theme');
		const mode = !current ? prefersDarkMode() : current === 'dark' ? 'light' : 'dark';
		setMode(mode);
	};
	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	onMount(() => {
		checked = localStorage.getItem('theme') === 'dark';
	});
	afterNavigate(() => {
		menuOpen = false;
	});
</script>

<header
	class="z-40 fixed top-0 border border-b-1 border-gray-200 dark:border-gray-900/50 shadow-sm shadow-gray-200 dark:shadow-slate-900/30 w-full bg-gray-100 dark:bg-gray-900 {menuOpen
		? 'shadow-gray-300 shadow-gray-700'
		: ''}"
>
	<nav class="relative lg:hidden">
		<a href="/">
			<Icon color="text-gray-700 dark:text-gray-100 ml-4 py-1" size="xl" squared={false}>
				<Kensho />
			</Icon>
		</a>

		{#if !menuOpen}
			<button on:click={toggleMenu}>
				<Icon class="lg:hidden absolute top-5 right-4 text-gray-800 dark:text-gray-100">
					<Menu />
				</Icon>
			</button>
		{:else}
			<button on:click={toggleMenu}>
				<Icon class="lg:hidden absolute top-5 right-4 text-gray-800 dark:text-gray-100">
					<Close />
				</Icon>
			</button>
		{/if}

		{#if menuOpen}
			<div class="lg:hidden flex flex-col bg-gray-50 dark:bg-gray-800/90" in:fade>
				<Nav />
			</div>
			<div class="p-4 flex items-center justify-between">
				<span class="text-gray-800 dark:text-gray-100"> Change Mode </span>
				<Switch {checked} on:click={toggleMode} />
			</div>
		{/if}
	</nav>

	<nav class="hidden lg:block relative">
		<a href="/">
			<Icon
				color="text-gray-700 dark:text-gray-100"
				size="xl"
				squared={false}
				class="absolute left-8 top-0"
			>
				<Kensho />
			</Icon>
		</a>

		<div
			class="container flex items-center justify-center space-x-8 p-5 mx-auto text-gray-600 capitalize dark:text-gray-200"
		>
			<Nav />
		</div>
		<div class="absolute top-6 right-8">
			<Switch {checked} on:click={toggleMode} />
		</div>
	</nav>
</header>
