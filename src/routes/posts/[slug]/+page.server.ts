import { getPost } from '$lib/content';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
	const { slug } = params;
	const post = await getPost(slug);
	return post;
}
