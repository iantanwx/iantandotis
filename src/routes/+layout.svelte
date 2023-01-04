<script>
	import { page } from '$app/stores';
	import Footer from '$components/Footer.svelte';
	import { SITE_TITLE } from '$lib/constants';
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<title>{$page.data.title ?? SITE_TITLE}</title>
</svelte:head>

<div class="min-h-full  bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto max-w-4xl">
		<Nav />
		<main class="flex flex-col justify-center ">
			<slot />
		</main>
	</div>
	<Footer />
</div>
