import { getPost } from '$lib/content';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
	const { slug } = params;
	return await getPost(slug);
}
