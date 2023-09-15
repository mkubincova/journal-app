<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import { formatToDateInput } from "$lib/helpers/formatDate";
    import { Trash2 } from "lucide-svelte";

    export let data: PageData;

    $: entry = data.entry;
</script>

<div class="subpage">
    <div class="header">
        <h1>Edit entry</h1>
        <span>#{entry.id}</span>
    </div>

    <form method="POST" action="?/editItem" use:enhance>
        <label for="content">Content</label>
        <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={entry.content} />
        {#if $page.form?.contentError}
            <p class="error">{$page.form.contentError}</p>
        {/if}

        <label for="date">Date</label>
        <input
            type="datetime-local"
            name="date"
            id="date"
            value={formatToDateInput(entry.date)} />

        <button class="btn">Update</button>
    </form>

    <form method="POST" action="?/deleteItem" use:enhance class="delete-form">
        <button type="submit" class="btn"><Trash2 />Delete entry</button>
    </form>
</div>

<style lang="scss">
    .header span {
        color: var(--yellow-light);
    }

    button {
        margin-top: 30px;
    }
</style>
