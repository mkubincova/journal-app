<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    import { Trash2 } from "lucide-svelte";

    export let data: PageData;

    $: user = data.user;
</script>

<div class="subpage">
    <div class="header">
        <h1>Profile</h1>
        <div class="meta">
            <img
                src={user.image}
                alt="Profile picture of {user?.name}"
                referrerpolicy="no-referrer"
                width="120"
                height="120" />

            <div>
                <h2>{user?.name}</h2>
                <small>{user?.email}</small>
            </div>
        </div>
    </div>
    <div class="container">
        <form method="POST" action="?/editItem" use:enhance>
            <label for="username">Edit username</label>
            <div class="flex">
                <input
                    name="username"
                    id="username"
                    value={user?.name}
                    class:input-error={$page.form?.usernameError} />
                <button class="btn">Save</button>
            </div>

            {#if $page.form?.usernameError}
                <small class="error">{$page.form.usernameError}</small>
            {/if}
        </form>

        <form
            method="POST"
            action="?/deleteItem"
            use:enhance
            class="delete-form">
            <button type="submit" class="btn"><Trash2 /> Delete account</button>
        </form>
    </div>
</div>

<style lang="scss">
    .meta {
        position: relative;
        img {
            position: absolute;
            top: -5px;
            left: 0;
            max-width: 120px;
            height: auto;
            object-fit: contain;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        img + div {
            margin-top: 20px;
            margin-left: 130px;

            h2 {
                margin-bottom: 0;
                padding-top: 10px;
                color: var(--yellow-light);
            }

            small {
                word-break: break-all;
            }
        }
    }

    .header {
        margin-bottom: 80px;
    }

    .flex {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>
