import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const entryId = params.id;

    const res = await fetch(`/api/entries/${entryId}`);
    const resJSON = await res.json();

    if (!res.ok) {
        throw error(res.status, resJSON.message);
    }

    return {
        title: `Entry ${resJSON.id}`,
        entry: resJSON
    };
};