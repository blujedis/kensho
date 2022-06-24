<script lang="ts">
	import { classNames, stlyeNames } from '$lib/utils/helpers';
	import { ICON_SIZE } from '$lib/utils/size';
	export let inline = true;
	export let color = '';
	export let size = 'sm' as
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| 'full';
	export let squared = true;
	const isStyle = ['#', 'rgb', 'hsl'].some((v) => color.startsWith(v));
	let klass = isStyle ? '' : color;
	let style = !isStyle ? '' : `color: ${color};`;
	let adjSize = ICON_SIZE[size];
	if (squared) {
		const split = adjSize.split(' ');
		adjSize = split[1] + ' ' + split[1].replace('w', 'h');
	}
	klass = classNames($$restProps.class, klass, inline && 'inline-flex', adjSize);
	style = stlyeNames(style);
</script>

<div {...$$restProps} class={klass} {style}>
	<slot />
</div>
