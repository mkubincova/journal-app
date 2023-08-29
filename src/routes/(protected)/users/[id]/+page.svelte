<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: user = data.user;
</script>

<h1>Profile</h1>

<form method="POST" action="?/editItem" use:enhance>
    <label for="username"> Username </label><br />
    <input name="username" id="username" value={user?.name} /><br />
    {#if $page.form?.contentError}
        <p class="error">{$page.form.contentError}</p>
    {/if}

    <button>Update</button>
</form>

<form method="POST" action="?/deleteItem" use:enhance>
    <button type="submit">delete account</button>
</form>
