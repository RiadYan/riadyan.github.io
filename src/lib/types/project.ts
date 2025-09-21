export type ProjectType = 'API' | 'Website' | 'App' | 'SDK' | 'Library' | 'CLI' | 'Crate';
export type ProjectState =
	| 'ALPHA' // Early version.
	| 'BETA' // Public testing, not fully stable
	| 'PUBLISHED' // Released, stable, publicly available
	| 'ONGOING' // Actively developed, features being added
	| 'PLANNED'; // Concept or design stage, not yet started

export type ProjectTech =
	| 'Rust'
	| 'Tauri'
	| 'Typescript'
	| 'Svelte'
	| 'SQLite'
	| 'DuckDB'
	| 'Axum'
	| 'WASM'
	| 'Tailwind'
	| 'SolidJS';

export type Icon =
	| 'Lock'
	| 'Cog'
	| 'Folder'
	| 'Globe'
	| 'Cpu'
	| 'BookOpen'
	| 'File'
	| 'Code'
	| 'Database'
	| 'Server'
	| 'Package';

interface ProjectBase {
	name: string;
	description: string;
	tech: ProjectTech[];
	link: string;
	modified: string;
	icon: Icon;
}

export interface SubProject extends ProjectBase {}

export interface Project extends ProjectBase {
	type: ProjectType;
	state: ProjectState;
	subProjects?: SubProject[];
	expanded?: boolean;
}
