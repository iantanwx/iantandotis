<script lang="ts">
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === href;
	export let href: string;
</script>

<a
	class=" hover:decoration-purple-500 decoration-4 underline-offset-4 py-2 rounded-md"
	class:text-purple-500={isActive}
	class:hover:underline={!isActive}
	class:font-semibold={isActive}
	{href}
>
	<slot />
</a>
