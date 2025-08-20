<script lang="ts">
	import type { Project } from '../../../../types/project';

	let { project } = $props<{ project: Project }>();
	let current = $state(0);
</script>

{#if project.screenshots?.length}
	<div class="relative h-64 w-full overflow-hidden rounded-lg border border-gray-700">
		<img src={project.screenshots[current]} alt="Screenshot" class="h-full w-full object-cover" />

		<!-- Controls -->
		{#if project.screenshots.length > 1}
			<button
				class="absolute top-1/2 left-2 -translate-y-1/2 rounded bg-background/70 p-1 hover:bg-gray-700"
				onclick={() =>
					(current = (current - 1 + project.screenshots.length) % project.screenshots.length)}
				>←</button
			>

			<button
				class="absolute top-1/2 right-2 -translate-y-1/2 rounded bg-background/70 p-1 hover:bg-gray-700"
				onclick={() => (current = (current + 1) % project.screenshots.length)}>→</button
			>
		{/if}
	</div>
{/if}
