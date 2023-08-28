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