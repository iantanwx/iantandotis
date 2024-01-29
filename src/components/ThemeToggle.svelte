<script lang="ts">
	import { browser } from '$app/environment';
	import { Theme, theme, toggleTheme } from '$lib/state/theme';
	import Dark from '../assets/icons/dark.svg?component';
	import Light from '../assets/icons/light.svg?component';

	theme.subscribe((value) => {
		if (!browser) return;
		if (value === Theme.Dark) {
			document.documentElement.classList.add(Theme.Dark);
		} else {
			document.documentElement.classList.remove(Theme.Dark);
		}
	});
</script>

<button class="flex flex-col justify-center hover:cursor-pointer" on:click={toggleTheme}>
	{#if $theme === Theme.Light}
		<Light class="text-yellow-300" height={24} />
	{:else}
		<Dark class="text-yellow-500" height={24} />
	{/if}
</button>
