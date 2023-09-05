<script lang="ts">
    import Entry from "./Entry.svelte";
    import { Plus } from "lucide-svelte";

    export let entries: any[];
</script>

<ul>
    {#if entries.length > 0}
        {#each entries as entry (entry.id)}
            <Entry {entry} />
        {/each}
    {:else}
        <p>Nothing in here yet...</p>
        <a href="/entries/create" class="btn"><Plus />New entry</a>
    {/if}
</ul>

<style lang="scss">
    ul {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
