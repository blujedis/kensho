<script lang="ts">
	import hjs from 'highlight.js';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import yaml from 'highlight.js/lib/languages/yaml';
	import shell from 'highlight.js/lib/languages/shell';
	import markdown from 'highlight.js/lib/languages/markdown';
	import 'highlight.js/styles/github-dark-dimmed.css';

	hjs.registerLanguage('javascript', javascript);
	hjs.registerLanguage('typescript', typescript);
	hjs.registerLanguage('yaml', yaml);
	hjs.registerLanguage('shell', shell);

	const REGISTERED = {
		javascript,
		typescript,
		yaml,
		shell,
		markdown,
		js: javascript,
		ts: typescript,
		sh: shell
	};

	import { onMount } from 'svelte';

	export let language = 'typescript' as keyof typeof REGISTERED;
	export let code = '';
	export let height = '300' as string | number;

	const maxHeight = !['%', 'px', 'em', 'rem'].includes(height + '') ? height + 'px' : height;

	const lang = `language-${language}`;
	onMount(() => {
		hjs.initHighlighting();
		const node = document.querySelectorAll('pre code');
		for (let i = 0; i < node.length; i++) {
			node[i].innerHTML = node[i].innerHTML.replace('\n', '').trim();
		}
	});
</script>

<pre {...$$restProps}><code class={lang} style={`max-height: ${maxHeight};`}>
	{#if $$slots.default}
			<slot />
		{:else}
			{code}
		{/if}
</code></pre>
