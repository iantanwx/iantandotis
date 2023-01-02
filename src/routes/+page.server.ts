import { getPosts } from '$lib/content';

export async function load() {
	const posts = await getPosts();
	return {
		posts
	};
}
