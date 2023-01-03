import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		fs: {
			allow: ['./.content', searchForWorkspaceRoot(process.cwd())]
		}
	},
	plugins: [sveltekit(), svg()]
};

export default config;
