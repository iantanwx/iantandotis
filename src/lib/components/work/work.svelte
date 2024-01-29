<script lang="ts">
	export let from: string;
	export let to: string | undefined;
	export let company: string;
	export let title: string;
	export let description: string;
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center justify-between">
		<p class="mb-2 text-lg font-bold tracking-tight">{company}</p>
		<p class="text-foreground/80">
			{from}
			{#if to} - {to}{/if}
		</p>
	</div>
	<p class="mb-2">{title}</p>
	<div class="prose max-w-none text-sm text-foreground/80 dark:prose-invert">
		{@html description}
	</div>
</div>
