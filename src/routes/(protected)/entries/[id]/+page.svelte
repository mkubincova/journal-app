<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: entry = data.entry;
</script>

<h1>ID: {entry.id}</h1>
<p>{entry.content}</p>
<small>{entry.date}</small>
