import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import path from 'path';
import url from 'url';

function dirname() {
	return path.dirname(url.fileURLToPath(import.meta.url));
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.html', '.svx', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],
	kit: {
		alias: {
			$components: path.resolve(dirname(), 'src/components')
		},
		adapter: adapter()
	}
};

export default config;
