import { projects } from '$lib/data/project.svelte';
import { RiadDetails } from '$lib/data/user'; // <-- make sure this exists!
import type { Project } from '$lib/types/project';
import { trackEvent } from '$lib/utils/analytics';

export class Terminal {
	tabMatches: string[] = [];
	tabIndex = 0;

	currentPath: string[] = [];
	input = '';
	cursorPos = 0; // added so handleTabCompletion works
	helpLines = [
		'$ ls -- list projects/subprojects',
		'$ cd [name] -- navigate into a project',
		'$ cd .. -- go up one directory',
		'$ whoami -- show user description',
		'$ neofetch -- show current project details',
		'$ contact [--email|--linkedin|--github] -- show contact info',
		'$ git [pull|push] -- show github link or open github page',
		'$ clear | cls -- clear terminal',
		'$ help -- show this list'
	];
	history: { cmd: string; output: string | string[]; type?: string }[] = [
		{ cmd: 'help', output: this.helpLines }
	];

	/** Get the directory object for the current path */
	getCurrentDir(): Project {
		let dir: Project = {
			name: 'root',
			description: '',
			tech: [],
			link: '',
			modified: '',
			icon: 'Folder',
			state: 'ONGOING',
			type: 'App',
			subProjects: projects
		};

		for (const part of this.currentPath) {
			const found = dir.subProjects?.find((p) => p.name === part) ?? null;
			if (!found) return dir;
			dir = found as Project;
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

		if (
			this.tabMatches.length === 0 ||
			!this.tabMatches.some((m) => m.toLowerCase().startsWith(partial.toLowerCase()))
		) {
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

	getCommandType(base: string) {
		if (base === 'contact') return 'contact';
		if (base === 'whoami') return 'info';
		if (base === 'neofetch') return 'info';
		if (base === 'git') return 'info';
		return 'other';
	}

	/** Execute a command and update history */
	runCommand(cmd: string) {
		const args = cmd.match(/"[^"]+"|\S+/g)?.map((a) => a.replace(/"/g, '')) ?? [];
		const base = args[0];

		trackEvent('terminal_command', {
			command: cmd,
			type: this.getCommandType(base) ?? 'wrong'
		});

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
					this.history.push({ cmd, output: RiadDetails.linkedin });
				} else if (args[1] === '--github') {
					this.history.push({ cmd, output: RiadDetails.github });
				} else {
					this.history.push({ cmd, output: 'Available flags: --email, --linkedin' });
				}
				break;
			}

			case 'git': {
				if (args[1] === 'pull') {
					this.history.push({ cmd, output: RiadDetails.github });
				} else if (args[1] === 'push') {
					window.open(RiadDetails.github, '_blank');
				} else {
					this.history.push({ cmd, output: 'Available flags: pull, push' });
				}
				break;
			}

			case 'neofetch': {
				const dir = this.getCurrentDir();
				const ascii = [
					'   .--.   ',
					'  |o_o |  ',
					'  |:_/ |  ',
					' //   \\ \\ ',
					'(|     | )',
					"/'\\_   _/`\\",
					'\\___)=(___/'
				];

				const ferris = [
					'     _~^~^~_    ',
					' \\) /  o o  \\ (/ ',
					"   '_   ¬   _'   ",
					"   \\ '-----' /   "
				];

				if (dir.name !== 'root') {
					const lines: string[] = [...ascii];
					lines.push(`\nProject: ${dir.name}`);
					if (dir.description) lines.push(`Description: ${dir.description}`);
					if (dir.tech) lines.push(`Tech: ${dir.tech.join(', ')}`);
					this.history.push({ cmd, output: lines, type: 'neofetch' });
				} else {
					const lines: string[] = [...ferris];
					lines.push(`\nName: ${RiadDetails.name}`);
					lines.push(
						`About: ${RiadDetails.description.slice(0, 30)}${RiadDetails.description.length > 30 ? '...' : ''}`
					);
					lines.push(`GitHub: ${RiadDetails.github}`);
					lines.push(`LinkedIn: ${RiadDetails.linkedin}`);
					lines.push(`Email: ${RiadDetails.email}`);
					this.history.push({ cmd, output: lines, type: 'neofetch' });
				}

				break;
			}

			case 'help': {
				this.history.push({ cmd, output: this.helpLines });
				break;
			}

			case 'clear':
			case 'cls':
				this.history = [];
				break;

			default:
				this.history.push({ cmd, output: `command not found: ${cmd}` });
		}
	}

	private formatPath(): string {
		return this.currentPath.length ? `/${this.currentPath.join('/')}` : '~';
	}
}
