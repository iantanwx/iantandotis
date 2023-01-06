<script lang="ts">
	import { SITE_URL, TWITTER_HANDLE } from '$lib/constants';
	import { format, parseISO as parse } from 'date-fns';
	import type { PageData } from './$types';
	export let data: PageData;
	$: canonicalUrl = `${SITE_URL}/posts/${data.post.slug}`;
</script>

<svelte:head>
	<title>Ian Tan - {data.metadata?.title ?? data.post.title}</title>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata?.title ?? data.post.title} />
	<meta name="Description" content={data.metadata?.description} />
	<meta property="og:description" content={data.metadata?.description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + TWITTER_HANDLE} />
	<meta name="twitter:title" content={data.metadata?.title ?? data.post.title} />
	<meta name="twitter:description" content={data.metadata.description} />
	{#if data.metadata.image}
		<meta property="og:image" content={data.metadata.image} />
		<meta name="twitter:image" content={data.metadata.image} />
	{/if}
</svelte:head>
<article class="prose mt-4 mb-12 flex min-w-full flex-col prose-a:text-rose-500 dark:prose-invert">
	<div
		class="flex flex-col after:mt-4 after:mb-2 after:block after:h-1 after:w-12 after:bg-purple-500"
	>
		<h1 class="mb-0 text-5xl font-bold text-gray-900 dark:text-white  sm:leading-normal">
			{data.metadata?.title ?? data.post.title}
		</h1>
		<p>{format(parse(data.post.createdAt), 'dd MMM yyyy')}</p>
	</div>
	{@html data.post.body}
</article>
