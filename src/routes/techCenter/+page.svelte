<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { SimulationNodeDatum } from 'd3';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar/Sidebar.svelte';
	import PreviewPane from '$lib/components/layout/PreviewPane/PreviewPane.svelte';
	import type { Project, SubProject } from '../../lib/types/project';
	import { select } from '$lib/data/project.svelte';
	import MainContainer from '$lib/components/layout/MainContainer.svelte';

	// Extend D3 node type
	type Bubble = SimulationNodeDatum & {
		name: string;
		percentage: number;
		color: string;
	};

	let width = 800;
	let height = 500;

	let bubbles = $state<Bubble[]>([
		{ name: 'Rust', percentage: 90, color: 'var(--color-danger)' },
		{ name: 'Svelte', percentage: 75, color: 'var(--color-warning)' },
		{ name: 'SQLite', percentage: 45, color: 'var(--color-success)' },
		{ name: 'Typescript', percentage: 70, color: 'var(--color-info)' },
		{ name: 'Tauri', percentage: 65, color: 'var(--color-primary)' }
	]);

	// Initialize links based on the current state of bubbles
	let links: { source: Bubble; target: Bubble }[] = $state([]);

	// Function to update links
	function updateLinks() {
		const sortedBubbles = [...bubbles].sort((a, b) => b.percentage - a.percentage);
		links = sortedBubbles
			.map((source, i, arr) => (i < arr.length - 1 ? { source, target: arr[i + 1] } : null))
			.filter(Boolean) as { source: Bubble; target: Bubble }[];
	}

	// Call updateLinks to initialize links
	updateLinks();

	let simulation: d3.Simulation<Bubble, undefined>;

	onMount(() => {
		const svg = d3.select<SVGSVGElement, unknown>('svg');

		// Drag behavior
		const drag = d3
			.drag<SVGGElement, Bubble>()
			.on('start', (event, d) => {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				d.fx = d.x;
				d.fy = d.y;
			})
			.on('drag', (event, d) => {
				d.fx = event.x;
				d.fy = event.y;
			})
			.on('end', (event, d) => {
				if (!event.active) simulation.alphaTarget(0);
				d.fx = null;
				d.fy = null;
			});

		simulation = d3
			.forceSimulation<Bubble>(bubbles)
			.force('charge', d3.forceManyBody().strength(-30))
			.force('center', d3.forceCenter(width / 2, height / 2))
			.force(
				'collision',
				d3.forceCollide<Bubble>().radius((d) => d.percentage + 10)
			)
			.force(
				'link',
				d3
					.forceLink<Bubble, any>(links)
					.id((d) => (d as Bubble).name)
					.distance(
						(d) => ((d.source as Bubble).percentage + (d.target as Bubble).percentage) / 2 + 50
					)
			)
			.on('tick', () => {
				// Trigger Svelte reactivity to move the g elements
				bubbles = [...bubbles];
			});

		// Apply drag to <g> elements after they exist
		svg.selectAll<SVGGElement, Bubble>('g').call(drag as any);
	});
</script>

<MainContainer>
	<div class="flex h-full w-full flex-col items-center justify-center space-y-6">
		<svg {width} {height} class="z-60">
			{#each links as link (link.source.name + link.target.name)}
				<line
					x1={link.source.x}
					y1={link.source.y}
					x2={link.target.x}
					y2={link.target.y}
					stroke="var(--color-text-muted)"
					stroke-width="1.5"
					opacity="0.5"
				/>
			{/each}

			{#each bubbles as bubble (bubble.name)}
				<g transform={`translate(${bubble.x},${bubble.y})`} class="cursor-grab">
					<circle
						r={bubble.percentage}
						fill="var(--color-surface)"
						stroke={bubble.color}
						stroke-width="2"
					/>
					<circle
						r={bubble.percentage}
						fill={bubble.color}
						clip-path={`inset(${100 - bubble.percentage}% 0 0 0 round ${bubble.percentage}px)`}
						opacity="0.6"
					/>
					<text
						text-anchor="middle"
						dy=".3em"
						font-size="12"
						fill="var(--color-text)"
						class="pointer-events-none select-none"
					>
						{bubble.name}
					</text>
				</g>
			{/each}
		</svg>
	</div>
</MainContainer>

<style>
	svg {
		user-select: none;
	}
	g:active {
		cursor: grabbing;
	}
</style>
