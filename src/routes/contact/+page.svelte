<script lang="ts">
	import Dock from '$lib/components/features/Dock/Dock.svelte';
	import Terminal from '$lib/components/features/Terminal/Terminal.svelte';
	import MainContainer from '$lib/components/layout/MainContainer.svelte';
</script>

<MainContainer>
	<div class="no-scrollbar flex h-full flex-col justify-between">
		<Terminal />

		<Dock />
	</div>
</MainContainer>
