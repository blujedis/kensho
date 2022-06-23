<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Close from '$lib/icons/close.svg';
	import Theme, { type ThemeColor } from '$lib/utils/theme';
	import { classNames, compare as c } from '$lib/utils/helpers';
	const dispatch = createEventDispatcher();

	export let message = 'Default alert message.';
	export let theme = 'default' as ThemeColor;
	export let position = 'none' as 'bottom' | 'top' | 'none';

	function dispatchClose() {
		dispatch('alert_close', {
			text: 'nice event'
		});
	}

	const container = classNames(
		position === 'bottom' && 'absolute bottom-0',
		position === 'top' && 'absolute top-0',
		Theme.alert[theme]
	);
</script>

<div class="w-full z-40 shadow-sm {container}">
	<div class="container flex items-center justify-between px-6 py-4 mx-auto">
		<div class="flex">
			<svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
				<path
					d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
				/>
			</svg>
			<p class="mx-3">{message}</p>
		</div>
		<button
			class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600/20 focus:outline-none flex items-center"
			on:click={dispatchClose}
		>
			<Icon squared>
				<Close />
			</Icon>
		</button>
	</div>
</div>
