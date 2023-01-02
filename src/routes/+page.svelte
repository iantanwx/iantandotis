<script lang="ts">
	import ShortBio from '../components/ShortBio.svelte';
	import { format, parseISO as parse } from 'date-fns';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col">
	<ShortBio />
	<div class="flex flex-col justify-center py-8 prose dark:prose-invert  max-w-none">
		<h2
			class="text-3xl after:absolute after:w-10 after:h-1 after:block after:bg-purple-500 after:m-auto after:mt-4 after:mb-2"
		>
			Posts
		</h2>
		<ul class="flex flex-col mt-2 list-none px-0">
			{#each data.posts as post}
				<li class="flex flex-row px-0 space-x-2 justify-between items-center">
					<h3 class="text-left m-0">
						<a
							class=" hover:text-rose-500 hover:underline no-underline"
							href={`/posts/${post.slug}`}
						>
							{post.title}
						</a>
					</h3>
					<h4 class="text-left font-light m-0">
						{format(parse(post.closedAt), 'dd MMM yyyy')}
					</h4>
				</li>
			{/each}
		</ul>
	</div>
</div>
