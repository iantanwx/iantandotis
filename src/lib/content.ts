import { GraphQLClient, gql } from 'graphql-request';
import slugify from 'slugify';
import { dev } from '$app/environment';
import { GITHUB_TOKEN } from '$env/static/private';
import fs from 'fs';

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
					closedAt
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

let postsCache: any[] = [];

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
				closedAt: node.closedAt
			};
		});
		allPosts.push(...posts);
		pageInfo = res.repository.issues.pageInfo;
	} while (pageInfo.hasNextPage);
	if (!fs.existsSync('./.content')) {
		fs.mkdirSync('./.content');
	}
	for (const post of allPosts) {
		fs.writeFileSync(`./.content/${post.id}.md`, post.body);
	}
	postsCache = allPosts;
	return allPosts;
};

export const getPost = async (slug: string) => {
	if (dev || !postsCache.length) {
		await getPosts();
	}
	const post = postsCache.find((post) => post.slug === slug);
	if (!post) {
		throw new Error(`Post not found: ${slug}`);
	}
	return post;
};
