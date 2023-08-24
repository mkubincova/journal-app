import { prisma } from "$lib/prisma";
import { error } from '@sveltejs/kit';
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