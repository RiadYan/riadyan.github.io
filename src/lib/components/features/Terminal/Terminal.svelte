<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate, onMount } from 'svelte';
	import { RiadDetails } from '$lib/data/user';
	import { Terminal } from './terminal';

	const terminal = new Terminal();

	let input = '';
	let bottomRef: HTMLDivElement;

	function updateCursor(e: Event) {
		const target = e.target as HTMLInputElement;
		terminal.cursorPos = target.selectionStart ?? 0;
	}

	function handleKeydown(e: KeyboardEvent) {
		updateCursor(e);

		if (e.ctrlKey && e.key.toLowerCase() === 'l') {
			e.preventDefault();
			terminal.history = [];
		}
		if (e.key.length === 1 || e.key === 'Backspace') {
			// reset tab matches if typing
			terminal.tabMatches = [];
			terminal.tabIndex = 0;
		}

		if (e.key === 'Enter') {
			terminal.runCommand(input);
			input = '';
			terminal.cursorPos = 0;
		}
		if (e.key === 'Tab') {
			e.preventDefault();
			terminal.input = input;
			terminal.handleTabCompletion();
			input = terminal.input;
		}
	}

	onMount(() => bottomRef?.scrollIntoView({ behavior: 'smooth' }));
	afterUpdate(() => bottomRef?.scrollIntoView({ behavior: 'smooth' }));
</script>

<div class="mx-auto max-h-[62rem] max-w-3xl px-4 py-6" transition:fade={{ duration: 250 }}>
	<div
		class="bg-surface/ overflow-hidden rounded-lg border border-info-hover shadow-xl backdrop-blur-sm"
	>
		<!-- Terminal header -->
		<div class="flex items-center border-b border-info-hover bg-info-hover/90 px-4 py-2">
			<div class="mr-3 flex space-x-2">
				<div class="size-3 rounded-full bg-red-500/80"></div>
				<div class="size-3 rounded-full bg-yellow-500/80"></div>
				<div class="size-3 rounded-full bg-green-500/80"></div>
			</div>
			<div class="font-mono text-sm text-info">riad@terminal: ~</div>
		</div>

		<div class="space-y-4 p-6 font-mono text-gray-200">
			<!-- Static intro -->
			<div>
				<div class="flex items-baseline">
					<span class="text-info">$</span>
					<h1 class="ml-2 text-3xl font-bold text-info">Riad Bouadjenek</h1>
				</div>
				<p class="ml-4 text-gray-400">> Years of experience at your disposal</p>
			</div>

			<div>
				<div class="mb-2 flex items-baseline text-info">
					<span>$</span>
					<span class="ml-2">whoami</span>
				</div>
				<div class="ml-4 rounded border-l-2 border-[rgba(51,204,255,0.5)] bg-gray-900/50 p-4">
					<p class="text-gray-300">{RiadDetails.description}</p>
				</div>
			</div>

			<div>
				<div class="mb-2 flex items-baseline text-info">
					<span>$</span>
					<span class="ml-2">contact --email</span>
				</div>
				<p class="ml-4 text-gray-400">> {RiadDetails.email}</p>
			</div>

			<div>
				<div class="mb-2 flex items-baseline text-info">
					<span>$</span>
					<span class="ml-2">contact --linkedin</span>
				</div>
				<p class="ml-4 text-gray-400">> https://www.linkedin.com</p>
			</div>

			<!-- Command history -->
			{#each terminal.history as entry}
				<div>
					<div class="flex items-baseline text-info">
						<span>$</span>
						<span class="ml-2">{entry.cmd}</span>
					</div>

					{#if entry.type === 'whoami'}
						<div class="ml-4 rounded border-l-2 border-[rgba(51,204,255,0.5)] bg-gray-900/50 p-4">
							<p class="text-gray-300">{entry.output}</p>
						</div>
					{:else if Array.isArray(entry.output)}
						<pre class="ml-4 whitespace-pre text-gray-400">{entry.output.join('\n')}</pre>
					{:else if entry.type === 'neofetch'}
						<div class="ml-4 flex gap-4">
							<!-- ASCII -->
							<pre class="leading-tight whitespace-pre text-pink-400">
								{entry.output.slice(0, 5)}
		                    </pre>
							<!-- Info -->
							<div class="text-gray-300">
								{#each entry.output.slice(5) as line}
									<div>{line}</div>
								{/each}
							</div>
						</div>
					{:else}
						<p class="ml-4 text-gray-400">{entry.output}</p>
					{/if}
				</div>
			{/each}

			<div class="flex items-baseline text-info">
				<span class="text-green-400">riad</span>@<span class="text-blue-400">terminal</span>:
				<span class="text-yellow-300"
					>{terminal.currentPath.length ? '/' + terminal.currentPath.join('/') : ''}</span
				>$
				<!-- svelte-ignore a11y_autofocus -->
				<input
					bind:value={input}
					on:keydown={handleKeydown}
					on:click={updateCursor}
					on:keyup={updateCursor}
					class="ml-2 w-full flex-1 outline-none"
					autocomplete="off"
					autofocus
				/>
			</div>
		</div>
	</div>
</div>
<div bind:this={bottomRef}></div>
