import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export enum Theme {
	Dark = 'dark',
	Light = 'light'
}

const defaultTheme = Theme.Dark;

const initialTheme: Theme = browser
	? window.matchMedia('(prefers-color-scheme: light)').matches
		? Theme.Light
		: defaultTheme
	: defaultTheme;

if (browser && !localStorage.theme) {
	localStorage.theme = initialTheme;
}

export const theme = writable<Theme>(browser ? localStorage.theme : initialTheme);

export const toggleTheme = () => {
	if (!browser) return;
	const t = localStorage.theme === Theme.Dark ? Theme.Light : Theme.Dark;
	localStorage.theme = t;
	theme.set(t);
};
