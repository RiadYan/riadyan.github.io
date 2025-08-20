<script lang="ts">
	import {
		Folder,
		File,
		Grid2x2,
		List,
		ExternalLink,
		Search,
		ChevronRight,
		GitBranch,
		Github,
		Terminal,
		Settings,
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
	import type { Project, SubProject } from '../types/project';
	import ProjectCard from '$lib/components/features/ProjectCard.svelte';
	import Sidebar from '$lib/components/layout/Sidebar/Sidebar.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import PreviewPane from '$lib/components/layout/PreviewPane/PreviewPane.svelte';

	let projects: Project[] = $state([
		{
			name: 'Torbox SDK',
			type: 'SDK',
			icon: 'Cog',
			description: 'Collection of Rust crates for Torbox integration',
			tech: ['Rust', 'WASM'],
			link: 'https://github.com/RiadYan/torbox-rs',
			modified: '2025-08-19',
			expanded: false,
			subProjects: [
				{
					name: 'torbox-core-rs',
					description: 'Core functionality',
					tech: ['Rust', 'Typescript'],
					link: 'https://github.com/RiadYan/torbox-rs',
					modified: '2025-08-15',
					icon: 'Code'
				},
				{
					name: 'torbox-user-rs',
					description: 'User management and authentication',
					tech: ['Rust', 'Typescript'],
					link: 'https://github.com/RiadYan/torbox-rs',
					modified: '2025-07-22',
					icon: 'Lock'
				},
				{
					name: 'torbox-general-rs',
					description: 'Interaction with the Torbox servers',
					tech: ['Rust', 'Typescript'],
					link: 'https://github.com/RiadYan/torbox-rs',
					modified: '2025-06-18',
					icon: 'Database'
				}
			]
		},
		{
			name: 'Siv Vault',
			type: 'App',
			icon: 'BookOpen',
			description: 'Secure book reading application with plugin system',
			tech: ['Rust', 'Tauri', 'Svelte', 'SQLite'],
			link: '#',
			modified: '[REDACTED]',
			expanded: false,
			subProjects: [
				{
					name: 'siv-core',
					description: 'Core application logic',
					tech: ['Rust', 'WASM'],
					link: '#',
					modified: '[REDACTED]',
					icon: 'Code'
				},
				{
					name: 'siv-ui',
					description: 'User interface components',
					tech: ['Svelte', 'Typescript'],
					link: '#',
					modified: '[REDACTED]',
					icon: 'Package'
				}
			]
		},
		{
			name: 'Portfolio Website',
			type: 'Website',
			icon: 'Globe',
			description: "This website you're on right now",
			tech: ['Svelte', 'Tailwind', 'Rust', 'Axum'],
			link: '#',
			modified: '2025-03-12'
		}
	]);

	let selected: Project | SubProject | null = $state(null);
	let currentView: 'grid' | 'list' = $state('list');

	function toggleExpand(project: Project) {
		project.expanded = !project.expanded;
		projects = projects;
	}

	let showPreview = $state(true);

	function changeCurrentView(newView: 'grid' | 'list') {
		currentView = newView;
	}

	function closePreview() {
		showPreview = false;
	}

	// when selecting something, also open the preview
	function select(item: Project | SubProject) {
		selected = item;
		showPreview = true;
	}
</script>

<div
	class="min-h-screen w-full overflow-auto bg-background"
	style="background-image: radial-gradient(circle at center, var(--color-text-5) 1px, transparent 1px); background-size: 24px 24px;"
>
	<div class="mx-auto flex min-h-screen w-full flex-col font-mono md:flex-row">
		<div class="z-60 flex w-full md:hidden">
			<Navbar {currentView} {changeCurrentView} {projects} {select} />
		</div>
		<Sidebar {projects} {select} />

		<div class="flex w-full flex-1 overflow-auto">
			<div
				class={`flex flex-1 flex-col transition-all duration-300 ${selected && showPreview ? 'md:pr-4' : ''}`}
			>
				<div class="z-60 hidden w-full md:flex">
					<Navbar {currentView} {changeCurrentView} {projects} {select} />
				</div>
				<ProjectCard {projects} {currentView} {select} />
			</div>

			{#if selected && showPreview}
				<div class="hidden w-96 transition-all duration-300 md:flex md:flex-none">
					<PreviewPane {selected} {closePreview} />
				</div>
			{/if}
		</div>

		{#if selected && showPreview}
			<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:hidden">
				<div class="w-full max-w-md">
					<PreviewPane {selected} {closePreview} />
				</div>
			</div>
		{/if}
	</div>
</div>
