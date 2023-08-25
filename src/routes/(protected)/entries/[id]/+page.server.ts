import { prisma } from "$lib/prisma";
import { error, redirect, type Actions } from '@sveltejs/kit';
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
    deleteItem: async ({ params, fetch }) => {
        const entryId = params.id;

        const res = await fetch(`/api/entries/${entryId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            throw redirect(303, "/entries");
        } else {
            const resJSON = await res.json();
            throw error(res.status, resJSON.message);
        }
    }
};