import type { Project, SubProject } from '$lib/types/project';
import { fetchCrateModified, fetchLastCommitDate } from '$lib/utils/fetch';
import { formatDate } from '$lib/utils/format';
import { writable } from 'svelte/store';

export const showPreview = writable<boolean>(true);
export const selected = writable<Project | SubProject | null>(null);
export const currentView = writable<'grid' | 'list'>('list');

const CACHE_KEY = 'projects_cache';
const CACHE_TTL = 1000 * 60 * 60 * 24;

export function select(item: Project | SubProject) {
	selected.set(item);
	showPreview.set(true);
}

export function changeCurrentView(newView: 'grid' | 'list') {
	currentView.set(newView);
}

export function closePreview() {
	showPreview.set(false);
}

export let projects: Project[] = $state([
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
		],
		state: 'ALPHA'
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
		],
		state: 'ONGOING'
	},
	{
		name: 'Portfolio Website',
		type: 'Website',
		icon: 'Globe',
		description: "The website you're on right now",
		tech: ['Svelte', 'Tailwind', 'Rust', 'Axum'],
		link: '#',
		modified: '2025-03-12',
		state: 'PUBLISHED'
	},
	{
		name: 'PROJECT - [REDACTED]',
		type: 'App',
		icon: 'BookOpen',
		expanded: false,
		description:
			'Anonymous app using P2P, DDL, scraping and other methods to satisfy the users need, more than 40k + users.',
		tech: ['Rust', 'Tauri', 'SolidJS', 'Typescript', 'Tailwind'],
		link: 'REDACTED',
		modified: '[REDACTED]',
		state: 'PUBLISHED'
	},
	{
		name: 'tauri-helper',
		type: 'Crate',
		icon: 'Cog',
		description:
			'Rust utility crate for Tauri apps to automate command collection, generation, and registration, reducing boilerplate and improving maintainability.',
		tech: ['Rust', 'Tauri'],
		link: 'https://crates.io/crates/tauri-helper',
		modified: '2025-08-23',
		subProjects: [
			{
				name: 'tauri_helper_macros',
				description:
					'Macro-based system to collect #[tauri::command] and #[auto_collect_command] functions automatically.',
				tech: ['Rust', 'Tauri'],
				link: 'https://crates.io/crates/tauri_helper_macros',
				modified: '2025-08-23',
				icon: 'Code'
			},
			{
				name: 'tauri_helper_core',
				description: 'The core functions of the tauri_helper crate.',
				tech: ['Rust', 'Tauri'],
				link: 'https://crates.io/crates/tauri_helper_core',
				modified: '2025-08-23',
				icon: 'Code'
			}
		],
		state: 'PUBLISHED'
	}
]);

export async function loadProjectsWithNewData(): Promise<Project[]> {
	const cached = localStorage.getItem(CACHE_KEY);
	if (cached) {
		const { timestamp, data } = JSON.parse(cached) as {
			timestamp: number;
			data: Project[];
		};

		if (Date.now() - timestamp < CACHE_TTL) {
			return data;
		}
	}

	async function updateModified<T extends { link?: string; modified: string }>(
		item: T
	): Promise<T> {
		let modified = item.modified;

		if (modified !== '[REDACTED]') {
			if (item.link?.includes('github.com')) {
				const repo = item.link.replace('https://github.com/', '');
				modified = await fetchLastCommitDate(repo);
			}

			if (item.link?.includes('crates.io')) {
				const crate = item.link.split('/').pop()!;
				modified = await fetchCrateModified(crate);
			}

			modified = formatDate(modified);
		}

		return {
			...item,
			modified
		};
	}

	const updated = await Promise.all(
		projects.map(async (project) => {
			const updatedProject = await updateModified(project);

			if (project.subProjects) {
				const updatedSubs = await Promise.all(
					project.subProjects.map((sub) => updateModified(sub))
				);

				return {
					...updatedProject,
					subProjects: updatedSubs
				};
			}

			return updatedProject;
		})
	);

	localStorage.setItem(
		CACHE_KEY,
		JSON.stringify({
			timestamp: Date.now(),
			data: updated
		})
	);

	return updated;
}
