<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate, onMount } from 'svelte';
	import { RiadDetails } from '$lib/data/user';
	import { Terminal } from './terminal';

	const terminal = new Terminal();

	let input = '';
	let bottomRef: HTMLDivElement;
	let containerRef: HTMLDivElement;

	function updateCursor(e: Event) {
		const target = e.target as HTMLInputElement;
		terminal.cursorPos = target.selectionStart ?? 0;
	}

	let cmdHistory: string[] = [];
	let historyIndex = cmdHistory.length;

	function resetTabCompletion() {
		terminal.tabMatches = [];
		terminal.tabIndex = 0;
	}

	function handleEnter() {
		cmdHistory.push(input);
		terminal.runCommand(input);
		input = '';
		terminal.cursorPos = 0;
		historyIndex = cmdHistory.length;
	}

	function handleTab() {
		terminal.input = input;
		terminal.handleTabCompletion();
		input = terminal.input;
	}

	function navigateHistory(direction: 1 | -1) {
		if (cmdHistory.length === 0) return;

		if (direction === -1) {
			// ArrowUp
			historyIndex = Math.max(0, historyIndex - 1);
		} else {
			// ArrowDown
			historyIndex = Math.min(cmdHistory.length, historyIndex + 1);
		}

		input = historyIndex === cmdHistory.length ? '' : cmdHistory[historyIndex];
	}

	function handleKeydown(e: KeyboardEvent) {
		updateCursor(e);

		if (e.ctrlKey && e.key.toLowerCase() === 'l') {
			e.preventDefault();
			terminal.history = [];
			return;
		}

		if (e.key.length === 1 || e.key === 'Backspace') {
			resetTabCompletion();
		}

		switch (e.key) {
			case 'Enter':
				handleEnter();
				break;
			case 'Tab':
				e.preventDefault();
				handleTab();
				break;
			case 'ArrowUp':
				e.preventDefault();
				navigateHistory(-1);
				break;
			case 'ArrowDown':
				e.preventDefault();
				navigateHistory(1);
				break;
		}
	}

	onMount(() => {
		bottomRef?.scrollIntoView({ behavior: 'smooth' });
	});

	let prevHistoryLength = 0;

	afterUpdate(() => {
		if (terminal.history.length > prevHistoryLength) {
			bottomRef?.scrollIntoView({ behavior: 'smooth' });
		}
		prevHistoryLength = terminal.history.length;
	});
</script>

<div
	class="no-scrollbar mx-auto max-w-[100vw] px-4 py-6 md:max-w-3xl"
	transition:fade={{ duration: 250 }}
>
	<div
		class="bg-surface/ overflow-hidden rounded-lg border border-info-hover shadow-xl backdrop-blur-sm"
	>
		<div class="flex items-center border-b border-info-hover bg-info-hover/90 px-4 py-2">
			<div class="mr-3 flex space-x-2">
				<div
					class="size-3 rounded-full bg-red-500/80 transition-transform duration-200 hover:scale-150"
					title="Close"
				></div>
				<div
					class="size-3 rounded-full bg-yellow-500/80 transition-transform duration-200 hover:scale-150"
					title="Minimize"
				></div>
				<div
					class="size-3 rounded-full bg-green-500/80 transition-transform duration-200 hover:scale-150"
					title="Maximize"
				></div>
			</div>
			<div class="font-mono text-sm text-info">riad@terminal: ~</div>
		</div>

		<div
			class="no-scrollbar max-h-[70vh] space-y-4 overflow-y-auto overscroll-contain p-6 font-mono text-text"
			bind:this={containerRef}
			transition:fade={{ duration: 250 }}
		>
			<!-- Static intro -->
			<div>
				<div class="flex items-baseline">
					<span class="text-info">$</span>
					<h1 class="ml-2 text-2xl font-bold text-info md:text-3xl">Riad Bouadjenek</h1>
				</div>
				<p class="ml-4 text-sm text-text md:text-base">> Years of experience at your disposal</p>
			</div>

			<div>
				<div class="mb-2 flex items-baseline text-info">
					<span>$</span>
					<span class="ml-2 text-sm">whoami</span>
				</div>
				<div
					class="ml-4 rounded border-l-2 border-[rgba(51,204,255,0.5)] bg-info/30 p-4 whitespace-pre-line"
				>
					<p class="text-xs leading-relaxed text-text/70 md:text-sm">{RiadDetails.description}</p>
				</div>
			</div>

			<div>
				<div class="mb-2 flex items-baseline text-info">
					<span>$</span>
					<span class="ml-2 text-sm">contact --email</span>
				</div>

				<p class="ml-4 text-xs text-text-muted md:text-sm">> {RiadDetails.email}</p>
			</div>

			<div>
				<div class="mb-2 flex items-baseline text-info">
					<span>$</span>
					<span class="ml-2 text-sm">contact --linkedin</span>
				</div>
				<a
					href={RiadDetails.linkedin}
					class="ml-4 text-xs text-text-muted hover:underline md:text-sm"
					rel="noopener"
					target="_blank">> {RiadDetails.linkedin}</a
				>
			</div>

			{#each terminal.history as entry}
				<div>
					<div class="flex items-baseline text-info">
						<span>$</span>
						<span class="ml-2 text-sm">{entry.cmd}</span>
					</div>

					{#if entry.type === 'whoami'}
						<div
							class="ml-4 rounded border-l-2 border-[rgba(51,204,255,0.5)] bg-info/30 p-4 whitespace-pre-line"
						>
							<p class="text-xs leading-relaxed text-text/70 md:text-sm">{entry.output}</p>
						</div>
					{:else if Array.isArray(entry.output)}
						<pre class="ml-4 text-xs text-text-muted md:text-sm">{entry.output.join('\n')}</pre>
					{:else if entry.type === 'neofetch'}
						<div class="ml-4 flex gap-4">
							<!-- ASCII -->
							<pre class="leading-tight whitespace-pre text-pink-400">
								{entry.output.slice(0, 5)}
		                    </pre>
							<!-- Info -->
							<div class="text-text-muted">
								{#each entry.output.slice(5) as line}
									<div class="text-xs text-text-muted md:text-sm">{line}</div>
								{/each}
							</div>
						</div>
					{:else}
						<p class="ml-4 text-xs text-text-muted md:text-sm">{entry.output}</p>
					{/if}
				</div>
			{/each}

			<div class="flex items-baseline text-info">
				<span class="text-sm text-green-400 md:text-base">riad</span>@<span
					class="text-sm text-blue-400 md:text-base">terminal</span
				>:
				<span class="text-sm text-yellow-300 md:text-base"
					>{terminal.currentPath.length ? '/' + terminal.currentPath.join('/') : ''}</span
				>$
				<!-- svelte-ignore a11y_autofocus -->
				<input
					bind:value={input}
					onkeydown={handleKeydown}
					onclick={updateCursor}
					onkeyup={updateCursor}
					class="ml-2 w-full flex-1 text-sm outline-none md:text-base"
					autocomplete="off"
				/>
			</div>

			<div bind:this={bottomRef}></div>
		</div>
	</div>
</div>
