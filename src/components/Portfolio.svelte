<script>
	import AcademicSection from './portfolio/AcademicSection.svelte';
	import ExperienceSection from './portfolio/ExperienceSection.svelte';
	import HeroHeader from './portfolio/HeroHeader.svelte';
	import ProfileSummary from './portfolio/ProfileSummary.svelte';
	import ProjectsSection from './portfolio/ProjectsSection.svelte';
	import StackSection from './portfolio/StackSection.svelte';
	import ThemeToggle from './portfolio/ThemeToggle.svelte';
	import { academicItems, experiences, profile, projects, stack } from './portfolio/content.js';

	let dimMode = false;
</script>

<svelte:head>
	<meta
		name="description"
		content="Alex River is a full stack orchestrator building scalable React ecosystems, cloud architecture, and human-centered digital products."
	/>
</svelte:head>

<main
	class:dark={dimMode}
	class="min-h-screen bg-[radial-gradient(circle_at_82%_12%,hsl(252_54%_91%_/_0.68),transparent_28rem),linear-gradient(180deg,hsl(300_23%_97%),hsl(270_28%_95%)_54%,hsl(255_21%_96%))] px-4 py-12 text-zinc-950 transition-colors duration-200 dark:bg-[radial-gradient(circle_at_80%_8%,hsl(24_85%_50%_/_0.12),transparent_30rem),linear-gradient(180deg,hsl(20_20%_7%),hsl(24_15%_9%))] dark:text-orange-50 sm:px-6 lg:px-8"
>
	<ThemeToggle active={dimMode} onToggle={() => (dimMode = !dimMode)} />

	<HeroHeader {profile} />

	<section class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-[1.12fr_1.12fr_1.08fr]" aria-label="Portfolio highlights">
		<ProfileSummary {profile} />
		<AcademicSection items={academicItems} />
		<ExperienceSection {experiences} />
		<ProjectsSection {projects} />
		<StackSection {stack} />
	</section>
</main>
