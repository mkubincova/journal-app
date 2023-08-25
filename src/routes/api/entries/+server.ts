import { prisma } from '$lib/prisma';
import { json } from '@sveltejs/kit';

export const PUT = async ({ request }) => {
    const { content, id } = await request.json();

    try {
        const record = await prisma.journalEntry.update({
            where: {
                id: id,
            },
            data: {
                content: content,
            },
        });
        return json({ body: record, status: 204 });
    } catch (error) {
        console.error('Error updating entry:', error);
        return json({ message: 'Error updating entry', status: 500 });
    }
};