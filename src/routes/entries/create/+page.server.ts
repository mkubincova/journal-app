import { fail, redirect, error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request, fetch, locals }) => {
        const formData = await request.formData();
        const session = await locals.getSession();

        const userId = session?.user.id;
        const content = formData.get('content');
        const inputDate = formData.get('date') as string;

        let date = inputDate ? new Date(inputDate) : new Date;
        let ISODate = date.toISOString();

        if (!content) {
            return fail(400, { content, contentError: "Content is required!" });
        }

        const res = await fetch(`/api/entries`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content, date: ISODate, userId })
        });

        if (res.ok) {
            throw redirect(303, "/entries");
        } else {
            const resJSON = await res.json();
            throw error(res.status, resJSON.message);
        }
    }
};