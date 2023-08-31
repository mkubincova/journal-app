<script lang="ts">
    import EntryList from "$components/EntryList.svelte";
    import type { PageData } from "./$types";
    import { Plus } from "lucide-svelte";

    export let data: PageData;

    $: entries = data.entries;
</script>

<div>
    <h1>Your entries</h1>

    <EntryList {entries} />
</div>
