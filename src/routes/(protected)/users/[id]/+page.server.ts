import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    deleteItem: async ({ params, fetch }) => {
        const userId = params.id;

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
    editItem: async ({ request, fetch, params }) => {
        const userId = params.id;
        const formData = await request.formData();

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
            throw redirect(303, `/users/${userId}`);
        } else {
            const resJSON = await res.json();
            throw error(res.status, resJSON.message);
        }
    }
};