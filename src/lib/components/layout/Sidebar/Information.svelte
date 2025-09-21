<script lang="ts">
	import { ChevronRight, GitGraph, Mail } from '@lucide/svelte';
	import { showInfo } from '$lib/stores/sidebar';
</script>

<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase">
	<span>INFORMATION</span>

	<button
		onclick={() => showInfo.update((v) => !v)}
		class="flex w-full flex-row justify-end rounded p-1"
	>
		<ChevronRight
			size={14}
			class={`text-info/80 transition-transform ${$showInfo ? 'rotate-90' : ''}`}
		/>
	</button>
</div>

{#if $showInfo}
	<div class="space-y-0.5 px-2 py-1">
		<a
			href="/techCenter"
			class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"
		>
			<GitGraph size={14} class="mr-2 text-info/80" />
			<span class="text-text-muted">Tech Center</span>
		</a>
		<a
			href="/contact"
			class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"
		>
			<Mail size={14} class="mr-2 text-info/80" />
			<span class="text-text-muted">Contact</span>
		</a>
	</div>
{/if}
