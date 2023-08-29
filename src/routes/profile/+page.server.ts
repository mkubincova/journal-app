import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    deleteItem: async ({ fetch, locals }) => {
        const session = await locals.getSession();
        const userId = session?.user.id;

        const res = await fetch(`/api/users/${userId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            throw redirect(303, "/");
        } else {
            const resJSON = await res.json();
            throw error(res.status, resJSON.message);
        }
    },
    editItem: async ({ request, fetch, locals }) => {
        const session = await locals.getSession();
        const formData = await request.formData();

        const userId = session?.user.id;
        const username = formData.get('username');

        if (!username) {
            return fail(400, { username, usernameError: "Username is required!" });
        }

        const res = await fetch(`/api/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username })
        });

        if (res.ok) {
            throw redirect(303, `/profile`);
        } else {
            const resJSON = await res.json();
            throw error(res.status, resJSON.message);
        }
    }
};