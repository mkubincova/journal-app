import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, parent }) => {
    const { session } = await parent();

    const res = await fetch(`/api/users/${session?.user.id}`);
    const resJSON = await res.json();

    if (!res.ok) {
        throw error(res.status, resJSON.message);
    }

    return {
        title: `${resJSON.name}'s profile`,
        user: resJSON
    };
};