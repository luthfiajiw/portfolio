<script>
	export let size = 'default';

	const sizes = {
		default:
			'inline-flex min-h-6 items-center rounded-full border border-orange-300/80 bg-white/35 px-3 text-xs font-bold leading-none text-orange-950/80 dark:border-orange-800/70 dark:bg-orange-950/70 dark:text-orange-100',
		mini:
			'inline-flex min-h-5 items-center rounded-full border border-orange-200/80 bg-white/45 px-2 text-[0.68rem] font-bold leading-none text-orange-950/75 dark:border-orange-800/70 dark:bg-orange-950/70 dark:text-orange-100'
	};
</script>

<span class={sizes[size] ?? sizes.default}>
	<slot />
</span>
