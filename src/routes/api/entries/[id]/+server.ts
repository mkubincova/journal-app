import { prisma } from '$lib/prisma';
import { json } from '@sveltejs/kit';

export const DELETE = async ({ params: { id } }) => {
    try {
        await prisma.journalEntry.delete({
            where: { id }
        });
        return new Response(null, { status: 204 });

    } catch (error: any) {
        if (error.code === 'P2025') {
            return json({ message: error.meta.cause }, { status: 404 });
        }
        return json({ message: error.message }, { status: 500 });
    }
};

