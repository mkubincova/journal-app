import { prisma } from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request}) => {
    const { entryId } = await request.json();

    try {
        const deletedEntry = await prisma.journalEntry.delete({
          where: { id: entryId },
        });
        return json({  body: deletedEntry, status: 200 });
    } catch (error) {
        console.error('Error deleting entry:', error);
        return json({  message: 'Error deleting entry', status: 500 });
    }
}

export async function GET() {
    return json('hello')
}