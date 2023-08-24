<script lang="ts">
    import type { PageData } from "./$types";
    import { goto } from "$app/navigation";

    export let data: PageData;

    $: entry = data.entry;

    async function deleteItem() {
        try {
            const response = await fetch("/api/entry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ entryId: entry.id }),
            });

            if (response.ok) {
                goto("/entries"); // Redirect to entries page
            } else {
                console.error("Error deleting item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    }
</script>

<h1>ID: {entry.id}</h1>
<p>{entry.content}</p>
<small>{entry.date}</small>

<button on:click={deleteItem}>delete</button>
<br />
<a href="/entries">All entries</a>
