<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article
	class="prose min-w-full prose-headings:!text-white prose-a:text-rose-500 dark:prose-invert"
>
	<h1 class="mb-12 mt-4 after:mt-4 after:mb-2 after:block after:h-1 after:w-12 after:bg-purple-500">
		{data.metadata?.title ?? data.title}
	</h1>
	<svelte:component this={data.component} class="" />
</article>
