import { prisma } from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ request }) => {
    const { userId } = await request.json();

    if (!userId) {
        return json({ message: 'Missing user id', status: 400 });
    }

    try {
        const deletedAccount = await prisma.user.delete({
            where: {
                id: userId,
            },
        });

        return json({ body: deletedAccount, status: 200 });
    } catch (error) {
        console.error('Error deleting account:', error);
        return json({ message: 'Error deleting account', status: 500 });
    }
};

export const PUT: RequestHandler = async ({ request }) => {
    const { name, id } = await request.json();

    try {
        const record = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name,
            },
        });
        return json({ body: record, status: 204 });
    } catch (error) {
        console.error('Error updating entry:', error);
        return json({ message: 'Error updating entry', status: 500 });
    }
};