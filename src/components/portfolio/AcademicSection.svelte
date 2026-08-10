<script>
	import { GraduationCapIcon } from 'phosphor-svelte';
	import Badge from './Badge.svelte';
	import SectionHeading from './SectionHeading.svelte';

	export let items = [];

	const cardClass =
		'rounded-lg border border-orange-200/80 bg-white/65 shadow-[0_2px_4px_rgba(249,115,22,0.08)] backdrop-blur-xl dark:border-orange-900/60 dark:bg-stone-900/75 dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]';
</script>

<section class={`${cardClass} p-4 sm:p-6`} aria-labelledby="academic-title">
	<header class="mb-6 flex items-center">
		<SectionHeading id="academic-title" icon={GraduationCapIcon} title="Education Level" />
	</header>

	<ol class="grid gap-7">
		{#each items as item}
			{@const logo = item.logo?.src ?? item.logo}
			<li>
				<article class="grid gap-3 sm:grid-cols-[3.1rem_minmax(0,1fr)]">
					<span class="grid size-12 p-1.5 place-items-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-100" aria-hidden="true">
						<img src={logo} alt={item.title} class="w-full" aria-hidden="true" />
					</span>
					<div>
						<h3 class="text-base font-black">{item.title}</h3>
						<p class="mt-1 text-sm font-semibold leading-5 text-zinc-500 dark:text-orange-100/70">
							{item.detail} - <time datetime={item.year}>{item.year}</time>
						</p>
						<p class="text-sm font-semibold leading-5 text-zinc-500 dark:text-orange-100/70">{item.issuer}</p>
						<ul class="mt-3 flex flex-wrap gap-2" aria-label={`${item.title} topics`}>
							{#each item.topics as topic}
								<li><Badge size="mini">{topic}</Badge></li>
							{/each}
						</ul>
					</div>
				</article>
			</li>
		{/each}
	</ol>
</section>
