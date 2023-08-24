import { fail, redirect, error} from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const entry = await prisma.journalEntry.findUnique({
        where: { id: params.id }
    });

    if (!entry) {
        throw error(404, 'Entry not found');
    }

    return {
        title: `Entry ${entry.id}`,
        entry: entry
    };
};

export const actions: Actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();

        let content = data.get('content') as string;
        let id = data.get('id');

        if (!content || !id) {
            return fail(400, { content, id, missing: true });
        }

        const recordRes = await fetch("/api/entry", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                id: id
            })
        })

        if(!recordRes.ok) {
            throw error(recordRes.status, 'Failed to update entry')
        }
        
        throw redirect(303, `/entries/${id}`);
    }
};