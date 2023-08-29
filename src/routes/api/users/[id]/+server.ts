import { prisma } from '$lib/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params: { id } }) => {
    try {
        const record = await prisma.user.findUnique({
            where: { id }
        });

        if (!record) {
            const message = 'No user with this ID.';
            return json({ message }, { status: 404 });
        }

        return json(record);
    } catch (error: any) {
        return json({ message: error.message }, { status: 500 });
    }
};

export const DELETE: RequestHandler = async ({ params: { id } }) => {
    try {
        await prisma.user.delete({
            where: { id }
        });
        return new Response(null, { status: 204 });

    } catch (error: any) {
        if (error.code === 'P2025') {
            return json({ message: error.meta.cause }, { status: 404 });
        }
        return json({ message: error.message }, { status: 500 });
    }
};

export const PUT: RequestHandler = async ({ params: { id }, request }) => {

    try {
        const data = await request.json();

        const record = await prisma.user.update({
            where: { id },
            data,
        });

        return json(record);

    } catch (error: any) {
        if (error.code === 'P2025') {
            return json({ message: error.meta.cause }, { status: 404 });
        }
        return json({ message: error.message }, { status: 500 });
    }
};