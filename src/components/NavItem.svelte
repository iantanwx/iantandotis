<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	$: isActive = $page.url.pathname === href;
	export let href: string;
</script>

<a
	class={cn(
		'px-4 py-2',
		'transition-colors hover:text-foreground/80',
		isActive ? 'font-semibold text-foreground' : 'text-foreground/60'
	)}
	{href}
>
	<slot />
</a>
