<script lang="ts">
    import logo from "$assets/logo.jpeg";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
</script>

<header>
    <div>
        <a href="/">
            <img src={logo} alt="Journal app logo" width="70" height="70" />
            <span>Journal app</span>
        </a>
    </div>
    <div>
        {#if $page.data.session}
            <a href="/profile">
                <span>{$page.data.session.user?.name ?? "User"}</span>
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
            <button on:click={() => signOut()} class="button">Sign out</button>
        {:else}
            <button on:click={() => signIn()}>Sign In</button>
        {/if}
    </div>
</header>

<style lang="scss">
    header {
        display: flex;
        justify-content: space-between;
    }
    .avatar {
        border-radius: 50%;
    }
</style>
