<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar/Sidebar.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import PreviewPane from '$lib/components/layout/PreviewPane/PreviewPane.svelte';
	import type { Project, SubProject } from '../../types/project';
	import type { Snippet } from 'svelte';
	import {
		changeCurrentView,
		closePreview,
		currentView,
		projects,
		select,
		selected,
		showPreview
	} from '$lib/data/project.svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<div
	class="min-h-screen w-full overflow-auto bg-background"
	style="background-image: radial-gradient(circle at center, var(--color-text-5) 1px, transparent 1px); background-size: 24px 24px;"
>
	<div class="mx-auto flex min-h-screen w-full flex-col font-mono md:flex-row">
		<div class="z-60 flex w-full md:hidden">
			<Navbar currentView={$currentView} {changeCurrentView} {projects} {select} />
		</div>
		<Sidebar {projects} {select} />

		<div class="flex w-full flex-1 overflow-auto">
			<div class={`flex flex-1 flex-col transition-all duration-300 `}>
				<div class="z-60 hidden w-full md:flex">
					<Navbar currentView={$currentView} {changeCurrentView} {projects} {select} />
				</div>
				{@render children()}
			</div>

			{#if $selected && $showPreview}
				<div class="hidden w-96 transition-all duration-300 md:flex md:flex-none">
					<PreviewPane selected={$selected} {closePreview} />
				</div>
			{/if}
		</div>

		{#if $selected && $showPreview}
			<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:hidden">
				<div class="w-full max-w-md">
					<PreviewPane selected={$selected} {closePreview} />
				</div>
			</div>
		{/if}
	</div>
</div>
