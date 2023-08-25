<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: entry = data.entry;
</script>

<h1>ID: {entry.id}</h1>
<p>{entry.content}</p>
<small>{entry.date}</small>

<form method="POST" action="?/deleteItem" use:enhance>
    <button type="submit">delete item</button>
</form>

<a href="/entries/{entry.id}/update">edit</a>
<br />
<a href="/entries">All entries</a>
