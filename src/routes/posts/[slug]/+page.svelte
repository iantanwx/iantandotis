<script lang="ts">
	import { SITE_URL, TWITTER_HANDLE } from '$lib/constants';
	import { format, parseISO as parse } from 'date-fns';
	import type { PageData } from './$types';
	export let data: PageData;
	$: canonicalUrl = `${SITE_URL}/posts/${data.slug}`;
</script>

<svelte:head>
	<title>Ian Tan - {data.metadata?.title ?? data.title}</title>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.title} />
	<meta name="Description" content={data.description} />
	<meta property="og:description" content={data.description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + TWITTER_HANDLE} />
	<meta name="twitter:title" content={data.metadata?.title ?? data.title} />
	<meta name="twitter:description" content={data.description} />
	{#if data.image}
		<meta property="og:image" content={data.image} />
		<meta name="twitter:image" content={data.image} />
	{/if}
</svelte:head>
<article class="prose mt-4 mb-12 flex min-w-full flex-col prose-a:text-rose-500 dark:prose-invert">
	<h1
		class="mb-12 text-5xl font-bold leading-normal text-gray-900 after:mt-4 after:mb-2 after:block after:h-1 after:w-12 after:bg-purple-500 dark:text-white"
	>
		{data.metadata?.title ?? data.title}
	</h1>
	<div>
		<p>{format(parse(data.createdAt), 'dd MMM yyyy')}</p>
	</div>
	<svelte:component this={data.component} />
</article>
