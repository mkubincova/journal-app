<script lang="ts">
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";

    import { BookOpen } from "lucide-svelte";
</script>

<header class="container">
    <div class="links">
        {#if $page.data.session}
            <a href="/profile" class="profile">
                <div class="profile-info">
                    <span>{$page.data.session.user?.name ?? "Username"}</span>
                    <span class="email"
                        >{$page.data.session.user?.email ??
                            "user@email.com"}</span
                    >
                </div>

                {#if $page.data.session.user?.image}
                    <img
                        src={$page.data.session.user.image}
                        alt="avatar"
                        width="50"
                        height="50"
                        class="avatar"
                    />
                {/if}
            </a>
        {:else}
            <a href="/auth/signin">Login</a>
            <button class="btn" on:click={() => signIn()}>Create account</button
            >
        {/if}
    </div>
</header>

<style lang="scss">
    header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--blue-dark);
        margin-bottom: 40px;

        > div {
            padding: 10px 0;
        }

        .links {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        a {
            font-weight: 700;
            text-decoration: none;
        }
    }
    .avatar {
        border-radius: 5px;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 10px;

        .profile-info {
            text-align: right;
            line-height: 1;

            .email {
                font-size: 0.85em;
                font-weight: 300;
                display: block;
            }
        }
    }
</style>
