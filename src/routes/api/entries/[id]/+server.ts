import { prisma } from '$lib/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params: { id } }) => {
    try {
        const record = await prisma.journalEntry.findUnique({
            where: { id }
        });

        if (!record) {
            const message = 'No journal entry with this ID.';
            return json({ message }, { status: 404 });
        }

        return json(record);
    } catch (error: any) {
        return json({ message: error.message }, { status: 500 });
    }
};

export const DELETE: RequestHandler = async ({ params: { id } }) => {
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

export const PUT: RequestHandler = async ({ params: { id }, request }) => {
    try {
        const { content, date } = await request.json();

        const record = await prisma.journalEntry.update({
            where: { id },
            data: { content, date },
        });

        return json(record);

    } catch (error: any) {
        if (error.code === 'P2025') {
            return json({ message: error.meta.cause }, { status: 404 });
        }
        return json({ message: error.message }, { status: 500 });
    }
};