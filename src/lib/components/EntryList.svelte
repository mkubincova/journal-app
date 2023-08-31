<script lang="ts">
    import Entry from "./Entry.svelte";

    export let entries: any[];
</script>

<ul>
    {#if entries.length > 0}
        {#each entries as entry (entry.id)}
            <Entry {entry} />
        {/each}
    {:else}
        <p>No journal entries yet.</p>
    {/if}
</ul>

<style lang="scss">
    ul {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
