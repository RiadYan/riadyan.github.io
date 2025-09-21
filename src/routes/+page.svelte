<script lang="ts">
	import ProjectList from '$lib/components/features/ProjectList.svelte';
	import MainContainer from '$lib/components/layout/MainContainer.svelte';
	import {
		currentView,
		loadProjectsWithNewData,
		projects,
		select,
		selected,
		showPreview
	} from '$lib/data/project.svelte';
	import type { Project, SubProject } from '$lib/types/project';
	import { onMount } from 'svelte';
	let new_projects: Project[] = $state([]);

	onMount(async () => {
		new_projects = await loadProjectsWithNewData();
		new_projects.sort((a: Project, b: Project) => a.name.localeCompare(b.name));
	});
</script>

<MainContainer>
	<ProjectList projects={new_projects} currentView={$currentView} {select} />
</MainContainer>
