/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs';
import path, { dirname } from 'path';
import rehypeAutoLink from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import remarkToc from 'remark-toc';
import slugify from 'slugify';
import { compile } from 'mdsvex';
import { fileURLToPath } from 'url';
import { gql, GraphQLClient } from 'graphql-request';
import { dev } from '$app/environment';
import { GITHUB_TOKEN } from '$env/static/private';

const client = new GraphQLClient('https://api.github.com/graphql', {
	headers: {
		authorization: `Bearer ${GITHUB_TOKEN}`
	}
});

const GET_POSTS_QUERY = gql`
	query getIssues($cursor: String) {
		repository(owner: "iantanwx", name: "iantandotis") {
			issues(
				first: 100
				after: $cursor
				orderBy: { direction: DESC, field: CREATED_AT }
				states: CLOSED
				labels: ["Publish"]
			) {
				nodes {
					id
					title
					body
					createdAt
				}
				totalCount
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}
`;

const postsCache: Record<string, any> = {};

const _dirname =
	typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));

const contentDir = path.resolve(_dirname, '../../', '.content');

export const getPosts = async () => {
	const allPosts: any[] = [];
	let pageInfo = { hasNextPage: false, endCursor: null };
	do {
		const res = await client.request(GET_POSTS_QUERY, { cursor: pageInfo.endCursor });
		const posts = res.repository.issues.nodes.map((node: any) => {
			return {
				id: node.id,
				title: node.title,
				body: node.body,
				slug: slugify(node.title, { lower: true }),
				createdAt: node.createdAt
			};
		});
		allPosts.push(...posts);
		pageInfo = res.repository.issues.pageInfo;
	} while (pageInfo.hasNextPage);

	if (!fs.existsSync(contentDir)) {
		fs.mkdirSync(contentDir);
	}

	for (const post of allPosts) {
		const cachedPost = postsCache[post.slug];
		if (!cachedPost || cachedPost.body !== post.body) {
			fs.writeFileSync(`${contentDir}/${post.id}.md`, post.body);
			postsCache[post.slug] = post;
		}
	}

	return allPosts;
};

export const getPost = async (slug: string) => {
	if (dev || !Object.entries(postsCache).length) {
		await getPosts();
	}
	const post = postsCache[slug];
	if (!post) {
		throw new Error(`Post not found: ${slug}`);
	}
	/* @ts-ignore */
	const compilation = await compile(post.body, {
		rehypePlugins: [
			/* @ts-ignore */
			rehypeStringify,
			/* @ts-ignore */
			rehypeSlug,
			[
				/* @ts-ignore */
				rehypeAutoLink,
				{
					behavior: 'wrap',
					properties: { class: 'heading hover:text-foreground/80 no-underline' }
				}
			]
		],
		remarkPlugins: [
			/* @ts-ignore */
			remarkToc,
			/* @ts-ignore */
			[remarkGithub, { repository: 'https://github.com/iantanwx/iantandotis' }],
			/* @ts-ignore */
			[remarkGfm, { repository: 'https://github.com/iantanwx/iantandotis' }]
		]
	});
	const content = compilation?.code
		// https://github.com/pngwn/MDsveX/issues/392
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, '</code></pre>');
	const metadata: any = compilation?.data?.fm;

	return { post: { ...post, body: content }, metadata };
};
