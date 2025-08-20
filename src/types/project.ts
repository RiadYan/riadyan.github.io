export type ProjectType = 'API' | 'Website' | 'App' | 'SDK' | 'Library' | 'CLI';
export type ProjectTech =
    | 'Rust'
    | 'Tauri'
    | 'Typescript'
    | 'Svelte'
    | 'SQLite'
    | 'DuckDB'
    | 'Axum'
    | 'WASM'
    | 'Tailwind';

export interface SubProject {
    name: string;
    description: string;
    tech: ProjectTech[];
    link: string;
    modified: string;
    icon: 'File' | 'Code' | 'Database' | 'Server' | 'Lock' | 'Package';
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
}
