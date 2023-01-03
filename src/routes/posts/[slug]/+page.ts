/** @type {import('./$types').PageLoad} */
export async function load({ data }: any) {
	const module = await import(`../../../../.content/${data.id}.md`);
	return { ...data, metadata: module.metadata, component: module.default };
}
