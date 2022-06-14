<script lang="ts">
	import { capitalize } from '$lib/utils/helpers';
	export let label = '' as string | boolean;
	export let name: string;
	label = label === false ? '' : label === '' ? name : label;
</script>

{#if label}
	<label class="pl-1 text-gray-700 dark:text-gray-100 text-sm block text-sm font-medium" for={name}>
		{capitalize(label + '')}
	</label>
{/if}
