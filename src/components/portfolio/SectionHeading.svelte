<script>
	export let icon;
	export let title;
	export let id = undefined;
	export let as = 'h2';

	$: HeadingIcon = icon;
</script>

<svelte:element this={as} {id} class="inline-flex items-center gap-2 text-xl font-black">
	{#if HeadingIcon}
		<HeadingIcon size={24} weight="duotone" aria-hidden="true" />
	{/if}
	{title}
</svelte:element>
