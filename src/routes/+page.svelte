<script lang="ts">
	import ShortBio from '../components/ShortBio.svelte';
	import { format, parseISO as parse } from 'date-fns';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col">
	<ShortBio />
	<div class="prose flex max-w-none flex-col justify-center py-8  dark:prose-invert">
		<h2
			class="text-3xl after:absolute after:m-auto after:mt-4 after:mb-2 after:block after:h-1 after:w-10 after:bg-purple-500"
		>
			Posts
		</h2>
		<ul class="mt-2 flex list-none flex-col px-0">
			{#each data.posts as post}
				<li class="flex flex-row items-center justify-between space-x-2 px-0">
					<h3 class="m-0 text-left">
						<a
							class=" no-underline hover:text-rose-500 hover:underline"
							href={`/posts/${post.slug}`}
						>
							{post.title}
						</a>
					</h3>
					<h4 class="m-0 text-left font-light">
						{format(parse(post.closedAt), 'dd MMM yyyy')}
					</h4>
				</li>
			{/each}
		</ul>
	</div>
</div>
