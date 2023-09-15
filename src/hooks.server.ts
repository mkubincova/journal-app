import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import GoogleProvider from "@auth/core/providers/google";

import { prisma } from "$lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handleAuth = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
    secret: AUTH_SECRET,
    providers: [
        GitHub({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            }
            return Promise.resolve(session);
        }
    }
});

export const handleProtectedRoutes: Handle = async ({ event, resolve }) => {
    const session = await event.locals.getSession();

    if (!session && !event.url.pathname.startsWith("/login")) {
        throw redirect(303, "/login");
    }
    if (session && event.url.pathname.startsWith("/login")) {
        throw redirect(303, "/");
    }

    const response = await resolve(event);
    return response;
};

export const handle = sequence(handleAuth, handleProtectedRoutes);