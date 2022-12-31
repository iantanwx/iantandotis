<script lang="ts">
	import NavItem from './NavItem.svelte';
	import Dark from '../assets/icons/dark.svg?component';
</script>

<nav class="container mx-auto flex flex-row justify-between py-4">
	<div class="flex items-center space-x-6">
		<NavItem href="/">Home</NavItem>
		<NavItem href="/about">About</NavItem>
	</div>
	<div class="flex flex-col justify-center hover:cursor-pointer">
		<Dark class="text-yellow-300" height={24} />
	</div>
</nav>
