<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import { formatToDateInput } from "$lib/helpers/formatDate";

    export let data: PageData;

    $: entry = data.entry;
</script>

<h1>ID: {entry.id}</h1>
<small>{entry.date}</small>
<br />
<br />

<form method="POST" action="?/editItem" use:enhance>
    <label for="content">Content</label><br />
    <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        value={entry.content}
    /><br />
    {#if $page.form?.contentError}
        <p class="error">{$page.form.contentError}</p>
    {/if}

    <label for="date">Date</label><br />
    <input
        type="datetime-local"
        name="date"
        id="date"
        value={formatToDateInput(entry.date)}
    /><br />
    <br />

    <button>Update</button>
</form>

<br />
<br />

<form method="POST" action="?/deleteItem" use:enhance>
    <button type="submit">delete item</button>
</form>

<br />
<a href="/entries">All entries</a>
