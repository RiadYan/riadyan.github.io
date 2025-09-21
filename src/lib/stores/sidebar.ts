import { writable } from 'svelte/store';

export const showWorkspace = writable(false);
export const showInfo = writable(false);

export const expandedProjects = writable<Record<string, boolean>>({});
