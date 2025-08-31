import { projects } from "$lib/data/project.svelte";
import { RiadDetails } from "$lib/data/user"; // <-- make sure this exists!

export class Terminal {
    tabMatches: string[] = [];
    tabIndex = 0;

    currentPath: string[] = [];
    input = '';
    cursorPos = 0; // added so handleTabCompletion works
    history: { cmd: string; output: string | string[]; type?: string }[] = [];

    /** Get the directory object for the current path */
    getCurrentDir(): any {
        let dir: any = { subProjects: projects };
        for (const part of this.currentPath) {
            const found = dir.subProjects?.find((p: any) => p.name === part) ?? null;
            if (!found) return dir;
            dir = found;
        }
        return dir;
    }

    /** Pretty tree printer */
    printTree(projects: any[], depth = 0): string[] {
        const lines: string[] = [];
        for (const p of projects) {
            const prefix = ' '.repeat(depth * 2) + (depth ? '└── ' : '');
            lines.push(prefix + p.name);
            if (p.subProjects) {
                lines.push(...this.printTree(p.subProjects, depth + 1));
            }
        }
        return lines;
    }

    /** Tab completion for `cd` */
    handleTabCompletion() {
        const parts = this.input.trim().split(/\s+/);

        if (parts[0] !== 'cd') return;

        let partial = parts[1]?.replace(/^"|"$/g, '') ?? '';

        let candidates: string[] = [];
        if (this.currentPath.length === 0) {
            candidates = projects.map((p: any) => p.name);
        } else {
            const dir = this.getCurrentDir();
            if (dir?.subProjects) {
                candidates = dir.subProjects.map((p: any) => p.name);
            }
        }
        if (candidates.length === 0) return;

        if (this.tabMatches.length === 0) {
            this.tabMatches = candidates.filter((name) =>
                name.toLowerCase().startsWith(partial.toLowerCase())
            );
            this.tabIndex = 0;
        } else {
            this.tabIndex = (this.tabIndex + 1) % this.tabMatches.length;
        }

        if (this.tabMatches.length > 0) {
            const match = `"${this.tabMatches[this.tabIndex]}"`;
            this.input = `cd ${match}`;
            this.cursorPos = this.input.length;
        }
    }

    /** Execute a command and update history */
    runCommand(cmd: string) {
        const args = cmd.match(/"[^"]+"|\S+/g)?.map((a) => a.replace(/"/g, '')) ?? [];
        const base = args[0];

        switch (base) {
            case 'ls': {
                const dir = this.getCurrentDir();
                let lines: string[] = [];
                if (dir.subProjects) {
                    lines = this.printTree(dir.subProjects);
                } else {
                    lines.push(`Project: ${dir.name}`);
                    if (dir.description) lines.push(`Description: ${dir.description}`);
                    if (dir.tech) lines.push(`Tech: ${dir.tech.join(', ')}`);
                }
                this.history.push({ cmd, output: lines });
                break;
            }

            case 'cd': {
                if (!args[1]) {
                    this.currentPath = [];
                    this.history.push({ cmd, output: 'Returned to root (~)' });
                } else if (args[1] === '..') {
                    this.currentPath = this.currentPath.slice(0, -1);
                    this.history.push({ cmd, output: `Moved to ${this.formatPath()}` });
                } else {
                    const dir = this.getCurrentDir();
                    const target = dir.subProjects?.find((p: any) => p.name === args[1]);
                    if (target) {
                        this.currentPath.push(args[1]);

                        const ascii = [
                            '   .--.   ',
                            '  |o_o |  ',
                            '  |:_/ |  ',
                            ' //   \\ \\ ',
                            '(|     | )',
                            "/'\\_   _/`\\",
                            '\\___)=(___/'
                        ];

                        const lines: string[] = [];
                        lines.push(...ascii);
                        lines.push(`\nProject: ${target.name}`);
                        if (target.description) lines.push(`Description: ${target.description}`);
                        if (target.tech) lines.push(`Tech: ${target.tech.join(', ')}`);

                        this.history.push({ cmd, output: lines, type: 'neofetch' });
                    } else {
                        this.history.push({ cmd, output: `no such directory: ${args[1]}` });
                    }
                }
                break;
            }

            case 'whoami': {
                this.history.push({ cmd, output: RiadDetails.description, type: 'whoami' });
                break;
            }

            case 'contact': {
                if (args[1] === '--email') {
                    this.history.push({ cmd, output: RiadDetails.email });
                } else if (args[1] === '--linkedin') {
                    this.history.push({ cmd, output: 'https://www.linkedin.com' });
                } else {
                    this.history.push({ cmd, output: 'Available flags: --email, --linkedin' });
                }
                break;
            }

            case 'neofetch': {
                const dir = this.getCurrentDir();
                if (dir) {
                    const ascii = [
                        '   .--.   ',
                        '  |o_o |  ',
                        '  |:_/ |  ',
                        ' //   \\ \\ ',
                        '(|     | )',
                        "/'\\_   _/`\\",
                        '\\___)=(___/'
                    ];

                    const lines: string[] = [...ascii];
                    lines.push(`\nProject: ${dir.name}`);
                    if (dir.description) lines.push(`Description: ${dir.description}`);
                    if (dir.tech) lines.push(`Tech: ${dir.tech.join(', ')}`);
                    this.history.push({ cmd, output: lines, type: 'neofetch' });
                } else {
                    this.history.push({ cmd, output: 'No project chosen :(', type: 'neofetch' });
                }
                break;
            }

            case 'help': {
                const helpLines = [
                    '$ ls — list projects/subprojects',
                    '$ cd [name] — navigate into a project',
                    '$ cd .. — go up one directory',
                    '$ whoami — show user description',
                    '$ neofetch — show current project details',
                    '$ contact [--email|--linkedin] — show contact info',
                    '$ clear — clear terminal',
                    '$ help — show this list'
                ];
                this.history.push({ cmd, output: helpLines });
                break;
            }

            case 'clear': {
                this.history = [];
                break;
            }

            default:
                this.history.push({ cmd, output: `command not found: ${cmd}` });
        }
    }

    private formatPath(): string {
        return this.currentPath.length ? `/${this.currentPath.join('/')}` : '~';
    }
}
