import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, parent, params }) => {
    const { userId } = await parent();

    if (userId !== params.id) {
        throw error(401, "Nothing in here");
    }

    const res = await fetch(`/api/users/${userId}`);
    const resJSON = await res.json();

    if (!res.ok) {
        throw error(res.status, resJSON.message);
    }

    return {
        title: `${resJSON.name}'s profile`,
        user: resJSON
    };
};