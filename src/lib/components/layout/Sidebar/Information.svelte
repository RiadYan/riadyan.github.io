<script lang="ts">
	import { ChevronRight, GitGraph, GlobeLockIcon, Mail } from '@lucide/svelte';
</script>

<div class="flex items-center px-4 py-1 text-xs font-medium tracking-wider text-info/90 uppercase">
	<ChevronRight size={14} class="mr-1" />
	<span>INFORMATION</span>
</div>
<div class="space-y-0.5 px-2 py-1">
	<a
		href="/techCenter"
		class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"
	>
		<GitGraph size={14} class="mr-2 text-info/80" />
		<span class="text-text-muted">Tech Center</span>
	</a>
	<a
		href="/contact"
		class="flex w-full flex-1 items-center rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-info-hover"
	>
		<Mail size={14} class="mr-2 text-info/80" />
		<span class="text-text-muted">Contact</span>
	</a>
</div>
