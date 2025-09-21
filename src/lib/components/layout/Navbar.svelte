<script lang="ts">
	import { Grid2x2, List, Search } from '@lucide/svelte';
	import type { Project } from '../../types/project';
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { page } from '$app/state';

	let { currentView, changeCurrentView, projects, select } = $props<{
		currentView: 'grid' | 'list';
		changeCurrentView: (newView: 'grid' | 'list') => void;
		projects: Project[];
		select: (item: Project) => void;
	}>();

	let searchTerm = $state('');
	let activeIndex = $state(0);
	let inputEl: HTMLInputElement;

	function getFilteredProjects() {
		if (!searchTerm) return [];
		return projects.filter((project: Project) =>
			project.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	function handleKeydown(e: KeyboardEvent) {
		const results = getFilteredProjects();
		if (results.length === 0) return;

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			activeIndex = (activeIndex + 1) % results.length;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			activeIndex = (activeIndex - 1 + results.length) % results.length;
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const selected = results[activeIndex];
			if (selected) {
				select(selected);
				searchTerm = '';
				activeIndex = 0;
			}
		}
	}

	// Ctrl+K global listener
	function handleGlobalShortcut(e: KeyboardEvent) {
		if (e.ctrlKey && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			inputEl?.focus();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleGlobalShortcut);
		return () => {
			window.removeEventListener('keydown', handleGlobalShortcut);
		};
	});
</script>

<div
	class="flex h-12 w-full items-center justify-center border-b border-info-hover bg-background/70 px-4 backdrop-blur-lg md:justify-end"
>
	<div class="relative w-72">
		<div class="relative">
			<Search size={16} class="absolute top-1/2 left-3 -translate-y-1/2 text-text-muted" />
			<input
				bind:this={inputEl}
				type="text"
				bind:value={searchTerm}
				placeholder="Search projects..."
				onkeydown={handleKeydown}
				class="w-full rounded border border-info/30 bg-background/50 py-1.5 pr-12 pl-9 text-sm text-text-disabled focus:ring-1 focus:ring-info/50 focus:outline-none"
			/>
			<span
				class="absolute top-1/2 right-2 hidden -translate-y-1/2 rounded border border-gray-700 bg-background/70 px-1.5 py-0.5 text-[10px] text-text-muted md:flex"
			>
				Ctrl + K
			</span>
		</div>

		{#if searchTerm && getFilteredProjects().length > 0}
			<ul
				class="absolute top-full left-0 z-50 mt-1 max-h-64 w-full overflow-auto rounded border border-info/30 bg-background/95 shadow-lg"
			>
				{#each getFilteredProjects() as project, i}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<li
						class={`cursor-pointer px-3 py-1 text-sm ${
							i === activeIndex ? 'bg-info/20 text-info' : 'text-text-disabled hover:bg-info/10'
						}`}
						onclick={() => {
							searchTerm = '';
							select(project);
							activeIndex = 0;
						}}
					>
						{project.name}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
