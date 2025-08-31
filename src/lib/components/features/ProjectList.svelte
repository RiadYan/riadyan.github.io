<script lang="ts">
	import type { Project } from '../../types/project';
	import {
		Folder,
		File,
		Code,
		Cpu,
		Database,
		Globe,
		Server,
		Package,
		BookOpen,
		Lock,
		Cog
	} from '@lucide/svelte';

	let { projects, currentView, select } = $props<{
		projects: Project[];
		currentView: 'grid' | 'list';
		select: (item: any) => void;
	}>();
</script>

{#if currentView === 'grid'}
	<div class="flex-1 overflow-y-auto p-4 sm:p-6">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
			{#each projects as project}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="group relative cursor-pointer overflow-hidden rounded-xl border border-info/80 bg-info-hover/60 p-5 transition-all hover:border-info hover:bg-info-hover/80"
					onclick={() => select(project)}
				>
					<!-- Hover Gradient -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-info-hover to-end-gradient opacity-0 transition-opacity group-hover:opacity-25"
					></div>

					<div class="relative z-10 flex flex-col items-start space-y-2">
						<!-- Icon -->
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-info-hover p-2 text-info/80"
						>
							{#if project.icon === 'Folder'}
								<Folder size={24} />
							{:else if project.icon === 'Globe'}
								<Globe size={24} />
							{:else if project.icon === 'Cpu'}
								<Cpu size={24} />
							{:else if project.icon === 'BookOpen'}
								<BookOpen size={24} />
							{:else if project.icon === 'Lock'}
								<Lock size={24} />
							{:else if project.icon === 'Cog'}
								<Cog size={24} />
							{/if}
						</div>

						<!-- Name -->
						<div class="line-clamp-1 text-sm font-semibold text-info/90 sm:text-base">
							{project.name}
						</div>

						<!-- Type -->
						<div class="text-xs text-text-muted uppercase sm:text-sm">{project.type}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{:else}
	<div class="flex-1 overflow-y-auto">
		<table class="w-full">
			<thead class="sticky top-0 bg-background/80 backdrop-blur-sm">
				<tr class=" border-b border-info-hover text-left text-xs text-text-muted">
					<th class="p-4 font-medium">NAME</th>
					<th class="p-4 font-medium">TYPE</th>
					<th class="p-4 font-medium">TECH</th>
					<th class="p-4 text-right font-medium">MODIFIED</th>
				</tr>
			</thead>
			<tbody>
				{#each projects as project}
					<tr
						class="border-b border-info-hover transition-colors hover:bg-info/5"
						onclick={() => select(project)}
					>
						<td class="px-4 py-2 font-medium text-info/90">
							<div class="flex items-center space-x-2">
								<div class="flex h-4 w-4 flex-shrink-0 items-center justify-center">
									{#if project.icon === 'Folder'}
										<Folder size={16} class="text-info/80" />
									{:else if project.icon === 'Globe'}
										<Globe size={16} class="text-info/80" />
									{:else if project.icon === 'Cpu'}
										<Cpu size={16} class="text-info/80" />
									{:else if project.icon === 'BookOpen'}
										<BookOpen size={16} class="text-info/80" />
									{:else if project.icon === 'Lock'}
										<Lock size={16} class="text-info/80" />
									{:else if project.icon === 'Cog'}
										<Cog size={16} class="text-info/80" />
									{/if}
								</div>
								<span class="line-clamp-1 text-sm">{project.name}</span>
							</div>
						</td>

						<td class="p-4 font-mono text-xs text-text-muted">{project.type.toUpperCase()}</td>

						<td class="p-2">
							<div class="flex flex-wrap gap-1">
								{#if project.tech.length === 1}
									<span class="rounded-sm bg-info-hover px-1 py-1 text-xs text-info/80"
										>{project.tech[0]}</span
									>
								{:else if project.tech.length === 2}
									{#each project.tech as t}
										<span class="rounded-sm bg-info-hover px-1 py-1 text-xs text-info/80">{t}</span>
									{/each}
								{:else if project.tech.length > 2}
									<span class="rounded-sm bg-info-hover px-1 py-1 text-xs text-info/80"
										>{project.tech[0]}</span
									>
									<span class="rounded-sm bg-info-hover px-1 py-1 text-xs text-info/80">...</span>
								{/if}
							</div>
						</td>

						<td class="p-4 text-right text-xs text-text-muted">{project.modified}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
