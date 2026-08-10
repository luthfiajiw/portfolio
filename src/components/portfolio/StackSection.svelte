<script>
	import { StackIcon } from 'phosphor-svelte';
	import SectionHeading from './SectionHeading.svelte';

	export let stack = [];
</script>

<section class="flex flex-col min-h-[29.5rem] overflow-hidden rounded-lg border border-orange-400/50 bg-[linear-gradient(180deg,hsl(34.9_100%_91.6%),hsl(32_100%_82.7%))] p-4 text-orange-950/70 shadow-[0_2px_4px_rgba(249,115,22,0.08)] backdrop-blur-xl dark:border-orange-800/60 dark:bg-[linear-gradient(180deg,hsl(20_35%_13%),hsl(24_40%_17%))] dark:text-orange-100 dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:p-6 lg:col-span-1" aria-labelledby="stack-title">
	<header class="mb-6 flex items-center gap-2">
		<SectionHeading id="stack-title" icon={StackIcon} title="Modern Stack" />
	</header>

	<ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3" aria-label="Technology stack">
		{#each stack as item}
			{@const StackImg = item.img?.src ?? item.img}
			<li class={`${item.className} grid min-h-28 place-items-center gap-2 rounded-lg border border-orange-300/40 bg-orange-400/50 shadow-[inset_0_1px_0_hsl(0_0%_100%_/_0.12)] dark:border-orange-800/50 dark:bg-stone-900/60 dark:shadow-none`}>
				<img src={StackImg} alt={item.name} width="44" height="44" aria-hidden="true" />
				<span class="text-xs font-extrabold text-orange-950/70 dark:text-orange-100/90">{item.name}</span>
			</li>
		{/each}
	</ul>

	<p class="mt-6 md:mt-auto border-t border-orange-300/40 pt-4 text-sm font-medium leading-6 text-orange-950/70 dark:border-orange-800/50 dark:text-orange-200/80">
		Constantly evolving. Currently exploring Go and Svelte.
	</p>
</section>
