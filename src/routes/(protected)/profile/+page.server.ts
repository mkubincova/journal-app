import { prisma } from "$lib/prisma";
import type { User } from '@prisma/client';

export const load = async ({ parent }) => {
    const { session } = await parent();
    const email = session?.user?.email;
    let user: User | null = null;

    if (email !== null && email !== undefined) {
        user = await prisma.user.findUnique({ where: { email } });
    }

    return {
        title: 'Profile',
        user: user
    };
};