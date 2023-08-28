import { prisma } from '$lib/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
    try {
        const userId = url.searchParams.get('userId');
        const whereOptions = userId ? { userId: userId } : {};

        const records = await prisma.journalEntry.findMany({
            where: whereOptions,
        });

        return json(records);
    } catch (error: any) {
        return json({ message: error.message }, { status: 500 });
    }
};

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();
        const record = await prisma.journalEntry.create({ data });

        return json(record, { status: 201 });

    } catch (error: any) {
        if (error.code === 'P2002') {
            return json({ message: 'Entry with this ID already exists' }, { status: 409 });
        }
        return json({ message: error.message }, { status: 500 });
    }
};