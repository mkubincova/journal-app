<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: user = data.user;
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
</div>
