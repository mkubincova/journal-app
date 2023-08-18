import { prisma } from "$lib/prisma";
import type { PageServerLoad } from './$types';
import type { User, JournalEntry } from '@prisma/client';

interface UserWihtEntries extends User {
    journalEntries?: JournalEntry[];
}

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    const email = session?.user?.email;

    let user: UserWihtEntries | null = null;

    if (email !== null && email !== undefined) {
        user = await prisma.user.findUnique({
            where: { email },
            include: {
                journalEntries: {
                    orderBy: { date: 'desc' } // Sort entries by newest date
                }
            }
        });
    }

    return {
        title: 'Profile',
        entries: user?.journalEntries || []
    };
};