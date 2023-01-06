import { getPosts } from '$lib/content';

export const prerender = true;

export async function load() {
	const posts = await getPosts();
	return {
		posts
	};
}
