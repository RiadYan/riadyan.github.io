<script lang="ts">
	import MainContainer from '$lib/components/layout/MainContainer.svelte';
	import { AlignJustify, Grid2x2, Grid2X2, Grid2X2Icon, Layers } from '@lucide/svelte';
	import { onMount } from 'svelte';

	type TechItem = {
		id: string;
		name: string;
		percentage: number;
		color: string;
		icon: string;
		description: string;
	};

	const techCategories = [
		{
			name: 'Languages & Frameworks',
			color: 'var(--color-primary)',
			items: [
				{
					id: 'rust',
					name: 'Rust',
					percentage: 45,
					color: 'var(--color-danger)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
					description: 'Systems programming'
				},
				{
					id: 'svelte',
					name: 'Svelte',
					percentage: 30,
					color: 'var(--color-warning)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
					description: 'Frontend framework'
				},
				{
					id: 'typescript',
					name: 'TypeScript',
					percentage: 40,
					color: 'var(--color-info)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
					description: 'Typed JavaScript'
				},
				{
					id: 'tauri',
					name: 'Tauri',
					percentage: 55,
					color: 'var(--color-primary)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg',
					description: 'Desktop apps'
				}
			]
		},
		{
			name: 'Databases & Tools',
			color: 'var(--color-success)',
			items: [
				{
					id: 'sqlite',
					name: 'SQLite',
					percentage: 35,
					color: 'var(--color-success)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
					description: 'Embedded database'
				},
				{
					id: 'git',
					name: 'Git',
					percentage: 45,
					color: 'var(--color-info)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
					description: 'Version control'
				},
				{
					id: 'docker',
					name: 'Docker',
					percentage: 20,
					color: 'var(--color-info)',
					icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
					description: 'Containerization'
				}
			]
		}
	];

	let activeCategory = $state(0);
	let viewMode = $state<'radar' | 'cards' | 'list'>('cards');
	let hoveredItem: TechItem | null = $state(null);

	function switchCategory(index: number) {
		activeCategory = index;
	}

	function changeViewMode(mode: 'radar' | 'cards' | 'list') {
		viewMode = mode;
	}
</script>

<MainContainer>
	<div class="flex h-full w-full flex-col">
		<div
			class="flex flex-col gap-4 border-b border-info-hover p-4 sm:flex-row sm:items-center sm:justify-between"
		>
			<h1 class="text-xl font-semibold text-info/90 md:text-lg">Tech Stack & Proficiency</h1>

			<div
				class="flex h-full w-fit flex-wrap items-center justify-center gap-2 space-x-1 rounded-lg bg-info-hover p-1 md:flex-nowrap"
			>
				{#each techCategories as category, i}
					<button
						class={`w-full rounded-md px-3 py-1 text-sm font-medium transition-colors md:h-full ${activeCategory === i ? 'bg-info-hover text-info' : 'text-text-muted hover:text-info'}`}
						onclick={() => switchCategory(i)}
					>
						{category.name}
					</button>
				{/each}
			</div>

			<div class="flex justify-center space-x-2 sm:justify-end">
				<div class="flex justify-center space-x-2 sm:justify-end">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
						class={`rounded p-2 ${viewMode === 'cards' ? 'bg-info-hover text-info' : 'text-text-muted'}`}
						onclick={() => changeViewMode('cards')}
						title="Cards View"
					>
						<Grid2x2 size={18} />
					</button>

					<div class="hidden space-x-2 md:flex">
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<button
							class={`rounded p-2 ${viewMode === 'radar' ? 'bg-info-hover text-info' : 'text-text-muted'}`}
							onclick={() => changeViewMode('radar')}
							title="Radar View"
						>
							<Layers size={18} />
						</button>
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<button
							class={`rounded p-2 ${viewMode === 'list' ? 'bg-info-hover text-info' : 'text-text-muted'}`}
							onclick={() => changeViewMode('list')}
							title="List View"
						>
							<AlignJustify size={18} />
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Content area -->
		<div class="flex-1 overflow-auto p-6">
			{#if viewMode === 'radar'}
				<div class="flex h-full items-center justify-center">
					<div class="relative aspect-square w-full max-w-[400px]">
						<svg
							viewBox="0 0 500 500"
							preserveAspectRatio="xMidYMid meet"
							class="absolute inset-0 h-full w-full"
						>
							<circle
								cx="250"
								cy="250"
								r="200"
								stroke="var(--color-info-hover)"
								stroke-width="1"
								fill="none"
							/>
							<circle
								cx="250"
								cy="250"
								r="150"
								stroke="var(--color-info-hover)"
								stroke-width="1"
								fill="none"
							/>
							<circle
								cx="250"
								cy="250"
								r="100"
								stroke="var(--color-info-hover)"
								stroke-width="1"
								fill="none"
							/>
							<circle
								cx="250"
								cy="250"
								r="50"
								stroke="var(--color-info-hover)"
								stroke-width="1"
								fill="none"
							/>

							{#each techCategories[activeCategory].items as _, i}
								<line
									x1="250"
									y1="250"
									x2={250 +
										200 *
											Math.cos(
												(2 * Math.PI * i) / techCategories[activeCategory].items.length -
													Math.PI / 2
											)}
									y2={250 +
										200 *
											Math.sin(
												(2 * Math.PI * i) / techCategories[activeCategory].items.length -
													Math.PI / 2
											)}
									stroke="var(--color-info-hover)"
									stroke-width="1"
								/>
							{/each}

							{#if techCategories[activeCategory].items.length > 0}
								<polygon
									points={techCategories[activeCategory].items
										.map((item, i) => {
											const angle =
												(2 * Math.PI * i) / techCategories[activeCategory].items.length -
												Math.PI / 2;
											const radius = 50 + (item.percentage / 100) * 150;
											return `${250 + radius * Math.cos(angle)},${250 + radius * Math.sin(angle)}`;
										})
										.join(' ')}
									fill="var(--color-primary)"
									fill-opacity="0.2"
									stroke="var(--color-primary)"
									stroke-width="2"
								/>

								{#each techCategories[activeCategory].items as item, i}
									<circle
										cx={250 +
											(50 + (item.percentage / 100) * 150) *
												Math.cos(
													(2 * Math.PI * i) / techCategories[activeCategory].items.length -
														Math.PI / 2
												)}
										cy={250 +
											(50 + (item.percentage / 100) * 150) *
												Math.sin(
													(2 * Math.PI * i) / techCategories[activeCategory].items.length -
														Math.PI / 2
												)}
										r="6"
										fill={item.color}
										class="cursor-pointer"
										onmouseenter={() => (hoveredItem = item)}
										onmouseleave={() => (hoveredItem = null)}
									/>
								{/each}
							{/if}
						</svg>

						<div class="absolute inset-0 z-10">
							{#each techCategories[activeCategory].items as item, i}
								<div
									class="absolute flex flex-col items-center"
									style="
						left: calc(50% + {44 *
										Math.cos(
											(2 * Math.PI * i) / techCategories[activeCategory].items.length - Math.PI / 2
										)}%);
						top: calc(50% + {44 *
										Math.sin(
											(2 * Math.PI * i) / techCategories[activeCategory].items.length - Math.PI / 2
										)}%);
						transform: translate(-50%, -50%);
					"
								>
									<img src={item.icon} alt={item.name} class="h-8 w-8" />
									<div class="text-sm font-medium text-info/90">{item.name}</div>
									<div class="text-xs text-text-muted">{item.percentage}%</div>
								</div>
							{/each}

							<div
								class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
							>
								<div
									class="text-lg font-semibold"
									style:color={techCategories[activeCategory].color}
								>
									{techCategories[activeCategory].name}
								</div>
								{#if hoveredItem}
									<div class="mt-2 max-w-[160px] text-center text-sm text-text-muted">
										{hoveredItem.description}
									</div>
								{:else}
									<div class="mt-2 text-sm text-text-muted">Help me improve !</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{:else if viewMode === 'cards'}
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{#each techCategories[activeCategory].items as item}
						<div
							class="group relative overflow-hidden rounded-xl border border-info/20 bg-surface p-5 transition-all hover:border-info/40 hover:shadow-lg"
						>
							<div
								class="absolute inset-0 bg-gradient-to-br from-info-hover to-end-gradient opacity-0 transition-opacity group-hover:opacity-10"
							></div>

							<div class="relative z-10 flex flex-col items-center space-y-3">
								<img src={item.icon} alt={item.name} class="h-8 w-8" />

								<div class="text-center">
									<div class="text-lg font-semibold text-info/90">{item.name}</div>
									<div class="text-sm text-text-muted">{item.description}</div>
								</div>

								<div class="w-full">
									<div class="mb-1 flex justify-between text-xs text-text-muted">
										<span>Proficiency</span>
										<span>{item.percentage}%</span>
									</div>
									<div class="h-2 w-full rounded-full bg-info-hover">
										<div
											class="h-full rounded-full transition-all duration-500"
											style:width={`${item.percentage}%`}
											style:background-color={item.color}
										></div>
									</div>
								</div>

								{#if item.percentage >= 80}
									<span
										class="rounded-full bg-success px-3 py-1 text-xs font-medium text-background"
									>
										Expert
									</span>
								{:else if item.percentage >= 60}
									<span
										class="rounded-full bg-danger px-3 py-1 text-xs font-medium text-background"
									>
										Advanced
									</span>
								{:else if item.percentage >= 40}
									<span
										class="rounded-full bg-info/80 px-3 py-1 text-xs font-medium text-background"
									>
										Intermediate
									</span>
								{:else}
									<span
										class="rounded-full bg-primary px-3 py-1 text-xs font-medium text-background"
									>
										Beginner
									</span>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="overflow-hidden rounded-xl border border-info/20 bg-surface">
					<table class="w-full">
						<thead class="bg-info-hover/30">
							<tr class="text-left text-sm text-text-muted">
								<th class="p-4 font-medium">Technology</th>
								<th class="p-4 font-medium">Proficiency</th>
								<th class="p-4 font-medium">Level</th>
								<th class="p-4 font-medium">Description</th>
							</tr>
						</thead>
						<tbody>
							{#each techCategories[activeCategory].items as item}
								<tr class="border-t border-info-hover transition-colors hover:bg-info/5">
									<td class=" px-4 py-3">
										<div class="flex items-center gap-2">
											<img src={item.icon} alt={item.name} class="h-8 w-8" />

											<div class="font-medium text-info/90">{item.name}</div>
										</div>
									</td>
									<td class="px-4 py-3">
										<div class="flex items-center">
											<div class="mr-3 h-2 w-32 rounded-full bg-info-hover">
												<div
													class="h-full rounded-full"
													style:width={`${item.percentage}%`}
													style:background-color={item.color}
												></div>
											</div>
											<div class="text-sm font-medium" style:color={item.color}>
												{item.percentage}%
											</div>
										</div>
									</td>
									<td class="px-4 py-3">
										{#if item.percentage >= 80}
											<span
												class="rounded-full bg-success px-3 py-1 text-xs font-medium text-background"
											>
												Expert
											</span>
										{:else if item.percentage >= 60}
											<span
												class="rounded-full bg-danger px-3 py-1 text-xs font-medium text-background"
											>
												Advanced
											</span>
										{:else if item.percentage >= 40}
											<span
												class="rounded-full bg-info/80 px-3 py-1 text-xs font-medium text-background"
											>
												Intermediate
											</span>
										{:else}
											<span
												class="rounded-full bg-primary px-3 py-1 text-xs font-medium text-background"
											>
												Beginner
											</span>
										{/if}
									</td>
									<td class="px-4 py-3 text-sm text-text-muted">
										{item.description}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</div>
</MainContainer>

<style>
	.radar-point {
		transition: all 0.3s ease;
	}

	.radar-point:hover {
		transform: scale(1.2);
	}
</style>
