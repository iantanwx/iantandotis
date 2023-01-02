import { GraphQLClient, gql } from 'graphql-request';
import slugify from 'slugify';
import { GITHUB_TOKEN } from '$env/static/private';

const client = new GraphQLClient('https://api.github.com/graphql', {
	headers: {
		authorization: `Bearer ${GITHUB_TOKEN}`
	}
});

const GET_POSTS_QUERY = gql`
	query {
		repository(owner: "iantanwx", name: "iantandotis") {
			issues(last: 100, states: CLOSED, labels: ["Publish"]) {
				edges {
					node {
						id
						title
						closedAt
					}
				}
			}
		}
	}
`;

export const getPosts = async () => {
	const res = await client.request(GET_POSTS_QUERY);
	console.log(res.repository.issues.edges);
	return res.repository.issues.edges.map((edge: any) => {
		return {
			id: edge.node.id,
			title: edge.node.title,
			slug: slugify(edge.node.title, { lower: true }),
			closedAt: edge.node.closedAt
		};
	});
};
