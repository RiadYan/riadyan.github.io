<script lang="ts">
	import type { TechOrTool } from '$lib/types/galaxy';

	export let item: TechOrTool | null = null;
	export let onClose: () => void;
</script>

{#if item}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
			<button class="absolute top-3 right-3 text-gray-500 hover:text-black" on:click={onClose}
				>✕</button
			>
			<div class="flex items-center space-x-4">
				{#if item.icon}
					<img src={item.icon} alt={item.name} class="h-12 w-12" />
				{/if}
				<h2 class="text-xl font-bold">{item.name}</h2>
			</div>
			<p class="mt-2 text-gray-700">{item.description}</p>
			<p class="mt-2 text-sm text-gray-500">Usage: {item.percentage}%</p>
			{#if item.link}
				<a href={item.link} target="_blank" class="mt-3 inline-block text-blue-600 underline"
					>Learn More</a
				>
			{/if}
		</div>
	</div>
{/if}
