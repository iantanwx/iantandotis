<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import clsx from 'clsx';
	import { Construction } from 'lucide-svelte';

	export let project = '';
	export let description = '';
	export let href = '#';
	export let stack: string[] = [];
	export let wip = false;
</script>

<Card.Root>
	<Card.Header class="pb-2">
		<Card.Title class="mb-4 flex flex-row">
			{#if wip}
				<Construction size={18} class="mr-2 text-yellow-400" />
			{/if}
			<a
				class={clsx(
					'text-foreground',
					href === '#' && 'pointer-events-none ',
					href === '#' ? 'no-underline' : ' hover:underline'
				)}
				{href}
				target="_blank">{project}</a
			>
		</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="mt-4 flex flex-row flex-wrap gap-1">
			{#each stack as item}
				<Badge variant="outline">{item}</Badge>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
