<script lang="ts">
	import Dark from '../assets/icons/dark.svg?component';
	import Light from '../assets/icons/light.svg?component';
	let isDark = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}
	function toggleDarkMode() {
		console.log('toggled dark mode');
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}
</script>

<button class="flex flex-col justify-center hover:cursor-pointer" on:click={toggleDarkMode}>
	{#if isDark}
		<Light class="text-yellow-300" height={24} />
	{:else}
		<Dark class="text-yellow-500" height={24} />
	{/if}
</button>
