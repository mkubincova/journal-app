<script>
    import { page } from "$app/stores";
    import { signIn } from "@auth/sveltekit/client";
</script>

<h1>Welcome to the journal app</h1>

{#if $page.data.session}
    <a href="/entries">Check your entries</a>
    <a href="/entries/create">Make a new entry</a>
{:else}
    <button on:click={() => signIn()}>Sign In to continue</button>
{/if}
