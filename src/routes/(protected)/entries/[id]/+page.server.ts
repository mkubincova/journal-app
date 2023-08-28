import { prisma } from "$lib/prisma";
import { error, redirect, fail, type Actions } from '@sveltejs/kit';
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
    },
    editItem: async ({ params, fetch, request }) => {
        const entryId = params.id;
        const formData = await request.formData();

        const content = formData.get('content');
        const inputDate = formData.get('date') as string;

        let date = inputDate ? new Date(inputDate) : new Date;
        let ISODate = date.toISOString();

        if (!content) {
            return fail(400, { content, contentError: "Content is required!" });
        }

        const res = await fetch(`/api/entries/${entryId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content, date: ISODate })
        });

        if (res.ok) {
            throw redirect(303, `/entries/${entryId}`);
        } else {
            const resJSON = await res.json();
            throw error(res.status, resJSON.message);
        }
    }
};