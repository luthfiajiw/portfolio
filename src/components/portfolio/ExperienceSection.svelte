<script>
	import { BriefcaseIcon } from 'phosphor-svelte';
	import Badge from './Badge.svelte';
	import SectionHeading from './SectionHeading.svelte';

	export let experiences = [];

	const cardClass =
		'rounded-lg border border-orange-200/80 bg-white/65 shadow-[0_2px_4px_rgba(249,115,22,0.08)] backdrop-blur-xl dark:border-orange-900/60 dark:bg-stone-900/75 dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]';
</script>

<section class={`${cardClass} min-h-[29.5rem] p-4 sm:p-6`} aria-labelledby="experience-title">
	<header class="mb-6 flex items-center">
		<SectionHeading id="experience-title" icon={BriefcaseIcon} title="Experience" />
	</header>

	<div class="md:max-h-[24rem] md:overflow-y-auto pr-2">
		<ol class="relative grid gap-7 pl-7 before:absolute before:bottom-2 before:left-[0.45rem] before:top-2 before:w-px before:bg-orange-300 dark:before:bg-orange-800">
			{#each experiences as experience}
				<li class="relative">
					<span class="absolute -left-7 top-1 size-4 rounded-full bg-orange-600 shadow-[0_0_0_3px_hsl(30_100%_94%)] dark:shadow-[0_0_10px_rgba(249,115,22,0.5)]" aria-hidden="true"></span>
					<article>
						<p class="text-sm font-extrabold text-orange-800 dark:text-orange-200">
							<time datetime={experience.start}>{experience.period.split(' - ')[0]}</time>
							{' - '}
							{#if experience.end}
								<time datetime={experience.end}>{experience.period.split(' - ')[1]}</time>
							{:else}
								Present
							{/if}
						</p>
						<h3 class="mt-3 text-base font-black">{experience.title}</h3>
						<p class="mt-2 text-sm font-semibold text-zinc-500 dark:text-orange-100/70">{experience.company}</p>
						<ul class="mt-3 grid gap-2 text-xs font-medium leading-5 text-zinc-700 dark:text-orange-100/75">
							{#each experience.achievements as achievement}
								<li class="pl-4">{achievement}</li>
							{/each}
						</ul>
						<ul class="mt-3 flex flex-wrap gap-2" aria-label={`${experience.title} technologies`}>
							{#each experience.technologies as technology}
								<li><Badge size="mini">{technology}</Badge></li>
							{/each}
						</ul>
					</article>
				</li>
			{/each}
		</ol>
	</div>
</section>
