<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="prose mt-4 mb-12 min-w-full  prose-a:text-rose-500 dark:prose-invert">
	<h1
		class="mb-12 text-gray-900 after:mt-4 after:mb-2 after:block after:h-1 after:w-12 after:bg-purple-500 dark:text-white"
	>
		{data.metadata?.title ?? data.title}
	</h1>
	<svelte:component this={data.component} />
</article>
