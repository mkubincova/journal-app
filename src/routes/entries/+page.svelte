<script lang="ts">
    import EntryList from "$components/EntryList.svelte";
    import type { PageData } from "./$types";
    import { Plus } from "lucide-svelte";

    export let data: PageData;

    $: entries = data.entries;
</script>

<div class="subpage">
    <div class="header">
        <h1>Your entries</h1>
    </div>

    <div class="container">
        <EntryList {entries} />
    </div>
</div>

<style lang="scss">
</style>
