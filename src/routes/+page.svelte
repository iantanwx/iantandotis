<script lang="ts">
	import { format, parseISO as parse } from 'date-fns';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container max-w-4xl">
	<div class="flex flex-col justify-center py-4 lg:py-8">
		<ul class="mt-2 flex list-none flex-col px-0">
			{#each data.posts as post}
				<li
					class="my-2 flex flex-col px-0 sm:flex-row sm:items-center sm:justify-between sm:space-x-2"
				>
					<h3 class="m-0 text-left font-semibold lg:text-xl">
						<a
							class="transition-colors hover:text-foreground/60 hover:underline"
							href={`/posts/${post.slug}`}
						>
							{post.title}
						</a>
					</h3>
					<h4 class="m-0 text-left text-foreground/80">
						{format(parse(post.createdAt), 'dd MMM yyyy')}
					</h4>
				</li>
			{/each}
		</ul>
	</div>
</div>
