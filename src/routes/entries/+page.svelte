<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: entries = data.entries;
</script>

<h1>Entries</h1>
<a href="/entries/create">new entry</a>

<ul>
    {#if entries.length > 0}
        {#each entries as entry (entry.id)}
            <li>
                <p>{entry.content}</p>
                <small>{entry.date}</small>
                <a href="/entries/{entry.id}">detail</a>
            </li>
        {/each}
    {:else}
        <p>No journal entries yet.</p>
    {/if}
</ul>

<style>
    li {
        margin-top: 20px;
    }
</style>
