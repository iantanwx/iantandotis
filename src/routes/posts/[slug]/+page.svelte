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

<div class="container my-4 flex max-w-4xl flex-col">
	<div class="flex flex-col">
		<h1 class="mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{data.metadata?.title ?? data.post.title}
		</h1>
		<p class="leading-7 tracking-tight text-foreground/60">
			Published {format(parse(data.post.createdAt), 'dd MMM yyyy')}
		</p>
	</div>

	<article class="prose min-w-full dark:prose-invert">
		{@html data.post.body}
	</article>
</div>
