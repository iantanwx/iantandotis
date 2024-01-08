<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import NavItem from './NavItem.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="container mx-auto flex max-w-4xl flex-row justify-between py-4">
	<div class="flex items-center space-x-6">
		<Avatar.Root>
			<Avatar.Image src="/logo_dark.png" alt="Avatar" />
		</Avatar.Root>
		<NavItem href="/">Home</NavItem>
		<NavItem href="/about">About</NavItem>
	</div>
	<div class="flex flex-col justify-center">
		<ThemeToggle />
	</div>
</nav>
