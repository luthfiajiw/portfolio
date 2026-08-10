<script>
	import { MoonStarsIcon } from 'phosphor-svelte';

	export let active = false;
	export let onToggle = () => {};
</script>

<button
	class="fixed right-4 top-4 z-20 grid size-8 md:size-12 cursor-pointer place-items-center rounded-lg bg-orange-600 text-white shadow-[0_4px_8px_rgba(234,88,12,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-400 sm:right-6 sm:top-6"
	type="button"
	aria-label={active ? 'Use light display mode' : 'Use dim display mode'}
	aria-pressed={active}
	onclick={onToggle}
>
	<MoonStarsIcon size={22} weight="duotone" aria-hidden="true" />
</button>
