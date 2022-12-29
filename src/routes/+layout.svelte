<script>
	import '../app.css';
	import Nav from '../components/Nav/index.svelte';
</script>

<div>
	<Nav />
</div>

<main class="flex flex-col justify-center">
	<slot />
</main>
