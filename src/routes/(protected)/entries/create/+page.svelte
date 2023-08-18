<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
</script>

<h1>Create new entry</h1>

<form method="POST" use:enhance>
    <label for="content"> Content </label><br />
    <textarea name="content" id="content" cols="30" rows="10" />
    <input
        type="hidden"
        id="email"
        name="email"
        value={$page.data.session?.user?.email}
    /><br />
    {#if $page.form?.missing}<p class="error">
            {$page.status} All fields are required
        </p>{/if}

    <button>Create</button>
</form>
