import { PrismaClient } from '@prisma/client';
import { redirect } from "@sveltejs/kit";

export const prisma = new PrismaClient();

export async function deleteEntry(id) {
    try {
        const deletedItem = await prisma.journalEntry.delete({
            where: {
                id,
            },
        });

        throw redirect(303, "/entries");
    } catch (error) {
        console.error("Error deleting item:", error);
    }
}