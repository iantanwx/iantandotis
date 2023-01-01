import { SITE_TITLE } from '$lib/constants';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		title: `${SITE_TITLE} - About`
	};
}
