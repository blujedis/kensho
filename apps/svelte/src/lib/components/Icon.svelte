<script lang="ts">
	import { classNames, stlyeNames } from '$lib/utils/helpers';
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

	const SIZE = {
		xs: 'h-full w-4',
		sm: 'h-full w-6',
		md: 'h-full w-12',
		lg: 'h-full w-20',
		xl: 'h-full w-28',
		'2xl': 'h-full w-36',
		'3xl': 'h-full w-44',
		'4xl': 'h-full w-52',
		'5xl': 'h-full w-60',
		'6xl': 'h-full w-72',
		full: 'h-full w-full'
	};

	const isStyle = ['#', 'rgb', 'hsl'].some((v) => color.startsWith(v));
	let klass = isStyle ? '' : color;
	let style = !isStyle ? '' : `color: ${color};`;
	let adjSize = SIZE[size];
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
