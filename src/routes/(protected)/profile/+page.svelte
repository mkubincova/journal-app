<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: user = data.user;

    async function deleteItem() {
        try {
            const response = await fetch("/api/profile", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user?.id || "" }),
            });

            if (response.ok) {
                invalidateAll();
                goto("/"); // Redirect to homepage
            } else {
                console.error("Error deleting item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    }
</script>

<div>
    <img
        src={user?.image}
        alt="Profile picture of {user?.name}"
        width="100"
        height="100"
    />
    <h1>{user?.name}</h1>
    <p>{user?.email}</p>

    <button on:click={deleteItem}>delete</button>
    <a href="/profile/update">edit</a>
</div>
