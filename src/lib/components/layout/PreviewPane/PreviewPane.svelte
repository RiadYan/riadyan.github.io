<script lang="ts">
	import {
		Folder,
		Globe,
		Cpu,
		BookOpen,
		Lock,
		Cog,
		File,
		Code,
		Database,
		Server,
		Package,
		ExternalLink,
		ChevronRight,
		XIcon,
		DoorClosedLocked,
		Vault
	} from '@lucide/svelte';
	import type { Project, SubProject } from '../../../types/project';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { fade, slide } from 'svelte/transition';

	let { selected, closePreview } = $props<{
		selected: Project | SubProject | null;
		closePreview: () => void;
	}>();

	// Track which subprojects are expanded
	let expandedSubprojects: string[] = $state([]);

	function toggleSubproject(subprojectName: string) {
		if (expandedSubprojects.includes(subprojectName)) {
			expandedSubprojects = expandedSubprojects.filter((name) => name !== subprojectName);
		} else {
			expandedSubprojects = [...expandedSubprojects, subprojectName];
		}
	}

	function handleGlobalShortcut(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			closePreview();
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('keydown', handleGlobalShortcut);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keydown', handleGlobalShortcut);
		}
	});
</script>

<div
	class="relative flex w-92 flex-col rounded-md border border-info-hover bg-background/80 p-6 backdrop-blur-lg md:w-full md:rounded-none md:border-l"
>
	<button
		class="absolute top-4 right-4 rounded-full p-1 text-text-muted hover:bg-background hover:text-text-disabled"
		onclick={closePreview}
		aria-label="close preview"
	>
		<XIcon size={16} />
	</button>
	{#if selected}
		<div class="mb-6 flex items-center">
			<div class="mr-4 h-12 w-12 rounded bg-info-hover p-3 text-info/80">
				{#if 'subProjects' in selected}
					{#if selected.icon === 'Folder'}<Folder size={24} />
					{:else if selected.icon === 'Globe'}<Globe size={24} />
					{:else if selected.icon === 'Cpu'}<Cpu size={24} />
					{:else if selected.icon === 'BookOpen'}<BookOpen size={24} />
					{:else if selected.icon === 'Lock'}<Lock size={24} />
					{:else if selected.icon === 'Cog'}<Cog size={24} />
					{/if}
				{:else if selected.icon === 'File'}<File size={24} />
				{:else if selected.icon === 'Code'}<Code size={24} />
				{:else if selected.icon === 'Lock'}<Lock size={24} />
				{:else if selected.icon === 'Globe'}<Globe size={24} />
				{:else if selected.icon === 'Database'}<Database size={24} />
				{:else if selected.icon === 'Server'}<Server size={24} />
				{:else if selected.icon === 'Package'}<Package size={24} />
				{/if}
			</div>
			<div>
				<h2 class="text-xl font-bold text-info/90">{selected.name}</h2>
				<div class="text-xs text-text-muted">
					{#if 'subProjects' in selected}
						PROJECT • {selected.type.toUpperCase()} • Modified: {selected.modified}
					{:else}
						MODULE • Modified: {selected.modified}
					{/if}
				</div>
			</div>
		</div>

		<div class="mb-6">
			<h3 class="mb-2 text-sm font-semibold text-text-muted">DESCRIPTION</h3>
			<p class="text-sm text-text-muted">{selected.description}</p>
		</div>

		{#if 'subProjects' in selected && selected.subProjects && selected.subProjects.length > 0}
			<div class="mb-6">
				<h3 class="mb-3 text-sm font-semibold text-text-muted">SUBPROJECTS</h3>
				<div class="space-y-2">
					{#each selected.subProjects as subproject}
						<button
							class="w-full rounded-lg border border-info/20 bg-background/40 p-3 transition-all duration-150 hover:border-info/40"
							onclick={() => toggleSubproject(subproject.name)}
						>
							<div
								class="flex w-full items-center justify-between rounded text-left transition-all duration-150"
							>
								<div class="flex items-center px-2 py-1">
									{#if subproject.icon === 'File'}<File size={16} class="mr-3 text-info/70" />
									{:else if subproject.icon === 'Code'}<Code size={16} class="mr-3 text-info/70" />
									{:else if subproject.icon === 'Database'}<Database
											size={16}
											class="mr-3 text-info/70"
										/>
									{:else if subproject.icon === 'Server'}<Server
											size={16}
											class="mr-3 text-info/70"
										/>
									{:else if subproject.icon === 'Package'}<Package
											size={16}
											class="mr-3 text-info/70"
										/>
									{:else if subproject.icon === 'Lock'}<Lock size={16} class="mr-3 text-info/70" />
									{/if}

									<span class="text-sm font-medium text-info/90">{subproject.name}</span>
								</div>

								<ChevronRight
									size={14}
									class={`text-info/60 transition-transform ${expandedSubprojects.includes(subproject.name) ? 'rotate-90' : ''}`}
								/>
							</div>

							{#if expandedSubprojects.includes(subproject.name)}
								<div class="mt-3 space-y-2 border-t border-info/10 pt-3 text-start">
									<p class="text-xs text-text-muted">{subproject.description}</p>
									<div class="flex flex-wrap gap-1">
										{#each subproject.tech as tech}
											<span class="rounded bg-info/10 px-2 py-1 text-xs text-info/70">{tech}</span>
										{/each}
									</div>
									<div class="flex items-center justify-between pt-2">
										<span class="text-xs text-text-muted">Modified: {subproject.modified}</span>

										{#if selected.state === 'ONGOING'}
											<div
												class="flex items-center rounded bg-info/20 px-2 py-1 text-xs text-info/80 transition-colors"
												aria-disabled="true"
											>
												<DoorClosedLocked size={12} class="mr-1" />
												ONGOING
											</div>
										{:else}
											<a
												href={subproject.link}
												class="flex items-center rounded bg-info/20 px-2 py-1 text-xs text-info/80 transition-colors hover:bg-info/30"
											>
												<ExternalLink size={12} class="mr-1" />
												Open
											</a>
										{/if}
									</div>
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		{/if}

		{#if selected.tech}
			<div class="mb-6">
				<h3 class="mb-2 text-sm font-semibold text-text-muted">TECHNOLOGIES</h3>
				<div class="flex flex-wrap gap-2">
					{#each selected.tech as t}
						<span
							class="rounded-lg border border-info/30 bg-background/60 px-3 py-1 text-xs text-info/90"
							>{t}</span
						>
					{/each}
				</div>
			</div>
		{/if}

		{#if selected.link === 'REDACTED'}
			<a
				href={selected.link}
				class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition hover:opacity-90"
			>
				<ExternalLink size={16} class="mr-2" />
				OPEN {#if 'subProjects' in selected}PROJECT{:else}MODULE{/if}
			</a>
		{:else if selected.state === 'ONGOING'}
			<a
				aria-disabled="true"
				class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition"
			>
				<DoorClosedLocked size={16} class="mr-2" />
				ONGOING {#if 'subProjects' in selected}PROJECT{:else}MODULE{/if}
			</a>
		{:else}
			<a
				href={selected.link}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-auto flex items-center justify-center rounded-lg bg-info/80 bg-gradient-to-r px-4 py-2 text-center font-medium text-gray-200 transition hover:opacity-90"
			>
				<ExternalLink size={16} class="mr-2" />
				OPEN {#if 'subProjects' in selected}PROJECT{:else}MODULE{/if}
			</a>
		{/if}
	{/if}
</div>
