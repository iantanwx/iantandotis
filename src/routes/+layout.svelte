<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="min-h-full  bg-gray-50 dark:bg-gray-900">
	<div class="max-w-4xl mx-auto">
		<Nav />
		<main class="flex flex-col justify-center ">
			<slot />
		</main>
	</div>
</div>
