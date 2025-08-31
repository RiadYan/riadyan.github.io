<script lang="ts">
	import MainContainer from '$lib/components/layout/MainContainer.svelte';
	import { Lock } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let displayText = '';
	let finalText = 'INFORMATION REDACTED';
	let scrambling = true; // state to track if scrambling is active

	const chars = '!<>-_\\/[]{}—=+*^?#________';
	function randomChar() {
		return chars[Math.floor(Math.random() * chars.length)];
	}

	onMount(() => {
		let i = 0;
		const interval = setInterval(() => {
			if (i <= finalText.length) {
				const revealed = finalText.slice(0, i);
				const randoms = finalText
					.slice(i)
					.split('')
					.map(() => randomChar())
					.join('');
				displayText = revealed + randoms;
				i++;
			} else {
				clearInterval(interval);
				displayText = finalText;
				scrambling = false;
			}
		}, 100);
	});
</script>

<MainContainer>
	<div class="flex h-full w-full flex-col items-center justify-center space-y-6">
		<div class="relative flex justify-center">
			<Lock class="h-20 w-20 animate-pulse text-info" />
			<div
				class="absolute h-20 w-20 animate-ping rounded-full border-2 border-info opacity-50"
			></div>
		</div>

		<h1
			class={`relative text-2xl font-bold md:text-4xl ${scrambling ? 'text-text-disabled' : 'text-text'}`}
			data-text={finalText}
		>
			{displayText}
		</h1>

		<p class="glitch-sm relative text-info-hover" data-text="ACCESS DENIED">ACCESS DENIED</p>
	</div>
</MainContainer>

<style>
	.glitch {
		position: relative;
		color: var(--color-text);
		text-transform: uppercase;
		filter: drop-shadow(0 0 2px var(--color-info-hover));
		white-space: nowrap;
	}

	.glitch::before,
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		width: 100%;
		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
	}

	.glitch::before {
		animation: glitchTop 2s infinite linear alternate-reverse;
		color: var(--color-info-hover);
		left: 2px;
		text-shadow: -2px 0 cyan;
	}
	.glitch::after {
		animation: glitchBottom 1.5s infinite linear alternate-reverse;
		color: var(--color-info);
		left: -2px;
		text-shadow: 2px 0 magenta;
	}

	.glitch {
		background: repeating-linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.04) 0px,
			rgba(255, 255, 255, 0.04) 1px,
			transparent 1px,
			transparent 2px
		);
		background-clip: text;
		-webkit-background-clip: text;
	}

	@keyframes glitchTop {
		0% {
			clip: rect(0, 9999px, 0, 0);
			transform: translate(-3px, -3px);
		}
		10% {
			clip: rect(10px, 9999px, 40px, 0);
			transform: translate(3px, 2px);
		}
		20% {
			clip: rect(85px, 9999px, 140px, 0);
			transform: translate(-2px, -1px);
		}
		100% {
			clip: rect(0, 9999px, 0, 0);
			transform: translate(0);
		}
	}

	@keyframes glitchBottom {
		0% {
			clip: rect(0, 9999px, 0, 0);
			transform: translate(3px, 2px);
		}
		10% {
			clip: rect(55px, 9999px, 90px, 0);
			transform: translate(-3px, -1px);
		}
		20% {
			clip: rect(125px, 9999px, 180px, 0);
			transform: translate(2px, 1px);
		}
		100% {
			clip: rect(0, 9999px, 0, 0);
			transform: translate(0);
		}
	}

	.glitch-sm::before,
	.glitch-sm::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		width: 100%;
		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
	}
	.glitch-sm::before {
		color: var(--color-info-hover);
		animation: glitchTop 1.8s infinite linear alternate-reverse;
		left: 1px;
	}
	.glitch-sm::after {
		color: var(--color-info);
		animation: glitchBottom 1.2s infinite linear alternate-reverse;
		left: -1px;
	}
</style>
