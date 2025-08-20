<script lang="ts">
	import { goto } from '$app/navigation';
	import { Folder, Globe, Cpu, BookOpen, Lock, Cog, ChevronRight } from '@lucide/svelte';
	import type { Project } from '../../../../types/project';
	import { page } from '$app/state';
	let { projects, select } = $props<{
		projects: Project[];
		select: (item: Project) => void;
	}>();

	function toggleExpand(project: Project) {
		project.expanded = !project.expanded;
		projects = [...projects];
	}

	function openProject(project: Project) {
		if (page.url.pathname !== '/') {
			goto('/');
		} else {
			select(project);
		}
	}
</script>

<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase">
	<ChevronRight size={14} class="mr-1" />
	<span>WORKSPACE</span>
</div>

<div class="space-y-0.5 px-2 py-1">
	{#each projects as project}
		<div class="group">
			<div class="flex items-stretch">
				<button
					class=" flex flex-1 items-center rounded-l px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"
					onclick={() => openProject(project)}
				>
					{#if project.icon === 'Folder'}<Folder size={14} class="mr-2 text-info/80" />
					{:else if project.icon === 'Globe'}<Globe size={14} class="mr-2 text-info/80" />
					{:else if project.icon === 'Cpu'}<Cpu size={14} class="mr-2 text-info/80" />
					{:else if project.icon === 'BookOpen'}<BookOpen size={14} class="mr-2 text-info/80" />
					{:else if project.icon === 'Lock'}<Lock size={14} class="mr-2 text-info/80" />
					{:else if project.icon === 'Cog'}<Cog size={14} class="mr-2 text-info/80" />{/if}
					<span class="text-text-muted">{project.name}</span>
				</button>

				{#if project.subProjects}
					<button
						class="flex items-center rounded-r px-4 py-1 hover:bg-info-hover"
						onclick={() => toggleExpand(project)}
					>
						<ChevronRight
							size={14}
							class={`ml-auto text-info/80 transition-transform ${project.expanded ? 'rotate-90' : ''}`}
						/>
					</button>
				{/if}
			</div>

			{#if project.expanded && project.subProjects}
				<div class="ml-4 border-l-2 border-info-hover pl-3">
					{#each project.subProjects as subProject, i}
						<div class="relative flex items-center">
							{#if i > 0}<div class="absolute top-0 left-0 h-4 w-px bg-info-hover"></div>{/if}
							<div class="h-px w-3 bg-info-hover"></div>
							<button
								class="flex w-full flex-1 flex-row items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"
								onclick={() => openProject(subProject)}
							>
								<span class="text-text-muted">{subProject.name}</span>
							</button>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
