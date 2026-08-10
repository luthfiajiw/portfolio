<script>
	import { SquaresFourIcon } from 'phosphor-svelte';
	import SectionHeading from './SectionHeading.svelte';
	import ProjectModal from './ProjectModal.svelte';

	export let projects = [];

	const cardClass =
		'rounded-lg border border-orange-200/80 bg-white/65 shadow-[0_2px_4px_rgba(249,115,22,0.08)] backdrop-blur-xl dark:border-orange-900/60 dark:bg-stone-900/75 dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]';

	let selectedProject = null;
</script>

<section class={`${cardClass} min-h-[18.8rem] p-4 sm:p-5 lg:col-span-1`} aria-labelledby="featured-projects-title">
	<header class="mb-6">
		<SectionHeading id="featured-projects-title" icon={SquaresFourIcon} title="Featured Projects" />
	</header>

	<div class="md:max-h-[24rem] md:overflow-y-auto pr-2">
		<ul class="relative grid gap-4" id="projects-list">
			{#each projects as project}
				{@const ProjectLogo = project.logo?.src ?? project.logo}
				<li>
					<article>
						<button
							class={`w-full text-left grid min-h-17 grid-cols-[3.1rem_minmax(0,1fr)] items-center gap-3 rounded-lg border border-orange-100/80 bg-white/60 p-3 shadow-[0_2px_4px_rgba(0,0,0,0.05)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-400 dark:border-orange-900/60 dark:bg-stone-900/90 dark:shadow-[0_2px_4px_rgba(0,0,0,0.4)] hover:dark:border-orange-600/60 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)] hover:border-orange-300/80 cursor-pointer`}
							on:click={() => (selectedProject = project)}
							aria-label={`Open ${project.title} details`}
						>
							<span class="grid size-12 place-items-center rounded-lg" aria-hidden="true">
								<img src={ProjectLogo} alt={project.title} width="44" height="44" aria-hidden="true" />
							</span>
							<span class="min-w-0 text-zinc-950 dark:text-orange-50">
								<strong class="block truncate text-base font-black">{project.title}</strong>
								<span class="mt-1 block truncate text-xs font-semibold text-zinc-500 dark:text-orange-100/70">{project.description}</span>
							</span>
						</button>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

<ProjectModal project={selectedProject} on:close={() => (selectedProject = null)} />
