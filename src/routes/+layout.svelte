<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '$components/Footer.svelte';
	import Nav from '$components/Nav.svelte';
	import { webVitals } from '$lib/analytics';
	import {
		DEFAULT_OG_IMAGE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL,
		TWITTER_HANDLE
	} from '$lib/constants';
	import { inject } from '@vercel/analytics';
	import '../app.css';

	inject();
	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
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

<div class="relative flex min-h-screen flex-col">
	<Nav />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
