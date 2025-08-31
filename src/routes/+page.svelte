<script lang="ts">
	import ProjectList from '$lib/components/features/ProjectList.svelte';
	import MainContainer from '$lib/components/layout/MainContainer.svelte';
	import { currentView, projects, select, selected, showPreview } from '$lib/data/project.svelte';
	import type { Project, SubProject } from '$lib/types/project';

	let my_proj: Project[] = projects.sort((a: Project, b: Project) => a.name.localeCompare(b.name));
</script>

<MainContainer>
	<ProjectList projects={my_proj} currentView={$currentView} {select} />
</MainContainer>
