<script lang="ts">
	import NavItem from './NavItem.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="container mx-auto flex max-w-4xl flex-row justify-between py-4">
	<div class="flex items-center space-x-6">
		<span class="mr-4 text-xl font-bold leading-8 tracking-tight">Ian Tan</span>
		<NavItem href="/">Home</NavItem>
		<NavItem href="/about">About</NavItem>
	</div>
	<div class="flex flex-col justify-center">
		<ThemeToggle />
	</div>
</nav>
