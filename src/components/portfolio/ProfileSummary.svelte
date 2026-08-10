<script>
	import { CodeIcon, MapPinIcon, UserCircleIcon } from 'phosphor-svelte';
	import Badge from './Badge.svelte';

	import profilePic from "../../assets/profilepic.jpeg";

	export let profile;
</script>

<article class="rounded-lg border border-orange-200/80 bg-[linear-gradient(135deg,hsl(34.9_100%_91.6%),hsl(32_100%_82.7%))] p-4 shadow-[0_2px_4px_rgba(249,115,22,0.08)] backdrop-blur-xl dark:border-orange-800/60 dark:bg-[linear-gradient(135deg,hsl(20_35%_13%),hsl(24_40%_17%))] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:p-6 lg:col-span-2">
	<div class="flex h-full flex-col justify-between gap-8">
		<div class="grid items-start gap-4 sm:grid-cols-[4rem_1fr_auto]">
			<div class="grid size-20 place-items-center overflow-hidden rounded-full border border-orange-300 bg-white/60 text-orange-800 shadow-[inset_0_1px_0_hsl(0_0%_100%_/_0.62)] dark:border-orange-700 dark:bg-orange-950/35 dark:text-orange-100">
				<img 
					src={profilePic.src ?? profilePic}
					alt={`${profile.firstName} ${profile.lastName}`}
					class="size-16 rounded-full object-cover"
				/>
			</div>

			<address class="grid gap-1 text-left font-bold not-italic text-orange-950/70 dark:text-orange-100 sm:text-right">
				<span class="text-sm text-orange-950/55 dark:text-orange-200/80">Based in</span>
				<strong class="inline-flex items-center gap-1 text-lg sm:justify-end">
					<MapPinIcon size={18} weight="duotone" aria-hidden="true" />
					{profile.location}
				</strong>
			</address>
		</div>

		<section aria-labelledby="profile-summary-title">
			<h2 id="profile-summary-title" class="text-2xl font-black leading-tight text-orange-950/80 dark:text-orange-100 sm:text-3xl">
				{profile.summary}
			</h2>
			<ul class="mt-4 flex flex-wrap gap-2" aria-label="Core skills">
				{#each profile.skills as skill}
					<li><Badge>{skill}</Badge></li>
				{/each}
			</ul>
		</section>
	</div>
</article>
