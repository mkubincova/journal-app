import type { DefaultSession } from '@auth/core/types';

// Auth.js types
declare module '@auth/core/types' {
    interface Session {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}

declare module '@auth/sveltekit/node_modules/@auth/core/types' {
    interface Session {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}