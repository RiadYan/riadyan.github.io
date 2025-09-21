<script lang="ts">
	import { GithubIcon } from '@lucide/svelte';
	import App from './App/App.svelte';
	import { RiadDetails } from '$lib/data/user';

	//todo: add a dock thing to run apps to make use of the close and minimize and maximize
</script>

<div
	class="mx-auto flex h-16 w-full flex-row border-t-1 border-info bg-info-hover/90 shadow-lg backdrop-blur-md md:w-[60vw] md:rounded-t-xl md:border-x-1"
>
	<div
		class="flex h-full w-full flex-row items-center justify-center gap-6 px-4 md:justify-between md:px-64"
	>
		<App href={RiadDetails.github}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png"
				alt="GitHub"
				class="size-10"
			/>
		</App>
		<App href={RiadDetails.linkedin}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/640px-LinkedIn_icon.svg.png"
				alt="LinkedIn"
				class="size-10"
			/>
		</App>
		<App href={RiadDetails.crates}>
			<img src="https://crates.io/assets/cargo.png" alt="Crates.io" class="size-10" />
		</App>
		<App href="/">
			<img src="/favicon.png" alt="Logo" class="size-10" />
		</App>
	</div>
</div>
