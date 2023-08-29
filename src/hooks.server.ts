import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import GoogleProvider from "@auth/core/providers/google";

import { prisma } from "$lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

export const handle = SvelteKitAuth({
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