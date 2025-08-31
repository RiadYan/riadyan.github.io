export type ProjectType = 'API' | 'Website' | 'App' | 'SDK' | 'Library' | 'CLI' | 'Crate';
export type ProjectState =
    | 'ALPHA'        // Early version.
    | 'BETA'         // Public testing, not fully stable
    | 'PUBLISHED'    // Released, stable, publicly available
    | 'ONGOING'      // Actively developed, features being added
    | 'PLANNED';     // Concept or design stage, not yet started

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

export interface SubProject {
    name: string;
    description: string;
    tech: ProjectTech[];
    link: string;
    modified: string;
    icon: 'File' | 'Code' | 'Database' | 'Server' | 'Lock' | 'Package' | 'Cog';
}

export interface Project {
    name: string;
    type: ProjectType;
    description: string;
    tech: ProjectTech[];
    link: string;
    modified: string;
    icon: 'Folder' | 'Globe' | 'Cpu' | 'BookOpen' | 'Lock' | 'Cog';
    subProjects?: SubProject[];
    expanded?: boolean;
    state: ProjectState
}
