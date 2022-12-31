<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="min-h-full bg-gray-50 dark:bg-gray-800">
	<Nav />
	<main class="flex flex-col justify-center bg-gray-50 dark:bg-gray-800">
		<slot />
	</main>
</div>
