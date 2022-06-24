<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { classNames } from '$lib/utils/helpers';
	import type { ICON_SIZE } from '$lib/utils/size';

	export let iconSize = 'xs' as keyof typeof ICON_SIZE;
	export let active = 0;
	export let tabClass =
		'border-transparent group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm';
	export let activeClass = 'border-indigo-500';
	export let hoverClass = 'hover:border-indigo-500';
	export let panelClass = '';
	export let items = [] as {
		name: string;
		Icon?: any;
		Component?: (HTMLElement & { [key: string]: any }) | null;
	}[];

	export const changeTab = (index: number) => (active = index);
	export const isActive = (index: number) => {
		return index === active;
	};
</script>

<div>
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<select
			id="tabs"
			name="tabs"
			class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
			on:change={(e) => changeTab(e.currentTarget?.selectedIndex)}
		>
			{#each items as item, i}
				<option selected={i === active}>
					{item.name}
				</option>
			{/each}
		</select>
	</div>

	<div class="hidden sm:block">
		<div class="border-b border-gray-200">
			<ul role="tablist" class="-mb-px flex space-x-8 items-center">
				{#each items as item, i}
					<li
						role="tab"
						class={active === i
							? classNames(tabClass, activeClass)
							: classNames(tabClass, hoverClass)}
					>
						<button class="flex items-center" on:click={() => changeTab(i)}>
							{#if item.Icon}
								<Icon class="mr-2" size={iconSize}>
									<svelte:component this={item.Icon} />
								</Icon>
							{/if}
							<span>
								{item.name}
							</span>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	{#if $$slots.panels}
		<div class="mt-4">
			<slot name="panels" />
		</div>
	{/if}

	{#each items as item, i}
		{#if active == i}
			<div class={panelClass} role="tabpanel">
				<svelte:component this={item.Component} />
			</div>
		{/if}
	{/each}
</div>
