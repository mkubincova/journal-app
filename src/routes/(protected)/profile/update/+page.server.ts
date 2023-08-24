import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { User } from '@prisma/client';


export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    const email = session?.user?.email;
    let user: User | null = null;

    if (email !== null && email !== undefined) {
        user = await prisma.user.findUnique({ where: { email } });
    }

    return {
        title: 'Profile edit',
        user: user
    };
};

export const actions: Actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();

        let username = data.get('username');
        let id = data.get('id');

        if (!username || !id) {
            return fail(400, { username, id, missing: true });
        }

        const userRes = await fetch("/api/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username,
                id: id
            })
        });

        if (!userRes.ok) {
            throw error(userRes.status, 'Failed to update user');
        }

        throw redirect(303, `/profile`);
    }
};