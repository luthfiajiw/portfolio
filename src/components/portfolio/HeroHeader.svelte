<script>
	import {
		ArrowSquareOutIcon,
		GithubLogoIcon,
		LinkedinLogoIcon,
		SparkleIcon
	} from 'phosphor-svelte';

	export let profile;
</script>

<header class="mx-auto grid w-full max-w-7xl items-end gap-6 pb-8 pt-2 md:grid-cols-[1fr_auto]" aria-labelledby="portfolio-title">
	<div>
		<p class="mb-4 inline-flex items-center gap-2 text-base font-bold text-orange-900/80 dark:text-orange-200">
			<SparkleIcon size={20} weight="duotone" aria-hidden="true" />
			{profile.role}
		</p>
		<h1 id="portfolio-title" class="text-[2.6rem] font-black leading-none tracking-normal sm:text-[3.15rem] lg:text-[4.25rem]">
			{profile.firstName} <span class="text-orange-900 dark:text-orange-300">{profile.lastName}</span>
		</h1>
		<p class="mt-4 max-w-2xl text-base font-medium leading-7 text-zinc-600 dark:text-orange-100/75 sm:text-lg lg:text-xl">
			{profile.intro}
		</p>
	</div>

	<nav class="flex flex-wrap items-center gap-3 md:justify-end" aria-label="Contact and social links">
		<a
			class="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 font-extrabold text-white shadow-[0_4px_8px_rgba(234,88,12,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-400 sm:w-auto"
			href={profile.resume}
		>
			<ArrowSquareOutIcon size={22} weight="duotone" aria-hidden="true" />
			Open Resume
		</a>
		<a
			class="grid h-14 min-w-20 flex-1 place-items-center rounded-lg border border-orange-200 bg-orange-100/90 text-orange-900/80 transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-400 dark:border-orange-900/60 dark:bg-stone-900/80 dark:text-orange-100 hover:dark:border-orange-600/60 sm:size-14 sm:min-w-0 sm:flex-none"
			href={profile.github}
			aria-label="GitHub profile"
		>
			<GithubLogoIcon size={22} weight="duotone" aria-hidden="true" />
		</a>
		<a
			class="grid h-14 min-w-20 flex-1 place-items-center rounded-lg border border-orange-200 bg-orange-100/90 text-orange-900/80 transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-400 dark:border-orange-900/60 dark:bg-stone-900/80 dark:text-orange-100 hover:dark:border-orange-600/60 sm:size-14 sm:min-w-0 sm:flex-none"
			href={profile.linkedin}
			aria-label="LinkedIn profile"
		>
			<LinkedinLogoIcon size={22} weight="duotone" aria-hidden="true" />
		</a>
	</nav>
</header>
