<script lang="ts">
	import Input from './Input.svelte';
	import Label from './Label.svelte';
	export let label = '' as string | boolean;
	export let name = '';
	export let type = 'text' as HTMLInputElement['type'];
</script>

<div class="mb-4" {...$$restProps}>
	<Label {label} {name} />
	<Input {name} {type} />
</div>
