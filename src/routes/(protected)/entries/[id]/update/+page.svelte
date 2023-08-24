<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: entry = data.entry;
</script>

<h1>Update entry</h1>

<form method="POST" use:enhance>
    <label for="content"> Content </label><br />
    <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        value={entry.content}
    />
    <input type="hidden" id="id" name="id" value={entry.id} /><br />
    {#if $page.form?.missing}<p class="error">
            {$page.status} All fields are required
        </p>{/if}

    <button>Update</button>
</form>

<br />
<a href="/entries">All entries</a>
