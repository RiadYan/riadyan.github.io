<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, href } = $props<{ children: Snippet; href: string }>();
</script>

<a
	class="flex size-12 items-center justify-center rounded-md
		   border border-info/70 bg-info/20
		   transition-transform duration-250
		   hover:-translate-y-2 hover:scale-105"
	{href}
	target="_blank"
	rel="noopener"
>
	{@render children()}
</a>
