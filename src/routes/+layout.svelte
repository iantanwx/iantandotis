<script>
	import { page } from '$app/stores';
	import Footer from '$components/Footer.svelte';
	import {
		DEFAULT_OG_IMAGE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL,
		TWITTER_HANDLE
	} from '$lib/constants';
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:head>
	<title>{$page.data.title ?? SITE_TITLE}</title>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div class="flex min-h-full flex-col bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto max-w-4xl flex-1">
		<Nav />
		<main class="flex min-h-full w-full flex-col justify-center">
			<slot />
		</main>
	</div>
	<Footer />
</div>
