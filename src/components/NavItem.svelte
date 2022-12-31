<script lang="ts">
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === href;
	export let href: string;
</script>

<a
	class=" dark:text-gray-100 dark:hover:text-purple-500 dark:hover:decoration-purple-500 hover:text-purple-500 hover:decoration-purple-500 decoration-2 underline-offset-8 py-2 rounded-md"
	class:text-purple-500={isActive}
	class:dark:text-purple-500={isActive}
	class:underline={isActive}
	class:hover:underline={!isActive}
	class:font-semibold={isActive}
	{href}
>
	<slot />
</a>
