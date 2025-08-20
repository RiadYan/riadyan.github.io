<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Moon, Sun } from '@lucide/svelte';

	let current: string;
	$theme; // auto-subscribe

	function toggle() {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	}
</script>

<button
	on:click={toggle}
	class="rounded-lg border border-info/30 p-2 text-info transition-all hover:bg-info-hover"
	aria-label="Toggle theme"
>
	{#if $theme === 'dark'}
		<Sun size={16} />
	{:else}
		<Moon size={16} />
	{/if}
</button>
