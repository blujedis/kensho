<script lang="ts">
	export let checked = false;
</script>

<button
	type="button"
	class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-12 cursor-pointer focus:outline-none"
	role="switch"
	aria-checked={checked}
	on:click
>
	<span class="sr-only">Change Mode</span>
	<span aria-hidden="true" class="pointer-events-none absolute  w-full h-full rounded-md" />
	<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
	<span
		aria-hidden="true"
		class="{!checked
			? 'bg-gray-200'
			: 'bg-indigo-600'} pointer-events-none absolute h-4 w-10 mx-auto rounded-full transition-colors ease-in-out duration-200"
	/>
	<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
	<span
		aria-hidden="true"
		class="{!checked
			? 'translate-x-0'
			: 'translate-x-5 ml-1'} pointer-events-none absolute left-0 inline-block h-6 w-6 border border-[3px] border-gray-300/50 dark:border-gray-400/60 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200 "
	/>
</button>
