<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: user = data.user;
</script>

<h1>Update profile</h1>

<form method="POST" use:enhance>
    <label for="username"> Username </label><br />
    <input name="username" id="username" value={user?.name} />
    <input type="hidden" id="id" name="id" value={user?.id} /><br />
    {#if $page.form?.missing}<p class="error">
            {$page.status} All fields are required
        </p>{/if}

    <button>Update</button>
</form>

<br />
<a href="/profile">Profile</a>
