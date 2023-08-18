import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/prisma';


export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        let content = data.get('content') as string;
        let email = data.get('email');
        let userId;

        if (email !== null && email !== undefined && typeof email == "string") {
            userId = await prisma.user
                .findUnique({ where: { email } })
                .then(user => user?.id);
        }

        if (!content || !userId) {
            return fail(400, { content, userId, missing: true });
        }

        const record = await prisma.journalEntry.create({
            data: {
                content: content,
                date: new Date(),
                userId: userId
            },
        });

        if (record) {
            throw redirect(303, `/entries`);
        }
    }
};