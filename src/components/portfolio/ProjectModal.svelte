<script>
	import { XIcon, ArrowSquareOutIcon } from 'phosphor-svelte';
	import Badge from './Badge.svelte';

	export let project = null;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	let selectedPreviewIdx = null
	$: logo = project?.logo?.src ?? project?.logo;
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

{#if project}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		on:click|self={close}
	>
		<!-- Backdrop -->
		<div
			class="absolute inset-0 bg-black/40 backdrop-blur-md"
			on:click={close}
			role="presentation"
		></div>

		<!-- Modal Card -->
		<div
			class="relative z-10 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl border border-orange-200/60 bg-white shadow-[0_24px_48px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:border-orange-800/50 dark:bg-stone-900 dark:shadow-[0_24px_48px_rgba(0,0,0,0.6)] md:max-w-1/2"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<!-- Fixed Header (Close button + Logo + Title) -->
			<div class="relative shrink-0 border-b border-orange-100/60 p-6 pb-4 dark:border-stone-800/80">
				<!-- Close button -->
				<button
					class="absolute right-4 top-4 grid size-8 place-items-center rounded-full cursor-pointer border border-orange-200/60 bg-orange-50/80 text-orange-500 transition-all duration-150 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-orange-400 dark:border-orange-800/50 dark:bg-stone-800 dark:text-orange-300 dark:hover:bg-stone-700"
					on:click={close}
					aria-label="Close modal"
				>
					<XIcon size={16} weight="bold" />
				</button>

				<!-- Logo + Title -->
				<div class="flex items-center gap-4 pr-8">
					<span class="grid size-14 flex-shrink-0 place-items-center">
						<img src={logo} alt={project.title} width="44" height="44" />
					</span>
					<div class="flex w-full flex-col gap-1">
						<h2 id="modal-title" class="text-lg font-black text-zinc-900 dark:text-orange-50">{project.title}</h2>
						<p id="modal-subtitle" class="text-sm text-zinc-500 dark:text-orange-50">{project.subtitle}</p>
					</div>
				</div>
			</div>

			<!-- Scrollable Content -->
			<div class="flex-1 overflow-y-auto p-6 pt-4">
				<!-- Description -->
				<p class="text-sm leading-relaxed text-zinc-600 dark:text-orange-100/70">
					{project.fullDescription}
				</p>

				<ul class="mt-4 flex flex-wrap gap-2" aria-label="Core skills">
					{#each project?.techs ?? [] as tech}
						<li><Badge>{tech}</Badge></li>
					{/each}
				</ul>

				<ul class="mt-4 flex flex-wrap gap-2" aria-label="Core skills">
					{#each project?.previews ?? [] as preview, idx}
						<div 
							on:click={() => selectedPreviewIdx = idx}
							class="flex w-fit cursor-pointer items-center justify-center rounded-xl border border-orange-100 bg-stone-100/50 p-2 dark:border-orange-900/30 dark:bg-stone-800/40" 
						>
							<img 
								src={preview?.src} 
								alt={project.title} 
								class="max-h-[6vh] w-auto max-w-full rounded-lg object-contain shadow-sm"
							/>
						</div>
					{/each}
				</ul>

				{#if selectedPreviewIdx !== null}
					<div class="mt-4 flex w-full items-center justify-center rounded-xl border border-orange-100 bg-stone-100/50 p-2 dark:border-orange-900/30 dark:bg-stone-800/40">
						<img 
							src={project?.previews[selectedPreviewIdx]?.src} 
							alt={project.title} 
							class="max-h-[50vh] w-auto max-w-full rounded-lg object-contain shadow-sm"
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes modal-in {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(8px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	[role='dialog'] {
		animation: modal-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
</style>
