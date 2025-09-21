<script lang="ts">
	import type { Project } from '../../../types/project';
	import ThemeToggle from '../ThemeToggle.svelte';
	import Information from './Information.svelte';
	import Workspace from './Workspace.svelte';

	let { projects, select } = $props<{
		projects: Project[];
		select: (item: any) => void;
	}>();
</script>

<div
	class="flex w-full flex-col border-r border-info-hover bg-background/80 p-0 backdrop-blur-lg md:w-64"
>
	<div class="flex flex-row items-center justify-between border-b border-info-hover p-4">
		<h1 class="text-lg font-bold tracking-wider text-info/90">RIAD EXPLORER</h1>

		<ThemeToggle />
	</div>

	<div class="flex-1 overflow-y-auto">
		<div class="divide-y divide-info-hover">
			<div class="py-2">
				<Workspace {projects} {select} />
			</div>
			<div class="border-b-1 border-info-hover py-2">
				<Information />
			</div>
		</div>
	</div>
</div>
