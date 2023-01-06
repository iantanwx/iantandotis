import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import remarkToc from 'remark-toc';
import remarkGithub from 'remark-github';
import remarkGfm from 'remark-gfm';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutoLink from 'rehype-autolink-headings';
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
			rehypePlugins: [
				rehypeStringify,
				rehypeSlug,
				[
					rehypeAutoLink,
					{
						behavior: 'wrap',
						properties: { class: 'heading hover:text-rose-500 no-underline' }
					}
				]
			],
			remarkPlugins: [
				remarkToc,
				[remarkGithub, { repository: 'https://github.com/iantanwx/iantandotis' }],
				[remarkGfm, { repository: 'https://github.com/iantanwx/iantandotis' }]
			],
			extensions: ['.md', '.svx']
		})
	],
	kit: {
		alias: {
			$components: path.resolve(dirname(), 'src/components')
		},
		adapter: vercel()
	}
};

export default config;
